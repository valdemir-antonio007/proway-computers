"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[582],{5713:(T,h,e)=>{e.r(h),e.d(h,{CarrinhoModule:()=>M});var d=e(6895),s=e(3321),o=e(4650),p=e(5087),u=e(269),c=e(4006);function g(n,r){if(1&n){const t=o.EpF();o.TgZ(0,"div",6),o._UZ(1,"img",7),o.TgZ(2,"div",8),o._uU(3),o.qZA(),o.TgZ(4,"div",9),o._uU(5),o.ALo(6,"currency"),o.qZA(),o.TgZ(7,"label",10),o._uU(8," Quantidade: "),o.TgZ(9,"input",11),o.NdJ("change",function(){o.CHM(t);const i=o.oxw(2);return o.KtG(i.calcTotal())})("ngModelChange",function(i){const l=o.CHM(t).$implicit;return o.KtG(l.quantidade=i)}),o.qZA()(),o.TgZ(10,"button",12),o.NdJ("click",function(){const m=o.CHM(t).$implicit,l=o.oxw(2);return o.KtG(l.removeItem(m))}),o._UZ(11,"i",13),o.qZA()()}if(2&n){const t=r.$implicit;o.xp6(1),o.Q6J("src",t.imagem,o.LSH),o.xp6(2),o.hij(" ",t.descricao," "),o.xp6(2),o.hij(" ",o.xi3(6,4,t.preco,"BRL")," "),o.xp6(4),o.Q6J("ngModel",t.quantidade)}}function C(n,r){if(1&n&&(o.TgZ(0,"div",14)(1,"div",15),o._uU(2),o.ALo(3,"currency"),o.qZA(),o.TgZ(4,"div",16)(5,"button"),o._uU(6,"Comprar"),o.qZA()()()),2&n){const t=o.oxw(2);o.xp6(2),o.hij(" ",o.xi3(3,1,t.total,"BRL")," ")}}function f(n,r){if(1&n&&(o.TgZ(0,"div",2)(1,"div",3),o._uU(2,"Carrinho:"),o.qZA(),o.YNc(3,g,12,7,"div",4),o.YNc(4,C,7,4,"div",5),o.qZA()),2&n){const t=o.oxw();o.xp6(3),o.Q6J("ngForOf",t.itensCarrinho),o.xp6(1),o.Q6J("ngIf",t.total>0)}}function v(n,r){1&n&&(o.TgZ(0,"h2",17),o._uU(1,"Nenhum item adicionado ao carrinho!"),o.qZA())}const x=[{path:"",component:(()=>{class n{constructor(t,a,i){this.carrinhoService=t,this.notificacaoService=a,this.router=i,this.itensCarrinho=[],this.total=0}ngOnInit(){this.itensCarrinho=this.carrinhoService.obtemCarrinho(),this.calcTotal()}calcTotal(){this.total=0,this.itensCarrinho.map((t,a)=>{this.total+=t.quantidade*t.preco})}removeItem(t){this.carrinhoService.removeItem(t),this.notificacaoService.showMessage("Item removido do carrinho"),location.reload()}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(p.e),o.Y36(u.r),o.Y36(s.F0))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-carrinho"]],decls:3,vars:2,consts:[["class","container",4,"ngIf","ngIfElse"],["semProduto",""],[1,"container"],[1,"carrinho-title"],["class","carrinho-detalhes",4,"ngFor","ngForOf"],["class","carrinho-total",4,"ngIf"],[1,"carrinho-detalhes"],[3,"src"],[1,"produto-descricao"],[1,"produto-preco"],["for","",1,"produto-quantidade"],["type","number","name","","id","",3,"ngModel","change","ngModelChange"],[1,"removeItem",3,"click"],[1,"fa-solid","fa-xmark"],[1,"carrinho-total"],[1,"valor-total"],[1,"botao-comprar"],[1,"semProduto"]],template:function(t,a){if(1&t&&(o.YNc(0,f,5,2,"div",0),o.YNc(1,v,2,0,"ng-template",null,1,o.W1O)),2&t){const i=o.MAs(2);o.Q6J("ngIf",a.total>0)("ngIfElse",i)}},dependencies:[d.sg,d.O5,c.Fj,c.wV,c.JJ,c.On,d.H9],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column}img[_ngcontent-%COMP%]{width:100px}.carrinho-detalhes[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-bottom:10px;background-color:var(--cinza-medio);align-items:center;padding:15px}.produto-quantidade[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:40px}.removeItem[_ngcontent-%COMP%]{background-color:red;border:none;color:#fff;height:80px;width:40px;border-top-right-radius:15px;border-bottom-right-radius:15px;cursor:pointer}.carrinho-title[_ngcontent-%COMP%]{font-size:30px;color:var(--blue);margin-bottom:15px}.carrinho-total[_ngcontent-%COMP%]{background-color:var(--dark);height:100px;margin-bottom:20px;color:var(--orange);justify-content:center;align-items:center;display:flex;flex-direction:column}.carrinho-total[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:var(--orange);padding:10px 25px;border:none;color:#fff;font-size:20px;border-radius:8px;cursor:pointer}.semProduto[_ngcontent-%COMP%]{text-align:center;margin:50px;color:red;font-size:40px}"]}),n})()}];let _=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[s.Bz.forChild(x),s.Bz]}),n})(),M=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[d.ez,_,c.u5]}),n})()}}]);