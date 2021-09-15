using System;
using System.Collections.Generic;

#nullable disable

namespace eLibrary.Models
{
    public partial class KorisnickiRacun
    {
        public KorisnickiRacun()
        {
            Admins = new HashSet<Admin>();
            Korisniks = new HashSet<Korisnik>();
        }

        public int KorisnickiRacunId { get; set; }
        public string NazivUloge { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }

        public virtual ICollection<Admin> Admins { get; set; }
        public virtual ICollection<Korisnik> Korisniks { get; set; }
    }
}
