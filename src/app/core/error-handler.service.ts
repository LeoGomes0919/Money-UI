import { ToastyService } from 'ng2-toasty';
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/Http';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(private toasty: ToastyService) { }

  handle(errorResponse: HttpErrorResponse) {
    let msg: string;

    if (typeof errorResponse === 'string') {
      msg = errorResponse;

    } else if (errorResponse.status >= 400 && errorResponse.status <= 499) {
      let error;
      msg = 'Ocorreu um erro ao processar a sua solicitação';

      try {
        error = errorResponse.error;
        msg = error[0].mensagemUsuario;
      } catch (e) { }
      console.error('Ocorreu um erro', errorResponse);

    } else {
      msg = 'Erro ao processar serviço remoto. Tente novamente.';
      console.error('Ocorreu um erro', errorResponse);
    }

    this.toasty.error(msg);
  }
}
