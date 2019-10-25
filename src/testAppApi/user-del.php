<?php
    include_once("config/autoload.php");
    
    $user_id = @$REQUEST->user_id;

    validate($user_id, "No user_id");

    $sql = "
        DELETE FROM user WHERE user_id='".$user_id."'
    ";

    if( $DATABASE->Query($sql) ) {
        echo json_encode(array(
            "status"=>true,
        ));
    } else {
        echo json_encode(array(
            "status"=>false,
            "message"=>"ไม่สามารถติดต่อฐานข้อมูลได้"
        ));
    }
    