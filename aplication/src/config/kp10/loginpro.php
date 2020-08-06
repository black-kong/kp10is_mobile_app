<?php include 'DBConfig.php';
$con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);


	$json = file_get_contents('php://input'); 	
	$obj = json_decode($json,true);

	$email = $obj['email'];
	
    $password = $obj['password'];
    
	if($obj['email']!="" ){	
	
    $result= $mysqli->query("SELECT * FROM pro where email_pro='$email' and pass_pro='$password'");

	
		if($result->num_rows==0){


			$InvalidMSG = 'Informations incorrects' ;
 
			// Converting the message into JSON format.
			$InvalidMSGJSon = json_encode($InvalidMSG);
			
			// Echo the message.
			echo $InvalidMSGJSon ;

			
			//echo json_encode();				
		}
		else{	
			$SuccessLoginMsg = 'ok';
 
			$SuccessLoginJson = json_encode($SuccessLoginMsg);
			
			echo $SuccessLoginJson ; 
			

	
		//echo json_encode();				
        }
        
	}	
	else{

		$SuccessLoginMsg = 'Veuillez reessayer';
 
			$SuccessLoginJson = json_encode($SuccessLoginMsg);
			
			echo $SuccessLoginJson ; 
			

	
	  //echo json_encode();
    }
    
    mysqli_close($con);
	
?>