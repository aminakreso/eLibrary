using System;
using System.Collections.Generic;

#nullable disable

namespace eLibrary.Models
{
    public partial class Kupon
    {
        public Kupon()
        {
            Narudzba = new HashSet<Narudzba>();
        }

        public int KuponId { get; set; }
        public string SifraKupona { get; set; }
        public byte? Iskoristen { get; set; }
        public DateTime? VaziDo { get; set; }
        public int? KorisnikId { get; set; }

        public virtual Korisnik Korisnik { get; set; }
        public virtual ICollection<Narudzba> Narudzba { get; set; }
    }
}
