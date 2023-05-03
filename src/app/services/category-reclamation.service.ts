import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CategoryReclamation} from "../models/CategoryReclamation";


@Injectable({
  providedIn: 'root'
})
export class CategoryReclamationService {

  readonly baseUrl = "http://localhost:9090/categoryReclamation"

  constructor(private http: HttpClient) {
  }

  getCategories(): Observable<CategoryReclamation[]> {
    return this.http.get<CategoryReclamation[]>(`${this.baseUrl}`)
  }

  addCategory(category: CategoryReclamation): Observable<CategoryReclamation> {
    return this.http.post<CategoryReclamation>(this.baseUrl, category)
  }

  updateCategory(category: CategoryReclamation): Observable<CategoryReclamation> {
    return this.http.put<CategoryReclamation>(this.baseUrl, category)

  }

  deleteCategory(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`)
  }
}
