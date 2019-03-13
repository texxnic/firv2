
<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Document</title>
</head>
<body>
<?php 
	if(isset($_POST['email'])){
	    $to = "info@firbo.ru"; // this is your Email address
	    $from = $_POST['email']; // this is the sender's Email address
	    $first_name = $_POST['firstname'];
	    $phone = $_POST['tel'];
	    $company = $_POST['company'];
	    $question = $_POST['question'];
	    
	    
	    	$subject = "Запрос с контактной формы сайта firbo.ru";
		    $message = $first_name .  " написал: " . $question . "\r\n";
		    if (!empty($_POST['company'])) {
		    	 $message =  $message . "Компания: " . $company . "\r\n";
		    }
		    if (!empty($_POST['email'])) {
		    	 $message =  $message . "Email: " . $from . "\r\n";
		    }
		    if (!empty($_POST['tel'])) {
		    	 $message =  $message . "Телефон: " . $phone . "\r\n";
		    }
	    
	    
	    

	    $headers = "From:" . $from;
	    $headers2 = "From:" . $to;
	    mail($to,$subject,$message,$headers);
	    
	    echo "Спасибо " . $first_name . ", скоро с вами свяжутся.";
	    
		}
		
	?>

<a href="javascript:history.go(-1)">
	<button>Вернуться обратно</button>
</a>
</body>
</html>

