import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor-temperatura',
  templateUrl: './conversor-temperatura.component.html',
  styleUrl: './conversor-temperatura.component.css'
})
export class ConversorTemperaturaComponent {

    public celsius!: number;
    public fahrenheit!: number ;
    public kelvin!: number ;

    converterTemperatura() {
      if (this.celsius !== null) {
        this.fahrenheit = (this.celsius * 9/5) + 32;
        this.kelvin = this.celsius + 273.15;
      }
    }
  }


