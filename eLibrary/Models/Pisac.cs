using System;
using System.Collections.Generic;

#nullable disable

namespace eLibrary.Models
{
    public partial class Pisac
    {
        public Pisac()
        {
            Knjiga = new HashSet<Knjiga>();
            Notifikacija = new HashSet<Notifikacija>();
        }

        public int PisacId { get; set; }
        public string Ime { get; set; }
        public string Prezime { get; set; }
        public string Drzava { get; set; }
        public byte? Status { get; set; }
        public int? BrojDjela { get; set; }

        public virtual ICollection<Knjiga> Knjiga { get; set; }
        public virtual ICollection<Notifikacija> Notifikacija { get; set; }
    }
}
