using System;
using System.Collections.Generic;

#nullable disable

namespace eLibrary.Models
{
    public partial class Knjiga
    {
        public Knjiga()
        {
            CekanjeNaKnjigus = new HashSet<CekanjeNaKnjigu>();
            KnjigaPromocijas = new HashSet<KnjigaPromocija>();
            Narudzbas = new HashSet<Narudzba>();
            Notifikacijas = new HashSet<Notifikacija>();
            Promocijas = new HashSet<Promocija>();
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
        public virtual ICollection<CekanjeNaKnjigu> CekanjeNaKnjigus { get; set; }
        public virtual ICollection<KnjigaPromocija> KnjigaPromocijas { get; set; }
        public virtual ICollection<Narudzba> Narudzbas { get; set; }
        public virtual ICollection<Notifikacija> Notifikacijas { get; set; }
        public virtual ICollection<Promocija> Promocijas { get; set; }
    }
}
