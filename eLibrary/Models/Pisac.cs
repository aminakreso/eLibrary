using System;
using System.Collections.Generic;

#nullable disable

namespace eLibrary.Models
{
    public partial class Pisac
    {
        public Pisac()
        {
            Knjigas = new HashSet<Knjiga>();
            Notifikacijas = new HashSet<Notifikacija>();
        }

        public int PisacId { get; set; }
        public string Ime { get; set; }
        public string Prezime { get; set; }
        public string Drzava { get; set; }
        public byte? Status { get; set; }
        public int? BrojDjela { get; set; }

        public virtual ICollection<Knjiga> Knjigas { get; set; }
        public virtual ICollection<Notifikacija> Notifikacijas { get; set; }
    }
}
