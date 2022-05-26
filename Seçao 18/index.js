let {readFile, writeFile}= require('fs'); // assim utilizo as coisas da biblioteca atraves do require

// lendo arquivo
readFile('arquivo.txt','utf-8',(error,texto) =>{
    if(error){
        throw error;
    }
    else{
        console.log(texto);
    }
})

writeFile('arquivo.txt','texto por write file',(error)=>{
    if(error){
        throw error;
    }
    else{
        console.log(' Escreveu com sucesso!')
    }
    
})

