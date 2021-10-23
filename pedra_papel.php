<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet" >
    <link href="style.css" rel="stylesheet" >
    <script type="text/javascript" src="funcoes.js"></script>
    <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Anton" />
    <title>JOGO PEDRA PAPEL TESOURA</title>
  </head>
  <body>   
    <div class="container">
        <h3 id="titulo-dados">JOGO PEDRA PAPEL TESOURA</h3>
        <div class="row"> 
            <div id="container-principal" class="col">
                <div class="Jogador">
                    <div class="imgjogador">
                        <img src="img/jogador.png"  >
                        <p>Jogador </p>
                    </div>
                    <div class="escolha-par">
                    
                        <div class="pedra-papel">
                            <p>Escolha Pedra, Papel ou Tesoura</p>
                            <div class="form-div">
                                <img   id="pmg" src="img/pedra.png" alt="HTML tutorial" >
                                <input type="radio" id="pedra" name="preferencia2" value="pedra">
                                <label for="par">Pedra</label>
                            </div>
                            <div class="form-div">
                                <img  id="pmg" src="img/papel.png" alt="HTML tutorial" >
                                <input type="radio" id="papel" name="preferencia2" value="papel" checked="checked">
                                <label for="par">Papel</label>
                            </div>
                            <div class="form-div">
                                <img  id="pmg" src="img/tesoura.png" alt="HTML tutorial" >
                                <input type="radio" id="tesoura" name="preferencia2" value="tesoura" checked="checked">
                                <label for="par">Tesoura</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="Computador">
                    <div class="imgcomputador">
                        <img src="img/computador.png" alt="HTML tutorial" >
                        <p>Computador</p>
                    </div>
                    <div class="escolha-par">
                        <div  class="numeros-s">
                            <p>Escolha do computador</p>
                            <p class="jogadaC" ></p>
                        </div>
                        <div class="par-impar">
                            <p>Escolha do computador pedra, papel ou tesoura</p>
                            <p class="jogadaP" ></p>
                        </div>
                    </div>
                    <div class="jogada">
                    </div>  
                </div>   
            </div>
            <div class="lateral-baixo">
                    <div class="botao">
                        <input id="clickMe" type="button" class = "btn btn-info" value = "Jogada 1"onclick="valores_user();computador_pedra();valida_pedra();" /> 
                        <a href="index.php" class="btn btn-info">Voltar para o Inicio</a>
                    </div>
                    <div class="Resultado" id="Resultado">
                        <div id="escolha_r" class="vitoria" style="display:none;">
                                <h2 class="escolha_p"></h2>
                                <div class="resultado-img">
                                    <img  id="jogador-img-d" src="img/computador.png">
                                    <p> VS </p>
                                    <img id="computador-img-d" src="img/computador.png">
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>

    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <!--
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js" integrity="sha384-SR1sx49pcuLnqZUnnPwx6FCym0wLsk5JZuNx2bPPENzswTNFaQU1RDvt3wT4gWFG" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js" integrity="sha384-j0CNLUeiqtyaRmlzUHCPZ+Gy5fQu0dQ6eZ/xAww941Ai1SxSY+0EQqNXNE6DZiVc" crossorigin="anonymous"></script>
    -->
  </body>
</html>