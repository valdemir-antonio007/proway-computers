import { Component, Input, OnInit } from '@angular/core';
import { ICarrinho } from '../produto';
import { CarrinhoService } from '../carrinho.service';
import { NotificacaoService } from '../notificacao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  itensCarrinho: ICarrinho[] = []
  total = 0

  constructor(private carrinhoService: CarrinhoService,
    private notificacaoService: NotificacaoService,
    private router: Router){}

ngOnInit(): void {
     this.itensCarrinho = this.carrinhoService.obtemCarrinho()
     this.calcTotal()
}

calcTotal(){
  this.total = 0
  this.itensCarrinho.map((p, i)=>{
      this.total += (p.quantidade * p.preco)
  })

}

removeItem(produto: ICarrinho){
    this.carrinhoService.removeItem(produto);
    this.notificacaoService.showMessage("Item removido do carrinho")
    location.reload()
}

}
