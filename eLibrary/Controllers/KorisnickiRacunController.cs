using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using eLibrary.Models;

namespace eLibrary.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class KorisnickiRacunController : ControllerBase
    {
        private readonly qsd_eLibraryContext _context;

        public KorisnickiRacunController(qsd_eLibraryContext context)
        {
            _context = context;
        }

        // GET: api/KorisnickiRacun
        [HttpGet]
        public async Task<ActionResult<IEnumerable<KorisnickiRacun>>> GetKorisnickiRacun()
        {
            return await _context.KorisnickiRacun
                                  .Include(korisnickiRacun=>korisnickiRacun.Admin)
                                  .Include(korisnickiRacun => korisnickiRacun.Korisnik)
                                  .ToListAsync();
        }

        // GET: api/KorisnickiRacun/5
        [HttpGet("{id}")]
        public async Task<ActionResult<KorisnickiRacun>> GetKorisnickiRacun(int id)
        {

            var korisnickiRacun = await _context.KorisnickiRacun
                                           .Include(korisnickiRacun => korisnickiRacun.Korisnik)
                                           .Include(korisnickiRacun => korisnickiRacun.Admin)
                                           .Where(korisnickiRacun => korisnickiRacun.KorisnickiRacunId == id)
                                           .FirstOrDefaultAsync();

            if (korisnickiRacun == null)
            {
                return NotFound();
            }

            return korisnickiRacun;
        }

        // PUT: api/KorisnickiRacun/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutKorisnickiRacun(int id, KorisnickiRacun korisnickiRacun)
        {
            if (id != korisnickiRacun.KorisnickiRacunId)
            {
                return BadRequest();
            }

            _context.Entry(korisnickiRacun).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!KorisnickiRacunExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/KorisnickiRacun
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<KorisnickiRacun>> PostKorisnickiRacun(KorisnickiRacun korisnickiRacun)
        {
            _context.KorisnickiRacun.Add(korisnickiRacun);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetKorisnickiRacun", new { id = korisnickiRacun.KorisnickiRacunId }, korisnickiRacun);
        }

        // DELETE: api/KorisnickiRacun/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteKorisnickiRacun(int id)
        {
            var korisnickiRacun = await _context.KorisnickiRacun.FindAsync(id);
            if (korisnickiRacun == null)
            {
                return NotFound();
            }

            _context.KorisnickiRacun.Remove(korisnickiRacun);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool KorisnickiRacunExists(int id)
        {
            return _context.KorisnickiRacun.Any(e => e.KorisnickiRacunId == id);
        }
    }
}
