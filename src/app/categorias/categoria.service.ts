import { environment } from './../../environments/environment';
import { MoneyHttp } from './../seguranca/mony-http';
import { HttpClient, HttpHeaders } from '@angular/common/Http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  categoriasUrl: string;

  constructor(private http: MoneyHttp) {
    this.categoriasUrl = `${environment.apiUrl}/categorias`;
  }

  listarTodas(): Promise<any> {
    return this.http.get<any>(this.categoriasUrl)
      .toPromise()
      .then(response => response);
  }
}
