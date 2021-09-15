using System;
using System.Collections.Generic;

#nullable disable

namespace eLibrary.Models
{
    public partial class ClanskaKartica
    {
        public int ClanskaKarticaId { get; set; }
        public int? KorisnikId { get; set; }
        public DateTime? DatumKreiranja { get; set; }
        public byte? Aktivna { get; set; }

        public virtual Korisnik Korisnik { get; set; }
    }
}
