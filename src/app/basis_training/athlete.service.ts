import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AthleteService {
  getAthletes(): Observable<any[]> {
    const athletes = Array.from({ length: 20 }, (_, i) => ({
      name: `Atleta ${i + 1}`,
      title: i % 2 === 0 ? 'Triatleta Profesional' : 'Corredor de fondo',
      country: ['España', 'México', 'Argentina', 'Colombia', 'Chile'][i % 5],
      bio: 'Atleta con experiencia internacional y enfoque competitivo.',
      age: 25 + (i % 10),
      weight: 60 + (i % 15),
      photoUrl: '',
      goals: [
        'Participar en Juegos Olímpicos',
        'Mejorar marca personal',
        'Clasificar al Mundial',
      ],
    }));

    return of(athletes).pipe(delay(500)); // Simula un delay de 500ms
  }
}
