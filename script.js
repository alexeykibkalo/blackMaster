var login  = prompt('Введи логин');

if (login == 'Админ'){	
	
	var pass = prompt('Пароль?');
		
	if (pass == 'Черный Властелин')
		alert('Добро пожаловать!'); 
	else{
		if(pass)
			alert('Пароль неверен');
		else
			alert('Вход отменен');
	}
}
else{	
	if(login)
		alert('Я вас не знаю');
	else
		alert('Вход отменен');
}
