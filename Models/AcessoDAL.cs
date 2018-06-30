using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EFNCAgenda.Models
{
    public class AcessoDAL
    {
        ClinicaMedicaContext db = new ClinicaMedicaContext();

        public IEnumerable<Agenda> ObterAgendas()
        {
            try
            {
                return db.Agenda.ToList();
            }
            catch (Exception)
            {

                throw;
            }
        }

        public int AdicionarAgenda(Agenda agenda)
        {
            try
            {
                db.Agenda.Add(agenda);
                db.SaveChanges();
                return 1;
            }
            catch (Exception)
            {

                throw;
            }
        }

        public int AtualizarAgenda(Agenda agenda)
        {
            try
            {
                db.Entry(agenda).State = EntityState.Modified;
                db.SaveChanges();
                return 1;
            }
            catch (Exception)
            {

                throw;
            }
        }

        public Agenda ObterDadosAgenda(int id)
        {
            try
            {
                Agenda agenda = db.Agenda.Find(id);
                return agenda;
            }
            catch (Exception)
            {

                throw;
            }
        }

        public int ExcluirAgenda(int id)
        {
            try
            {
                Agenda agenda = db.Agenda.Find(id);
                db.Agenda.Remove(agenda);
                db.SaveChanges();
                return 1;
            }
            catch (Exception)
            {

                throw;
            }
        }

       
    }
}
