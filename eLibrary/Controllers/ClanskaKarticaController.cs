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
    public class ClanskaKarticaController : ControllerBase
    {
        private readonly qsd_eLibraryContext _context;

        public ClanskaKarticaController(qsd_eLibraryContext context)
        {
            _context = context;
        }

        // GET: api/ClanskaKartica
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ClanskaKartica>>> GetClanskaKartica()
        {
            return await _context.ClanskaKartica
                                     .Include(ck => ck.Korisnik)
                                     .ToListAsync();
        }

        // GET: api/ClanskaKartica/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ClanskaKartica>> GetClanskaKartica(int id)
        {
            var clanskaKartica = await _context.ClanskaKartica
                                          .Include(ck => ck.Korisnik)
                                          .Where(k => k.ClanskaKarticaId == id)
                                          .FirstOrDefaultAsync();

            if (clanskaKartica == null)
            {
                return NotFound();
            }

            return clanskaKartica;
           
        }

        // PUT: api/ClanskaKartica/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        [ServiceFilter(typeof(ValidationFilterAttribute))]

        public async Task<IActionResult> PutClanskaKartica(int id, ClanskaKartica clanskaKartica)
        {
            if (id != clanskaKartica.ClanskaKarticaId)
            {
                return BadRequest();
            }

            _context.Entry(clanskaKartica).State = EntityState.Modified;
            _context.SaveChanges();
           
            return NoContent();
        }

        // POST: api/ClanskaKartica
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        [ServiceFilter(typeof(ValidationFilterAttribute))]

        public async Task<ActionResult<ClanskaKartica>> PostClanskaKartica(ClanskaKartica clanskaKartica)
        {
            _context.ClanskaKartica.Add(clanskaKartica);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetClanskaKartica", new { id = clanskaKartica.ClanskaKarticaId }, clanskaKartica);
        }

        // DELETE: api/ClanskaKartica/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteClanskaKartica(int id)
        {
            var clanskaKartica = await _context.ClanskaKartica.FindAsync(id);
            if (clanskaKartica == null)
            {
                return NotFound();
            }

            _context.ClanskaKartica.Remove(clanskaKartica);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ClanskaKarticaExists(int id)
        {
            return _context.ClanskaKartica.Any(e => e.ClanskaKarticaId == id);
        }
    }
}
