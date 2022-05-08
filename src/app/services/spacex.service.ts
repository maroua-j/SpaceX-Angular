import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Launch } from '../components/launches/class/Launch';

@Injectable({
  providedIn: "root"
})
export class SpacexService {
  launchUrl = 'https://api.spacexdata.com/v3/launches';
  upcomingUrl = 'https://api.spacexdata.com/v3/launches/upcoming';

  constructor( private http: HttpClient ) { }
  
  getLaunchByNum(flight_number : number) : Observable <any> {
    return this.http.get<any>(this.launchUrl+'/'+flight_number);
  }

  getAllLaunches() : Observable <any> {
    return this.http.get<any>(this.launchUrl);
  }

  getUpcomingLaunch(): Observable <any> {
    return this.http.get<any>(this.upcomingUrl);
  }
}

  