function background() {
	var content=document.getElementById('content')
	var localstor=document.getElementById('localstor')
	
	content.style="visibility:visible;transition:all ease 2s;";
	localstor.style="visibility:visible;transition:all ease 2s;";

}

function bgcolorblue() {
	// body...
	document.body.style="background:blue;";
	localStorage.setItem("bg-color","blue")
	document.getElementById("varlocal").innerHTML="bg-color:" + localStorage.getItem("bg-color");
}


function bgcoloryellow() {
	// body...
	document.body.style="background:yellow;";
	localStorage.setItem("bg-color","yellow")
	document.getElementById("varlocal").innerHTML="bg-color:" + localStorage.getItem("bg-color");
}

function bgcolorviolet() {
	// body...
	document.body.style="background:violet;";
	localStorage.setItem("bg-color","violet")
	document.getElementById("varlocal").innerHTML="bg-color:" + localStorage.getItem("bg-color");

}


//BG-COLOR-SELECT
function bgcolor() {
	document.getElementById("varlocal").innerHTML="bg-color:" + localStorage.getItem("bg-color");
	console.log(localStorage.getItem("bg-color"))
	if (localStorage.getItem("bg-color")==="blue") {
		document.body.style="background:blue;";
		
	}
	else if (localStorage.getItem("bg-color")==="yellow") {
		document.body.style="background:yellow;";
	}

	else if (localStorage.getItem("bg-color")==="violet") {
		document.body.style="background:violet;";
	}
	else{
		console.log("else")
		document.body.style="background:white;";
		
	}


}