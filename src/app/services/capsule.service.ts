import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Capsule } from '../components/capsules/model/Capsule';

@Injectable({
  providedIn: 'root'
})
export class CapsuleService {
  capsuleUrl = 'https://api.spacexdata.com/v3/capsules';

  constructor(private http: HttpClient) { }
  
  getCapsuleByNum(capsule_serial : string): Observable<Capsule>{
    return this.http.get<Capsule>(this.capsuleUrl+'/'+capsule_serial);
  }

  getAllCapsules():Observable<Capsule[]>{
    return this.http.get<Capsule[]>(this.capsuleUrl);
  }

  getUpcomingCapsules():Observable<Capsule[]>{
    return this.http.get<Capsule[]>(this.capsuleUrl+'/upcoming');
  }

  getPastCapsules():Observable<Capsule[]>{
    return this.http.get<Capsule[]>(this.capsuleUrl+'/past');
  }
  
  getCapsuleByMission(mission_id : string):Observable<Capsule[]>{
    let queryParams = new HttpParams();
    queryParams = queryParams.append("mission",mission_id);
    return this.http.get<Capsule[]>(this.capsuleUrl,{params:queryParams});
  }
  
}
