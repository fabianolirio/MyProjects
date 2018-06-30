import { Component, Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { AgendaService } from '../../../services/empservice.service';


@Component({
    templateUrl: './fetchagenda.component.html'
})

export class FetchAgendaComponent {    

    constructor(public http: Http, private _router: Router, private _employeeService: AgendaService) {
        this.ObterAgendas();
    }

    ObterAgendas() {
        this.ObterAgendas();
    }

    delete(Id) {
        var ans = confirm("Você deseja excluir o cliente com o ID: " + Id);
        if (ans) {
            this.delete(Id);
            {
                this.ObterAgendas();
            }
        }
    }
}

