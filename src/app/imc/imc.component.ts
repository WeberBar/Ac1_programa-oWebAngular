import { Component } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrl: './imc.component.css'
})
export class ImcComponent {
public peso! :number;
public altura! :number;
public imc! : number;
public categoria! : string;

public calcularIMC(){
  this.imc = this.peso / (this.altura * this.altura);
  if (this.imc < 18.5) {
    this.categoria = 'Abaixo do peso';
} else if ( this.imc >= 18.5 &&  this.imc < 24.9) {
    this.categoria = 'Peso normal';
} else if ( this.imc >= 25 &&  this.imc < 29.9) {
    this.categoria = 'Sobrepeso';
} else if ( this.imc >= 30 &&  this.imc < 34.9) {
    this.categoria = 'Obesidade Grau I';
} else if ( this.imc >= 35 &&  this.imc < 39.9) {
    this.categoria = 'Obesidade Grau II';
} else {
    this.categoria = 'Obesidade Grau III';
}
}
}
