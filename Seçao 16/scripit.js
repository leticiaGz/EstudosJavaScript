//  JAVA SCRIPT NO NAVEGADOR
console.log(document); //acessando dom
console.log(document.body.childNodes)
console.log(document.body.childNodes[1])
console.log(document.body.childNodes[1].childNodes)

//utilizados para alteraçao
console.log('------------------------------')
console.log(document.getElementById('p1'))
console.log(document.getElementById('8'))

console.log('------------------------------')
console.log(document.getElementsByClassName('textos'))


console.log('------------------------------')
console.log(document.querySelector('#texto1 p2'))
console.log(document.querySelector('div div p'))

// alterando html


// criando nos  inserindo novo elemento no html com APPENDCHILD
 let pSemT=document.querySelector("#prgf-vazio");
 let txt=document.createTextNode("Paragrafo que estava vazio")

 pSemT.appendChild(txt)



 // inserindo com insert before 
 let nEle= document.createElement("p");
 let pEle=document.querySelector("#texto2")
 let aEle=document.querySelector("#p5")
 let t=document.createTextNode("novo insertbefore")
 nEle.appendChild(t);

 pEle.insertBefore(nEle, aEle);
 
 // append child adiciona elemento por ultimo
 let nnEle=document.createElement("p")
 let nntxt=document.createTextNode("jfndjknvdfkjnvjkdr rdcncjdrncmfldkr dncjdurnfdi \n uffnoiwenf ncfduicfnuidr")

 nnEle.appendChild(nntxt); // nessa parte crieei um elemento e inseri texto

 let aaEle=document.querySelector("#p5");
 let ppEle= aaEle.parentNode; // metodo que me permite encontrar o pai 

 ppEle.appendChild(nnEle); // inseri o novo elemento 

 // replace child  repoe um elemento

 let newEle=document.createElement("h5")
 let txxtEle=document.createTextNode("fim da lista")

 newEle.appendChild(txxtEle);

 let aaaEle=document.querySelector("#li3");
 let dadyEle=aaaEle.parentNode;

 dadyEle.replaceChild(newEle,aaaEle);

 // modificando e lendo elementos 

 let a = document.querySelector("#link");

 console.log(a.getAttribute('href'));

 let link='https://www.google.com';

 a.setAttribute('href', link)

 // largura e altura dos elementos 

 let test= document.querySelector('#titulo1');

 console.log('largura '+test.offsetWidth); // considera bordas
 console.log('Altura'+test.offsetHeight); // considera bordas

 console.log('largura '+test.clientWidth); //  nao considera bordas
 console.log('Altura'+test.clientHeight); // nao considera bordas

 // mesmo tamanho porque esse elemento nao tem bordas

 // pegando a posiçao do elemento na tela, de todos os lados

 let tt = document.querySelector('#p1');
 console.log(tt.getBoundingClientRect());

 // alterando atributos do css com js

 let titulo = document.querySelector('#titulo1');


 function alteraTitulo() {
     setTimeout( function cor (){ 
         titulo.style.color='purple';
         titulo.style.backgroundColor='lavender';
         titulo.style.widht='400px';

    
    },3000);
    
 }

// selecionando varios elementos, e alterando cor atraves do vetor criado.
let itens =document.querySelectorAll('li');
console.log(itens);

itens[0].style.color='purple';









