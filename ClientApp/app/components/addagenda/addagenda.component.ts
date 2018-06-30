import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FetchAgendaComponent } from '../fetchagenda/fetchagenda.component';
import { AgendaService } from '../../../services/empservice.service';

@Component({
    templateUrl: './Addagenda.component.html'
})

export class Create implements OnInit {
    employeeForm: FormGroup;
    title: string = "Create";    
    Id: number;
    errorMessage: any;
    
    

    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
        private agendaService: AgendaService, private _router: Router) {
        if (this._avRoute.snapshot.params["id"]) {
            this.Id = this._avRoute.snapshot.params["id"];
        }

        this.employeeForm = this._fb.group({
            Id: 0,
            name: ['', [Validators.required]],
            gender: ['', [Validators.required]],
            department: ['', [Validators.required]],
            city: ['', [Validators.required]]
        })
    }

    ngOnInit() {

        this.agendaService.ObterAgendas().subscribe(
            data => this.Id = data
        )

        if (this.Id > 0) {
            this.title = "Edit";
            this.agendaService.ObterDadosAgenda(this.Id)
                .subscribe(resp => this.employeeForm.setValue(resp)
                    , error => this.errorMessage = error);
        }

    }

    save() {

        if (!this.employeeForm.valid) {
            return;
        }

        if (this.title == "Create") {
            this.agendaService.AdicionarAgenda(this.employeeForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/fetch-employee']);
                }, error => this.errorMessage = error)
        }
        else if (this.title == "Edit") {
            this.agendaService.AtualizarAgenda(this.employeeForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/fetch-employee']);
                }, error => this.errorMessage = error)
        }
    }

    cancel() {
        this._router.navigate(['/fetch-employee']);
    }

    //get name() { return this.employeeForm.get('name'); }
    //get gender() { return this.employeeForm.get('gender'); }
    //get department() { return this.employeeForm.get('department'); }
    //get city() { return this.employeeForm.get('city'); }
}