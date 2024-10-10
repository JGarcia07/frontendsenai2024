<?php
//dizer qual o host da minha conexao
$host = "localhost";
//dizer qual o ususario que vai acessar o banco de dados
$user = "root";
//a senha deste banco de dados
$senha = "";
//o nome do banco de dados
$bd = "sistema";

//criar a nossa conexao 
$conexao = new mysqli($host, $user, $senha, $bd);

//verificação da conexao
if ($conexao -> connect_error){
    
} else{
    
}
?>