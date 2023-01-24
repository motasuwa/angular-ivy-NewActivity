import { Component, Input, OnChanges, OnInit, SimpleChanges  } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css'],
})
export class InfoCardComponent implements OnInit, OnChanges {
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
    console.log('this is info-card (1 OnInit) and error message is: ' + this.errMessage) // это действие выполняется до того как получен ответ по subscribe
    //this.messageItself = this.errMessage.error.message
  }
  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      let chng = changes[propName];
      let cur  = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      console.log(`we have changes in info-card: ${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
    console.log('this is info-card (2 OnChanges) and error message is: ' + this.errMessage) // это действие выполняется до того как получен ответ по subscribe
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
