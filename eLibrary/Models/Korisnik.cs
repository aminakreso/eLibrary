using System;
using System.Collections.Generic;

#nullable disable

namespace eLibrary.Models
{
    public partial class Korisnik
    {
        public Korisnik()
        {
            CekanjeNaKnjigus = new HashSet<CekanjeNaKnjigu>();
            ClanskaKarticas = new HashSet<ClanskaKartica>();
            Kupons = new HashSet<Kupon>();
            Narudzbas = new HashSet<Narudzba>();
            Notifikacijas = new HashSet<Notifikacija>();
            Uplata = new HashSet<Uplatum>();
        }

        public int KorisnikId { get; set; }
        public string Ime { get; set; }
        public string Prezime { get; set; }
        public string BrojTelefona { get; set; }
        public int? KorisnickiRacunId { get; set; }

        public virtual KorisnickiRacun KorisnickiRacun { get; set; }
        public virtual ICollection<CekanjeNaKnjigu> CekanjeNaKnjigus { get; set; }
        public virtual ICollection<ClanskaKartica> ClanskaKarticas { get; set; }
        public virtual ICollection<Kupon> Kupons { get; set; }
        public virtual ICollection<Narudzba> Narudzbas { get; set; }
        public virtual ICollection<Notifikacija> Notifikacijas { get; set; }
        public virtual ICollection<Uplatum> Uplata { get; set; }
    }
}
