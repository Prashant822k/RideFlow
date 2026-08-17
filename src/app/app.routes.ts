import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RidesComponent } from './pages/rides/rides.component';
import { RideDetailComponent } from './pages/ride-detail/ride-detail.component';
import { ProfileComponent } from './pages/profile/profile.component';
export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' }, { path: 'dashboard', component: DashboardComponent },
  { path: 'rides', component: RidesComponent }, { path: 'rides/:id', component: RideDetailComponent },
  { path: 'profile', component: ProfileComponent }, { path: '**', redirectTo: 'dashboard' }
];
