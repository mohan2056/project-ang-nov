import { Component } from "@angular/core";

@Component({
    selector : 'app-sample',
    template : `<h1>Sample {{sText}}</h1>`
})
export class SampleComponent{
    sText : string = "Heading";
}