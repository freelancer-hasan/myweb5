//typing animation
var typed = new Typed(".typing",{
	strings: ["Full stack webdeveloper", "Freelancer", "Youtuber" , "Motivational Speaker"],
	typeSpeed:100,
	backspeed:10,
	loop:true
});


//dark mode

var s = document.querySelector('#darkmode');

s.onclick = function(){
	document.body.classList.toggle('dark-theme');
}


// preloding

var preloader = document.getElementById('loading');
function loadingFunc(){
	preloader.style.display = 'none';
}