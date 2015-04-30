<?php 
 
 if (isset($_SERVER['HTTP_X_REQUESTED_WITH']) && (strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest')) {
 if(isset($_POST['email'])){
 $mysql = new PDO('mysql:host=localhost;dbname=viveninfotech', 'root', 'dambo');   
 $time = time();
 $id = md5($time . rand(21, 221) . '#$sr');
 $insert = $mysql->query("INSERT INTO _table_contact_us VALUES(".$mysql->quote($id).", ".$mysql->quote($_POST['name']).", ".$mysql->quote($_POST['email']).", ".$mysql->quote($_POST['subject']).", ".$mysql->quote($_POST['message']).", ".time().")");
 if($insert){
     echo 'Thanks! Your email was successfully sent. We will contact you asap.';
 }else{
     echo 'Somthing went wrong please try again';
 }   
}
else if(isset($_POST['semail'])){
 $mysql = new PDO('mysql:host=localhost;dbname=viveninfotech', 'root', 'dambo');
 $time = time();
 $id = md5($time . rand(21, 221) . '#$sr');
 $insert = $mysql->query("INSERT INTO _table_subscribe (_subscribe_id, _subscribe_email, _subscribe_Tme_Stmp) VALUES(".$mysql->quote($id).", ".$mysql->quote($_POST['semail']).", ".time().")");
 if($insert){
     echo 'You are subscribed viveinfotech successfully!!';
 }else{
     echo 'Somthing went wrong please try again';
 }
}else{
    header("location: /error.php");
}
}else{
    header("location: /error.php");
}


    

?>