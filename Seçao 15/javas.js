// siteTimeout

console.log("iniciando ")

// a funçao de callback recebe uma funçao como parametro, bastante usado para animaçoes
    setTimeout(function name(params) {
        console.log("executei callback")
    }, 2000) // 2000 equivale 2 seg

console.log("Finalizando")

//Promsies

//criando
let p=Promise.resolve(5+2);

console.log("outros codigos")

console.log(p)

// dessa forma trabalho com o valor inicial da promessie
p.then((value)=>{console.log(`o valor é: ${value+1}`)})
p.then((value)=>{console.log(`o valor é: ${value+5}`)})


//dessa forma utilizo o mesmo valor que alterei em  cima
p.then((value)=>{return value+30})
.then((value)=>{console.log(`o valor é: ${value}`)})

// lidando com erros, pelo cacht ele pega erros 

let promisseErro=Promise.resolve(new Error (" nao deu certo"))

console.log(" alalalllall")

promisseErro.then((value)=> console.log(value))
.catch(r=> console.log(`falhou: ${r}`))

// reject

// da forma antiga fariamos assim
let l= new Promise.resolve((resolve,reject)=>{
    if(num==2){
        resolve(`o numero é ${num}`)
    }else{
        reject(new Error("falhou"))
    }
    })

// mais agora utilizamos dentro de funçoes
// aqui criamos uma funçao e retornamos a nossa promessie nela 
 function VerificarMaiorIdade(a) {
      return new Promise((resolve,reject)=>{
         if (a>=18) {
             resolve(console.log(`voce é maior de idade pois tem ${a} anos.`));
         } else {
             reject(new Error ("voce é menor de idade"));
             
         }
     })
     
 }

 VerificarMaiorIdade(18);
 VerificarMaiorIdade(15);

 //resolvendo varias promessies

 const p1=new Promise(function (resolve,reject) {
     setTimeout(function () {
         resolve(1);
     })
 })

 const p2=Promise.resolve(2)

 const p3= new Promise((resolve,reject)=>{
     resolve(3);
 })
    
   Promise.all([p1,p2,p3]).then((values)=> console.log(values))

   // asynic function

   async function somar(a,b) {
       return a+b;
   }

   somar(2,4).then(value=> console.log(value))

   async function maiorIdade(a){
       if (a>=18) {
           return a;
       }
       
   }

   maiorIdade(17).then(function(value){console.log(value)})
   // quando ele é menor nao retorna nada

   // await
   //ele é utilizado dentro da async, e ele espera a promisse der resolvida para apresentar os resultados

   function somaComDelay(a,b) {
       return new Promise(resolve=>{
           setTimeout(function () {
               resolve (a+b);  }, 4000)
       })
   }

async function resSoma(a,b,c){
 let x= somaComDelay(a,b)
 let y=c

 return await x+y; // utilizado para esperar valor externo
}

resSoma(1,2,3).then(value=>{console.log(value)})

//generators 
function* criadorDeId(){
    let id=0;
    while (true) {  // uma estrutura infinita
        yield id++;
    }
}
let criaId=criadorDeId();
console.log(criaId.next().value) // utilizando .value para acessar apenas o valor
console.log(criaId.next().value)
