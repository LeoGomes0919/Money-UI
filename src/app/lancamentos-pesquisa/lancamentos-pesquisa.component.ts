import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent {

  lancamentos = [
    {
      tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: new Date(2019, 6, 30),
      dataPagamento: null, valor: 4.55, pessoa: 'Padaria do José'
    },
    {
      tipo: 'RECEITA', descricao: 'Venda de Software', dataVencimento: new Date(2019, 6, 10),
      dataPagamento: new Date(2019, 5, 9), valor: 80000, pessoa: 'Atacado Brasil'
    },
    {
      tipo: 'DESPESA', descricao: 'Impostos', dataVencimento: new Date(2019, 6, 20),
      dataPagamento: null, valor: 14312, pessoa: 'Ministério da Fazenda'
    },
    {
      tipo: 'DESPESA', descricao: 'Mensalidade de escola', dataVencimento: new Date(2019, 10, 5),
      dataPagamento: new Date(2019, 9, 30), valor: 800, pessoa: 'Escola Abelha Rainha'
    },
    {
      tipo: 'RECEITA', descricao: 'Venda de Carro', dataVencimento: new Date(2019, 6, 18),
      dataPagamento: null, valor: 55000, pessoa: 'Sebastião Souza'
    },
    {
      tipo: 'DESPESA', descricao: 'Aluguel', dataVencimento: new Date(2019, 9, 22),
      dataPagamento: new Date(2019, 9, 8), valor: 400, pessoa: 'Sr. Roberto'
    },
    {
      tipo: 'DESPESA', descricao: 'Mensalidade academia', dataVencimento: new Date(2019, 6, 13),
      dataPagamento: null, valor: 180, pessoa: 'Profit Academia'
    }
  ];
}
