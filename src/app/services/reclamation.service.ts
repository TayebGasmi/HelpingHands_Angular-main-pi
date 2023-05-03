import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Reclamation} from "../models/Reclamation";


@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
  readonly baseUrl = "http://localhost:9090/reclamation"


  constructor(private http: HttpClient) {
  }

  getReclamations(): Observable<Reclamation[]> {
    return this.http.get<Reclamation[]>(`${this.baseUrl}`)
  }

  addReclamation(reclamation: FormData): Observable<Reclamation> {
    return this.http.post<Reclamation>(`${this.baseUrl}/1`, reclamation)
  }

  updateReclamation(reclamation: FormData): Observable<Reclamation> {
    return this.http.put<Reclamation>(this.baseUrl, reclamation,)

  }

  deleteReclamation(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`)
  }
  acceptReclamation(id: number): Observable<Reclamation> {
    return this.http.put<Reclamation>(`${this.baseUrl}/accept/${id}`,null)
  }
  rejectReclamation(id: number): Observable<Reclamation> {
    return this.http.put<Reclamation>(`${this.baseUrl}/reject/${id}`,null)
  }

  assignReclamationToCategory(id: number, id2: number): Observable<Reclamation> {
     return this.http.put<Reclamation>(`${this.baseUrl}/assign/${id}/${id2}`, null)
  }

}
