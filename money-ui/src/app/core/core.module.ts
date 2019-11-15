import { MoneyHttp } from './../seguranca/mony-http';
import { AuthService } from './../seguranca/auth.service';
import { PessoaService } from './../pessoas/pessoa.service';
import { LancamentoService } from './../lancamentos/lancamento.service';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ErrorHandlerService } from './error-handler.service';
import { NavbarComponent } from './navbar/navbar.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';

import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastyModule } from 'ng2-toasty';
import { JwtHelperService } from '@auth0/angular-jwt';

import { RouterModule } from '@angular/router';
import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';

import localePt from '@angular/common/locales/pt';
import { Title } from '@angular/platform-browser';
import { NaoAutorizadoComponent } from './nao-autorizado.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    NavbarComponent,
    PaginaNaoEncontradaComponent,
    NaoAutorizadoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ToastyModule.forRoot(),
    ConfirmDialogModule,
  ],
  exports: [
    NavbarComponent,
    ToastyModule,
    ConfirmDialogModule,
    RouterModule
  ],
  providers: [
    ErrorHandlerService,
    LancamentoService,
    PessoaService,
    ConfirmationService,
    Title,
    AuthService,
    MessageService,
    JwtHelperService,
    MoneyHttp,
    { provide: LOCALE_ID, useValue: 'pt' }
  ]
})
export class CoreModule { }
