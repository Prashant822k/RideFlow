import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Ride } from '../../models/ride.model';
import { StatusBadgeComponent } from '../status-badge/status-badge.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@Component({ selector: 'app-ride-card', standalone: true, imports: [RouterLink, StatusBadgeComponent, MatCardModule, MatButtonModule, MatIconModule], template: `<mat-card class="ride-card"><mat-card-content><div class="top"><div><p class="date">{{ ride().date }}</p><h3>{{ ride().route }}</h3></div><app-status-badge [status]="ride().status" /></div><div class="details"><span><mat-icon>location_on</mat-icon>{{ ride().pickupLocation }}</span><span><mat-icon>schedule</mat-icon>{{ ride().pickupTime }}</span></div></mat-card-content><mat-card-actions><a mat-button color="primary" [routerLink]="['/rides', ride().id]">View ride <mat-icon>arrow_forward</mat-icon></a></mat-card-actions></mat-card>`, styles: `.ride-card{height:100%;border:1px solid #e7edf5;box-shadow:0 3px 14px #17243d0b}.top{display:flex;justify-content:space-between;gap:1rem}.date{margin:0 0 .3rem;color:#64748b;font-size:.78rem;font-weight:600}h3{margin:0;color:#17243d;font-size:1.05rem}.details{display:grid;gap:.45rem;color:#516074;font-size:.88rem;margin:1rem 0}.details span{display:flex;align-items:center;gap:.35rem}.details mat-icon{font-size:17px;width:17px;height:17px;color:#2563eb}mat-card-actions{padding:0 .5rem .55rem}` })
export class RideCardComponent { ride = input.required<Ride>(); }
