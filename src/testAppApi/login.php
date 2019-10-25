<?php
    include_once("config/autoload.php");
    $username = @$REQUEST->username;
    $password = @$REQUEST->password;
    
    validate($username, "กรุณากรอกชื่อผู้ใช้");
    validate($password, "กรุณากรอกรหัสผ่าน");

    $sql = "
        SELECT
        *
        FROM `user`
        INNER JOIN type ON `user`.type_id = type.type_id
        INNER JOIN `status` ON `user`.status_id = `status`.status_id
        INNER JOIN gender ON `user`.gender_id = gender.gender_id
        WHERE `user`.username='".$username."' AND `user`.password='".$password."'
    ";
    $user = $DATABASE->QueryObj($sql);
    if(sizeof($user)==1) {
        echo json_encode(array(
            "status"=>true,
            "user"=>$user[0]
        ));
    } else {
        echo json_encode(array(
            "status"=>false,
            "message"=>"Login ไม่สำเร็จ"
        ));
    }
    
    
    