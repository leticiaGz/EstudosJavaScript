// variaveis 
let nome="leticia "
const ip = 5555
console.log(ip)
console.log(`o meu nome é ${nome}`)

// funçao prompt
let idade=prompt("qual sua idade?")
console.log(idade)

//fuçao alert 
alert("hihi")

//funçao math
let menor=Math.min(5,8,9)
console.log(menor)


//condicionais 

//if e else
if(idade>=18){
    console.log("voce é de maior ")
}

else if(idade<=11){
    console.log("voce é criança")
}
else{
    console.log("voce é de menor ")
}


//while
/*while(idade<0){
    console.log(idade);
    idade=idade-1;
}*/

//do while
let h =10;

/*do { console.log(h)
    h=h-1;
    
} while (h>=1);*/

//for

/*for (let index = 10; index>=1; index--) {
    console.log(index);
    
    
}*/

// continue

for (let i = 10; i>0; i--) {


    if(i%2==0){
        console.log("caiu no contineu")
        continue;
    }
    console.log(i);
    
}

// switch/ case

let nominho =prompt("qual é seu nome?")

switch (nominho) {
    case "leticia":
      console.log("voce é lindaaa")
        
        break;

    default: 
    console.log(" voce nao é a leticia")
        break;
}


