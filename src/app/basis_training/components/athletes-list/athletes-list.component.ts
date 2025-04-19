import { Component, OnInit } from '@angular/core';
import { AthleteService } from '../../services/athlete.service';
import { Athlete } from '../../models/athlete.models';
import { AthleteCardComponent } from "../athlete-card/athlete-card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-athlete-list',
  templateUrl: './athletes-list.component.html',
  imports: [AthleteCardComponent, CommonModule],
})
export class AthleteListComponent implements OnInit {
  athletes: Athlete[] = [];

  constructor(private athleteService: AthleteService) {}

  ngOnInit(): void {
    this.athleteService.getAthletes().subscribe({
      next: (data) => this.athletes = data,
      error: (err) => console.error('Error al cargar atletas', err)
    });
  }

  trackByAthleteId(index: number, athlete: Athlete): number {
    return athlete.id;
  }
}

 