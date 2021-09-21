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
    public class KnjigaController : ControllerBase
    {
        private readonly qsd_eLibraryContext _context;

        public KnjigaController(qsd_eLibraryContext context)
        {
            _context = context;
        }

        // GET: api/Knjiga
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Knjiga>>> GetKnjiga()
        {
            return await _context.Knjiga.ToListAsync();
        }

        // GET: api/Knjiga/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Knjiga>> GetKnjiga(int id)
        {
            
            var knjiga = await _context.Knjiga
                                           .Include(k => k.Zanr)
                                           .Where(k => k.KnjigaId== id)
                                           .FirstOrDefaultAsync();

            return knjiga;
        }

        // PUT: api/Knjiga/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutKnjiga(int id, Knjiga knjiga)
        {
            if (id != knjiga.KnjigaId)
            {
                return BadRequest();
            }

            _context.Entry(knjiga).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!KnjigaExists(id))
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

        // POST: api/Knjiga
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Knjiga>> PostKnjiga(Knjiga knjiga)
        {
            _context.Knjiga.Add(knjiga);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetKnjiga", new { id = knjiga.KnjigaId }, knjiga);
        }

        // DELETE: api/Knjiga/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteKnjiga(int id)
        {
            var knjiga = await _context.Knjiga.FindAsync(id);
            if (knjiga == null)
            {
                return NotFound();
            }

            _context.Knjiga.Remove(knjiga);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool KnjigaExists(int id)
        {
            return _context.Knjiga.Any(e => e.KnjigaId == id);
        }
    }
}
