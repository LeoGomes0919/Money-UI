import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/Http';
import { Injectable } from '@angular/core';

import * as moment from 'moment';

export class LancamentoFiltro {
  descricao: string;
  dataVencimentoInicio: Date;
  dataVencimentoFim: Date;
  pagina = 0;
  itensPorPagina = 5;
}

@Injectable({
  providedIn: 'root'
})

export class LancamentoService {

  lancamentosUrl = 'http://localhost:8080/lancamentos';
  private token: string;

  constructor(private http: HttpClient) {
    this.setAccessToken();
  }

  setAccessToken() {
    // tslint:disable-next-line: max-line-length
    this.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sIm5vbWUiOiJBZG1pbmlzdHJhZG9yIiwiZXhwIjoxNTcyNDE4MDU5LCJhdXRob3JpdGllcyI6WyJST0xFX0NBREFTVFJBUl9DQVRFR09SSUEiLCJST0xFX1BFU1FVSVNBUl9QRVNTT0EiLCJST0xFX1JFTU9WRVJfUEVTU09BIiwiUk9MRV9DQURBU1RSQVJfTEFOQ0FNRU5UTyIsIlJPTEVfUEVTUVVJU0FSX0xBTkNBTUVOVE8iLCJST0xFX1JFTU9WRVJfTEFOQ0FNRU5UTyIsIlJPTEVfQ0FEQVNUUkFSX1BFU1NPQSIsIlJPTEVfUEVTUVVJU0FSX0NBVEVHT1JJQSJdLCJqdGkiOiIxNTY0ZmZjNi1lNmJhLTQzNjYtOWQzOS05MzNjMjhjMTU4NGYiLCJjbGllbnRfaWQiOiJhbmd1bGFyIn0.1Yz9zceCMXr-QAM6Pnp8x4Jg-2T5ksENzopk6sHq9dY';
  }

  pesquisar(filtro: LancamentoFiltro): Promise<any> {
    const headerSettings: { [name: string]: string | string[]; } = {};
    let params = new HttpParams();

    // tslint:disable-next-line: no-string-literal
    headerSettings['Authorization'] = 'Bearer ' + this.token;
    headerSettings['Content-Type'] = 'application/json';

    params = params.append('page', filtro.pagina.toString());
    params = params.append('size', filtro.itensPorPagina.toString());

    if (filtro.descricao) {
      params = params.append('descricao', filtro.descricao);
    }

    if (filtro.dataVencimentoInicio) {
      params = params.append('dataVencimentoDe', moment(filtro.dataVencimentoInicio).format('YYYY-MM-DD'));
    }

    if (filtro.dataVencimentoFim) {
      params = params.append('dataVencimentoAte', moment(filtro.dataVencimentoFim).format('YYYY-MM-DD'));
    }

    const newHeraderAut = new HttpHeaders(headerSettings);
    return this.http.get<any>(`${this.lancamentosUrl}/?resumo`, { headers: newHeraderAut, params })
      .toPromise()
      .then(response => {
        const lancamentos = response.content;

        const resultado = {
          lancamentos,
          total: response.totalElements
        };

        return resultado;
      });
  }

  excluir(codigo: number): Promise<void> {
    const headerSettings: { [name: string]: string | string[]; } = {};

    // tslint:disable-next-line: no-string-literal
    headerSettings['Authorization'] = 'Bearer ' + this.token;
    headerSettings['Content-Type'] = 'application/json';

    const newHeraderAut = new HttpHeaders(headerSettings);
    return this.http.delete(`${this.lancamentosUrl}/${codigo}`, { headers: newHeraderAut })
      .toPromise()
      .then(() => null);
  }
}
