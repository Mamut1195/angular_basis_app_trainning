import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Athlete } from '../models/athlete.models';

@Injectable({
  providedIn: 'root',
})
export class AthleteService {
  private apiUrl = 'http://127.0.0.1:8000/api/v1/users/';

  constructor(private http: HttpClient) {}

  getAthletes(): Observable<Athlete[]> {
    return this.http.get<Athlete[]>(this.apiUrl);
  }
  
  getAthleteById(id: number): Observable<Athlete> {
    return this.http.get<Athlete>(`${this.apiUrl}${id}/`);
  }
}

