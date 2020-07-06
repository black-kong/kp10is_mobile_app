
<?php include 'db.php';

$json = file_get_contents('php://input'); 	
$obj = json_decode($json,true);

$email = $obj['email'];

$password = $obj['password'];

if($obj['email']!=""){	

$result1= $mysqli->query("SELECT * FROM client  where email='$email' and password='$password'");
$result2= $mysqli->query("SELECT * FROM adm  where email='$email' and password='$password'");
$result3= $mysqli->query("SELECT * FROM compta  where email='$email' and password='$password'");
$result4= $mysqli->query("SELECT * FROM prod  where email='$email' and password='$password'");





    if($result1->num_rows==0 & $result2->num_rows==0 & $result3->num_rows==0){
        echo json_encode('Identifiant ou Mot de passe incorrect');				
    }
    else{	
      if($result1->num_rows!=0 ){
        echo json_encode('ok');

      }
      if($result2->num_rows!=0){
        echo json_encode('ok');

      }
      if($result3->num_rows!=0){
        echo json_encode('ok');

      }
      if($result4->num_rows!=0){
        echo json_encode('ok');

      }
				
    }
}	
else{
  echo json_encode('Entrez le mail');
}

?>