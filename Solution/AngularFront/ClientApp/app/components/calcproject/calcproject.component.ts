import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'calc-project',
    templateUrl: './calcproject.component.html',
    styleUrls: ['./calcproject.component.less']
})

export class CalcprojectComponent {
    //: properties go here
    public ShyKitty: boolean;

    constructor(titleService: Title) {
        titleService.setTitle("Muh Calculator");

        //: create & assign value here
        this.ShyKitty = false;
    }

    //: any methods you want go here.
    public CatAbuse() {
        //: anything here, is CatAbuse

        this.ShyKitty = !this.ShyKitty;

        //console.log("Hi, please be nice to kitty");
        //var newTab;
        //newTab = window.open("https://google.com", "");
    }
}