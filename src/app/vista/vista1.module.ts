import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Section1Component } from './components/section1/section1.component';
import { Section2Component } from './components/section2/section2.component';
import { Section3Component } from './components/section3/section3.component';
import { Section4Component } from './components/section4/section4.component';
import { Section5Component } from './components/section5/section5.component';
import { Section6Component } from './components/section6/section6.component';
import { Section7Component } from './components/section7/section7.component';
import { Section8Component } from './components/section8/section8.component';
import { TestComponent } from './page/test/test.component';
import { Test2Component } from './page/test2/test2.component';
import { Section9Component } from './components/section9/section9.component';
import { Section10Component } from './components/section10/section10.component';



@NgModule({
  declarations: [
    Section1Component,
    Section2Component,
    Section3Component,
    Section4Component,
    Section5Component,
    Section6Component,
    Section7Component,
    Section8Component,
    TestComponent,
    Test2Component,
    Section9Component,
    Section10Component
  ],
  exports:[
    Section1Component,
    Section2Component,
    Section3Component,
    Section4Component,
    Section5Component,
    Section6Component,
    Section7Component,
    Section8Component,
    TestComponent,
    Test2Component
  ],
  imports: [
    CommonModule
  ]
})
export class Vista1Module { }
