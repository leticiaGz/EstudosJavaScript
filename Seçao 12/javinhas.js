"use strict"

//ele reclama no console o fato da variavel nao ter let nem const
//opa="lele"
let opa="lele"

function soma(a,b) {
    "use strict"
    return a+b;}
    
//console log utilizado como debuger 
console.log(soma(5,2));

let a=10;
let b=2;
let c=50;

if (a<b) {
 a=a+b;
    
} 

else {
    a=a-b;
    
}
//debugger;  para o codigo e mostra o valor das minhas variaveis
if (c<a) {
    c=c*a;
    
}

function checarNumero(a) {
    //checando se a é um numero 
    if (!Number(a)) {
        alert("por favor digite um numero")
        
    }
    else{ console.log(a)}
    
    
}

let user=prompt("digite um numero")
checarNumero(user);

//criando exceptions, ele para codigo

function Saudaçao(a) {
    if (typeof a!="string") {
        throw new Error('o parametro precisa ser string')
        
    }
    else{
        console.log(`hello ${a}`)
    }
    
}
Saudaçao("gabi")

// imprime o erro, e nao para o codigo
try{
    let c=h+d;
}
catch(e){

  //  throw new Error(e); assim ele pararia o codigo
    console.log(e)
}
finally{
    console.log("executou")
}

function interaArray(arr) {
    if(Array.length>0){
        throw new Error("o array precisa ter pelo menos um elemento")
    }
      else{
          for (let i = 0; i < arr.length; i++) {
              console.log (arr[i]);
              
          }
      }
    
}
let arrr=[10,12]
let arr2=[]


interaArray(arr2);

