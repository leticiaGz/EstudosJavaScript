//ex 1
function imprimindo() {
    console.log("Hello world!!")
}
imprimindo();

//ex2
function printaIdade(idade) {
    idade=prompt("qual a sua idade?")
    console.log(` a sua idade é ${idade}`)
}
printaIdade();

//ex3 

function Soma(a,b) {
    return a+b; 
}
console.log(Soma(4,2));

//ex 4

function numeroAleatorio(x) {
    return  Math.floor(Math.random()*x) +1;
    
}

console.log(numeroAleatorio(60))

//ex 5

function EntradaNaAutoEscola(idadee) {

    idadee=prompt("qual a sua idade?")

    if (idadee>=18) {
        console.log("voce pode entrar na auto escola")
        
    } else {
        console.log("voce nao pode entrar na auto escola")
        
    }
    
}

EntradaNaAutoEscola();

// parei no exercicio 21

function tipoDeDado(x) {
    console.log(" o tipo de dado é :"+typeof x);
    
}

function tipoBooleano(x) {
    tipo=typeof x;

      if (tipo=="boolean") {
        console.log(`o tipo de "${x}"  é boolean`)   
    }
    else{
        console.log(`o tipo de "${x}" nao é boolean`)
    }
    
    
}

function tipoNumero(x) {

    tipo=typeof x;

    if (tipo=="number") {
        console.log(`o tipo de "${x}"  é number`)
        
    }

    else{
        console.log(`o tipo de "${x}"  nao  é number`)
    }
    
    
}

function tipoString(x) {

    tipo=typeof x;

    if (tipo=="string") {
        console.log(`o tipo de "${x}"  é string`)
        
    }

    else{
        console.log(`o tipo de "${x}" nao  é String`)
    }
    console.log(tipo);
    
}

tipoBooleano("lala");
tipoBooleano(true);
tipoDeDado(585);
tipoNumero(22);
tipoString("lala");
tipoDeDado("hihi")

// ex 22

function transformaEmPositivo(x) {

    if (x>0) {
        console.log("Por favor digite um numero negativo")
    }
  else{
    return x*-1;
    
    }
    
    
}

console.log(transformaEmPositivo(-2))
console.log(transformaEmPositivo(4))


// utilizando math
function transformaPositivo(x) {

    if (x>0) {
        console.log("Por favor digite um numero negativo")
    }
  else{
      return Math.abs(x);
    }
    
    
}
console.log(transformaPositivo(-20))
console.log(transformaPositivo(20))

function tamanhoTexto(a) {

    
    if ((a.length)>=10) {
        console.log("esse texto é muito longo")
        
    } else {
        console.log(" texto dentro do limite")
    }
    
}

tamanhoTexto("abacateggg")
tamanhoTexto("gg")

// ex 24

function potencia(x,y) {
    return Math.pow(x,y);
}

console.log(potencia(2,2))
console.log(potencia(2,3))
console.log(potencia(2,4))

// ex 25

function numerosPares(x) {
    while (x>0) {
        
        if (x%2==0) {
            console.log(x)
        }
        x--;
    }
}

function numerosImpares(x) {
    while (x>0) {
        
        if (!x%2==0) {
            console.log(x)
        }
        x--;
    }
}


// com o for

 function numerosParesProf(x){
     for (let i = x; x>0; x--) {
        if (x%2==0) {
            console.log(x)
        } 
         
     }
 }

 numerosParesProf(50)

