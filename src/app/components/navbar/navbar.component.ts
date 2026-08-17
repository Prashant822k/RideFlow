import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@Component({ selector: 'app-navbar', standalone: true, imports: [RouterLink, RouterLinkActive, MatToolbarModule, MatButtonModule, MatIconModule], template: `<mat-toolbar><a class="brand" routerLink="/dashboard"><mat-icon>directions_bus</mat-icon>Ride<span>Flow</span></a><nav><a mat-button routerLink="/dashboard" routerLinkActive="active">Dashboard</a><a mat-button routerLink="/rides" routerLinkActive="active">Rides</a><a mat-button routerLink="/profile" routerLinkActive="active">Profile</a></nav></mat-toolbar>`, styles: `mat-toolbar{height:68px;padding:0 5vw;background:#fff;border-bottom:1px solid #e8edf3}.brand{display:flex;align-items:center;gap:.35rem;font-weight:800;font-size:1.25rem;color:#17243d;text-decoration:none}.brand mat-icon,.brand span{color:#2563eb}nav{display:flex;gap:.35rem;margin-left:auto}nav a{color:#64748b;font-weight:600}.active{color:#2563eb!important}@media(max-width:500px){mat-toolbar{padding:0 1rem}.brand{font-size:1.05rem}nav{gap:0}nav a{min-width:0!important;padding:0 .4rem!important;font-size:.82rem}}` })
export class NavbarComponent {}
