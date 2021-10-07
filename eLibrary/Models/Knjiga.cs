using System;
using System.Collections.Generic;

#nullable disable

namespace eLibrary.Models
{
    public partial class Knjiga
    {
        public Knjiga()
        {
            CekanjeNaKnjigu = new HashSet<CekanjeNaKnjigu>();
            KnjigaPromocija = new HashSet<KnjigaPromocija>();
            Narudzba = new HashSet<Narudzba>();
            Notifikacija = new HashSet<Notifikacija>();
            Promocija = new HashSet<Promocija>();
        }

        public int KnjigaId { get; set; }
        public string NazivKnjige { get; set; }
        public int? PisacId { get; set; }
        public int? ZanrId { get; set; }
        public double? Cijena { get; set; }
        public byte? NaStanju { get; set; }
        public int? Kolicina { get; set; }
        public string EKnjiga { get; set; }

        public virtual Pisac Pisac { get; set; }
        public virtual Zanr Zanr { get; set; }
        public virtual ICollection<CekanjeNaKnjigu> CekanjeNaKnjigu { get; set; }
        public virtual ICollection<KnjigaPromocija> KnjigaPromocija { get; set; }
        public virtual ICollection<Narudzba> Narudzba { get; set; }
        public virtual ICollection<Notifikacija> Notifikacija { get; set; }
        public virtual ICollection<Promocija> Promocija { get; set; }
    }
}
