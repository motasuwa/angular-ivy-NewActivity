import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css'],
})
export class InfoCardComponent {
  @Input() type: string = '';
  @Input() participants: string = '';
  @Input() activity: string = '';
  @Input() cost: string = '';
}
