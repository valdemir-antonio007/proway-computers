import { Component, Input, OnInit } from '@angular/core';
import { IProduto } from '../produto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos: IProduto[] = []

  constructor(private produtoService: ProdutoService){}

  ngOnInit(): void {
      this.produtos = this.produtoService.getAll()
  }

}
