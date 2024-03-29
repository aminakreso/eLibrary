﻿using System;
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
    public class ZanrController : ControllerBase
    {
        private readonly qsd_eLibraryContext _context;

        public ZanrController(qsd_eLibraryContext context)
        {
            _context = context;
        }

        // GET: api/Zanr
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Zanr>>> GetZanr()
        {
            return await _context.Zanr.ToListAsync();
        }

        // GET: api/Zanr/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Zanr>> GetZanr(int id)
        {
            //var zanr = await _context.Zanr.FindAsync(id);

            //if (zanr == null)
            //{
            //    return NotFound();
            //}

            //Explicit Loading
            var zanr = await _context.Zanr.SingleAsync(z => z.ZanrId == id);

            var knjiga = new Knjiga();
            knjiga.NazivKnjige = "filter";

            //zanr.Knjiga.Add(knjiga);
            //_context.SaveChanges();

            _context.Entry(zanr)
                    .Collection(z => z.Knjiga)
                    //.Query()
                    //.Where(k => k.NazivKnjige.Contains("filter"))
                    .Load();

            return zanr;
        }

        // PUT: api/Zanr/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        [ServiceFilter(typeof(ValidationFilterAttribute))]

        public async Task<IActionResult> PutZanr(int id, Zanr zanr)
        {
            if (id != zanr.ZanrId)
            {
                return BadRequest();
            }

            _context.Entry(zanr).State = EntityState.Modified;
            _context.SaveChanges();

            return NoContent();
        }

        // POST: api/Zanr
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        [ServiceFilter(typeof(ValidationFilterAttribute))]

        public async Task<ActionResult<Zanr>> PostZanr(Zanr zanr)
        {
            _context.Zanr.Add(zanr);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetZanr", new { id = zanr.ZanrId }, zanr);
        }

        // DELETE: api/Zanr/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteZanr(int id)
        {
            var zanr = await _context.Zanr.FindAsync(id);
            if (zanr == null)
            {
                return NotFound();
            }

            _context.Zanr.Remove(zanr);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ZanrExists(int id)
        {
            return _context.Zanr.Any(e => e.ZanrId == id);
        }
    }
}
