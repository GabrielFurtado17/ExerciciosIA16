<?php
    header('Content-Type: application/json, charset=utf-8');
    
    require_once '../../config/Conexao.php';
    require_once '../../models/Post.php';
    
    if($_SERVER['REQUEST_METHOD'] == 'GET') {
        

        $db = new Conexao();
        $con = $db->getConexao();
        $dados = json_decode(file_get_contents("php://input"));
        $post = new Post($con);

        if(isset($_GET["id"])){
            $resultado = $post->read($_GET["id"]);
        }elseif(isset($_GET["id_categoria"])){
            $resultado = $post->readCat($_GET["id_categoria"]);
        }else{
            $resultado = $post->read();
            
        }
        
        $qtde_post = sizeof($resultado);

        if($qtde_post>0){
            echo json_encode($resultado, JSON_UNESCAPED_UNICODE);
        }else{
            echo json_encode(array('mensagem' => 'nenhuma categoria encontrada'));
        }
    }