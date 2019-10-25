<?php
    include_once("config/autoload.php");
    
    $user_id = @$REQUEST->user_id;
    $user_name = @$REQUEST->user_name;
    $user_lname = @$REQUEST->user_lname;
    $gender_id = @$REQUEST->gender_id;
    $status_id = @$REQUEST->status_id;
    $username = @$REQUEST->username;
    $password = @$REQUEST->password;
    $type_id = @$REQUEST->type_id;

    validate($user_id, "No user_id");
    validate($user_name, "กรุณากรอกชื่อ");
    validate($user_lname, "กรุณากรอก user_lname");
    validate($gender_id, "กรุณากรอก gender_id");
    validate($status_id, "กรุณากรอก status_id");
    validate($username, "กรุณากรอก username");
    validate($password, "กรุณากรอก password");
    validate($type_id, "กรุณากรอก type_id");

    $sql = "
        UPDATE user SET
            user_name='".$user_name."',
            user_lname='".$user_lname."',
            gender_id='".$gender_id."',
            status_id='".$status_id."',
            username='".$username."',
            password='".$password."',
            type_id='".$type_id."'
        WHERE user_id='".$user_id."'
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
    