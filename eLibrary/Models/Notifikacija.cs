using System;
using System.Collections.Generic;

#nullable disable

namespace eLibrary.Models
{
    public partial class Notifikacija
    {
        public int NotifikacijaId { get; set; }
        public string OpisNotifikacije { get; set; }
        public string VrstaNotifikacije { get; set; }
        public DateTime? Vrijeme { get; set; }
        public int? KnjigaId { get; set; }
        public int? PisacId { get; set; }
        public int? KorisnikId { get; set; }

        public virtual Knjiga Knjiga { get; set; }
        public virtual Korisnik Korisnik { get; set; }
        public virtual Pisac Pisac { get; set; }
    }
}
