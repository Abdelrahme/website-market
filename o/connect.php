<?php
echo "hello";
$conn=new mysqli("localhost","root","","online market");
if($conn->connect_error){
    die("Connection Failed : ". $conn->connect_error);
}
?>

