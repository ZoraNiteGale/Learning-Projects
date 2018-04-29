import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

interface HelpLink {
    URL?: string;
    Route?: Function;
    Description: string;
}

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.less']
})

export class HomeComponent {
    private _router: Router;
    public CurrentWork: string;
    public UsefulLinks: Array<HelpLink>;

    constructor(router: Router, titleService: Title) {
        titleService.setTitle("BOOM! Landing page");

        this._router = router;
        this.CurrentWork = "Calculator Project";
        this.UsefulLinks = [];

        this.UsefulLinks.push({
            URL: "https://angular.io/docs",
            Description: "Angular (TS / HTML) Documentation"
        });

        this.UsefulLinks.push({
            URL: "https://getbootstrap.com/docs/4.0/getting-started/introduction/",
            Description: "Bootstrap (CSS / Style) Documentation"
        });

        this.UsefulLinks.push({
            URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            Description: "JavaScript Documentation by Mozilla"
        });

        this.UsefulLinks.push({
            URL: "https://www.w3schools.com/html/default.asp",
            Description: "W3 Schools (HTML / CSS / JS) Documentation"
        });

        this.UsefulLinks.push({
            Route: () => this._router.navigateByUrl("/Examples"),
            Description: "Check out the examples! (compare them side by side with the code)"
        });
    }

    public takeMeThere() {
        this._router.navigateByUrl("/CalcProject");
    };
}
