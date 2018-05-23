function func1(str){
	alert(str);
}

var message = "Welcome to Neal's Page!"
Window.onload(func1(message));

function func2(){
	var leavePageMessage ="This link will open in a new tab."
	func1(leavePageMessage);
}