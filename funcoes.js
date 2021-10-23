var valor1;
var valor2;
var valor3;
var valor4;
var confere=false;
var valortotal1;
var valortotal;

function random1 (){
    //random do jogador 1
    valor1 = Math.floor(Math.random() * 6 + 1  );   
    document.querySelector('.jogada1').innerHTML = 'Valor da 1ª jogada é: '+ valor1;
    var pai = document.querySelector('.jogada1');
    pai.style.display = "block";
    var botao = document.querySelector('#clickMe');
    botao.style.display = "none";
    var botao = document.querySelector('#clickMe1');
    botao.style.display = "block";
  
    chamaDado();
}

function random2 (){
    valor2 = Math.floor(Math.random() * 6 + 1  );   
    document.querySelector('.jogada2').innerHTML = 'Valor da 2ª jogada é: '+ valor2;
    var pai = document.querySelector('.jogada2');
    pai.style.display = "block";
    var botao = document.querySelector('#clickMe1');
    botao.style.display = "none";
    var botao = document.querySelector('#soma');
    botao.style.display = "block";
    chamadado2();
}

function soma(){
    //soma do jogador
    valortotal = valor1 + valor2; 
    document.querySelector('.soma').innerHTML = 'Valor somado é: '+ valortotal;
    var pai = document.querySelector('.soma');
    pai.style.display = "block";
    var pai1 = document.querySelector('.aviso');
    pai1.style.display = "flex";
    confere=true;
    if(confere==true){ 
        let teste = setTimeout(computador1, 3000);
        let teste1 = setTimeout(computador2, 5000);
        let teste2 = setTimeout(computadorSoma, 7000); 
    }
}

function computador1(){
    //random do computador
    //var pai = document.querySelector('.imgjogador');
    //pai.style.display = "none";
    var pai = document.querySelector('.imgcomputador');
    pai.style.display = "block";
     //1 valor do computador randomico
    valor3 = Math.floor(Math.random() * 6 + 1  );   
    document.querySelector('.jogada3').innerHTML = 'Valor da 1ª jogada é: '+ valor3;
    var pai = document.querySelector('.jogada3');
    pai.style.display = "block";
    chamaDado3();   
}
function computador2(){
    //2 valor do computador randomico
    valor4 = Math.floor(Math.random() * 6 + 1  );   
    document.querySelector('.jogada4').innerHTML = 'Valor da 2ª jogada é: '+ valor4;
    var pai = document.querySelector('.jogada4');
    pai.style.display = "block";
    chamaDado4();
}

function computadorSoma(){
   //soma do computador
    valortotal1 = valor3 + valor4; 
    document.querySelector('.soma1').innerHTML = 'Valor somado do computador é: '+ valortotal1;
    var pai = document.querySelector('.soma1');
    pai.style.display = "block";
    confereJogada();
}

function confereJogada(){
    if(valortotal>valortotal1){
        var pai = document.querySelector('.vitoria');
        pai.style.display = "flex";  
    }else  if(valortotal<valortotal1){
        var pai = document.querySelector('.derrota');
        pai.style.display = "flex"; 

    }else  if(valortotal==valortotal1){
        var pai = document.querySelector('.empate');
        pai.style.display = "flex"; 
    }
}

