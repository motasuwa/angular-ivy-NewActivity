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
  //@Input() errMessage: string = '';
  @Input() errMessage: any = null;

  public messageItself: string = '';

  ngOnInit() {
    this.SetClasses(this.cardType)
    console.log('this is info-card and error message is: ' + this.errMessage)
    //this.messageItself = this.errMessage.error.message
  }

  currentClasses: any = null;
  SetClasses(cardType: string): void {
    if (cardType == 'currency-api') {
      this.currentClasses = { newContainerBackgroundCurrency: true }
    }
    if (cardType == 'activity') {
      this.currentClasses = { newContainerBackgroundActivity: true }
    }
  }

}
