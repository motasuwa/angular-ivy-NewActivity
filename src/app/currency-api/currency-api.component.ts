import { Component, OnInit } from '@angular/core';
import { CurrencyApiDatasourceService, ICurrency } from './currency-api.datasource.service';

@Component({
  selector: 'currency',
  templateUrl: './currency-api.component.html',
})
export class CurrencyApiComponent implements OnInit {
  public currency: ICurrency = null;

  constructor(private datasource: CurrencyApiDatasourceService) {}
  public errorMessage:any = this.datasource.errorMessage;
  ngOnInit() {
    this.getInr();
  }

  public getInr(): void {
    this.datasource.getInr().subscribe({next: (data: any) => (this.currency = data[this.getRandomInt(1,300)])}); 
  }
  private getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
  }

}
