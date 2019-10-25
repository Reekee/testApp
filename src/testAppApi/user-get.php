<?php
    include_once("config/autoload.php");

    $user_id = @$REQUEST->user_id;

    $sql = "
        SELECT *
        FROM `user`
        WHERE user_id='".$user_id."'
    ";
    $users = $DATABASE->QueryObj($sql);

    $genders = $DATABASE->QueryObj("SELECT * FROM gender");
    $statuss = $DATABASE->QueryObj("SELECT * FROM status");
    $types = $DATABASE->QueryObj("SELECT * FROM type");

    if( sizeof($users)==1 ) {
        echo json_encode(array(
            "status"=>true,
            "user"=>$users[0],
            "genders"=>$genders,
            "statuss"=>$statuss,
            "types"=>$types,
        ));
    } else {
        echo json_encode(array(
            "status"=>false,
            "message"=>"No user."
        ));
    }
