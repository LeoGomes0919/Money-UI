import { HttpClient, HttpHeaders } from '@angular/common/Http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  categoriasUrl = 'http://localhost:8080/categorias';
  private token: string;

  constructor(private http: HttpClient) {
    this.setAccessToken();
  }

  setAccessToken() {
    // tslint:disable-next-line: max-line-length
    this.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sIm5vbWUiOiJBZG1pbmlzdHJhZG9yIiwiZXhwIjoxNTcyNjkxMzI2LCJhdXRob3JpdGllcyI6WyJST0xFX0NBREFTVFJBUl9DQVRFR09SSUEiLCJST0xFX1BFU1FVSVNBUl9QRVNTT0EiLCJST0xFX1JFTU9WRVJfUEVTU09BIiwiUk9MRV9DQURBU1RSQVJfTEFOQ0FNRU5UTyIsIlJPTEVfUEVTUVVJU0FSX0xBTkNBTUVOVE8iLCJST0xFX1JFTU9WRVJfTEFOQ0FNRU5UTyIsIlJPTEVfQ0FEQVNUUkFSX1BFU1NPQSIsIlJPTEVfUEVTUVVJU0FSX0NBVEVHT1JJQSJdLCJqdGkiOiIzNThhZDBlYS1kMTNjLTQ4Y2MtOWQzMy1mYTg1ZDgzMWE2MDQiLCJjbGllbnRfaWQiOiJhbmd1bGFyIn0.9DZOw2lKxfg5jFum09pVr7ebvyZCrmcYCEUgeXcpv5U';
  }

  listarTodas(): Promise<any> {
    const headerSettings: { [name: string]: string | string[]; } = {};

    // tslint:disable-next-line: no-string-literal
    headerSettings['Authorization'] = 'Bearer ' + this.token;

    const newHeraderAut = new HttpHeaders(headerSettings);
    return this.http.get<any>(this.categoriasUrl, { headers: newHeraderAut })
      .toPromise()
      .then(response => response);
  }
}
