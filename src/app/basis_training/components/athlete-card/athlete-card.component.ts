import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-athlete-card',
  imports: [CommonModule],
  templateUrl: './athlete-card.component.html',
})
export class AthleteCardComponent {
  @Input() athlete: any;
}
