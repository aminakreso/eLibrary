using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using eLibrary.Models;
using eLibrary.ActionFilters;

namespace eLibrary.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UplataController : ControllerBase
    {
        private readonly qsd_eLibraryContext _context;

        public UplataController(qsd_eLibraryContext context)
        {
            _context = context;
        }

        // GET: api/Uplata
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Uplata>>> GetUplata()
        {
            return await _context.Uplata
                                    .Include(u=>u.Korisnik)
                                    .ToListAsync();
        }

        // GET: api/Uplata/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Uplata>> GetUplata(int id)
        {
            var uplata = await _context.Uplata
                                            .Include(u => u.Korisnik)
                                            .Where(k => k.UplataId == id)
                                            .FirstOrDefaultAsync();
                
            if (uplata == null)
            {
                return NotFound();
            }

            return uplata;
        }

        // PUT: api/Uplata/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        [ServiceFilter(typeof(ValidationFilterAttribute))]

        public async Task<IActionResult> PutUplata(int id, Uplata uplata)
        {
            if (id != uplata.UplataId)
            {
                return BadRequest();
            }

            _context.Entry(uplata).State = EntityState.Modified;
            _context.SaveChanges();

            return NoContent();
        }

        // POST: api/Uplata
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        [ServiceFilter(typeof(ValidationFilterAttribute))]

        public async Task<ActionResult<Uplata>> PostUplata(Uplata uplata)
        {
            _context.Uplata.Add(uplata);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUplata", new { id = uplata.UplataId }, uplata);
        }

        // DELETE: api/Uplata/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUplata(int id)
        {
            var uplata = await _context.Uplata.FindAsync(id);
            if (uplata == null)
            {
                return NotFound();
            }

            _context.Uplata.Remove(uplata);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool UplataExists(int id)
        {
            return _context.Uplata.Any(e => e.UplataId == id);
        }
    }
}
