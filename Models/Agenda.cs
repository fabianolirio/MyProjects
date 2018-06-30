using System;
using System.Collections.Generic;

namespace EFNCAgenda.Models
{
    public partial class Agenda
    {
        public int Id { get; set; }
        public string NomePaciente { get; set; }
        public DateTime? DataNascimento { get; set; }
        public DateTime DataInicial { get; set; }
        public DateTime DataFinal { get; set; }
        public string Observacao { get; set; }
    }
}
