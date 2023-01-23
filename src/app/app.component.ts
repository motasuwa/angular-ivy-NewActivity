import { Component } from '@angular/core'; 
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public items: string[] = [];

  ngOnInit(){

  }

  public possibleItems = ['currency-api', 'activity'];
  addRandom() {

    let index = this.getRandomInt(0, this.possibleItems.length);
    this.items.push(this.possibleItems[index]);
  }

  addActivity(): void {
    this.items.push("activity"); //to update with id
  }

  addCurrency(): void {
    this.items.push("currency-api"); //to update with id
  }
  
  private getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
  }
  clear(): void {
    this.items = [];
  }
}
