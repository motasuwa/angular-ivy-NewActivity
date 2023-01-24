import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public items: string[] = [];

  public SelectCard: FormControl = new FormControl('None');

  public possibleItems = ['currency-api', 'activity'];
  addRandom(): void {
    let index = this.getRandomInt(0, this.possibleItems.length);
    this.items.push(this.possibleItems[index]);
  }

  addActivity(): void {
    this.items.push("activity");
  }
  addCurrency(): void {
    this.items.push("currency-api");
  }
  addSelected(): void {
    let value = this.SelectCard.value;
    this.items.push(value);
  }
  public ButtonEnabled: boolean = true

  SelectChanged(e: any) {
    if (e.target.value == 'None') this.ButtonEnabled = true;
    else this.ButtonEnabled = false;
  }


  private getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
  }
  clear(): void {
    this.items = [];
  }
}
