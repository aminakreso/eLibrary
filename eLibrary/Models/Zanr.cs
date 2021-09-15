using System;
using System.Collections.Generic;

#nullable disable

namespace eLibrary.Models
{
    public partial class Zanr
    {
        public Zanr()
        {
            Knjigas = new HashSet<Knjiga>();
        }

        public int ZanrId { get; set; }
        public string Naziv { get; set; }
        public int? BrojKnjigaNaStanju { get; set; }

        public virtual ICollection<Knjiga> Knjigas { get; set; }
    }
}
