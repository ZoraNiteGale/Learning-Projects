import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { CalcprojectComponent } from './components/calcproject/calcproject.component';
import { ExamplesComponent } from './components/examples/examples.component';

@NgModule({
    declarations: [
        AppComponent,
        CalcprojectComponent,
        ExamplesComponent,
        HomeComponent,
        NavMenuComponent,
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'CalcProject', component: CalcprojectComponent },
            { path: 'Examples', component: ExamplesComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})

export class AppModuleShared {
}
