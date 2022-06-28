import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { catchError, Observable, of, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IFirestations } from 'src/app/models/ifirestations';


@Injectable({
  providedIn: 'root'
})
export class FirestationsService {

  fireStationSubject$ = new Subject<IFirestations[]>();
  constructor(private http: HttpClient) {}

  getAllAddresses(){
    return this.http.get<IFirestations>(`${environment.baseUrl}firestations`)
  }

  getAddressByStation(station: string): Observable<any> {
    return this.http.get(`${environment.baseUrl}firestations?station=${station}`)
  }

  createFireStation(FireStations: IFirestations) {
    return this.http.post<IFirestations>(`${`${environment.baseUrl}`}create/FireStation`, FireStations).pipe(catchError(error => of([])))
  }

  updateFireStation(FireStations: IFirestations, FireStationId: number) {
    return this.http.put<IFirestations>(`${`${environment.baseUrl}`}update/${FireStationId}`, FireStations).pipe(catchError(error => of([])))
  }

}
