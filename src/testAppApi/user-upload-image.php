<?php
    include_once("config/autoload.php"); 

    $base64 = @$REQUEST->base64;

    $dir = 'fileUpload/user/';

    $type = get_type_base64($base64);  // support : jpg, jpeg, png, gif, pdf, doc, docx
    $filename = time().".".$type;
    file_put_contents($dir.$filename, base64_decode(explode(',',$base64)[1]));

    echo json_encode(array(
        "status"=>true,
        "file"=>$filename
    ));

    function get_type_base64($base64) {
        $arr1 = explode(";base64", $base64);
        $arr2 = explode("/", $arr1[0]);
        return convert_ext($arr2[ sizeof($arr2)-1 ]);
    }
    function convert_ext($type) {
        if( $type=="vnd.openxmlformats-officedocument.wordprocessingml.document" ) return "docx";
        if( $type=="msword" ) return "doc";
        return $type;
    }
    
    