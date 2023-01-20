import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public items: number[] = [];

  addActivity(): void {
    this.items.push(Math.random()); //to update with id
  }

  clear(): void {
    this.items = [];
  }
}
