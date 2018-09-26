<?php

class Post{
    public $id;
    public $titulo;
    public $texto;
    public $categoria;
    public $autor;
    public $dt_criacao;

    private $conexao;

    public function __construct($con){
        $this->conexao = $con;
    }
    
    public function read($id=null){
        try{
            $query='SELECT * FROM post ';
            if(isset($id)){
                $get=$this->conexao->prepare($query. 'WHERE id=?');
                $get->bindParam(1,$id,PDO::PARAM_INT);
            }else{
                $get=$this->conexao->prepare($query);
            }
            $get->execute();
            if($get->rowCount()==0){
                die(json_encode(['error'=>'Nada foi encontrado','method'=>'read']));
            }
            echo 'mane';
            die(json_encode($get->fetchAll(PDO::FETCH_ASSOC)));
        }catch(PDOException $e){
            die(json_encode(['error'=>$e->getMessage(),'method'=>'read']));
        }
    }
}
