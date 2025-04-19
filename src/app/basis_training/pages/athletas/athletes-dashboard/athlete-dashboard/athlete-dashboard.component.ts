import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DashboardLayoutComponent } from '../../dashboard-layout/dashboard-layout/dashboard-layout.component';
import { Athlete } from '../../../../models/athlete.models';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AthleteService } from '../../../../services/athlete.service';

@Component({
  selector: 'app-athlete-dashboard',
  standalone: true,
  imports: [CommonModule, DashboardLayoutComponent],
  templateUrl: './athlete-dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AthleteDashboardComponent {
  private route = inject(ActivatedRoute);
  private service = inject(AthleteService);

  id = Number(this.route.snapshot.paramMap.get('id'));
  athlete$: Observable<Athlete> = this.service.getAthleteById(this.id);
}
