<?php
session_start();
$_POST = json_decode(file_get_contents('php://input'), true);
if(isset($_POST) && !empty($_POST)) {
    $username = $_POST['username'];
    $password = $_POST['password'];
    if($username == 'vidyasagar' && $password == 'vidyasagar') {
        $_SESSION['user'] = 'vidyasagar';
        $response['status']   =     true;
        $response['message']  =     "This is the secret no one knows but the admin";

    } else {
        $response['status']   =     false;
        $response['message'] =     "Invalid credentials";
    }
} else {
    $response['status']   =     false;
    $response['message']   =     "Only POST access accepted";
}
echo json_encode($response);
?>