//Funçoes
function imprimirNoConsole() {
    console.log("hello world!!")

}

imprimirNoConsole();

function imprimirNumero(num) {
    console.log(` o numero é ${num}`)

}

imprimirNumero(5);

const numeroAleatorio= function(){
    console.log(Math.random(10,20));
}

numeroAleatorio();

function multiplicando(x,y,z) {
    return x*y*z;
    
}

let resultado= multiplicando(2,3,1);
console.log(`o valor da multiplicaçao é ${resultado}`)


// arrow function
let somando=(a,b)=>{
    return a+b;
}

console.log(somando(2,4));

// funçao enxutada

let multiplicandoPor2= (x) =>{
    return x*2;
}

let multiplicandoPor3= x => x*3;

console.log(multiplicandoPor3(5));


// criando tratamentol de erros 

function saudaçao(nome, idade) {

    if (nome=== undefined || idade===undefined) {
        console.log("por favor passe todos os parametros pedidos")
        
    } else {
        console.log(` seja bem vindo ${nome} sua idade é ${idade}`)
        
    }
    
}

saudaçao("lais");
saudaçao("lais",20)

// argumento default 

function potencia(base,exp=2) {
    return Math.pow(base,exp);
    
}

console.log(potencia(2,2))
console.log(potencia(2))
console.log(potencia(2,3))

// closure

// recursao criando um loop

function recursa(n) {

    if (n -1<2) {
        console.log("parou")
        
    }
    else if (n%2 !=0) {
        console.log("numero impar " +n)
        recursa(n-1);
        
    }
    else{
        console.log("numero  par " +n)
        recursa(n-2);
    }
    
}

recursa(39)
recursa(40)