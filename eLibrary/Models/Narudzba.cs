using System;
using System.Collections.Generic;

#nullable disable

namespace eLibrary.Models
{
    public partial class Narudzba
    {
        public int NarudzbaId { get; set; }
        public int? KorisnikId { get; set; }
        public double? Cijena { get; set; }
        public DateTime? DatumVrijeme { get; set; }
        public int? KuponId { get; set; }
        public int? KnjigaId { get; set; }

        public virtual Knjiga Knjiga { get; set; }
        public virtual Korisnik Korisnik { get; set; }
        public virtual Kupon Kupon { get; set; }
    }
}
