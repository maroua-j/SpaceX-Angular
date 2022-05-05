import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpaceTentaculeService {
  launchesUrl = 'https://api.spacexdata.com/v3/launches';

  constructor( private http: HttpClient ) { }
  
  getLauncherByNum(flight_number : number) : Observable<any> {
    return this.http.get<any>(this.launchesUrl+'/'+flight_number);
  }
}
export class Launches{
  flight_number: number
} 
  