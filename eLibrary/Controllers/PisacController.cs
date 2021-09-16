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
    public class PisacController : ControllerBase
    {
        private readonly qsd_eLibraryContext _context;

        public PisacController(qsd_eLibraryContext context)
        {
            _context = context;
        }

        //GET: api/Pisac
       [HttpGet]
        public async Task<ActionResult<IEnumerable<Pisac>>> GetPisac()
        {
            return await _context.Pisac.ToListAsync();
        }

        // GET: api/Pisac/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Pisac>> GetPisac(int id)
        {
            var pisac = await _context.Pisac.FindAsync(id);

            if (pisac == null)
            {
                return NotFound();
            }

            return pisac;
        }

        // PUT: api/Pisac/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPisac(int id, Pisac pisac)
        {
            if (id != pisac.PisacId)
            {
                return BadRequest();
            }

            _context.Entry(pisac).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PisacExists(id))
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

        // POST: api/Pisac
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Pisac>> PostPisac(Pisac pisac)
        {
            _context.Pisac.Add(pisac);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPisac", new { id = pisac.PisacId }, pisac);
        }

        // DELETE: api/Pisac/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePisac(int id)
        {
            var pisac = await _context.Pisac.FindAsync(id);
            if (pisac == null)
            {
                return NotFound();
            }

            _context.Pisac.Remove(pisac);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PisacExists(int id)
        {
            return _context.Pisac.Any(e => e.PisacId == id);
        }
    }
}
