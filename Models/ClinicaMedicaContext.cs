using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace EFNCAgenda.Models
{
    public partial class ClinicaMedicaContext : DbContext
    {
        public ClinicaMedicaContext()
        {
        }

        public ClinicaMedicaContext(DbContextOptions<ClinicaMedicaContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Agenda> Agenda { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                  //#warningTo protect potentially sensitive information in your connection string, you should move it out of 
                  //source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=DESKTOP-S9BV3EG\\SQLEXPRESS;Database=ClinicaMedica;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Agenda>(entity =>
            {
                entity.Property(e => e.DataFinal).HasColumnType("date");

                entity.Property(e => e.DataInicial).HasColumnType("date");

                entity.Property(e => e.DataNascimento).HasColumnType("date");

                entity.Property(e => e.NomePaciente)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Observacao)
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });
        }
    }
}
