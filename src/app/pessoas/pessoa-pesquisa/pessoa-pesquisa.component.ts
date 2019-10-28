import { ErrorHandlerService } from './../../core/error-handler.service';
import { ConfirmationService } from 'primeng/api';
import { ToastyService } from 'ng2-toasty';

import { PessoaService, PessoaFilter } from './../pessoa.service';

import { Component, OnInit, ViewChild } from '@angular/core';
import { LazyLoadEvent } from 'primeng/components/common/api';

@Component({
  selector: 'app-pessoa-pesquisa',
  templateUrl: './pessoa-pesquisa.component.html',
  styleUrls: ['./pessoa-pesquisa.component.css']
})
export class PessoaPesquisaComponent implements OnInit {

  totalRegistro = 0;
  filtro = new PessoaFilter();
  pessoas = [];
  @ViewChild('tabela', { static: false }) grid;

  constructor(
    private pessoaService: PessoaService,
    private toastyService: ToastyService,
    private confirmatio: ConfirmationService,
    private errorHandler: ErrorHandlerService) { }

  ngOnInit() { }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;
    this.pessoaService.pesquisar(this.filtro)
      .then(resultado => {
        this.totalRegistro = resultado.total;
        this.pessoas = resultado.pessoas;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  excluir(pessoa: any) {
    this.pessoaService.excluir(pessoa.codigo)
      .then(() => {
        this.grid.first = 0;
        this.pesquisar();
        this.toastyService.success('Registro excluido com sucesso!');
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  confirmarExclusao(pessoa: any) {
    this.confirmatio.confirm({
      message: 'Deseja excluir esse registro?',
      accept: () => {
        this.excluir(pessoa);
      }
    });
  }
}
