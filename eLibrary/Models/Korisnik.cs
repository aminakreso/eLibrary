using System;
using System.Collections.Generic;

#nullable disable

namespace eLibrary.Models
{
    public partial class Korisnik
    {
        public Korisnik()
        {
            CekanjeNaKnjigu = new HashSet<CekanjeNaKnjigu>();
            ClanskaKartica = new HashSet<ClanskaKartica>();
            Kupon = new HashSet<Kupon>();
            Narudzba = new HashSet<Narudzba>();
            Notifikacija = new HashSet<Notifikacija>();
            Uplata = new HashSet<Uplata>();
        }

        public int KorisnikId { get; set; }
        public string Ime { get; set; }
        public string Prezime { get; set; }
        public string BrojTelefona { get; set; }
        public int? KorisnickiRacunId { get; set; }

        public virtual KorisnickiRacun KorisnickiRacun { get; set; }
        public virtual ICollection<CekanjeNaKnjigu> CekanjeNaKnjigu { get; set; }
        public virtual ICollection<ClanskaKartica> ClanskaKartica { get; set; }
        public virtual ICollection<Kupon> Kupon { get; set; }
        public virtual ICollection<Narudzba> Narudzba { get; set; }
        public virtual ICollection<Notifikacija> Notifikacija { get; set; }
        public virtual ICollection<Uplata> Uplata { get; set; }
    }
}
