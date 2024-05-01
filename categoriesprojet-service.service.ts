import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoriesprojet } from '../GDCCentities/categoriesprojet';

@Injectable({
  providedIn: 'root',
})
export class CategoriesprojetService {
  private apiUrl = '/services/pfegdcc/api/categoriesprojets';

  constructor(private http: HttpClient) {}

  createCategoriesprojet(categoriesprojet: Categoriesprojet): Observable<Categoriesprojet> {
    return this.http.post<Categoriesprojet>(this.apiUrl, categoriesprojet);
  }

  updateCategoriesprojet(id: number, categoriesprojet: Categoriesprojet): Observable<Categoriesprojet> {
    return this.http.put<Categoriesprojet>(`${this.apiUrl}/${id}`, categoriesprojet);
  }

  getAllCategoriesprojets(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }

  getCategoriesprojet(id: number): Observable<Categoriesprojet> {
    return this.http.get<Categoriesprojet>(`${this.apiUrl}/${id}`);
  }

  deleteCategoriesprojet(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
