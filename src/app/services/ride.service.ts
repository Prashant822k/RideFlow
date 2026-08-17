import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Ride } from '../models/ride.model';
import { RIDES } from './mock-data';

@Injectable({ providedIn: 'root' })
export class RideService {
  private readonly http = inject(HttpClient);
  private readonly storageKey = 'ride-flow-rides';
  private savedRides = this.loadSavedRides();

  getRides() { return this.http.get<Ride[]>('/api/rides').pipe(map(mockRides => this.mergeRides(mockRides, this.savedRides))); }
  getRide(id: number) { return this.getRides().pipe(map(rides => rides.find(ride => ride.id === id))); }

  addRide(draft: Omit<Ride, 'id' | 'date'>): Ride {
    const rides = this.mergeRides(RIDES, this.savedRides);
    const ride: Ride = { ...draft, id: Math.max(0, ...rides.map(item => item.id)) + 1, date: new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date()) };
    this.savedRides = [...rides, ride];
    localStorage.setItem(this.storageKey, JSON.stringify(this.savedRides));
    return ride;
  }

  private loadSavedRides(): Ride[] { try { const saved = JSON.parse(localStorage.getItem(this.storageKey) ?? '[]'); return Array.isArray(saved) ? saved as Ride[] : []; } catch { return []; } }
  private mergeRides(mockRides: Ride[], savedRides: Ride[]): Ride[] { const rides = new Map<number, Ride>(); mockRides.forEach(ride => rides.set(ride.id, ride)); savedRides.forEach(ride => rides.set(ride.id, ride)); return [...rides.values()]; }
}
