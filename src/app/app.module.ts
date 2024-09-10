import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { CalcularmediaComponent } from './calcularmedia/calcularmedia.component';
import { ApoliceComponent } from './apolice/apolice.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ImcComponent } from './imc/imc.component';
import { ConversorTemperaturaComponent } from './conversor-temperatura/conversor-temperatura.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalcularmediaComponent,
    ApoliceComponent,
    NotfoundComponent,
    ImcComponent,
    ConversorTemperaturaComponent,
    CalculadoraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
