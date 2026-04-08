import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SpaceXLaunch } from '../models/spacex-launch.model';

@Injectable({
  providedIn: 'root'
})
export class SpacexApiService {
  private http = inject(HttpClient);

  private readonly baseUrl = 'https://api.spacexdata.com/v3/launches';

  getAllLaunches(): Observable<SpaceXLaunch[]> {
    return this.http.get<SpaceXLaunch[]>(this.baseUrl);
  }

  getLaunchesByYear(year: string): Observable<SpaceXLaunch[]> {
    return this.http.get<SpaceXLaunch[]>(`${this.baseUrl}?launch_year=${year}`);
  }

  getLaunchByFlightNumber(flightNumber: number): Observable<SpaceXLaunch> {
    return this.http.get<SpaceXLaunch>(`${this.baseUrl}/${flightNumber}`);
  }
}