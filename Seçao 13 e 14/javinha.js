
let Reg2=/teste/;

console.log(Reg2.test("tttttttesteeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"))
console.log(Reg2.test("tttttt"))
console.log(/abacate/.test("aaabacate"))// aqui crio a expressao na linha de codigo msm
console.log("-----------------------------------------------------")
console.log(/[50]/.test("aaabacate 50"))
console.log(/[50]/.test("aaabacate 22"))//é o conjunto de numeros , nao o 50, seria um mal aprouxe
console.log(/[0-10]/.test("aaabacate 22"))
console.log(/[0-10]/.test("aaabacate 10"))
console.log("-----------------------------------------------------")
//caracteres especiais 

console.log(/./.test("aaabacate 22"))// aceita rudo
console.log(/\d/.test("aaabacate 22"))// aceita numeros
console.log(/\d/.test("aaabacate"))// aceita numeros
console.log(/\D/.test("aaabacate"))// nao aceita numeros
console.log(/\D/.test("22"))// nao aceita numeros
console.log(/\s/.test(" "))// aceita espaço
console.log(/\s/.test(" gg"))// aceita espaço
console.log(/\s/.test("gg"))// aceita espaço
console.log(/\w/.test("gg"))// aceita apenas numeros e letras
console.log(/\w/.test(" "))// aceita apenas numeros e letras
console.log(/\W/.test("g5"))// tudo menos  numeros e letras


// caracteres expecias na pratica
console.log("-----------------------------------------------------")
let ano=/\d\d\d\d/;
console.log(ano.test("50")&& length==4);
console.log(ano.test("1999")&& length==4);
console.log(ano.test("nn99"));
let Palavratresletras=/\w\w\w/;
console.log(Palavratresletras.test("lei")&& length==2);
console.log(Palavratresletras.test("dança")&& length==3);
console.log(Palavratresletras.test("da"));

//not
console.log("-----------------------------------------------------")
let semA=/[^ab]/  // isoladamente, a combinaçao tem que ser exata
console.log(semA.test("a"))

//plus
let vazioNao=/[\d+]/ // d aceita apenas numeros
console.log("-----------------------------------------------------")
console.log(vazioNao.test("5555555"))
console.log(vazioNao.test(""))

// question
let padrao=/[letici?a]/
console.log("-----------------------------------------------------")
console.log(padrao.test("leticia"))
console.log(padrao.test("letc"))
console.log(padrao.test("leti"))
console.log(padrao.test("bo"))

//precisao
let telefone=/\d{4}-\d{5}/;
console.log("-----------------------------------------------------")
console.log(telefone.test("9818-80355"))
console.log(telefone.test("letgbnghb"))
console.log(telefone.test("850355"))

//metodo exec, me retorna um vet com as informaçoes e caso nao encontrado null
console.log(telefone.exec("9818-80355"))

// metodo macth, ele é um metodo da string
let frase="a leticia é 10".match(/\d/);
console.log(frase);

//choice patern
console.log("-----------------------------------------------------")
let fruta=/(banana|maça|abacate|melancia)/;
console.log(fruta.test("abacate"))
console.log(fruta.test("morango"))

// validando dominios
let validarDominio=/[?www].\w+\.com|.com.br/;
console.log("-----------------------------------------------------")
console.log(validarDominio.test("abacate.com.br"))
console.log(validarDominio.test("www.google.com"))
console.log(validarDominio.test("www.asap.com.br"))

// validando email
let validadarEmail=/\w+@\w+\.\w+/
console.log(validarDominio.test("abacate@gmail.com"))
console.log(validarDominio.test("abacate@gmail"))








