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
    this.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sIm5vbWUiOiJBZG1pbmlzdHJhZG9yIiwiZXhwIjoxNTcyNTA4NzYxLCJhdXRob3JpdGllcyI6WyJST0xFX0NBREFTVFJBUl9DQVRFR09SSUEiLCJST0xFX1BFU1FVSVNBUl9QRVNTT0EiLCJST0xFX1JFTU9WRVJfUEVTU09BIiwiUk9MRV9DQURBU1RSQVJfTEFOQ0FNRU5UTyIsIlJPTEVfUEVTUVVJU0FSX0xBTkNBTUVOVE8iLCJST0xFX1JFTU9WRVJfTEFOQ0FNRU5UTyIsIlJPTEVfQ0FEQVNUUkFSX1BFU1NPQSIsIlJPTEVfUEVTUVVJU0FSX0NBVEVHT1JJQSJdLCJqdGkiOiI1ZjA1MDBkOS0wYjVmLTRiZmQtOTQ4NS0xMmVhODhmODQ3YWUiLCJjbGllbnRfaWQiOiJhbmd1bGFyIn0.6SGIirfE3fCZjQQ2iUyJXBNd7PO41Bl3AeMEZzwespg';
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
