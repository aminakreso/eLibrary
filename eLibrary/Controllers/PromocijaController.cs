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
    public class PromocijaController : ControllerBase
    {
        private readonly qsd_eLibraryContext _context;

        public PromocijaController(qsd_eLibraryContext context)
        {
            _context = context;
        }

        // GET: api/Promocija
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Promocija>>> GetPromocija()
        {
            return await _context.Promocija
                                     .Include(p => p.Knjiga)
                                     .ToListAsync();
        }

        // GET: api/Promocija/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Promocija>> GetPromocija(int id)
        {
            var promocija = await _context.Promocija
                                           .Include(p =>p.Knjiga)
                                           .Where(k => k.KnjigaId == id)
                                           .FirstOrDefaultAsync();

            if (promocija == null)
            {
                return NotFound();
            }

            return promocija;
        }

        // PUT: api/Promocija/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        [ServiceFilter(typeof(ValidationFilterAttribute))]

        public async Task<IActionResult> PutPromocija(int id, Promocija promocija)
        {
            if (id != promocija.PromocijaId)
            {
                return BadRequest();
            }

            _context.Entry(promocija).State = EntityState.Modified;
            _context.SaveChanges();
          
            return NoContent();
        }

        // POST: api/Promocija
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        [ServiceFilter(typeof(ValidationFilterAttribute))]

        public async Task<ActionResult<Promocija>> PostPromocija(Promocija promocija)
        {
            _context.Promocija.Add(promocija);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPromocija", new { id = promocija.PromocijaId }, promocija);
        }

        // DELETE: api/Promocija/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePromocija(int id)
        {
            var promocija = await _context.Promocija.FindAsync(id);
            if (promocija == null)
            {
                return NotFound();
            }

            _context.Promocija.Remove(promocija);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PromocijaExists(int id)
        {
            return _context.Promocija.Any(e => e.PromocijaId == id);
        }
    }
}
