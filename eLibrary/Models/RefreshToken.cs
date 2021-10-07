using System;
using System.Collections.Generic;

#nullable disable

namespace eLibrary.Models
{
    public partial class RefreshToken
    {
        public int TokenId { get; set; }
        public int? KorisnickiRacunID { get; set; }
        public string Token { get; set; }
        public DateTime? ExpiryDate { get; set; }

        public virtual KorisnickiRacun KorisnickiRacun{ get; set; }
    }
}
