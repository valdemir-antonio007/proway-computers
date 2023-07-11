import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarrinhoService } from 'src/app/carrinho.service';
import { NotificacaoService } from 'src/app/notificacao.service';
import { ICarrinho, IProduto } from 'src/app/produto';
import { ProdutoService } from 'src/app/produto.service';


@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit {

  produto: IProduto | undefined;
  quantidade = 1;

constructor(private route: ActivatedRoute, private produtoService: ProdutoService,
  private carrinhoService: CarrinhoService, private router: Router,
  private notificacaoService: NotificacaoService){}

  ngOnInit(): void {
      const id = Number(this.route.snapshot.paramMap.get("id"))
      this.produto = this.produtoService.getOne(id);
  }

  addCart(){
       const produto: ICarrinho = {
            ...this.produto!,
            quantidade: this.quantidade
       }
       this.carrinhoService.addCart(produto);
       this.router.navigate(["produtos"])
       this.notificacaoService.showMessage("Item adicionado ao carrinho!")
  }

}
