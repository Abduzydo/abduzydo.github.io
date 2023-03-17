//var myHtml = document.querySelector('html')
//myHtml.onclick = function () {
//	alert('Karyū no Hōkō');
//}

var myBody = document.querySelector('body')
var my_button1 = document.getElementById('mudaCor')
my_button1.onclick = function(){
	var myColor = prompt('Digite a nova cor:')
	myBody.style.backgroundColor = myColor;
}