function chamaDado(){
    if(valor1==1){
        document.getElementById("imgJogador").src="img/1.png";
        var pai = document.querySelector('.dadoImgJogador');
        pai.style.display = "block"; 

    }else if(valor1==2){
        document.getElementById("imgJogador").src="img/2.png";
        var pai = document.querySelector('.dadoImgJogador');
        pai.style.display = "block"; 

    }else if(valor1==3){
        document.getElementById("imgJogador").src="img/3.png";
        var pai = document.querySelector('.dadoImgJogador');
        pai.style.display = "block"; 

    }else if(valor1==4){
        document.getElementById("imgJogador").src="img/4.png";
        var pai = document.querySelector('.dadoImgJogador');
        pai.style.display = "block"; 

    }else if(valor1==5){
        document.getElementById("imgJogador").src="img/5.png";
        var pai = document.querySelector('.dadoImgJogador');
        pai.style.display = "block"; 

    }else if(valor1==6){
        document.getElementById("imgJogador").src="img/6.png";
        var pai = document.querySelector('.dadoImgJogador');
        pai.style.display = "block"; 

    }
  
}
function chamadado2(){
  //dado 2
  if(valor2==1){
    document.getElementById("imgJogador2").src="img/1.png";
    var pai = document.querySelector('.dadoImgJogador2');
    pai.style.display = "block"; 

    }else if(valor2==2){
        document.getElementById("imgJogador2").src="img/2.png";
        var pai = document.querySelector('.dadoImgJogador2');
        pai.style.display = "block"; 

    }else if(valor2==3){
        document.getElementById("imgJogador2").src="img/3.png";
        var pai = document.querySelector('.dadoImgJogador2');
        pai.style.display = "block"; 

    }else if(valor2==4){
        document.getElementById("imgJogador2").src="img/4.png";
        var pai = document.querySelector('.dadoImgJogador2');
        pai.style.display = "block"; 

    }else if(valor2==5){
        document.getElementById("imgJogador2").src="img/5.png";
        var pai = document.querySelector('.dadoImgJogador2');
        pai.style.display = "block"; 

    }else if(valor2==6){
        document.getElementById("imgJogador2").src="img/6.png";
        var pai = document.querySelector('.dadoImgJogador2');
        pai.style.display = "block"; 

    }
}

function chamaDado3(){
    if(valor3==1){
        document.getElementById("imgComputador").src="img/1.png";
        var pai = document.querySelector('.dadoImgComputador');
        pai.style.display = "block"; 

    }else if(valor3==2){
        document.getElementById("imgComputador").src="img/2.png";
        var pai = document.querySelector('.dadoImgComputador');
        pai.style.display = "block"; 

    }else if(valor3==3){
        document.getElementById("imgComputador").src="img/3.png";
        var pai = document.querySelector('.dadoImgComputador');
        pai.style.display = "block"; 

    }else if(valor3==4){
        document.getElementById("imgComputador").src="img/4.png";
        var pai = document.querySelector('.dadoImgComputador');
        pai.style.display = "block"; 

    }else if(valor3==5){
        document.getElementById("imgComputador").src="img/5.png";
        var pai = document.querySelector('.dadoImgComputador');
        pai.style.display = "block"; 

    }else if(valor3==6){
        document.getElementById("imgComputador").src="img/6.png";
        var pai = document.querySelector('.dadoImgComputador');
        pai.style.display = "block"; 

    }
  
}


function chamaDado4(){
    if(valor4==1){
        document.getElementById("imgComputador2").src="img/1.png";
        var pai = document.querySelector('.dadoImgComputador2');
        pai.style.display = "block"; 

    }else if(valor4==2){
        document.getElementById("imgComputador2").src="img/2.png";
        var pai = document.querySelector('.dadoImgComputador2');
        pai.style.display = "block"; 

    }else if(valor4==3){
        document.getElementById("imgComputador2").src="img/3.png";
        var pai = document.querySelector('.dadoImgComputador2');
        pai.style.display = "block"; 

    }else if(valor4==4){
        document.getElementById("imgComputador2").src="img/4.png";
        var pai = document.querySelector('.dadoImgComputador2');
        pai.style.display = "block"; 

    }else if(valor4==5){
        document.getElementById("imgComputador2").src="img/5.png";
        var pai = document.querySelector('.dadoImgComputador2');
        pai.style.display = "block"; 

    }else if(valor4==6){
        document.getElementById("imgComputador2").src="img/6.png";
        var pai = document.querySelector('.dadoImgComputador2');
        pai.style.display = "block"; 

    }
  
}
var valor_escolhido;
var value;
var par_impar
//jogo dos dados
function valores_user(){
    par_impar = document.querySelector('input[name="preferencia"]:checked').value;
    console.log(par_impar);
    var e = document.getElementById("numero-s");
    value = e.options[e.selectedIndex].value;
}
function computador_par1(){ 
    valor_escolhido = Math.floor(Math.random() * 10 + 1  );   
    document.querySelector('.jogadaC').innerHTML = 'Número escolhido é: '+ valor_escolhido;   
}

function soma_valida(){
   var soma_total = parseInt(value) + parseInt(valor_escolhido);

   if (soma_total % 2 === 0){
        var valida = 'par';
        if(valida== par_impar){
            alert('Você Venceu!');
        }else{
            alert('Você Perdeu!');
        }
   }else{
        var valida = 'impar';
        if(valida== par_impar){
            alert('Você Venceu!');
        }else{
            alert('Você Perdeu!');
        }
   }
   

}
// codigo para o game PEDRA PAPEL OU TESOURA

