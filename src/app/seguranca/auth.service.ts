import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpHeaders } from '@angular/common/Http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  oauthTokenUrl = 'http://localhost:8080/oauth/token';
  jwtPayload: any;

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService
  ) {
    this.carregarToken();
  }

  login(usuario: string, senha: string): Promise<void> {
    const headerSettings: { [name: string]: string | string[]; } = {};

    // tslint:disable-next-line: no-string-literal
    headerSettings['Authorization'] = 'Basic YW5ndWxhcjpAbmd1bEByMA==';
    headerSettings['Content-Type'] = 'application/x-www-form-urlencoded';

    const body = `username=${usuario}&password=${senha}&grant_type=password`;

    const newHeraderAut = new HttpHeaders(headerSettings);
    return this.http.post<any>(this.oauthTokenUrl, body, { headers: newHeraderAut })
      .toPromise()
      .then(response => {
        console.log(response);
        this.armazenarToken(response.access_token);
      })
      .catch(response => {
        console.log(response);
      });
  }

  private armazenarToken(token: string) {
    this.jwtPayload = this.jwtHelper.decodeToken(token);
    localStorage.setItem('token', token);
  }

  private carregarToken() {
    const token = localStorage.getItem('token');

    if (token) {
      this.armazenarToken(token);
    }
  }
}
