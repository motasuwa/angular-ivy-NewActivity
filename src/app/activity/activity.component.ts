import { Component, OnInit } from '@angular/core';
import { ActivityDatasourceService, IActivityResponse } from './activity.datasource.service';

@Component({
  selector: 'activity',
  templateUrl: './activity.component.html',
})
export class ActivityComponent implements OnInit {
  public activity: IActivityResponse = null;
  public errorMessage:any = null;
  constructor(private datasource: ActivityDatasourceService) {}

  ngOnInit() {
    this.getAct();
  }

  public getAct(): void {
    this.datasource.getAct().subscribe((activity) => (this.activity = activity));
  }
}
