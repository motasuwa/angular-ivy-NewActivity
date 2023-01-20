import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css'],
})
export class InfoCardComponent {
  @Input() type: string = '';
  @Input() participants: number = 0;
  @Input() activity: string = '';
  @Input() cost: number = 0;
}
