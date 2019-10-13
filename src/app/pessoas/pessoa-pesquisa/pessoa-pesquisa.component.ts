import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa-pesquisa',
  templateUrl: './pessoa-pesquisa.component.html',
  styleUrls: ['./pessoa-pesquisa.component.css']
})
export class PessoaPesquisaComponent {

  pessoas = [
    { nome: 'Leonardo Gomes', cidade: 'Araguaína', estado: 'TO', ativo: true },
    { nome: 'Stefany Mamede', cidade: 'Araguaína', estado: 'TO', ativo: false },
    { nome: 'Elza Gomes', cidade: 'Goiânia', estado: 'GO', ativo: true },
    { nome: 'Ecy Carvalho', cidade: 'Goiânia', estado: 'GO', ativo: false },
    { nome: 'Willian Gomes', cidade: 'Goiânia', estado: 'GO', ativo: true },
    { nome: 'Emerson Mamede', cidade: 'Araguaína', estado: 'TO', ativo: false },
    { nome: 'Larissa Mamede', cidade: 'Araguaína', estado: 'TO', ativo: true },
    { nome: 'Andressa Gomes', cidade: 'Goiânia', estado: 'GO', ativo: false },
    { nome: 'Rosa Mamede', cidade: 'Araguaína', estado: 'TO', ativo: true },
    { nome: 'Isaias Araujo', cidade: 'Araguaína', estado: 'TO', ativo: false }
  ];
}
