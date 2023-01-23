import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css'],
})
export class InfoCardComponent {
  @Input() highestSmall: string = '';
  @Input() mainTopic: string = '';
  @Input() moreInfo: string = '';
  @Input() bottom: string = '';
}
