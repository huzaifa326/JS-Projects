function sendMessage() {
	var message = document.getElementById("message").value;
	document.getElementById("output").innerHTML += "<p>" + message + "</p>";
	document.getElementById("message").value = "";
}
