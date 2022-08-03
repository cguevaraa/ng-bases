import { DOCUMENT } from "@angular/common";
import { Component, Inject, Renderer2 } from "@angular/core";

@Component({
    selector: 'app-counter',
    template: `
        <h4>The base is: <strong>{{ base }}</strong></h4>

        <h3>Counter: {{ getCounter() }}</h3>
        <span><button (click)="counterUpdate(-base); colorUpdate(-base)">Substract {{ base }}</button></span>
        <span><button (click)="counterUpdate(base); colorUpdate(base)">Add {{ base }}</button></span>
    
    `
})
export class CounterComponent {
    private counter: number = 0;
    private R: number = 255;
    private G: number = 255;
    private B: number = 255;
    private bgColor = `rgb(${this.R},${this.G},${this.B})`;
    public base: number = 7;
  
    constructor(
      @Inject(DOCUMENT) private document: Document,
      private renderer: Renderer2
    ) {}
  
    ngAfterViewInit() {
      console.log('afterview')
      this.renderer.setStyle(this.document.body, 'background', this.bgColor);
    }
  
    getCounter(): number {
      return this.counter;
    }
  
    counterUpdate(value: number): void {
      this.counter += value;
    }
  
    colorUpdate(value: number): void {
      this.R -= value;
      this.G -= value;
      this.B -= value;
      this.renderer.setStyle(this.document.body, 'background', `rgb(${this.R},${this.G},${this.B})`);
    }
}