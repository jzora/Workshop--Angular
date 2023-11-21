import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Vista1Module } from './vista/vista1.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    Vista1Module,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
