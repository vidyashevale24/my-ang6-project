<?php
/**
 * Created by PhpStorm.
 * User: neosoft
 * Date: 26/9/18
 * Time: 2:24 PM
 */
session_start();
if(isset($_SESSION['user']))
    $response['status'] = true;
else
    $response ['status'] = false;

echo json_encode($response);