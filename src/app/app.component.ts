import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
@Component({ selector: 'app-root', standalone: true, imports: [RouterOutlet, NavbarComponent], template: '<app-navbar /><main class="page-shell"><router-outlet /></main>', styleUrl: './app.component.css' })
export class AppComponent {}
