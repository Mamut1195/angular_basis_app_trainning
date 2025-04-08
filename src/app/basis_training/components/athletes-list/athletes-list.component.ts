import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AthleteService } from '../../athlete.service';
import { AthleteCardComponent } from '../athlete-card/athlete-card.component';

@Component({
  selector: 'app-athletes-list',
  standalone: true,
  imports: [CommonModule, AthleteCardComponent],
  templateUrl: './athletes-list.component.html',
})

export class AthletesListComponent {
  private athleteService = inject(AthleteService);
  athletes: any[] = [];

  ngOnInit() {
    this.athleteService.getAthletes().subscribe({
      next: (data) => (this.athletes = data),
      error: (err) => console.error('Error al cargar atletas:', err),
    });
  }
}


 