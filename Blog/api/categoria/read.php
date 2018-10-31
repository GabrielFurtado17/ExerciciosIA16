<?php

	header('Acess-Control-Allow-Origin: *');
	header('Content-Type: application/json');
	
	require_once '../../config/Conexao.php';
	require_once '../../models/Categoria.php';

    if($_SERVER['REQUEST_METHOD'] == 'GET') {
        
        $db = new Conexao();
        $con = $db->getConexao();

        $categoria = new Categoria($con);
        if(!isset($_GET["id"])){
            $resultado = $categoria->read();
        }
        else{
            $resultado = $categoria->read($_GET["id"]);
        }
        $qtde_cats = sizeof($resultado);

        if($qtde_cats>0){
            echo json_encode($resultado, JSON_UNESCAPED_UNICODE);
        }else{
            echo json_encode(array('mensagem' => 'nenhuma categoria encontrada'));
        }
    }
	