import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of, Subject } from 'rxjs';
import { IPersons } from 'src/app/core/interfaces/ipersons';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  public personSubject$ = new Subject<IPersons[]>();
  private baseUrl = environment.baseUrl;
  
  constructor(private http: HttpClient) { }

  getPersons(): void {
    this.http.get<IPersons[]>(`${`${this.baseUrl}`}person`).subscribe(resp => {
      this.personSubject$.next(resp)
    })
  }

  createPerson(persons: IPersons) {
    return this.http.post<IPersons>(`${`${this.baseUrl}`}create/person`, persons).pipe(catchError(error => of([])))
  }

  updatePerson(persons: IPersons, personId: number) {
    return this.http.put<IPersons>(`${`${this.baseUrl}`}update/${personId}`, persons).pipe(catchError(error => of([])))
  }

  // deletePerson(persons: IPersons, personId: number): Observable<IPersons> {
  //   return this.http.delete<IPersons>(`${this.baseUrl}/delete/${personId}`)
  // }
}

