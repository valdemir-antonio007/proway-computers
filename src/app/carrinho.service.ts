import { Injectable } from '@angular/core';
import { ICarrinho } from './produto';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  itensCarrinho: ICarrinho[] = []

  constructor() { }


  obtemCarrinho(){
      this.itensCarrinho = JSON.parse(localStorage.getItem("carrinho") || "[]")
      return this.itensCarrinho
  }

  limpaCarrinho(){
    this.itensCarrinho = []
    localStorage.clear()
  }

  addCart(produto: ICarrinho){
    this.itensCarrinho = this.obtemCarrinho()
       let indice = -1

       this.itensCarrinho.map((p,i)=>{
           if(p.id == produto.id ){
                  indice = i
           }
       })

       if(indice==-1){
           this.itensCarrinho.push(produto)
       }else {
           this.itensCarrinho[indice].quantidade += produto.quantidade
       }
       localStorage.setItem("carrinho", JSON.stringify(this.itensCarrinho))
  }

  removeItem(produto: ICarrinho){
        let indice = -1
        this.itensCarrinho = this.obtemCarrinho()

        this.itensCarrinho.map((p,i)=>{
          if(p.id == produto.id){
             indice = i;
          }
        })
        this.itensCarrinho.splice(indice, 1)
        localStorage.setItem("carrinho", JSON.stringify(this.itensCarrinho))
  }



}
