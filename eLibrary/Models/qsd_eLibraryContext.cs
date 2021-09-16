using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace eLibrary.Models
{
    public partial class qsd_eLibraryContext : DbContext
    {
        public qsd_eLibraryContext()
        {
        }

        public qsd_eLibraryContext(DbContextOptions<qsd_eLibraryContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Admin> Admin { get; set; }
        public virtual DbSet<CekanjeNaKnjigu> CekanjeNaKnjigu { get; set; }
        public virtual DbSet<ClanskaKartica> ClanskaKartica { get; set; }
        public virtual DbSet<Knjiga> Knjiga { get; set; }
        public virtual DbSet<KnjigaPromocija> KnjigaPromocija { get; set; }
        public virtual DbSet<KorisnickiRacun> KorisnickiRacun { get; set; }
        public virtual DbSet<Korisnik> Korisnik { get; set; }
        public virtual DbSet<Kupon> Kupon { get; set; }
        public virtual DbSet<Narudzba> Narudzba { get; set; }
        public virtual DbSet<Notifikacija> Notifikacija { get; set; }
        public virtual DbSet<Pisac> Pisac { get; set; }
        public virtual DbSet<Promocija> Promocija { get; set; }
        public virtual DbSet<Uplata> Uplata { get; set; }
        public virtual DbSet<Zanr> Zanr { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Name=eLibraryDB");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Admin>(entity =>
            {
                entity.ToTable("Admin");

                entity.Property(e => e.AdminId).HasColumnName("AdminID");

                entity.Property(e => e.BrojTelefona)
                    .HasMaxLength(45)
                    .IsUnicode(false);

                entity.Property(e => e.Ime)
                    .HasMaxLength(45)
                    .IsUnicode(false);

                entity.Property(e => e.KorisnickiRacunId).HasColumnName("KorisnickiRacunID");

                entity.Property(e => e.Prezime)
                    .HasMaxLength(45)
                    .IsUnicode(false);

                entity.HasOne(d => d.KorisnickiRacun)
                    .WithMany(p => p.Admin)
                    .HasForeignKey(d => d.KorisnickiRacunId)
                    .HasConstraintName("FK_AdminKorisnickiRacun");
            });

            modelBuilder.Entity<CekanjeNaKnjigu>(entity =>
            {
                entity.HasKey(e => e.CekanjeId)
                    .HasName("PK__CekanjeN__C890264A31F9EB96");

                entity.ToTable("CekanjeNaKnjigu");

                entity.Property(e => e.CekanjeId).HasColumnName("CekanjeID");

                entity.Property(e => e.KnjigaId).HasColumnName("KnjigaID");

                entity.Property(e => e.KorisnikId).HasColumnName("KorisnikID");

                entity.Property(e => e.VrijemeRazrjesenjaZahtjeva).HasColumnType("datetime");

                entity.Property(e => e.VrijemeZaprimanjaZahtjeva).HasColumnType("datetime");

                entity.HasOne(d => d.Knjiga)
                    .WithMany(p => p.CekanjeNaKnjigu)
                    .HasForeignKey(d => d.KnjigaId)
                    .HasConstraintName("FK_CekanjeNaKnjiguKnjiga");

                entity.HasOne(d => d.Korisnik)
                    .WithMany(p => p.CekanjeNaKnjigu)
                    .HasForeignKey(d => d.KorisnikId)
                    .HasConstraintName("FK_CekanjeNaKnjiguKorisnik");
            });

            modelBuilder.Entity<ClanskaKartica>(entity =>
            {
                entity.ToTable("ClanskaKartica");

                entity.Property(e => e.ClanskaKarticaId).HasColumnName("ClanskaKarticaID");

                entity.Property(e => e.DatumKreiranja).HasColumnType("date");

                entity.Property(e => e.KorisnikId).HasColumnName("KorisnikID");

                entity.HasOne(d => d.Korisnik)
                    .WithMany(p => p.ClanskaKartica)
                    .HasForeignKey(d => d.KorisnikId)
                    .HasConstraintName("FK_ClanskaKarticaKorisnik");
            });

            modelBuilder.Entity<Knjiga>(entity =>
            {
                entity.ToTable("Knjiga");

                entity.Property(e => e.KnjigaId).HasColumnName("KnjigaID");

                entity.Property(e => e.EKnjiga)
                    .HasMaxLength(8)
                    .IsUnicode(false)
                    .HasColumnName("eKnjiga");

                entity.Property(e => e.NazivKnjige)
                    .HasMaxLength(60)
                    .IsUnicode(false);

                entity.Property(e => e.PisacId).HasColumnName("PisacID");

                entity.Property(e => e.ZanrId).HasColumnName("ZanrID");

                entity.HasOne(d => d.Pisac)
                    .WithMany(p => p.Knjiga)
                    .HasForeignKey(d => d.PisacId)
                    .HasConstraintName("FK_KnjigaPisac");

                entity.HasOne(d => d.Zanr)
                    .WithMany(p => p.Knjiga)
                    .HasForeignKey(d => d.ZanrId)
                    .HasConstraintName("FK_KnjigaZanr");
            });

            modelBuilder.Entity<KnjigaPromocija>(entity =>
            {
                entity.ToTable("KnjigaPromocija");

                entity.Property(e => e.KnjigaPromocijaId).HasColumnName("KnjigaPromocijaID");

                entity.Property(e => e.KnjigaId).HasColumnName("KnjigaID");

                entity.Property(e => e.KnjigaPromocijaOpis)
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.PromocijaId).HasColumnName("PromocijaID");

                entity.HasOne(d => d.Knjiga)
                    .WithMany(p => p.KnjigaPromocija)
                    .HasForeignKey(d => d.KnjigaId)
                    .HasConstraintName("FK_KnjigaPromocijaKnjiga");

                entity.HasOne(d => d.Promocija)
                    .WithMany(p => p.KnjigaPromocija)
                    .HasForeignKey(d => d.PromocijaId)
                    .HasConstraintName("FK_KnjigaPromocijaPromocija");
            });

            modelBuilder.Entity<KorisnickiRacun>(entity =>
            {
                entity.ToTable("KorisnickiRacun");

                entity.Property(e => e.KorisnickiRacunId).HasColumnName("KorisnickiRacunID");

                entity.Property(e => e.Email)
                    .HasMaxLength(45)
                    .IsUnicode(false);

                entity.Property(e => e.NazivUloge)
                    .HasMaxLength(45)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .HasMaxLength(45)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Korisnik>(entity =>
            {
                entity.ToTable("Korisnik");

                entity.Property(e => e.KorisnikId).HasColumnName("KorisnikID");

                entity.Property(e => e.BrojTelefona)
                    .HasMaxLength(45)
                    .IsUnicode(false);

                entity.Property(e => e.Ime)
                    .HasMaxLength(45)
                    .IsUnicode(false);

                entity.Property(e => e.KorisnickiRacunId).HasColumnName("KorisnickiRacunID");

                entity.Property(e => e.Prezime)
                    .HasMaxLength(45)
                    .IsUnicode(false);

                entity.HasOne(d => d.KorisnickiRacun)
                    .WithMany(p => p.Korisnik)
                    .HasForeignKey(d => d.KorisnickiRacunId)
                    .HasConstraintName("FK_KorisnikKorisnickiRacun");
            });

            modelBuilder.Entity<Kupon>(entity =>
            {
                entity.ToTable("Kupon");

                entity.Property(e => e.KuponId).HasColumnName("KuponID");

                entity.Property(e => e.KorisnikId).HasColumnName("KorisnikID");

                entity.Property(e => e.SifraKupona)
                    .HasMaxLength(45)
                    .IsUnicode(false);

                entity.Property(e => e.VaziDo)
                    .HasColumnType("date")
                    .HasColumnName("VaziDO");

                entity.HasOne(d => d.Korisnik)
                    .WithMany(p => p.Kupon)
                    .HasForeignKey(d => d.KorisnikId)
                    .HasConstraintName("FK_KuponKorisnik");
            });

            modelBuilder.Entity<Narudzba>(entity =>
            {
                entity.ToTable("Narudzba");

                entity.Property(e => e.NarudzbaId).HasColumnName("NarudzbaID");

                entity.Property(e => e.DatumVrijeme).HasColumnType("datetime");

                entity.Property(e => e.KnjigaId).HasColumnName("KnjigaID");

                entity.Property(e => e.KorisnikId).HasColumnName("KorisnikID");

                entity.Property(e => e.KuponId).HasColumnName("KuponID");

                entity.HasOne(d => d.Knjiga)
                    .WithMany(p => p.Narudzba)
                    .HasForeignKey(d => d.KnjigaId)
                    .HasConstraintName("FK_NarudzbaKnjiga");

                entity.HasOne(d => d.Korisnik)
                    .WithMany(p => p.Narudzba)
                    .HasForeignKey(d => d.KorisnikId)
                    .HasConstraintName("FK_NarudzbaKorisnik");

                entity.HasOne(d => d.Kupon)
                    .WithMany(p => p.Narudzba)
                    .HasForeignKey(d => d.KuponId)
                    .HasConstraintName("FK_NarudzbaKupon");
            });

            modelBuilder.Entity<Notifikacija>(entity =>
            {
                entity.ToTable("Notifikacija");

                entity.Property(e => e.NotifikacijaId).HasColumnName("NotifikacijaID");

                entity.Property(e => e.KnjigaId).HasColumnName("KnjigaID");

                entity.Property(e => e.KorisnikId).HasColumnName("KorisnikID");

                entity.Property(e => e.OpisNotifikacije)
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.PisacId).HasColumnName("PisacID");

                entity.Property(e => e.Vrijeme).HasColumnType("datetime");

                entity.Property(e => e.VrstaNotifikacije)
                    .HasMaxLength(45)
                    .IsUnicode(false);

                entity.HasOne(d => d.Knjiga)
                    .WithMany(p => p.Notifikacija)
                    .HasForeignKey(d => d.KnjigaId)
                    .HasConstraintName("FK_NotifikacijaKnjiga");

                entity.HasOne(d => d.Korisnik)
                    .WithMany(p => p.Notifikacija)
                    .HasForeignKey(d => d.KorisnikId)
                    .HasConstraintName("FK_NotifikacijaKorisnik");

                entity.HasOne(d => d.Pisac)
                    .WithMany(p => p.Notifikacija)
                    .HasForeignKey(d => d.PisacId)
                    .HasConstraintName("FK_NotifikacijaPisac");
            });

            modelBuilder.Entity<Pisac>(entity =>
            {
                entity.ToTable("Pisac");

                entity.Property(e => e.PisacId).HasColumnName("PisacID");

                entity.Property(e => e.Drzava)
                    .HasMaxLength(45)
                    .IsUnicode(false);

                entity.Property(e => e.Ime)
                    .HasMaxLength(45)
                    .IsUnicode(false);

                entity.Property(e => e.Prezime)
                    .HasMaxLength(45)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Promocija>(entity =>
            {
                entity.ToTable("Promocija");

                entity.Property(e => e.PromocijaId).HasColumnName("PromocijaID");

                entity.Property(e => e.KnjigaId).HasColumnName("KnjigaID");

                entity.Property(e => e.Naziv)
                    .HasMaxLength(45)
                    .IsUnicode(false);

                entity.Property(e => e.VrstaPromocije)
                    .HasMaxLength(45)
                    .IsUnicode(false);

                entity.HasOne(d => d.Knjiga)
                    .WithMany(p => p.Promocija)
                    .HasForeignKey(d => d.KnjigaId)
                    .HasConstraintName("FK_PromocijaKnjiga");
            });

            modelBuilder.Entity<Uplata>(entity =>
            {
                entity.HasKey(e => e.UplataId)
                    .HasName("PK__Uplata__C5B16586F0D94906");

                entity.Property(e => e.UplataId).HasColumnName("UplataID");

                entity.Property(e => e.Datum).HasColumnType("date");

                entity.Property(e => e.KorisnikId).HasColumnName("KorisnikID");

                entity.HasOne(d => d.Korisnik)
                    .WithMany(p => p.Uplata)
                    .HasForeignKey(d => d.KorisnikId)
                    .HasConstraintName("FK_UplataKorisnik");
            });

            modelBuilder.Entity<Zanr>(entity =>
            {
                entity.ToTable("Zanr");

                entity.Property(e => e.ZanrId).HasColumnName("ZanrID");

                entity.Property(e => e.Naziv)
                    .HasMaxLength(45)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
