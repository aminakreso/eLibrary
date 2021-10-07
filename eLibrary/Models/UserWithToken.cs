using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace eLibrary.Models
{
    public class UserWithToken :KorisnickiRacun
    {
        //public string AccessToken { get; set; }
        //public string RefreshToken { get; set; }
        public string Token { get; set; }

        public UserWithToken(KorisnickiRacun korisnickiRacun)
        {
            this.KorisnickiRacunId = KorisnickiRacunId;
            this.Email = korisnickiRacun.Email;
            this.NazivUloge = korisnickiRacun.NazivUloge;
        }
    }
}
