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

            UserWithToken userWithToken = new UserWithToken(korisnickiRacun);

            if (userWithToken == null)
            {
                return NotFound();
            }

            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_jwtsettings.SecretKey);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name,korisnickiRacun.Email)
                }),
                Expires = DateTime.UtcNow.AddMonths(6),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key),
                SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            userWithToken.Token = tokenHandler.WriteToken(token);
            return userWithToken;
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
