import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/Http';
import { NotAuthenticatedError } from '../seguranca/mony-http';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(
    private messageService: MessageService,
    private router: Router) { }

  handle(errorResponse: HttpErrorResponse) {
    let msg: string;

    if (typeof errorResponse === 'string') {
      msg = errorResponse;

    } else if (errorResponse instanceof NotAuthenticatedError) {
      msg = 'Sua sessão expirou!';
      this.router.navigate(['/login']);

    } else if (errorResponse.status >= 400 && errorResponse.status <= 499) {
      let error;
      msg = 'Ocorreu um erro ao processar a sua solicitação';

      if (errorResponse.status === 403) {
        msg = 'Você não term permissão para executar esta ação';
      }

      try {
        error = errorResponse.error;
        msg = error[0].mensagemUsuario;
      } catch (e) { }
      console.error('Ocorreu um erro', errorResponse);

    } else {
      msg = 'Erro ao processar serviço remoto. Tente novamente.';
      console.error('Ocorreu um erro', errorResponse);
    }

    this.messageService.add({ severity: 'error', summary: 'Erro', detail: msg });
  }
}
