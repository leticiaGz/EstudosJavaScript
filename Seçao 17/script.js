let btn= document.querySelector('#btn');
let btn2= document.querySelector('#btn2');

// aqui estou escutando o evento e passo o evento , e depois a minha funçao com a açao

function mensagem(e) {
    console.log("clicou no botao")
    e.stopPropagation();
}

function removeEvento() {
    btn.removeEventListener('click', mensagem);
    console.log('removi')
}

//btn.addEventListener("click",mensagem);
btn2.addEventListener("click",removeEvento);

/*setInterval(() => {
    btn.removeEventListener('click',mensagem)
}, 5000);*/

// objeto do evento (event)

function msg(e) {
    console.log(e);
}

btn.addEventListener('click',msg)

// propagation

let p=document.querySelector('p');
let btn3=document.querySelector('#btn3');

btn3.addEventListener('click',mensagem)

p.addEventListener('click',() => {
    console.log('clicou no paragrafo')
    
});

//e.stopPropagation(); adicionando isso no metodo de mensagem paro a propagaçap

// mudando eventos default

let a=document.querySelector('#link1');

a.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log('nao vai mudar de link')
})

// evento por tecla

window.addEventListener('keydown', (e)=>{
    if (e.key=='q') {
        console.log('aperotou a letra q')
        
    }
    else if (e.key=='Enter') {
        console.log('aperotou enter')
    }
})

window.addEventListener('keyup', (e)=>{
    
     if (e.key=='Enter') {
        console.log('soltouu enter')
    }
})

// eventos com o mouse

let btn4=document.querySelector('#btn4');
let btn5=document.querySelector('#btn5');
let btn6=document.querySelector('#btn6');

btn4.addEventListener('mousedown',()=>{
    console.log('apertou o botao')
})

btn4.addEventListener('mouseup',()=>{
    console.log('soltou o botao')
})

btn5.addEventListener('dblclick',()=>{
    console.log('clicou 2 vezes')
})

//pegando click com botao esquerdo
btn6.addEventListener('contextmenu',(e)=>{
    e.preventDefault;
    console.log('botao esquerdo')
})

// movimento do mouse , descobrindo as cordenadas

 /* window.addEventListener('mousemove',(e)=>{
      console.log(e.x);
      console.log(e.y);
  })*/

  window.addEventListener('scroll',(e)=>{
      if (window.pageYOffset>1000) {
          console.log('ativou')
      }
  })

  let input=document.querySelector('#input1');


  input.addEventListener('focus', ()=>{
      console.log('entrei no input')
  })

  input.addEventListener('blur', ()=>{
    console.log('sai do input')
})

// evento load
// sempre quando recarrego a pagina aparece isso
/*window.addEventListener('load', ()=>{
    alert('assine nossos termos de uso')
})*/

window.addEventListener('beforeunload', (event)=>{
   event.returnValue=null;
})

// utilizando debounce para nao sobrecarregar pc do cliente

let timeout;

window.addEventListener('mousemove',()=>{
    clearTimeout(timeout);  //limpo o timeout
    timeout= setTimeout(()=> console.log('debounce'), 500)
})




