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

namespace eLibrary.Controllers
{
    //[Authorize]
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

        [HttpGet("GetPisacDetails/{id}")]
        public async Task<ActionResult<Pisac>> GetPisacDetails(int id)
        {
            //Eager Loading
            var pisac = await _context.Pisac
                                            .Include(p => p.Knjiga)
                                                .ThenInclude(k=>k.Zanr)
                                            .Where(p => p.PisacId == id)
                                            .FirstOrDefaultAsync();


            if (pisac == null)
            {
                return NotFound();
            }

            return pisac;
        }
        [HttpGet("PostPisacDetails")]
        public async Task<ActionResult<Pisac>> PostPisacDetails() 
        {

            var pisac = new Pisac();
            pisac.Ime = "Pisac";
            pisac.Prezime = "Test";

            var knjiga = new Knjiga();
            knjiga.NazivKnjige = "Knjiga1";
            knjiga.Cijena = 5.5;

            var zanr = new Zanr();
            zanr.Naziv = "Test";

            knjiga.Zanr = zanr;
            pisac.Knjiga.Add(knjiga);

            _context.Pisac.Add(pisac);
            _context.SaveChanges();

            var pisci = await _context.Pisac
                                             .Include(p => p.Knjiga)
                                                 .ThenInclude(k => k.Zanr)
                                             .Where(p => p.PisacId == pisac.PisacId)
                                             .FirstOrDefaultAsync();


            if (pisci == null)
            {
                return NotFound();
            }

            return pisci;
        }

        // PUT: api/Pisac/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        [ServiceFilter(typeof(ValidationFilterAttribute))]

        public async Task<IActionResult> PutPisac(int id, Pisac pisac)
        {
            if (id != pisac.PisacId)
            {
                return BadRequest();
            }

            _context.Entry(pisac).State = EntityState.Modified;
            _context.SaveChanges();
           

            return NoContent();
        }

        // POST: api/Pisac
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        [ServiceFilter(typeof(ValidationFilterAttribute))]

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
