import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'code-examples',
    templateUrl: './examples.component.html',
    styleUrls: ['./examples.component.less']
})

export class ExamplesComponent {
    public ButtonText: string;
    public ResultOf_onClick_Button_ClickMe: string;
    public UserInputFor_NameField: string;


    constructor(titleService: Title) {
        titleService.setTitle("Examples!");

        this.ButtonText = "Click Me!";
        this.ResultOf_onClick_Button_ClickMe = "";
        this.UserInputFor_NameField = "";
    }

    public onClick_Button_ClickMe() {
        this.ResultOf_onClick_Button_ClickMe = `Hello ${this.UserInputFor_NameField}!`;
        //: the above is the same as
        //:   this.ResultOf_onClick_Button_ClickMe = "Hello " + this.UserInputFor_NameField + "!";
    };
}