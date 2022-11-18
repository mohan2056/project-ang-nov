import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SampleComponent } from './sample.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { TtClassDirective } from './tt-class.directive';
import { SecondComponent } from './second/second.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Child1Component } from './child1/child1.component';
import { Parent1Component } from './parent1/parent1.component';
import { SamplePipe } from './sample.pipe';
import { ProductService } from './product.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    FirstComponent,
    TtClassDirective,
    SecondComponent,
    ParentComponent,
    ChildComponent,
    Child1Component,
    Parent1Component,
    SamplePipe,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports : [],
  schemas : [],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
