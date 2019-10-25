<?php
    include_once("config/autoload.php");

    $search = @$REQUEST->search;

    $sql = "
        SELECT *
        FROM `user`
            INNER JOIN type ON `user`.type_id = type.type_id
            INNER JOIN `status` ON `user`.status_id = `status`.status_id
            INNER JOIN gender ON `user`.gender_id = gender.gender_id
        WHERE `user`.user_name LIKE '%".$search."%' OR
            `user`.user_lname LIKE '%".$search."%'
    ";
    $users = $DATABASE->QueryObj($sql);
    echo json_encode(array(
        "status"=>true,
        "users"=>$users
    ));
    
    
    