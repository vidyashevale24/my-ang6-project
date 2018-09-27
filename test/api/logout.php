<?php
/**
 * Created by PhpStorm.
 * User: neosoft
 * Date: 27/9/18
 * Time: 2:27 PM
 */

session_start();
unset($_SESSION);
session_destroy();
$response['status'] = true;
echo json_encode($response);