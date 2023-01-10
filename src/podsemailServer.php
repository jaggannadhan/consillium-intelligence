<?php
header("Access-Control-Allow-Origin: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if (empty($_POST['fname']) && empty($_POST['email'])) die();

if ($_POST)
	{

	// set response code - 200 OK

	http_response_code(200);
	$subject = $_POST['name'];
	$to = "jeff@socialfix.com";
	$from = $_POST['email'];

	// data
    $msg = '<p>Name : '. $_POST['name'].'</p>';
	$msg .= '<p>Company : '.$_POST['company'].'</p>';
	$msg .= '<p>Phone : '.$_POST['phone'].'</p>';
	$msg .= '<p>Email : '.$_POST['email'].'</p>';
	$msg .= '<p>Position : '.$_POST['position'].'</p>';
$msg .= '<p>Message : '.$_POST['message'].'</p>';
	// Headers

	$headers = "MIME-Version: 1.0\r\n";
	$headers.= "Content-type: text/html; charset=UTF-8\r\n";
	$headers.= "From: <" . $from . ">";
	mail($to, $subject, $msg, $headers);

	// echo json_encode( $_POST );

	$json = json_encode(array(
		"sent" => true
    ));
    echo($json);
	}
  else
	{

	// tell the user about error

    $json =json_encode(["sent" => false, "message" => "Something went wrong"]);
    echo($json);
	}

?>