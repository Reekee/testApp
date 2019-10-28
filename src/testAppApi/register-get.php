<?php
    include_once("config/autoload.php");
    
    $genders = $DATABASE->QueryObj("SELECT * FROM gender");
    $statuss = $DATABASE->QueryObj("SELECT * FROM status");
    $types = $DATABASE->QueryObj("SELECT * FROM type WHERE type_id!='1'");

    echo json_encode(array(
        "status"=>true,
        "genders"=>$genders,
        "statuss"=>$statuss,
        "types"=>$types,
    ));
    
    
    