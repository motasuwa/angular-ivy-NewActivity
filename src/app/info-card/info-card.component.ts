import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css'],
})
export class InfoCardComponent implements OnInit {
  @Input() highestSmall: string = '';
  @Input() mainTopic: string = '';
  @Input() moreInfo: string = '';
  @Input() bottom: string = '';
  @Input() cardType: string = '';

  ngOnInit() {
    this.SetClasses(this.cardType)
  }

  currentClasses:any = null;
  SetClasses(cardType: string): void {
    if(cardType=='currency-api') {
      this.currentClasses = {newContainerBackgroundCurrency: true}
    }
    if(cardType=='activity') {
      this.currentClasses = {newContainerBackgroundActivity: true}
    }
  }

}
