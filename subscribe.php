<?php

header('Content-Type: application/json');

require('MailChimp.class.php');

$mc = new MailChimp('4b1b12f13d924bbfb151ba60c1bb63e7-us7');

$email = isset($_POST['email']) ? trim($_POST['email']) : FALSE;

if (empty($email)) {
	
	echo json_encode(array('code' => 'ERR', 'message' => 'Please enter a valid email'));
	exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
	
	echo json_encode(array('code' => 'ERR', 'message' => 'Please enter a valid email'));
	exit;
} 

$result = $mc->call('lists/subscribe', array(
	'id'                => '314be918d5',
	'email'             => array('email'=> $email),
	'merge_vars'		  => NULL,
	'email_type'			=> 'html', 
	'double_optin'      => false,
	'update_existing'   => true,
	'replace_interests' => false,
	'send_welcome'      => false,
));

if (isset($result['email'], $result['euid'])) {
	
	echo json_encode(array('code' => 'OK', 'message' => 'Thanks, email added to list.'));
}
else {
	
	echo json_encode(array('code' => 'ERR', 'message' => 'Unexpected error, kindly try again.'));
}
