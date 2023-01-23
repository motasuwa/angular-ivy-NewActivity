import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public items: number[] = [];

  addActivity(): void {
    this.items.push(1); //to update with id
  }

  addCurrency(): void {
    this.items.push(2); //to update with id
  }

  clear(): void {
    this.items = [];
  }
}
