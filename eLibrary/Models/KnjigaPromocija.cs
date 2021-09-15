using System;
using System.Collections.Generic;

#nullable disable

namespace eLibrary.Models
{
    public partial class KnjigaPromocija
    {
        public int KnjigaPromocijaId { get; set; }
        public string KnjigaPromocijaOpis { get; set; }
        public int? KnjigaId { get; set; }
        public int? PromocijaId { get; set; }

        public virtual Knjiga Knjiga { get; set; }
        public virtual Promocija Promocija { get; set; }
    }
}
