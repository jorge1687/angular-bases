import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
      <h3>Counter: {{counter}}</h3>

      <button (click)="operacion(+1)">+1</button>
      <button (click)="reset()">reset</button>
      <button (click)="operacion(-1)">-1</button>
  `
})
export class CounterComponent {
  constructor() { }

  public counter: number =10;

  operacion(sumador:number): void{
    this.counter+=sumador;
  }

  reset(): void{
    this.counter=10;
  }
}
