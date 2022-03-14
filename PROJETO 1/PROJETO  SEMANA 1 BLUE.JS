
console.clear();

const prompt = require('prompt-sync')();

let contador = 0;

while(true){
let a1 = prompt('Temos uma vaga FULL STACK, bora?');

if(a1.toLowerCase() == 'sim'){
    console.log('Então bora!')
    break;
} else if(a1.toLowerCase() == 'nao'){
    console.log('Tudo bem, então deixa para lá!')
    break;
}else{
    console.log('A resposta precisa ser sim ou nao')
    continue;
}
}

    console.clear();

        while(true){ //definindo que a resposta é sim ou não!
        let Q1 = prompt('Você sabe sobre HMTL?'); // pergunta 1
        if(Q1.toLowerCase() == 'sim'){ //validando o sim!
            contador = contador + 1 // utilizando o contador para o resultado final

            console.clear();
            break; // parando caso diga sim

        } else if(Q1.toLowerCase() == 'nao'){ //valindando o não
            
            console.clear();
            console.log('Ok, proxima pergunta.')
            break;
            
        } else {
            console.log('A resposta precisa ser sim ou nao')
            continue;
        }
        }
        while(true){
        let Q2 = prompt('Você sabe sobre NODE?')
        if(Q2.toLowerCase() == 'sim'){
            contador = contador + 1;

            console.clear();
            break; // parando caso diga sim

        } else if(Q2.toLowerCase() == 'nao'){ //valindando o não
            console.clear();
            console.log('Ok, proxima pergunta.')
            break;
            
        } else {
            console.log('A resposta precisa ser sim ou nao')
            continue;
        }
        }
        while(true){
        let Q3 = prompt('Você sabe sobre JAVASCRIPT? ')
        if(Q3.toLowerCase() == 'sim'){
            contador = contador + 1;

            console.clear();
            break; // parando caso diga sim

        } else if(Q3.toLowerCase() == 'nao'){ //valindando o não
            console.clear();
            console.log('Ok, proxima pergunta.')
            break;
            
        } else {
            console.log('A resposta precisa ser sim ou nao')
            continue;
        }
        }
            console.clear();
        while(true){
        let Q4 = prompt('Você sabe o que é CSS? ')
        if(Q4.toLowerCase() == 'sim'){
            contador = contador + 1

            console.clear();
            break; // parando caso diga sim

        } else if(Q4.toLowerCase() == 'nao'){ //valindando o não
            console.clear();
            console.log('Ok, proxima pergunta.')
            break;
            
        } else {
            console.log('A resposta precisa ser sim ou nao')
            continue;
        }
        }
            console.clear();
        while(true){
        let Q5 = prompt('Você sabe o que é REACT? ')
        if (Q5.toLowerCase() == 'sim'){
            contador = contador + 1

            console.clear();
            break; // parando caso diga sim

        } else if(Q5.toLowerCase() == 'nao'){ //valindando o não
            console.clear();
            break;
            
        } else {
            console.log('A resposta precisa ser sim ou nao')
            continue;
        }
        }
        if(contador == 1){
            console.log('Seus requisitos não são os melhores.')
        } else if (contador == 2){
            console.log('Você está começando bem! Continua assim!')
        }else if(contador == 3){
            console.log('Hmmm, gostei do seu portifólio, vou entrar em contato!')
        }else if(contador == 4){
            console.log('Muito bom! ja quer tentar fazer umas coisas aqui?')
        }else if(contador == 5){
            console.log('Explendido! Pode começar agora!!')
        }else
    console.log('Beleza, deixa para próxima');

