import { Component, Input, OnInit } from '@angular/core';
import { Athlete } from '../../models/athlete.models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-athlete-card',
  templateUrl: './athlete-card.component.html',
  imports:[CommonModule]
})

export  class AthleteCardComponent implements OnInit {
  @Input() athlete!: Athlete;
  goals: string[] = [];

  ngOnInit(): void {
    if (this.athlete.objetivos) {
      this.goals = this.athlete.objetivos
        .split(/\r?\n|,/) // separa por nueva línea o comas
        .map((g) => g.trim())
        .filter((g) => g.length > 0);
    }
  }

  trackByGoal(index: number, goal: string): string {
    return goal + index;
  }
}