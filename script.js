//---------------------------------------------- Smooth Scroll ------------------------------------------
var scroller = function(distance){
	var cur = 0;

	function scroll(){
		if((cur+50)<distance){
			cur+=50;
			scrollBy(0, 50);
		}
		else{
			scrollBy(0,distance-cur);
			clearInterval(id);
			return;
		}
	};
	var id = setInterval(scroll, 15);
	
}

var sectionId = document.querySelectorAll(".nav-sec a");
//console.log(sectionId);


for(var i = 0;i<sectionId.length;i++){
	sectionId[i].addEventListener("click", function(event){
		event.preventDefault();
		var section = this.innerText.trim().toLowerCase();
		scroller(document.getElementById(section).offsetTop);
	});
}

//---------------------------------------------Skill animation----------------------------------------------

var progressBar = document.getElementsByClassName("skill-cap");
var skillsContainer = document.querySelector(".skills-display");

function initializeBar(bar){
	bar.setAttribute("data-visited", false);
	bar.style.width = 0 + "%";
}

for (var bar of progressBar) {
    initializeBar(bar);
}

function fill(skill){
	let curWidth = 0;
	let width = skill.getAttribute("data-skill-exp");
	let id = setInterval(function(){
			if(curWidth<width){
				curWidth+=1;
				skill.style.width = curWidth + "%";
			}
			else clearInterval(id);

		}, 2);
}

function checkSec(){
	for(let bar of progressBar){
		var barCoordinates = bar.getBoundingClientRect();
        if ((bar.getAttribute("data-visited") == "false") &&
            (barCoordinates.top <= (window.innerHeight - barCoordinates.height))) {
            bar.setAttribute("data-visited", true);
            fill(bar);
        } else if (barCoordinates.top > window.innerHeight) {
            bar.setAttribute("data-visited", false);
            initializeBar(bar);
        }
	}
}

window.addEventListener("scroll", checkSec);
