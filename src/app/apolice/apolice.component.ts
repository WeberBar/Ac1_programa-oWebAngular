import { Component } from '@angular/core';

@Component({
  selector: 'app-apolice',
  templateUrl: './apolice.component.html',
  styleUrl: './apolice.component.css'
})
export class ApoliceComponent {
  public nome!: String;
  public sexo!: String;
  public idade!: number;
  public valorAutomovel!: number;
  public valorApolice: number = 0;

  public calcularApolice() {
    if (this.valorAutomovel !== null && this.idade !== null) {
      if (this.sexo === 'masculino') {
        if (this.idade <= 25) {
          this.valorApolice = this.valorAutomovel * 0.15;
        } else {
          this.valorApolice = this.valorAutomovel * 0.10;
        }
      } else if (this.sexo === 'feminino') {
        this.valorApolice = this.valorAutomovel * 0.08;
      }
    }
  }

  public limpar(){
   this.valorApolice = 0
  }
}
