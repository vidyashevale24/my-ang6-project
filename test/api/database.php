<?php
/**
 * Created by PhpStorm.
 * User: neosoft
 * Date: 25/9/18
 * Time: 3:52 PM
 */
session_start();
$user = $_SESSION['user'];
if($user == 'vidyasagar') {
    $response['status'] = true;
    $response['message'] = "This is a secret message only for administrator";

} else {
    $response['status'] = false;
    $response['message'] = "unauthorised user";
}
echo json_encode($response);
?>
