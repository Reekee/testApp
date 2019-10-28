<?php
    include_once("config/autoload.php");
    
    $student_id = @$REQUEST->student_id;

    validate($student_id, "กรุณากรอก student_id");

    $checkname_id = $DATABASE->QueryMaxId("checkname", "checkname_id");

    $sql = "
        INSERT INTO checkname (
            checkname_id,
            student_id
        ) VALUES (
            '".$checkname_id."',
            '".$student_id."'
        )
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
    