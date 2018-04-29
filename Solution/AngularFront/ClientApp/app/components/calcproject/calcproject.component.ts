import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'calc-project',
    templateUrl: './calcproject.component.html',
    styleUrls: ['./calcproject.component.less']
})

export class CalcprojectComponent {
    //: properties go here

    constructor(titleService: Title) {
        titleService.setTitle("Muh Calculator");

        //: create & assign value here
    }

    //: any methods you want go here.
}