import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SpacexApiService } from '../../services/spacex-api.service';
import { SpaceXLaunch } from '../../models/spacex-launch.model';
import { MissionFilterComponent } from '../missionfilter/missionfilter.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-missionlist',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MissionFilterComponent,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatChipsModule
  ],
  templateUrl: './missionlist.component.html',
  styleUrl: './missionlist.component.css'
})
export class MissionListComponent implements OnInit {
  private spacexService = inject(SpacexApiService);

  missions: SpaceXLaunch[] = [];
  loading = false;
  errorMessage = '';

  ngOnInit(): void {
    this.loadAllMissions();
  }

  loadAllMissions(): void {
    this.loading = true;
    this.errorMessage = '';

    this.spacexService.getAllLaunches().subscribe({
      next: (data) => {
        this.missions = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching missions:', error);
        this.errorMessage = 'Failed to load SpaceX missions.';
        this.loading = false;
      }
    });
  }

  onYearSearch(year: string): void {
    if (!year) {
      this.loadAllMissions();
      return;
    }

    this.loading = true;
    this.errorMessage = '';

    this.spacexService.getLaunchesByYear(year).subscribe({
      next: (data) => {
        this.missions = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error filtering missions:', error);
        this.errorMessage = 'Failed to filter missions by year.';
        this.loading = false;
      }
    });
  }

  onClearSearch(): void {
    this.loadAllMissions();
  }
}