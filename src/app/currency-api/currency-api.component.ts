import { Component, OnInit } from '@angular/core';
import { CurrencyApiDatasourceService, ICurrency } from './currency-api.datasource.service';

@Component({
  selector: 'currency',
  templateUrl: './currency-api.component.html',
})
export class CurrencyApiComponent implements OnInit {
  public currency: ICurrency = null;

  constructor(private datasource: CurrencyApiDatasourceService) { }
  //public errorMessage: string = ''; //сюда запишется текст ошибки перехваченной в dataservice
  public errorMessage: any = null; // сюда записываем объект-ошибку перехваченную из subscribe 
  ngOnInit() {
    this.getInr();
    //this.errorMessage = this.datasource.errorMessage
  }

  public getInr(): void {
    console.log('before getInr: ' + "errorMessage")
    this.datasource.getInr().subscribe ({
      next: (data: any) => {
        this.currency = data[this.getRandomInt(1, 300)] 
      },
      error: (error: any) => {
        //this.errorMessage = this.datasource.errorMessage; //используется, если в datasource не закомменчена обработка ошибок
        this.errorMessage = error; 
        console.log('this is currency-api and error message is: ' + this.errorMessage)
      }
    })
    console.log('after getInr: ' + "errorMessage") //выполняется сразу, не дожидаясь ответа по subscribe
  }

  private getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
  }
}