var pedra_tesoura;
var valor;
function valores_user(){
    pedra_tesoura = document.querySelector('input[name="preferencia2"]:checked').value;
    console.log(pedra_tesoura);
   
}
function computador_pedra(){ 
    valor_escolhido = Math.floor(Math.random() * 3 + 1  ); 
    if(valor_escolhido == 1){
        valor ='pedra';
        document.querySelector('.jogadaC').innerHTML = 'computador escolheu '+ valor;  
    } else if(valor_escolhido == 2){
        valor ='papel';
        document.querySelector('.jogadaC').innerHTML = 'computador escolheu '+ valor;  
    } else if(valor_escolhido == 3){
        valor ='tesoura';
        document.querySelector('.jogadaC').innerHTML = 'computador escolheu '+ valor;  
    }  
     
}

function valida_pedra(){
    if(pedra_tesoura == valor){
        if(valor=='pedra'){
            document.getElementById("jogador-img-d").src="img/pedra.png";
            document.getElementById("computador-img-d").src="img/pedra.png";
            document.querySelector('.escolha_p').innerHTML = 'Empate!';
            var pai = document.querySelector('#escolha_r');
            pai.style.display = "block"; 
            
        }else if(valor=='papel'){
            document.getElementById("jogador-img-d").src="img/papel.png";
            document.getElementById("computador-img-d").src="img/papel.png";
            document.querySelector('.escolha_p').innerHTML = 'Empate!';
            var pai = document.querySelector('#escolha_r');
            pai.style.display = "block"; 
            
        }
        if(valor=='tesoura'){
            document.getElementById("jogador-img-d").src="img/tesoura.png";
            document.getElementById("computador-img-d").src="img/tesoura.png";
            document.querySelector('.escolha_p').innerHTML = 'Empate!';
            var pai = document.querySelector('#escolha_r');
            pai.style.display = "block"; 
            
        }
    }else if(pedra_tesoura =='pedra' && valor =='papel'){
        document.getElementById("jogador-img-d").src="img/pedra.png";
        document.getElementById("computador-img-d").src="img/papel.png";
        document.querySelector('.escolha_p').innerHTML = 'Você Perdeu!';
        var pai = document.querySelector('#escolha_r');
        pai.style.display = "block"; 
    }else if (pedra_tesoura =='papel' && valor == 'pedra'){
        document.getElementById("jogador-img-d").src="img/papel.png";
        document.getElementById("computador-img-d").src="img/pedra.png";
        document.querySelector('.escolha_p').innerHTML = 'Você Venceu!';
        var pai = document.querySelector('#escolha_r');
        pai.style.display = "block"; 
    }else if (pedra_tesoura =='tesoura' && valor == 'pedra'){
        document.getElementById("jogador-img-d").src="img/tesoura.png";
        document.getElementById("computador-img-d").src="img/pedra.png";
        document.querySelector('.escolha_p').innerHTML = 'Você Perdeu!';
        var pai = document.querySelector('#escolha_r');
        pai.style.display = "block"; 
    }else if (pedra_tesoura =='pedra' && valor == 'tesoura'){
        document.getElementById("jogador-img-d").src="img/pedra.png";
        document.getElementById("computador-img-d").src="img/tesoura.png";
        document.querySelector('.escolha_p').innerHTML = 'Você Venceu!';
        var pai = document.querySelector('#escolha_r');
        pai.style.display = "block";
    }
    else if (pedra_tesoura =='tesoura' && valor == 'papel'){
        document.getElementById("jogador-img-d").src="img/tesoura.png";
        document.getElementById("computador-img-d").src="img/papel.png";
        document.querySelector('.escolha_p').innerHTML = 'Você Venceu!';
        var pai = document.querySelector('#escolha_r');
        pai.style.display = "block";
    }
    else if (pedra_tesoura =='papel' && valor == 'tesoura'){
        document.getElementById("jogador-img-d").src="img/papel.png";
        document.getElementById("computador-img-d").src="img/tesoura.png";
        document.querySelector('.escolha_p').innerHTML = 'Você Perdeu!';
        var pai = document.querySelector('#escolha_r');
        pai.style.display = "block";
    }
}