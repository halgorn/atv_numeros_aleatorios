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
    <title>JOGO DOS PARES</title>
  </head>
  <body>   
    <div class="container">
        <h3 id="titulo-dados">JOGO DOS PARES</h3>
        <div class="row"> 
            <div id="container-principal" class="col">
                <div class="Jogador">
                    <div class="imgjogador">
                        <img src="img/jogador.png"  >
                        <p>Jogador </p>
                    </div>
                    <div class="escolha-par">
                        <div  class="numeros-s">
                            <p>Escolha um número abaixo</p>
                            <select name="select" id="numero-s">
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2" selected>2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                        </div>
                        <div class="par-impar">
                            <p>Escolha par ou ímpar</p>
                            <div class="form-div">
                                <input type="radio" id="impar" name="preferencia" value="impar">
                                <label for="par">Ímpar</label>
                            </div>
                            <div class="form-div">
                                <input type="radio" id="par" name="preferencia" value="par" checked="checked">
                                <label for="par">Par</label>
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
                            <p>Escolha do computador par ou ímpar</p>
                            <p class="jogadaP" ></p>
                        </div>
                    </div>
                    <div class="jogada">
                        
                    </div>  
                </div>   
            </div>
            <div class="lateral-baixo">
                    <div class="botao">
                        <input id="clickMe" type="button" class = "btn btn-info" value = "Jogada 1"onclick="valores_user();computador_par1();soma_valida();" /> 
                        <a href="index.php" class="btn btn-info">Voltar para o Inicio</a>
                    </div>
                    
                    <div class="soma-valores">
                        <div class="soma" style="display:none;" >
                            <p>valor somado:</p>
                        </div>
                        <div id="aviso"class="aviso" style="display:none;">
                            <p>Computador está jogando os dados</p>
                        </div>
                        <div class="soma1" style="display:none;" >
                            <p>valor somado do computador:</p>
                        </div>
                    </div>
                    <div class="Resultado">
                        <div id="vitoria" class="vitoria" style="display:none;">
                                <h2>Você Venceu!</h2>
                            </div>
                        </div>
                        <div id="derrota"class="derrota" style="display:none;">
                            <h2>Você Perdeu!</h2>
                        </div>
                        <div id="empate" class="empate" style="display:none;">
                            <h2>Empate com o computador!</h2>
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