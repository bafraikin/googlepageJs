/////////////////EX01 /////////////

let googleVar = document.getElementsByClassName('hide');
let Mangetesmort = document.getElementById("magic");
let buttonSearch = document.getElementById("searchbut");

Mangetesmort.onclick = function() {
document.getElementsByClassName("hide")[0].style.display = "block" ;
Mangetesmort.style.display = 'none' ;
}

//////////// EX02 //////////

buttonSearch.onclick = function() {
let mots = document.getElementById("search").value;
let motArray = mots.split(" ");
let url = "https://www.google.fr/#q=";

motArray.forEach(function(element,index) {
	if (index === 0) {
	url = url + element;
	}
	else {
		url = url + "+" + element;
	}
buttonSearch.href = url;
}); 	
}

///////////////// EX0 3///////////////


let popUp= function() {
	alert("ce site de boule est vraiment top.\n\nhttps://www.petanqueshop.com/boules-de-petanque.html");
};
setTimeout(popUp, 10000);
