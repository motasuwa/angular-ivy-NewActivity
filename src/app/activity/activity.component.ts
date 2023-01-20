import { Component, OnInit } from '@angular/core';
import { ActivityDatasourceService } from './activity.datasource.service';

@Component({
  selector: 'activity',
  templateUrl: './activity.component.html',
})
export class ActivityComponent implements OnInit {
  public activity: string = '';

  constructor(private datasource: ActivityDatasourceService) {}

  ngOnInit() {
    this.getAct();
  }

  public getAct(): void {
    this.datasource.getAct().subscribe((activity) => (this.activity = activity));
  }
}
