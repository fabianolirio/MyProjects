using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EFNCAgenda.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace EFNCAgenda.Controllers
{
    [Route("api/[controller]")]
    public class AgendaController : Controller
    {
        AcessoDAL objagenda = new AcessoDAL();

        
        [HttpGet]
        [Route("api/Agenda/Index")]
        public IEnumerable<Agenda> Index()
        {
            return objagenda.ObterAgendas();
        }

        
        [HttpPost]
        [Route("api/Agenda/Create")]
        public int Create([FromBody]Agenda agenda)
        {
            return objagenda.AdicionarAgenda(agenda);
        }

        [HttpGet]
        [Route("api/Agenda/Details/{id}")]
        public Agenda Details(int id)
        {
            return objagenda.ObterDadosAgenda(id);
        }

        [HttpPut]
        [Route("api/Agenda/Edit")]
        public int Edit([FromBody]Agenda agenda)
        {
            return objagenda.AtualizarAgenda(agenda);
        }

        [HttpDelete]
        [Route("api/Agenda/Delete/{id}")]
        public int Delete(int id)
        {
            return objagenda.ExcluirAgenda(id);
        }
    }
}
