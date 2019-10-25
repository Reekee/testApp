<?php
	header('Access-Control-Allow-Origin: *');
	include_once("class.database.php");
	define("host", "localhost");
	define("user", "root");
	define("pass", "");
	define("dbname", "place");
	$DATABASE = new Database(host, user, pass, dbname);
	$POSTDATA = file_get_contents("php://input");
	$REQUEST = json_decode($POSTDATA);

	function validate($data, $message) {
        if( $data=="" ) {
            echo json_encode(array(
                "status"=>false,
                "message"=>$message
            ));
            exit();
        }
    }