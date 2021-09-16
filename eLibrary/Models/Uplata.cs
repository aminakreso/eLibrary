using System;
using System.Collections.Generic;

#nullable disable

namespace eLibrary.Models
{
    public partial class Uplata
    {
        public int UplataId { get; set; }
        public double? VisinaUplate { get; set; }
        public int? KorisnikId { get; set; }
        public DateTime? Datum { get; set; }

        public virtual Korisnik Korisnik { get; set; }
    }
}
