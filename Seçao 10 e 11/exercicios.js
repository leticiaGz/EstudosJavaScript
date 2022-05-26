//exercicio 36
/*class contaBanco{
    constructor(saldo){
       this.saldo=saldo;
    }

    deposito(valor){
      this.saldo+=valor;
    }

    saque(valor){
        this.saldo-=valor;
    }

    get csaldo(){
        return this.saldo;
    }
}

let vania=new contaBanco(530.20);

console.log(vania.csaldo);
vania.deposito(500.00);
console.log(vania.csaldo);
vania.saque(200.00);
console.log(vania.csaldo);*/

//ex 37

/*class Carrinho{
    constructor(itens,qtd,valorTotal){
       
        this.itens=itens;
        this.qtd=qtd;
        this.valorTotal=valorTotal;
    }


    adicioanar(item){
// variavel criada para adicionar uma  nova estrutura itens ainda nao existente
    let cont=0;

/*aqui estou percorrendo this.itens, para saber se o item que eu dsejo adicionar ja existe no registro,
se ele ja existir eu aumentarei a qtd da estutura itens, e adicionarei 1 ao contador,
pois ele sera utilizado para adicionar uma nova estrutura itens*/
        
   /* for(let itemsCarrinho in this.itens){
        if (this.itens[itemsCarrinho].id== item.id){ 
            this.itens[itemsCarrinho].qtd+= item.qtd; 
            cont=1;
        }

    }

//o metotodo push me permite adicionar coisaas ao vetor

    if(cont==0){
        this.itens.push(item);
    }

// aqui estou mexendo nos valores totais

    this.qtd+=item.qtd; 
    this.valorTotal+=item.preço*this.qtd; 

    }

    remover(item){

        for(let i in this.itens){
            if (this.itens[i].id== item.id){ 

                let obj=this.itens[i];

                let index=this.itens.findIndex(function(obj){return obj.id==item.id});

                this.itens.splice(index,1);

                this.qtd-=item.qtd; 
                this.valorTotal-=item.preço*this.qtd; 
                
            }

    
        }
  

    }

    
    
}

//aqui criamos um vetor, para que seja possivel guardar varias informaçoes
let car=new Carrinho([
    { id:01,
      nome: "camisa",
      qtd:1,
      preço:20

    
    },
    {
        id:02,
        nome:"calça",
        qtd:1,
        preço:20
    }
    

],2,40);
console.log(car)
car.adicioanar({id:01,nome:"camisa",qtd:2,preço:20})
console.log(car)
car.adicioanar({id:03,nome:"saia",qtd:5,preço:30})
console.log(car)
car.remover({id:03,nome:"saia",qtd:5,preço:30})
console.log(car)

//ex 38

class Endereço{
    constructor(rua,bairro,cidade,estado){
        this.rua=rua;
        this.bairro=bairro;
        this.cidade=cidade;
        this.estado=estado;
    }
    set nRua(nrua){
        this.rua=nrua;

    }

    set nBairro(nBairro){
        this.bairro=nBairro;

    }

    set nCidade(nCidade){
        this.cidade=nCidade;

    }

    set nEstado(nEstado){
        this.estado=nEstado;

    }

    get Rua(){
        return this.rua;
    }

    get Bairro(){
        return this.bairro;
    }

    get Cidade(){
        return this.cidade;
    }

    get Estado(){
        return this.estado;
    }


}

let endereço1=new Endereço("das Dalias","Vila Mimosa","Campinas","Sao Paulo");
console.log(endereço1.Bairro)
console.log(endereço1.Cidade)
console.log(endereço1.Estado)
console.log(endereço1.Rua)
endereço1.nBairro="Jardim do lago";
console.log(endereço1.Bairro)

// ex 39

class Carro{
    constructor(marca,cor,gasolina){
        this.marca=marca;
        this.cor=cor;
        this.gasolina=gasolina;

    }

    dirigirCarro(Km){
     //a cada 12km diminuir um litro
     this.gasolina-=Km*0.43;
      
    }

    abastecerCarro(litros){
        this.gasolina+=litros;
        console.log(`Isso lhe custara ${litros*6.20}`)
    }
}

let corsa=new Carro("chevrolet","cinza",50);
console.log(corsa)
corsa.dirigirCarro(20);
console.log(corsa)
corsa.abastecerCarro(10);
console.log(corsa)*/

class ContaBancaria{
    constructor(saldoC,saldoP,jurosP){
        this.saldoC=saldoC;
        this.saldoP=saldoP;
        this.jurosP=1.25/100.00;

    }
     

    depositoC(valor){
        this.saldoC+=valor;
        
    }
    saqueC(valor){
        this.saldoC-=valor;
    }
    depositoP(valor){
        this.saldoP+=valor;
    }

    saqueP(valor){
        this.saldoP-=valor;
        
    }

    tranasferenciaPparaC(valor){
        this.saldoP-=valor;
        this.saldoC+=valor;

    }

    jurosDeAniversario(){
        this.saldoP=(this.saldoP*this.jurosP+this.saldoP);
        console.log(`voce recebeu de juros ${this.saldoP*this.jurosP}`)
    }
    
}


  let laura=new ContaBancaria(250,210,10)
  console.log(laura)
  
  laura.tranasferenciaPparaC(100);
  console.log(laura)
  laura.jurosDeAniversario();
  console.log(laura)

  class ContaEspecial extends ContaBancaria{
      constructor(saldo,juros,jurosP){
          super(jurosP,jurosP)
          this.saldo=saldo;
          this.juros=this.jurosP*2;

      }

      verificarSaldo(){
          
          return this.saldo;
      }

      Juros(){
        this.saldo=(this.juros*this.saldo+this.saldo);
        console.log(`voce recebeu de juros ${this.saldo*this.juros}`)

      }
  }

  let bianca=new ContaEspecial(200)
  console.log(bianca.verificarSaldo())
  bianca.Juros();
  console.log(bianca.verificarSaldo())
  


