"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[759],{6759:(Z,u,i)=>{i.r(u),i.d(u,{ProdutosModule:()=>M});var d=i(6895),s=i(3321),o=i(4650);const l=[{id:1,descricao:"Mouse gamer",preco:439,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/mouse-3.jpg"},{id:2,descricao:"Monitor muito bom",preco:1200.5,descricaoPreco:"\xc0 vista no PIX",desconto:2e3,imagem:"./assets/monitor-1.jpg"},{id:3,descricao:"Teclado excelente",preco:749.99,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/teclado-1.jpg"},{id:4,descricao:"Fone para quem joga FPS",preco:599.99,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/fone-de-ouvido-2.jpg"},{id:5,descricao:"Fone de ouvido",preco:299.99,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/fone-de-ouvido-1.jpg"},{id:6,descricao:"Fone de ouvido bom",preco:399.99,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/fone-de-ouvido-3.jpg"},{id:7,descricao:"HD 1TB",preco:499.99,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/hd.jpg"},{id:8,descricao:"Combo de placa de v\xeddeos",preco:18449.99,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/placa-video.jpg"},{id:9,descricao:"Processador Ryzen",preco:1e3,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/processador.jpg"},{id:10,descricao:"Notebook bom",preco:2500,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/laptop-1.jpg"},{id:11,descricao:"Notebook excelente",preco:4500,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/laptop-2.jpg"},{id:12,descricao:"Mouse barato",preco:20,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/mouse-1.png"},{id:13,descricao:"Mouse \xf3timo",preco:200,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/mouse-2.jpg"},{id:14,descricao:"Mouse pequeno",preco:50,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/mouse-4.jpg"},{id:15,descricao:"Teclado bom",preco:159.99,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/teclado-2.jpg"}];let g=(()=>{class t{constructor(){this.produtos=l}getAll(){return this.produtos}getOne(e){return this.produtos.find(n=>n.id==e)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function m(t,r){if(1&t&&(o.TgZ(0,"div",3)(1,"a",4),o._UZ(2,"img",5),o.TgZ(3,"h2",6),o._uU(4),o.qZA(),o.TgZ(5,"h2",7),o._uU(6),o.ALo(7,"currency"),o.qZA(),o.TgZ(8,"p",8),o._uU(9),o.qZA(),o.TgZ(10,"button"),o._uU(11,"Comprar"),o.qZA()()()),2&t){const e=r.$implicit;o.xp6(1),o.s9C("routerLink",e.id),o.xp6(1),o.Q6J("src",e.imagem,o.LSH),o.xp6(2),o.hij(" ",e.descricao," "),o.xp6(2),o.hij(" ",o.xi3(7,5,e.preco,"BRL")," "),o.xp6(3),o.hij(" ",e.descricaoPreco," ")}}let P=(()=>{class t{constructor(e,n){this.produtoService=e,this.route=n,this.produtos=[]}ngOnInit(){this.produtos=this.produtoService.getAll();const e=this.produtoService.getAll();this.route.queryParamMap.subscribe(n=>{const c=n.get("descricao")?.toLowerCase();this.produtos=c?e.filter(p=>p.descricao.toLowerCase().includes(c)):e})}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(g),o.Y36(s.gz))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-produtos"]],decls:3,vars:1,consts:[[1,"container"],[1,"list-produtos"],["class","produto__card",4,"ngFor","ngForOf"],[1,"produto__card"],[1,"produto-link",3,"routerLink"],[3,"src"],[1,"produto-descricao"],[1,"produto-preco"],[1,"produto-descricao-preco"]],template:function(e,n){1&e&&(o.TgZ(0,"div",0)(1,"div",1),o.YNc(2,m,12,8,"div",2),o.qZA()()),2&e&&(o.xp6(2),o.Q6J("ngForOf",n.produtos))},dependencies:[d.sg,s.rH,d.H9],styles:[".container[_ngcontent-%COMP%]{display:flex;margin-top:50px;margin-bottom:50px;justify-content:space-evenly}.list-produtos[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;justify-content:space-evenly;align-items:center}.produto__card[_ngcontent-%COMP%]{border:2px solid gray;max-width:270px;height:450px;margin-bottom:30px;margin-right:20px;padding:10px;cursor:pointer}.produto-link[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.produto-link[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.produto-descricao[_ngcontent-%COMP%]{color:var(--blue)}.produto-preco[_ngcontent-%COMP%]{color:var(--orange);font-size:25px;font-weight:bolder}button[_ngcontent-%COMP%]{background-color:var(--blue);border:none;color:#fff;cursor:pointer;padding:10px 20px;font-size:18px}a[_ngcontent-%COMP%]{text-decoration:none}"]}),t})();var v=i(5087),h=i(269),a=i(4006);function f(t,r){if(1&t){const e=o.EpF();o.TgZ(0,"div",2)(1,"div",3),o._UZ(2,"img",4),o.qZA(),o.TgZ(3,"div",5)(4,"div",6),o._uU(5),o.qZA(),o.TgZ(6,"div",7),o._uU(7),o.ALo(8,"currency"),o.qZA(),o.TgZ(9,"div",8),o._uU(10),o.qZA(),o.TgZ(11,"p",9)(12,"input",10),o.NdJ("ngModelChange",function(c){o.CHM(e);const p=o.oxw();return o.KtG(p.quantidade=c)}),o.qZA(),o._uU(13,"unidade(s) "),o.qZA(),o.TgZ(14,"p",11),o._uU(15," 10 unidades em estoque "),o.qZA(),o.TgZ(16,"button",12),o.NdJ("click",function(){o.CHM(e);const c=o.oxw();return o.KtG(c.addCart())}),o._uU(17,"Adicionar ao carrinho"),o.qZA()()()}if(2&t){const e=o.oxw();o.xp6(2),o.Q6J("src",e.produto.imagem,o.LSH),o.xp6(3),o.hij(" ",e.produto.descricao," "),o.xp6(2),o.hij(" ",o.xi3(8,5,e.produto.preco,"BRL")," "),o.xp6(3),o.hij(" ",e.produto.descricaoPreco," "),o.xp6(2),o.Q6J("ngModel",e.quantidade)}}const x=[{path:"",component:P},{path:":id",component:(()=>{class t{constructor(e,n,c,p,_){this.route=e,this.produtoService=n,this.carrinhoService=c,this.router=p,this.notificacaoService=_,this.quantidade=1}ngOnInit(){const e=Number(this.route.snapshot.paramMap.get("id"));this.produto=this.produtoService.getOne(e)}addCart(){const e={...this.produto,quantidade:this.quantidade};this.carrinhoService.addCart(e),this.router.navigate(["produtos"]),this.notificacaoService.showMessage("Item adicionado ao carrinho!")}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(s.gz),o.Y36(g),o.Y36(v.e),o.Y36(s.F0),o.Y36(h.r))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-detalhes-produto"]],decls:2,vars:1,consts:[[1,"container"],["class","produto",4,"ngIf"],[1,"produto"],[1,"produto-imagem"],["alt","",3,"src"],[1,"produto-detalhe"],[1,"produto-descricao"],[1,"produto-preco"],[1,"produto-descricao-preco"],[1,"produto-quantidade"],["type","number","name","","id","",3,"ngModel","ngModelChange"],[1,"avalibiliti"],[1,"addCar",3,"click"]],template:function(e,n){1&e&&(o.TgZ(0,"div",0),o.YNc(1,f,18,8,"div",1),o.qZA()),2&e&&(o.xp6(1),o.Q6J("ngIf",n.produto))},dependencies:[d.O5,a.Fj,a.wV,a.JJ,a.On,d.H9],styles:[".produto[_ngcontent-%COMP%]{display:flex;margin:30px}img[_ngcontent-%COMP%]{width:250px}.produto-imagem[_ngcontent-%COMP%]{margin-right:10px}.produto-detalhe[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-evenly;align-items:start}.produto-descricao[_ngcontent-%COMP%]{font-size:22px;color:var(--blue)}.produto-preco[_ngcontent-%COMP%]{color:var(--orange);font-size:22px;font-weight:bolder}.produto-quantidade[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:40px;margin-right:5px}.avalibiliti[_ngcontent-%COMP%]{font-size:13px}.addCar[_ngcontent-%COMP%]{background-color:var(--blue);padding:10px 20px;color:#fff;border:none;font-size:18px}"]}),t})()}];let C=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[s.Bz.forChild(x),s.Bz]}),t})(),M=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[d.ez,C,a.u5]}),t})()}}]);