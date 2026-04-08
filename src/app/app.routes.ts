import { Routes } from '@angular/router';
import { MissionListComponent } from './components/missionlist/missionlist.component';
import { MissionDetailsComponent } from './components/missiondetails/missiondetails.component';

export const routes: Routes = [
  { path: '', redirectTo: 'missions', pathMatch: 'full' },
  { path: 'missions', component: MissionListComponent },
  { path: 'missions/:flight_number', component: MissionDetailsComponent },
  { path: '**', redirectTo: 'missions' }
];