// arrays
let nomes=["leticia","bianca","crala"]
let numeros=[2,3,52]
let misturado=["leticia",18,true]


// acessando elementos 
console.log(nomes[0])
console.log(numeros[1])
console.log(misturado[misturado.length -1]) // codigo para acessat ultimo elemento do array

// propiedades
console.log(nomes.length)

// metodos

let marca= "nike"

console.log(marca.toUpperCase())
console.log(marca.toLowerCase())

// criando obj em java script

let gato={
    nome: "lila",
    idade: 10,
    raça: "srd",
    nomeDoDono:"roberta",

    miar: function() {
        console.log("miau")
        
    }
}

console.log(` o nome do gato é: ${gato.nome} \n a idade do gato é: ${gato.idade}`)
console.log(gato.miar());

// objs e propiedades

let carro={
    cor: "amarelo",
    nPortas: 4,
    ano: 2014
}

console.log(carro.cor);

carro.tetoSolar=true;
console.log(carro.tetoSolar);
delete carro.tetoSolar;
console.log(carro.tetoSolar);

// adicionando propiedades

let planta={
    especie: "babosa",
    cor: " verde escuro"
}

let florescendo={
    flores: true,
}

let sFlores={
    flores: false,
}

console.log(planta)
Object.assign(planta,florescendo)
console.log(planta)

// utilizando keys

let interruptor={
    ligado: true,
    desligado: false,
    pFioTerra: false,
}

console.log(interruptor)
console.log(Object.keys(interruptor))

// mutaçao criando objectos iguais 

let pesu={
    nome: "leticia"
}

 let pesu1=pesu;

 console.log(pesu1==pesu);
 pesu1.nome="gessica"
 console.log(pesu)
 console.log(pesu1)

 // loop em arrays
 let numbers =[1,2,3,4,5,5,7,8,9,10]

 for (let i = 0; i < numbers.length; i++) {
      if (numbers[i]%2==0) { // aqui tambem, apartit do indce
          console.log(numbers[i])//aqui eles esta puxando cada elemento do array 
      } 
     
 }

 // metodos push e pop

 let nominhos=["leticia","jonas", "gabi", " maria"]

 console.log(nominhos)
 let nRemovido=nominhos.pop() // pop remove o ultimo elemento do vector
 console.log (nRemovido)
 console.log(nominhos)
 nominhos.push("jose") // push adiciona um valor ao final do array
 console.log(nominhos)

// metodos shift e unshift
 let frutinhas=["abacate","melancia ","melao"];

 
 console.log(frutinhas)
 let fRemovido=frutinhas.shift() // shift remove o primeiro elemento do vector
 console.log (fRemovido)

 console.log(frutinhas)
 frutinhas.unshift("morango","abacaxi") // unshift adiciona um valor ou mais valores no começo do array do array
 console.log(frutinhas)

 // metodos indexOf e lastIndexOf

 let makes=["blush","batom","blush","base"]
 console.log(makes.indexOf("blush")) // retorna a primeira vez que foi encontrado o elemento
console.log(makes.lastIndexOf("blush"))// retorna a ultima vez que foi encontrado o elemento

//metodo slice 

let numeros= [1,2,3,4,5,6,7,8,9,10]

console.log(numeros.slice(0,6));
console.log(numeros.slice(5));
console.log(numeros.slice(-6,-1));
console.log(numeros.slice(6,-1));

// metodo foreach 

// utilizado para percorrer o vetor adicinando algo, aonde esta o N ele ja entende como o indice que ira seguir
let frutas=["abacate","melancia ","melao"];

 frutas.forEach(n =>{
     console.log(`o nome da fruta é: ${n}`)
 });

 // metodo includes
 // retorna se existe ou nao no vetor um determinado elemento

 let aDeCabelo=["lacinho","presilha","grampo"]
 console.log(aDeCabelo.includes("presilha"))
 console.log(aDeCabelo.includes("tiara"))

 //metodo reverse
 // inverte a ordem don vetor

 let numerinhos=[1,2,3,4,5,6,7,8,9,10]

 console.log(numerinhos.reverse())
 console.log(numerinhos)

 // metodos string 

 //metodo trim

 let texto="      leticia"
 console.log(texto)
 let nomeCorrigido= texto.trim();
 console.log(nomeCorrigido)

 //padStart adiciona strings, primeiro argumento tamanho maximo da string, segundo o que sera concatenado 

 let n="55"

 console.log(n.padStart(5,"0"));

 // metodo split cria um vetor a partir de um separador

 let a="a leticia dança"
 let p= a.split(" ")
console.log(p)

//metodo join junta elementos de um array em uma frase atraves de um separador
let f=p.join("-")
console.log(f)

// metodo repeat  repete a string quantas vezes forem passadas coo parametros 

let h="leticinha "
console.log(h.repeat(10));

 // rest operator permite colocar inumeros parametros na funçao que sao guardados em um vetor 

 let n1=10
 let n2=25
 let n3=55
 let n4=5

 function imprimirNumeros(...vetor) {
     for (let i = 0; i < vetor.length; i++) {
         console.log(vetor[i]);
         
     }
     
 }

 imprimirNumeros(2,10,20,30,40)
 imprimirNumeros(n,n1,n2,n3,n4)

 //destructuring obj  notaçao simplificada para guardar o valor das propiedades em variaveis 

 let person={
     nome:"leticia",
     idade:18
 }

 let{nome: vnome, idade: vidade}=person;


 console.log(vnome)
 console.log(vidade)

 //destucturing em vetores

 let nomes=["leticia","gabi"," flavia"]

 let [nomeA,nomeB,nomeC]=nomes;

 console.log(nomeA)

 // criando json , nao aceita comentarios

 let pessoinha={

    "nome": "leticia",
    "idade": 18,
    "hobbies":["the sims","cozinhar","treino"]
 }

 console.log(pessoinha.idade)

 // convertendo json para string ou vice e versa

 let pessoaTexto= JSON.stringify(pessoinha); // convertendo json em string 
 console.log(pessoaTexto)

 let pessoaJSON=JSON.parse(pessoaTexto); // convertendo string para json
console.log(pessoaJSON)
console.log(pessoaJSON.hobbies[0])








