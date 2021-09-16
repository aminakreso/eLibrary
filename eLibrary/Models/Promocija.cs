using System;
using System.Collections.Generic;

#nullable disable

namespace eLibrary.Models
{
    public partial class Promocija
    {
        public Promocija()
        {
            KnjigaPromocija = new HashSet<KnjigaPromocija>();
        }

        public int PromocijaId { get; set; }
        public string Naziv { get; set; }
        public string VrstaPromocije { get; set; }
        public double? Popust { get; set; }
        public int? KnjigaId { get; set; }

        public virtual Knjiga Knjiga { get; set; }
        public virtual ICollection<KnjigaPromocija> KnjigaPromocija { get; set; }
    }
}
