<?php
    include_once("config/autoload.php");
    
    $user_name = @$REQUEST->user_name;
    $user_lname = @$REQUEST->user_lname;
    $gender_id = @$REQUEST->gender_id;
    $status_id = @$REQUEST->status_id;
    $username = @$REQUEST->username;
    $password = @$REQUEST->password;
    $type_id = @$REQUEST->type_id;

    validate($user_name, "กรุณากรอกชื่อ");
    validate($user_lname, "กรุณากรอก user_lname");
    validate($gender_id, "กรุณากรอก gender_id");
    validate($status_id, "กรุณากรอก status_id");
    validate($username, "กรุณากรอก username");
    validate($password, "กรุณากรอก password");
    validate($type_id, "กรุณากรอก type_id");

    $user_id = $DATABASE->QueryMaxId("user", "user_id");

    $sql = "
        INSERT INTO user (
            user_id,
            user_name,
            user_lname,
            gender_id,
            status_id,
            username,
            password,
            type_id
        ) VALUES (
            '".$user_id."',
            '".$user_name."',
            '".$user_lname."',
            '".$gender_id."',
            '".$status_id."',
            '".$username."',
            '".$password."',
            '".$type_id."'
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
    