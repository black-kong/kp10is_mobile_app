<?php
 
// Importing DBConfig.php file.
include 'DBConfig.php';
 
// Creating connection.
 $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 
 // Getting the received JSON into $json variable.
 $json = file_get_contents('php://input');
 
 // decoding the received JSON and store into $obj variable.
 $obj = json_decode($json,true);
 
// Populate User email from JSON $obj array and store into $email.
$email = $obj['email'];
 
// Populate Password from JSON $obj array and store into $password.
$password = $obj['pass'];

//Applying User Login query with email and password match.
$Sql_Query1 = "select * from client where email_client = '$email' and pass_client = '$password' ";
$Sql_Query2 = "select * from pro where email_pro = '$email' and pass_pro = '$password' ";


// Executing SQL Query.
$check1 = mysqli_fetch_array(mysqli_query($con,$Sql_Query1));
$check2 = mysqli_fetch_array(mysqli_query($con,$Sql_Query2));



if(isset($check1)){

 $SuccessLoginMsg = 'Data Matched client';
 
 // Converting the message into JSON format.
$SuccessLoginJson = json_encode($SuccessLoginMsg);
 
// Echo the message.
 echo $SuccessLoginJson ; 

 }
 
 else{
     if(isset($check2)){

 $SuccessLoginMsg = 'Data Matched pro';
 
 // Converting the message into JSON format.
$SuccessLoginJson = json_encode($SuccessLoginMsg);
 
// Echo the message.
 echo $SuccessLoginJson ; 

 }else{
         // If the record inserted successfully then show the message.
$InvalidMSG = 'Invalid Username or Password Please Try Again' ;
 
// Converting the message into JSON format.
$InvalidMSGJSon = json_encode($InvalidMSG);
 
// Echo the message.
 echo $InvalidMSGJSon ;
 
         
     }
 
 
 }
 
 mysqli_close($con);
?>