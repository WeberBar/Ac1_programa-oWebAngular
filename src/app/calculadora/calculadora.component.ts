import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {

  public operator: String = '';
  public valor1: number = 0;
  public valor2: number = 0;
  public result: number = 0;

  public calcular(): void {
    switch (this.operator) {
      case '+':
        this.result = this.valor1 + this.valor2;
        break;

      case '-':
        this.result = this.valor1 - this.valor2;
        break;
      case '*':
        this.result = this.valor1 * this.valor2;
        break;
      case '/':
        this.result = this.valor1 / this.valor2;
        break;
    }


  }
  public limpar(){
      this.result = 0;
  }
}
