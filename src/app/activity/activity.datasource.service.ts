import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';

interface IActivityResponse {
  activity: string;
  type: string;
  participants: number;
  price: number;
  link: string;
  key: number;
  accessibility: number;
}
/*
{
  "activity": "Create or update your resume",
  "type": "busywork",
  "participants": 1,
  "price": 0,
  "link": "",
  "key": "9364041",
  "accessibility": 0.1
}*/

@Injectable()
export class ActivityDatasourceService {
  private apiEndpoint = 'https://www.boredapi.com/api/activity/';

  constructor(private http: HttpClient) {}

  getAct(): Observable<string> {
    return this.http
      .get<IActivityResponse>(this.apiEndpoint)
      .pipe(map((response) => response.activity));
  }
}
