<?php include 'DBConfig.php';

	$json = file_get_contents('php://input'); 	
	$obj = json_decode($json,true);

	$email = $obj['email'];
	
	$password = $obj['password'];
	
	if($obj['email']!=""){	
	
	$result= $mysqli->query("SELECT * FROM users where email='$email' and password='$password'");
	
		if($result->num_rows==0){
			echo json_encode('Informations incorrects');				
		}
		else{		
		echo json_encode('ok');				
		}
	}	
	else{
	  echo json_encode('Veuillez reessayer');
	}
?>

