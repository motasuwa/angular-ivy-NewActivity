import { Component, OnInit } from '@angular/core';
import { PublicApiDatasourceService, ICurrency } from './public-api.datasource.service';

@Component({
  selector: 'currency',
  templateUrl: './public-api.component.html',
})
export class PublicApiComponent implements OnInit {
  public currency: ICurrency = null;

  constructor(private datasource: PublicApiDatasourceService) {}

  ngOnInit() {
    this.getInr();
  }

  public getInr(): void {
    this.datasource.getInr().subscribe({next: (data: any) => (this.currency = data[1])}); 
    //console.log(this.currency)
  }
}
