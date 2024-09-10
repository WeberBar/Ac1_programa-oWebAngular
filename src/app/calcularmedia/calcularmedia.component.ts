import { Component } from '@angular/core';

@Component({
  selector: 'app-calcularmedia',
  templateUrl: './calcularmedia.component.html',
  styleUrl: './calcularmedia.component.css'
})
export class CalcularmediaComponent {
public ac1: number = 0;
public ac2: number = 0;
public ag: number = 0;
public af: number = 0;
public media!: number;
public status: String = "Preencha os campos para poder calcular";

public calcularmedia(){
  this.media =  (this.ac1 * 0.15) + (this.ac2 *0.30) + (this.ag * 0.10) + (this.af * 0.45);
  if (this.media >=5) {
    this.status = "O aluno com a média "+ this.media + " está APROVADO"
  } else if(this.media == null) {
    this.status = ""
  } else{
    this.status = "O aluno com a média "+ this.media + " está REPROVADO"
  }

}

public limpar(){
  this.media = 0;
  this.status = "Preencha os campos para poder calcular"
}
}
