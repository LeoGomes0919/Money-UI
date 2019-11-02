import { FormBuilder, FormControl } from '@angular/forms';
import { ToastyService } from 'ng2-toasty';
import { ErrorHandlerService } from './../../core/error-handler.service';
import { PessoaService } from './../pessoa.service';
import { Component, OnInit } from '@angular/core';
import { Pessoa } from './../../core/model';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css']
})
export class PessoaCadastroComponent implements OnInit {

  pessoa = new Pessoa();

  constructor(
    private pessoaService: PessoaService,
    private errorHandle: ErrorHandlerService,
    private toastyService: ToastyService,
    private formBuilder: FormBuilder,
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Nova pessoa');
  }

  salvar(form: FormControl) {
    this.adicionarPessoa(form);
  }

  adicionarPessoa(form: FormControl) {
    this.pessoaService.adicionarPessoa(this.pessoa)
      .then(pessoaAdicionada => {
        this.toastyService.success('Registro salvo com sucesso!');
        form.reset();
      })
      .catch(erro => this.errorHandle.handle(erro));
  }
}
