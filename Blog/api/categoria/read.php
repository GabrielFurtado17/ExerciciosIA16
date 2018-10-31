<?php

	header('Acess-Control-Allow-Origin: *');
	header('Content-Type: application/json; charset=utf-8');
	
	require_once '../../config/Conexao.php';
	require_once '../../models/Categoria.php';

	$db = new Conexao();
	$con = $db->getConexao();

    $categoria = new Categoria($con);

    //VERIFICAR SE ESTÁ CHEGANDO UM ID POR GET. SE CHEGAR, DEVER CHAMAR read($id), SENAO, CHAMA read()
    $resultado = $categoria->read();

    $qtde_cats = sizeof($resultado);

    if($qtde_cats>0){
        // $arr_categorias = array();
        // $arr_categorias['data'] = array();

        echo json_encode($resultado);
    }else{
        echo json_encode(array('mensagem' => 'nenhuma categoria encontrada'));
    }