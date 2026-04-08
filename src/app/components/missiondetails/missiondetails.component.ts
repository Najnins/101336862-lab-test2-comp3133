import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

import { SpacexApiService } from '../../services/spacex-api.service';
import { SpaceXLaunch } from '../../models/spacex-launch.model';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-missiondetails',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatToolbarModule
  ],
  templateUrl: './missiondetails.component.html',
  styleUrl: './missiondetails.component.css'
})
export class MissionDetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private spacexService = inject(SpacexApiService);

  mission?: SpaceXLaunch;
  loading = false;
  errorMessage = '';

  ngOnInit(): void {
    const flightNumber = Number(this.route.snapshot.paramMap.get('flight_number'));

    if (!flightNumber) {
      this.errorMessage = 'Invalid mission id.';
      return;
    }

    this.loading = true;

    this.spacexService.getLaunchByFlightNumber(flightNumber).subscribe({
      next: (data) => {
        this.mission = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching mission details:', error);
        this.errorMessage = 'Failed to load mission details.';
        this.loading = false;
      }
    });
  }
}