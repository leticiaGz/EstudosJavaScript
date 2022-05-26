
// criando metodos em js getters e setters e this 

/*let planta={

    especie:" ",
    hidrataçao: 20,

    regar: function () {
       planta.hidrataçao+=30;
       this.hidrataçao=planta.hidrataçao;
        
    },

    setEspecie: function (especie) { // altera valores
        this.especie=especie;
    },

    getESpecie: function () {
        return "a especie é "+ this.especie; // retorna os valores
    },

    getHidrataçao: function () {
        return "a hidrataçao  é "+ this.hidrataçao;
    }
}


// criando objetos a partir da nossa classe

let plantaNova=Object.create(planta);

plantaNova.setEspecie("hortela");
console.log(plantaNova.getESpecie());
console.log(plantaNova.getHidrataçao());
plantaNova.regar();
console.log(plantaNova.getHidrataçao());

//construtor por funçao PESSIMO
//dessa forma ja criamos o objeto definindo as propiedades
function criarPlanta(especie,hidrataçao) {
    let planta=Object.create({})
    planta.especie=especie;
    planta.hidrataçao=hidrataçao;
    return planta;
    
}

let boldo=criarPlanta("boldo",10)*/

// MELHOR FORMA PARA CRIAÇAO DE CLASSES E INSTACIAS sem ser no ecma6

/*function Planta(especie,hidrataçao) {

    this.especie=especie;
    this.hidrataçao=hidrataçao;
}


 Planta.prototype.setEspecie= function (especie) { // altera valores
    this.especie=especie;
}

Planta.prototype.getESpecie=function () {
    return "a especie é "+ this.especie; // retorna os valores
}

Planta.prototype.getHidrataçao= function () {
    return "a hidrataçao  é "+ this.hidrataçao;
}

let oliveira=new Planta("oliveira",10)
console.log(oliveira.getESpecie());
console.log(oliveira.getHidrataçao());*/

// no ecma 6
class Cachorro{
 constructor(raça,patas,cor){
     this.raça=raça;
     this.patas=patas;
     this.cor=cor;
 }
 latir(){
    console.log("auau");
 }

}

let viraLata = new Cachorro("vira lata",4,"caramelo")
console.log(viraLata)
viraLata.latir();



class Planta{
    constructor(especie,cor){
        this.especie=especie;
        this.cor=cor;
    }

    

    Regar(hidrataçao) {
       this.hidrataçao+=30;
        hidrataçao=this.hidrataçao;
    }

    get corzinha(){
        return this.cor;
    }

    set setcor(cor){
        this.cor=cor;
    }
}


let hidrataçao= Symbol();
Planta.prototype[hidrataçao]=20;


let hortela= new Planta("hortela","verde");
console.log(hortela.corzinha)

console.log(hortela[hidrataçao])

hortela.setcor="amarelo"


console.log(hortela.corzinha);

// herança utilizando extends

class Felinos{
   constructor(patas){
       
       this.patas=patas;
      
   }

   get gpatas (){
       return this.patas;
   }

   set setpatas(patas){
       this.patas=patas;
   }

   

}

class Gato extends Felinos{
    constructor(patas,comprimento){
        super(patas, patas),
        this.comprimento=comprimento;
    }

    
}

let lila = new Gato("4", "25");
console.log(lila)
console.log(lila.gpatas)

// instance of

console.log (new Gato instanceof Felinos)

