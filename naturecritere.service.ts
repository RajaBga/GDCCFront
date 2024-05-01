import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Naturecritere } from '../GDCCentities/naturecritere';

@Injectable({
  providedIn: 'root',
})
export class NaturecritereService {
  private apiUrl = '/services/pfegdcc/api/naturecriteres';

  constructor(private http: HttpClient) {}

  createNaturecritere(naturecritere: Naturecritere): Observable<Naturecritere> {
    return this.http.post<Naturecritere>(this.apiUrl, naturecritere);
  }

  updateNaturecritere(id: number, naturecritere: Naturecritere): Observable<Naturecritere> {
    return this.http.put<Naturecritere>(`${this.apiUrl}/${id}`, naturecritere);
  }
  getAllNaturecriteres(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }

  getNaturecritere(id: number): Observable<Naturecritere> {
    return this.http.get<Naturecritere>(`${this.apiUrl}/${id}`);
  }

  deleteNaturecritere(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
