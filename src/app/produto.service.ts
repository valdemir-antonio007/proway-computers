import { Injectable } from '@angular/core';
import { IProduto, produtos } from './produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  produtos: IProduto[] = produtos;

  constructor() { }

getAll(){
  return this.produtos;
}

getOne(id: number){
    return this.produtos.find(produto => produto.id == id)
}

}
