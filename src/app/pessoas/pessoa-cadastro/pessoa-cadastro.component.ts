import { FormControl } from '@angular/forms';
import { ToastyService } from 'ng2-toasty';
import { ErrorHandlerService } from './../../core/error-handler.service';
import { PessoaService } from './../pessoa.service';
import { Component, OnInit } from '@angular/core';
import { Pessoa } from './../../core/model';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css']
})
export class PessoaCadastroComponent implements OnInit {

  pessoa = new Pessoa();

  status = [
    { label: 'Ativo', value: true, icon: 'fa fa-unlock' },
    { label: 'Inativo', value: false, icon: 'fa fa-lock' }
  ];

  constructor(
    private pessoaService: PessoaService,
    private errorHandle: ErrorHandlerService,
    private toastyService: ToastyService,
    private title: Title,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const codigoPessoa = this.route.snapshot.params['codigo'];

    this.title.setTitle('Nova pessoa');

    if (codigoPessoa) {
      this.carregarPessoa(codigoPessoa);
    }
  }

  salvar(form: FormControl) {
    if (this.editando) {
      this.atualizarPessoa();
    } else {
      this.adicionarPessoa(form);
    }
  }

  adicionarPessoa(form: FormControl) {
    this.pessoaService.adicionarPessoa(this.pessoa)
      .then(pessoaAdicionada => {
        this.toastyService.success('Registro salvo com sucesso!');

        this.router.navigate(['/pessoas', pessoaAdicionada.codigo, 'edit']);
        this.atualizarTituloEdicao();
      })
      .catch(erro => this.errorHandle.handle(erro));
  }

  get editando() {
    return Boolean(this.pessoa.codigo);
  }

  carregarPessoa(codigo: number) {
    this.pessoaService.bucarPorCodigo(codigo)
      .then(pessoa => {
        this.pessoa = pessoa;
        this.atualizarTituloEdicao();
      })
      .catch(erro => this.errorHandle.handle(erro));
  }

  atualizarTituloEdicao() {
    this.title.setTitle(`Edição de pessoa: ${this.pessoa.nome}`)
  }

  atualizarPessoa() {
    this.pessoaService.atualizar(this.pessoa)
      .then(pessoaAtualizada => {
        this.pessoa = pessoaAtualizada;

        this.toastyService.success('Registro atualizado com sucesso!');
        this.atualizarTituloEdicao();
      })
      .catch(erro => this.errorHandle.handle(erro));
  }

  novo(form: FormControl) {
    form.reset();

    setTimeout(function () {
      this.pessoa = new Pessoa();
    }.bind(this), 1);
    this.router.navigate(['/pessoas/novo']);
  }
}
