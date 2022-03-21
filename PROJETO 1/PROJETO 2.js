console.clear();

const prompt = require('prompt-sync')();


console.log('Bem vindo ao JokenPo!');

console.log();

console.log('Gostaria de jogar uma partida de JokenPô?');

console.log();

console.log('Digite [S] ou [N]')

let play = prompt();

console.clear();

while(true){
    if(play.toLowerCase() == 's'){

        // na array foi criado um número 0 para poder ficar entre 1 e 3 as escolhas do computador.
        do {
            let partidas = prompt('Quantas partidas você quer jogar?');
            for (let i = 0; i < partidas ; i++){

                let escolha = ['pedra', 'papel', 'tesoura' ];
                let pontoscomputador = 0;
                let pontosusuario = 0;
                console.log('Escolhe = PEDRA - PAPEL - TESOURA');

                console.log();
                let usuarioescolha = prompt();
                console.clear();
                
                while(true){
                    if(usuarioescolha.toUpperCase() == 'PEDRA'){
                        usuarioescolha = escolha[0];
                        break;

                    }else if(usuarioescolha.toUpperCase() == 'PAPEL'){
                        usuarioescolha = escolha[1];
                        break;
                    
                    }else if(usuarioescolha.toUpperCase() == 'TESOURA'){
                        usuarioescolha = escolha[2];
                        break;
                    } else 
                        console.log('Resposta invalida.')
                        usuarioescolha = prompt('Digite novamente: ')
                        continue;
                } 
                //criando um número aleatório para o pc porder entrar na partida entre 1 e 3.
                //e criando um valor para a sua escolha dentro do array

                    let numaleatorio = Math.floor(Math.random(escolha) * 3 );
                    let computadorescolha = escolha[numaleatorio];       
                    console.log(`Você escolheu ${usuarioescolha} e o computador ${computadorescolha}`);

                        if(usuarioescolha == 'pedra' && computadorescolha == 'papel'){
                            console.log('Você escolheu pedra, e computador papel.');
                            console.log('Infelizmente você perdeu a rodada.');
                            
                            pontoscomputador = +1;

                        } else if(usuarioescolha == 'pedra' && computadorescolha == 'tesoura'){
                            console.log('Você escolheu pedra, e computador tesoura.');
                            console.log('Parabéns, você ganhou a rodada.');

                            pontosusuario = +1;

                        }else if(usuarioescolha == 'papel' && computadorescolha == 'pedra'){
                            console.log('Você escolheu papel, e computador pedra.');
                            console.log('Parabéns, você ganhou a rodada.');

                            pontosusuario = +1;

                        }else if(usuarioescolha == 'papel' && computadorescolha == 'tesoura'){
                            console.log('Você escolheu papel, e computador tesoura.');
                            console.log('Infelizmente você perdeu a rodada.');

                            pontoscomputador = +1;

                        }else if (usuarioescolha == 'tesoura' && computadorescolha == 'pedra'){
                            console.log('Você escolheu tesoura, e computador pedra.');
                            console.log('Infelizmente você perdeu a rodada.');

                            pontoscomputador = +1;

                        }else if (usuarioescolha == 'tesoura' && computadorescolha == 'papel'){
                            console.log('Você escolheu tesoura, e computador papel.');
                            console.log('Parabéns, você ganhou a rodada.');

                            pontosusuario = +1;
                        }else 
                            console.log('Vocês empataram!')            

                            if(pontoscomputador < pontosusuario){
                                console.log(`Parabéns, você fez ${pontosusuario} ponto(s), você ganhou!`)
                            } else if(pontoscomputador > pontosusuario){
                            console.log(`O computador fez ${pontoscomputador} ponto(s), você perdeu!`)
                            
                            }else
                            console.log(`O computador fez ${pontoscomputador} pontos, você fez ${pontosusuario}, foi um empate!`)
                            
            }
        
          var repetir = prompt('Para jogar novamente [S], ou qualquer tecla para sair.').toUpperCase(); 

        } while (repetir == 'S')    
       

            break;
    } else if(play.toLowerCase() == 'n'){
        console.log('Então deixa para a próxima! Obrigado.')
        break;
    }else 
        console.log('A resposta precisa ser S ou N')
        play = prompt('S ou N?')
        continue
}