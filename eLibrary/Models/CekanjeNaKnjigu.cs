using System;
using System.Collections.Generic;

#nullable disable

namespace eLibrary.Models
{
    public partial class CekanjeNaKnjigu
    {
        public int CekanjeId { get; set; }
        public int? KnjigaId { get; set; }
        public int? KorisnikId { get; set; }
        public DateTime? VrijemeZaprimanjaZahtjeva { get; set; }
        public DateTime? VrijemeRazrjesenjaZahtjeva { get; set; }
        public byte? Aktivan { get; set; }

        public virtual Knjiga Knjiga { get; set; }
        public virtual Korisnik Korisnik { get; set; }
    }
}
