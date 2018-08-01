function makeActive(c){
	var x, y;
	if(c != 'all'){
		y = document.getElementById(c);
		if(y.className != "btnActive"){
			buttonOn(c);
			buttonOff('all');
		}
		else{
			buttonOff(c);
			if(document.getElementsByClassName("btnActive").length < 1){
				buttonOn('all');
			}
		}
	}
	else{
		disableAll();
		disableCheckBoxes();
		y = document.getElementById("more");
		y.className = "moreBtn";
		swapArrow('arrow');
		buttonOn('all');
	}

}

function moreOnClick(c){
	showDropDown();
	makeActive(c);
}

function showDropDown(){
	document.getElementById("dropdown").classList.toggle("show");
	document.getElementById("arrow").className = "arrow arrowAnimateUp";
}

window.addEventListener('mouseup', function(event){
	var box = document.getElementById("dropdown");
	var temp = checkIfMarked();
	if(event.target != box && event.target.parentNode != box){
		box.classList.remove("show");
		var arrow =document.getElementById("arrow");
		arrow.className = "arrow arrowBottom";
		if(!temp){
			swapArrow('arrow');
			buttonOff('more');
			if(!checkIfAny()){
			buttonOn('all');
			}
		}
		else{
			swapArrow(' ');
		}
	}
});

function buttonOn(c){
	var x;
	x = document.getElementById(c);
	if(c != 'more'){
		x.className = "btnActive";
	}
	else{
		x.className = "moreBtnActive";
	}
}

function buttonOff(c){
	var x;
	x = document.getElementById(c);
	if(c != 'more'){
		x.className = "btn";
	}
	else{
		x.className = "moreBtn";
	}
}

function disableAll(){
	x = document.getElementsByClassName("btn");
	for(var y = 0; y < x.length; y++){
		var current = document.getElementsByClassName("btnActive");
		if(current[0] != null){
			current[0].className = "btn";
		}
	}
}

function onlyClick(c){
	var x;
	x = document.getElementById(c);
	disableAll();
	buttonOff('all');
	buttonOn('more');
	disableCheckBoxes();
	x.checked = true;
	swapArrow(' ');
	document.getElementById("dropdown").classList.toggle("show");
}

function disableCheckBoxes(){
	var x = document.getElementsByTagName("input");
	for(var i = 0; i < x.length; i++){
		if(x[i].type == 'checkbox'){
			if(x[i].checked == true){
				x[i].checked = false;
			}
		}
	}
}

function checkIfMarked(){
	var x = document.getElementsByTagName("input");
	var y = false;
	for(var i = 0; i < x.length; i++){
		if(x[i].checked == true){
			y = true;
		}
	}
	return y;
}

function checkIfAny(){
	x = document.getElementsByClassName("btnActive");
	if(x.length > 0){
		return true;
	}
	else{
		return false;
	}
}

function buttonXClick(e) {
   if (!e) e = window.event;
   e.stopPropagation();
   disableCheckBoxes();
   swapArrow('arrow');
   buttonOff('more');
   if(!checkIfAny()){
   	buttonOn('all');
   }
}

function swapArrow(keyWord){
	var buttonX = document.getElementById("buttonX");
	var arrow =document.getElementById("arrow");
	if(keyWord == "arrow"){
		arrow.style.display = "inline-block";
		buttonX.style.display = "none";
	}
	else{
		arrow.style.display = "none";
		buttonX.style.display = "inline-block";
	}
}