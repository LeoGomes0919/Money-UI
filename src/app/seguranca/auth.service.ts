import { HttpClient, HttpHeaders } from '@angular/common/Http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  oauthTokenUrl = 'http://localhost:8080/oauth/token';

  constructor(private http: HttpClient) { }

  login(usuario: string, senha: string): Promise<void> {
    const headerSettings: { [name: string]: string | string[]; } = {};

    // tslint:disable-next-line: no-string-literal
    headerSettings['Authorization'] = 'Basic YW5ndWxhcjpAbmd1bEByMA==';
    headerSettings['Content-Type'] = 'application/x-www-form-urlencoded';

    const body = `username=${usuario}&password=${senha}&grant_type=password`;

    const newHeraderAut = new HttpHeaders(headerSettings);
    return this.http.post(this.oauthTokenUrl, body, { headers: newHeraderAut })
      .toPromise()
      .then(response => {
        console.log(response);
      })
      .catch(response => {
        console.log(response);
      });
  }
}
