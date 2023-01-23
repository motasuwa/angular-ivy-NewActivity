import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';


export interface ICurrency {
  symbol: string;
  baseAsset: string;
  quoteAsset: string;
  openPrice: number;
  lowPrice: number;
  highPrice: number;
  lastPrice: number;
  volume: number;
  bidPrice: number;
  askPrice: number;
  at: number; 
}
 

@Injectable()
export class CurrencyApiDatasourceService {
  private apiEndpoint = 'https://api.wazirx.com/sapi/v1/tickers/24hr';

  constructor(private http: HttpClient) {}

  getInr(): Observable<ICurrency> {
    return this.http.get<ICurrency>(this.apiEndpoint);
  }
}
