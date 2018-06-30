import { NgModule } from '@angular/core';
import { AgendaService } from '../services/empservice.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchAgendaComponent } from './components/fetchagenda/fetchagenda.component';
import { Create } from './components/addagenda/addagenda.component';


@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        FetchAgendaComponent,        
        Create,
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'fetch-agenda', component: FetchAgendaComponent },
            { path: 'register-agenda', component: Create },
            { path: 'agenda/edit/:id', component: Create },
            { path: '**', redirectTo: 'home' }
        ])
    ],
    providers: [AgendaService]
})
export class AppModuleShared {
}