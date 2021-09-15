using System;
using System.Collections.Generic;

#nullable disable

namespace eLibrary.Models
{
    public partial class Admin
    {
        public int AdminId { get; set; }
        public string Ime { get; set; }
        public string Prezime { get; set; }
        public string BrojTelefona { get; set; }
        public int? KorisnickiRacunId { get; set; }

        public virtual KorisnickiRacun KorisnickiRacun { get; set; }
    }
}
