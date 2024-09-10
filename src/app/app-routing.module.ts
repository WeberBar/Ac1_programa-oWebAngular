import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ConversorTemperaturaComponent } from './conversor-temperatura/conversor-temperatura.component';
import { ImcComponent } from './imc/imc.component';
import { CalcularmediaComponent } from './calcularmedia/calcularmedia.component';
import { ApoliceComponent } from './apolice/apolice.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:'', redirectTo: '/home', pathMatch:'full'},
{path:'home',component:HomeComponent},
{path:'calculadora',component:CalculadoraComponent},
{path:'conversorTemperatura',component:ConversorTemperaturaComponent},
{path:'imc',component:ImcComponent},
{path:'calcularmedia',component:CalcularmediaComponent},
{path:'apolice',component:ApoliceComponent},
{path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
