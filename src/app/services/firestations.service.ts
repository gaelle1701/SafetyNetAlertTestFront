import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FirestationsService {

  constructor(private http: HttpClient) {}

  getAllAddresses(){
    return this.http.get<any>(`${environment.baseUrl}firestations`)
  }

  getAddressByStation(station: string): Observable<any> {
    return this.http.get(`${environment.baseUrl}firestations?station=${station}`)
  }

}
