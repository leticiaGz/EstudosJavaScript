//ex 26
//let a=[1,2,3,4,5]
//console.log(`${a[0]},${a[2]},${a[3]}`)

//ex 27
//let b=[1,2]
//let c=[1,2,3,4]

//console.log(b.length)
//console.log(c.length)

//ex 28

/*let onibus={
    rodas: 8,
    Portas: 2,
    limiteDePassageiros: 40
}

console.log(onibus.rodas+" "+onibus.limiteDePassageiros+" "+onibus.Portas);

// ex 29

onibus.janelas=20;
delete onibus.rodas;
console.log(onibus)

//ex 30

let d=["paulo","gabi","leticia","fransisca","osmair"]

let x="letici"

if (d.includes(x)) {
    console.log(" esse nome existe no vetor")
    
} else {
    console.log(" esse nome nao existe o vetor ")
    
}

//ex 31

let e=[1,2,3,4,5,6]
let f= [1,2]

function elementosVetor(v) {

    if (v.length<=5) {
        console.log("poucos elementos")
        
    } else {
        console.log("muitos elementos ")
        
    }
    
}

elementosVetor(e);
elementosVetor(f)*/

//ex 32

let g=[10,20,30,40,50]

g.forEach(n=> {
    console.log(n+",")
    
});

// ex 33

let pessoa={
    "nome":"leticia",
    "idade": 18,
    "namorando": true
}

console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa.namorando)

// ex 34

let frase="a leticia é programadora"
let h=frase.split("")

for (let i = 0; i < h.length; i++) {
    console.log(" ",h[i])
    
}

// ex 35

let calculadora={

    Somar: function(a,b) {
        console.log(a+b)
        
    },

    Subtrair: function(a,b){
        console.log(a-b)
    },

    multiplicar: function(a,b){
        console.log(a*b)
    },

    dividir: function(a,b){
        console.log(a/b)
    }
}

calculadora.Somar(2,4);
calculadora.Subtrair(5,10)
calculadora.dividir(30,10)
calculadora.multiplicar(2,10)