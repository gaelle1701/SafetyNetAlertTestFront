import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { catchError, Observable, of, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IFirestations } from 'src/app/core/interfaces/ifirestations';


@Injectable({
  providedIn: 'root'
})
export class FirestationsService {

  public fireStationSubject$ = new Subject<IFirestations[]>();
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getAllAddresses(){
    return this.http.get<IFirestations>(`${this.baseUrl}firestations`)
  }

  getAddressByStation(station: string): Observable<any> {
    return this.http.get(`${this.baseUrl}firestations?station=${station}`)
  }

  createFireStation(FireStations: IFirestations) {
    return this.http.post<IFirestations>(`${`${this.baseUrl}`}create/FireStation`, FireStations).pipe(catchError(error => of([])))
  }

  updateFireStation(FireStations: IFirestations, FireStationId: number) {
    return this.http.put<IFirestations>(`${`${this.baseUrl}`}update/${FireStationId}`, FireStations).pipe(catchError(error => of([])))
  }

}
