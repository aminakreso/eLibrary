using System;
using System.Collections.Generic;

#nullable disable

namespace eLibrary.Models
{
    public partial class KorisnickiRacun
    {
        public KorisnickiRacun()
        {
            Admin = new HashSet<Admin>();
            Korisnik = new HashSet<Korisnik>();
        }

        public int KorisnickiRacunId { get; set; }
        public string NazivUloge { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }

        public virtual ICollection<Admin> Admin { get; set; }
        public virtual ICollection<Korisnik> Korisnik { get; set; }
    }
}
