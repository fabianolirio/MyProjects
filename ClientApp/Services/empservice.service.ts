import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AgendaService {
    myAppUrl: string = "";

    constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.myAppUrl = baseUrl;
    }   

    ObterAgendas() {
        return this._http.get(this.myAppUrl + 'api/Agenda/Index')
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    ObterDadosAgenda(id: number) {
        return this._http.get(this.myAppUrl + "api/Agenda/Details/" + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }

    AdicionarAgenda(agenda) {
        return this._http.post(this.myAppUrl + 'api/Agenda/Create', agenda)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }

    AtualizarAgenda(agenda) {
        return this._http.put(this.myAppUrl + 'api/Agenda/Edit', agenda)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    ExcluirAgenda(id) {
        return this._http.delete(this.myAppUrl + "api/Agenda/Delete/" + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}