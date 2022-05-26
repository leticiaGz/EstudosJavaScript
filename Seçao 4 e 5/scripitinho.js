// ex 06
let nome="leticia";
const viva= true;
let idade=18;

console.log(`O seu nome é ${nome} \n voce esta viva? ${viva}\n a sua idade é ${idade}`)

//ex 07

let idadee=prompt("Qual a sua Idade?");

if ( idadee>=18){
    console.log("voce pode entrar")} 
        else {
            console.log("voce nao pode entrar")
         }

// ex 08
 const nominho="leticia"

  if (nominho=="leticia") {
      console.log(` bem vinda ${nominho}`)
      
  }

  // ex 09 elevando  a potencia 
  let n = 18
  console.log(Math.pow(n,2));

  // ex 10

  let velocidade=prompt("A que velocidade o carro estava?");

  if (velocidade<=80) {
      console.log(`esta velocidade é permitida ${velocidade}`)
      
  } else {
    console.log(`voce esta a cima da velocidade ${velocidade}`)
      
  }

  //ex 11

  let cnh=prompt("voce possui cnh?");
  if (idadee>=18 && cnh=="sim") {
      console.log("voce pode dirigir")
      
  } else {
      console.log("voce nao pode dirigir")
      
  }

//ex 11
  let l=0;

  while (l<=10) {
      console.log(l);
      l++;
      
  }

  //ex13

  for (let i = 100; i>=50; i--) {
      console.log(i)
      
  }

  // ex 14

  for (let i = 0; i<=50; i++) {
    
    if(i%2==0){
        console.log(`Este numero é par ${i}`)
    }
    else{
        console.log(`Este numero é Impar ${i}`)
    }
    
}







