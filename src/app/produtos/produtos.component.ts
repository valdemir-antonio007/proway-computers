import { Component, Input, OnInit } from '@angular/core';
import { IProduto } from '../produto';
import { ProdutoService } from '../produto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos: IProduto[] = []

  constructor(private produtoService: ProdutoService, private route: ActivatedRoute){}

  ngOnInit(): void {
      this.produtos = this.produtoService.getAll()

      const produtos = this.produtoService.getAll()
      this.route.queryParamMap.subscribe(params =>{
          const descricao = params.get("descricao")?.toLowerCase()

          if(descricao){
             this.produtos = produtos.filter(produto => produto.descricao.toLowerCase().includes(descricao))
             return;
          }
          this.produtos = produtos;
      })

  }

}
