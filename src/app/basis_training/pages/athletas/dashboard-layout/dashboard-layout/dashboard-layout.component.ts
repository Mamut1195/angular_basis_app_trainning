import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard-layout',
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardLayoutComponent {
  @Input() id!: number;
  @Input() title: string = ''; 
}
