let project_rows = document.querySelectorAll('.project-rows'); //element
let overlay_box = document.querySelectorAll('.overlay-box'); //element
const ham = document.getElementsByClassName("ham")[0];
if(ham)
	ham.addEventListener("click", onHamClick);

function onHamClick(e) {
	console.log("ham click");
	let nav = document.getElementById("mobile-nav");
	nav.style.right = "0px";
	nav.style.top = window.scrollY + "px";
	let closeNav = document.getElementsByClassName("closenav")[0];
	closeNav.addEventListener("click", function() {
		HideNav();
	});
}

function HideNav()
{
	let nav = document.getElementById("mobile-nav");
	nav.style.right = "-500px";
}

//--------------Custom Scroll bar
$(window).scroll(function () {
	
	let scroll = $(window).scrollTop();
	if(scroll > 0)
		HideNav();
	scrollPercent = (scroll / ($(document).height() - $(window).height())) * 100;
	$('.progressbar').css('height', scrollPercent + '%');
});

const opacityAnimation = (targetname, duration, easing, delay) => {
	anime({
		targets: targetname,
		opacity: 1,
		duration: duration,
		easing: easing,
		delay: delay,
	});
};

// ---new project UI



const overlayWidgets = ["project1", "project2", "project3", "zeus-content", "brandyse-content", "roborise-content", "rrc-content"];


for(let i = 0; i < overlayWidgets.length; i++)
{
	var waypoint = new Waypoint({
		element: document.getElementById(overlayWidgets[i]),
		handler: function () {
			overlay_box[i].style.animation = 'right-to-left 0.5s ease 0.1s forwards';
		},
		offset: 700,
	});
}

// var waypoint = new Waypoint({
// 	element: document.getElementById("project1"),
// 	handler: function () {
// 		overlay_box[0].style.animation = 'right-to-left 0.5s ease 0.1s forwards';
// 	},
// 	offset: 700,
// });

// var waypoint = new Waypoint({
// 	element: document.getElementById("project2"),
// 	handler: function () {
// 		overlay_box[1].style.animation = 'right-to-left 0.5s ease 0.1s forwards';
// 	},
// 	offset: 700,
// });

// var waypoint = new Waypoint({
// 	element: document.getElementById("project3"),
// 	handler: function () {
// 		overlay_box[2].style.animation = 'right-to-left 0.5s ease 0.1s forwards';
// 	},
// 	offset: 700,
// });



//-----------------------------------------------------------------------------------------

waypoint = new Waypoint({
	element: document.querySelector('.skills'),
	handler: function () {
		anime({
			targets: '.skills .overlay',
			translateX: 1100,
			opacity: 0,
			delay: 300,
			duration: 1000,
			easing: 'easeInSine',
		});
		opacityAnimation('.skills .person img', 500, 'easeInSine', 100); //person image animation
		document.getElementsByClassName("short-bio")[0].style.animation = "slideup 0.5s 0.5s forwards";
		const stack = document.querySelectorAll('.techstack .tool-img');
		stack.forEach((element, index) => {

			element.style.animation = "slideup 0.5s 0.1s forwards";
		});
		
	},
	offset: 400,
});

waypoint = new Waypoint({
	element: document.querySelector('.Experience'),
	handler: function () { 
		opacityAnimation('.Experience .box', 100, 'linear', anime.stagger(150, { start: 200 }));
	},
	offset: 600,
});


//-----react icon  rotate------------
const reactIcon = document.getElementById("react-icon");
var angle = 0;

setTimeout(() => {
	reactIcon.style.opacity = "1";
	reactIcon.style.animation = "";
	setInterval(() => {
		if(angle == 360)
			angle = 0;
		reactIcon.style.webkitTransform = "rotate(" + angle + "deg)";
		reactIcon.style.mozTransform = "rotate(" + angle + "deg)";
		reactIcon.style.transform = "rotateZ(" + angle + "deg)";
		angle++;
	}, 30);
}, 3000);

/*---------------------------Form Submission-------------------------------*/
// var $form = $('form#google-sheet'),
// 	url = 'https://script.google.com/macros/s/AKfycbzZLnHswcaH7vPS5S6wpa1I-wQxcIo0VKNHlIdYbR6pwxIVBYXzr_q77vUuncI2nn1f8Q/exec';

// $('#sbmt').on('click', function (e) {
// 	e.preventDefault();

// 	let form_fields = [document.querySelector('#fname'), document.querySelector('#lname'), document.querySelector('#email'), document.querySelector('#message')];
// 	let ct = 0;
// 	[$('#fname').val(), $('#lname').val(), $('#email').val(), $('#message').val()].forEach((element, index) => {
// 		if (element.length === 0) {
// 			ct += 1;
// 			if (localStorage.getItem('darkflag') != 'enabled') form_fields[index].style.outline = '1px solid #cf0061';
// 			else form_fields[index].style.outline = '1px solid #9d86e9';
// 		} else form_fields[index].style.outline = 'none';
// 	});

// 	if (ct) return false;

// 	form_fields.forEach((element) => {
// 		element.style.outline = 'none';
// 	});

// 	var jqxhr = $.ajax({
// 		url: url,
// 		method: 'GET',
// 		dataType: 'json',
// 		data: $form.serializeObject(),
// 	}).success((document.querySelector('.ack').style.opacity = '1'));
// });
