using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using eLibrary.Models;
using eLibrary.ActionFilters;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Options;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;
using System.Security.Cryptography;

namespace eLibrary.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class KorisnikController : ControllerBase
    {
        private readonly qsd_eLibraryContext _context;
        private readonly JWTSettings _jwtsettings;

        public KorisnikController(qsd_eLibraryContext context ,IOptions<JWTSettings> jwtsettings)
        {
            _context = context;
            _jwtsettings = jwtsettings.Value;
        }

        // GET: api/Korisnik
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Korisnik>>> GetKorisnik()
        {
            return await _context.Korisnik
                                  .Include(k=>k.KorisnickiRacun)
                                  .ToListAsync();
        }

        //GET: api/Korisnik/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Korisnik>> GetKorisnik(int id)
        {
            var korisnik = await _context.Korisnik
                                          .Include(k => k.KorisnickiRacun)
                                          .Where(k => k.KorisnikId == id)
                                          .FirstOrDefaultAsync();


            if (korisnik == null)
            {
                return NotFound();
            }

            return korisnik;
        }

        [HttpGet("GetKorisnikInfo")]
        public async Task<ActionResult<Korisnik>> GetKorisnikInfo()
        {
            string emailAddres = HttpContext.User.Identity.Name;
            var korisnik = await _context.Korisnik
                              .Where(korisnik => korisnik.KorisnickiRacun.Email == emailAddres)
                              .FirstOrDefaultAsync();

            korisnik.KorisnickiRacun.Password = null;

            if (korisnik == null)
            {
                return NotFound();
            }

            return korisnik;
        }

        // PUT: api/Korisnik/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        [ServiceFilter(typeof(ValidationFilterAttribute))]

        public async Task<IActionResult> PutKorisnik(int id, Korisnik korisnik)
        {
            if (id != korisnik.KorisnikId)
            {
                return BadRequest();
            }

            _context.Entry(korisnik).State = EntityState.Modified;
            _context.SaveChangesAsync();
            return NoContent();

        }

        [HttpPost("Login")]
        public async Task<ActionResult<UserWithToken>> Login([FromBody] KorisnickiRacun korisnickiRacun)
        {
            korisnickiRacun = await _context.KorisnickiRacun.Include(kr => kr.Admin)
                                                            .Include(kr => kr.Korisnik)
                                                .Where(kr => kr.Email == korisnickiRacun.Email
                                                && kr.Password == korisnickiRacun.Password).FirstOrDefaultAsync();

            UserWithToken userWithToken = null;

            if (korisnickiRacun != null)
            {
                RefreshToken refreshToken = GenerateRefreshToken();
                korisnickiRacun.RefreshToken.Add(refreshToken);
                 _context.SaveChangesAsync();

                userWithToken = new UserWithToken(korisnickiRacun);
                userWithToken.RefreshToken = refreshToken.Token;
            }

            if (userWithToken == null)
            {
                return NotFound();
            }

            userWithToken.AccessToken = GenerateAccessToken(korisnickiRacun.KorisnickiRacunId);
            return userWithToken;
        }

        private RefreshToken GenerateRefreshToken()
        {
            RefreshToken refreshToken = new RefreshToken();

            var randomNumber = new byte[32];
            using (var rng = RandomNumberGenerator.Create())
            {
                rng.GetBytes(randomNumber);
                refreshToken.Token = Convert.ToBase64String(randomNumber);
            }
            refreshToken.ExpiryDate = DateTime.UtcNow.AddMonths(6);

            return refreshToken;
        }
        private string GenerateAccessToken(int korisnickiRacunId)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_jwtsettings.SecretKey);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, Convert.ToString(korisnickiRacunId))
                }),
                Expires = DateTime.UtcNow.AddDays(1),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key),
                SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }

        [HttpPost("RefreshToken")]
        public async Task<ActionResult<UserWithToken>> RefreshToken([FromBody] RefreshRequest refreshRequest)
        {
            KorisnickiRacun korisnickiRacun = await GetUserFromAccessToken(refreshRequest.AccessToken);

            if (korisnickiRacun != null && ValidateRefreshToken(korisnickiRacun, refreshRequest.RefreshToken))
            {
                UserWithToken userWithToken = new UserWithToken(korisnickiRacun);
                userWithToken.AccessToken = GenerateAccessToken(korisnickiRacun.KorisnickiRacunId);

                return userWithToken;
            }

            return null;
        }

        private bool ValidateRefreshToken(KorisnickiRacun korisnickiRacun, string refreshToken)
        {

            RefreshToken refreshTokenUser = _context.RefreshToken.Where(rt => rt.Token == refreshToken)
                                                .OrderByDescending(rt => rt.ExpiryDate)
                                                .FirstOrDefault();

            if (refreshTokenUser != null && refreshTokenUser.KorisnickiRacunID == korisnickiRacun.KorisnickiRacunId
                && refreshTokenUser.ExpiryDate > DateTime.UtcNow)
            {
                return true;
            }

            return false;
        }
        private async Task<KorisnickiRacun> GetUserFromAccessToken(string accessToken)
        {
            try
            {
                var tokenHandler = new JwtSecurityTokenHandler();
                var key = Encoding.ASCII.GetBytes(_jwtsettings.SecretKey);

                var tokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(key),
                    ValidateIssuer = false,
                    ValidateAudience = false
                };

                SecurityToken securityToken;
                var principle = tokenHandler.ValidateToken(accessToken, tokenValidationParameters, out securityToken);

                JwtSecurityToken jwtSecurityToken = securityToken as JwtSecurityToken;

                if (jwtSecurityToken != null && jwtSecurityToken.Header.Alg.Equals(SecurityAlgorithms.HmacSha256, StringComparison.InvariantCultureIgnoreCase))
                {
                    var email = principle.FindFirst(ClaimTypes.Name)?.Value;

                    return await _context.KorisnickiRacun.Where(u => u.Email == email).FirstOrDefaultAsync();
                }
            }
            catch (Exception)
            {
                return new KorisnickiRacun();
            }

            return new KorisnickiRacun();
        }

        // POST: api/Korisnik
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        [ServiceFilter(typeof(ValidationFilterAttribute))]

        public async Task<ActionResult<Korisnik>> PostKorisnik(Korisnik korisnik)
        {
            _context.Korisnik.Add(korisnik);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetKorisnik", new { id = korisnik.KorisnikId }, korisnik);
        }

        // DELETE: api/Korisnik/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteKorisnik(int id)
        {
            var korisnik = await _context.Korisnik.FindAsync(id);
            if (korisnik == null)
            {
                return NotFound();
            }

            _context.Korisnik.Remove(korisnik);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool KorisnikExists(int id)
        {
            return _context.Korisnik.Any(e => e.KorisnikId == id);
        }
    }
}
