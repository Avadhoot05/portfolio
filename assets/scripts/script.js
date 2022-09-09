let project_rows = document.querySelectorAll('.project-rows'); //element
let overlay_box = document.querySelectorAll('.projects .overlay-box'); //element
let togg = document.getElementById('tog');

//--------------Custom Scroll bar
$(window).scroll(function () {
	let scroll = $(window).scrollTop();
	scrollPercent = (scroll / ($(document).height() - $(window).height())) * 100;
	$('.progressbar').css('height', scrollPercent + '%');
});

//-------------------Dark Mode-------------------
let darkflag = localStorage.getItem('darkflag');

//mode change flickering effect
const enableDark = () => {
	document.body.classList.add('dark');
	togg.src = '../assets/media/light.png';
	localStorage.setItem('darkflag', 'enabled');
};

const disableDark = () => {
	document.body.classList.remove('dark');
	togg.src = '../assets/media/lightoff.png';
	localStorage.setItem('darkflag', 'disabled');
};

if (darkflag == 'enabled') {
	enableDark();
}
togg.addEventListener('click', () => {
	darkflag = localStorage.getItem('darkflag');
	if (darkflag != 'enabled') enableDark();
	else disableDark();
});


//---------------------Skills Graph horizotnal lines-----------------------
document.querySelectorAll('.line').forEach((element, index) => {
	element.style.bottom = `${index * 25}%`;
	document.querySelectorAll('.label')[index].style.bottom = `${index * 25.5 + 25}%`;
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

$('.desc').lettering();
$('.short-bio p').lettering();

opacityAnimation('.desc span', 300, 'easeInSine', anime.stagger(5, { start: 1000 })); //landing desc animation call

var waypoint = new Waypoint({
	element: project_rows[0],
	handler: function () {
		overlay_box[0].style.animation = 'right-to-left 0.5s ease 0.1s forwards';
		overlay_box[1].style.animation = 'right-to-left 0.5s ease 0.1s forwards';
	},
	offset: 700,
});

//-----------------------------------------------------------------------------------------
var waypoint = new Waypoint({
	element: project_rows[1],
	handler: function () {
		overlay_box[2].style.animation = 'right-to-left 0.5s ease 0.1s forwards';
		overlay_box[3].style.animation = 'right-to-left 0.5s ease 0.1s forwards';
	},
	offset: 700,
});

waypoint = new Waypoint({
	element: project_rows[2],
	handler: function () {
		overlay_box[4].style.animation = 'right-to-left 0.5s ease 0.1s forwards';
		overlay_box[5].style.animation = 'right-to-left 0.5s ease 0.1s forwards';
	},
	offset: 700,
});

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
		opacityAnimation('.skills .person img', 1500, 'easeInSine', 500); //person image animation
		opacityAnimation('.skills .short-bio span', 1000, 'easeInSine', anime.stagger(4, { start: 1000 })); //short bio

		document.querySelectorAll('.skill-inner').forEach((element, index) => {
			element.style.animation = `bottom-up 0.4s cubic-bezier(0.22, 0.61, 0.36, 1) ${index * 0.08}s forwards`;
		});
	},
	offset: 400,
});

waypoint = new Waypoint({
	element: document.querySelector('.techstack'),
	handler: function () {
		const stack = document.querySelectorAll('.techstack .tool-img');
		stack.forEach((element, index) => {
			element.style.animation = `techstack-translate 0.4s cubic-bezier(0.22, 0.61, 0.36, 1) 0s forwards`;
		});
	},
	offset: 300,
});

waypoint = new Waypoint({
	element: document.querySelector('.Experience'),
	handler: function () {
		opacityAnimation('.Experience .box', 100, 'linear', anime.stagger(150, { start: 200 }));
	},
	offset: 600,
});


//-----react button rotate------------
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
var $form = $('form#google-sheet'),
	url = 'https://script.google.com/macros/s/AKfycbzZLnHswcaH7vPS5S6wpa1I-wQxcIo0VKNHlIdYbR6pwxIVBYXzr_q77vUuncI2nn1f8Q/exec';

$('#sbmt').on('click', function (e) {
	e.preventDefault();

	let form_fields = [document.querySelector('#fname'), document.querySelector('#lname'), document.querySelector('#email'), document.querySelector('#message')];
	let ct = 0;
	[$('#fname').val(), $('#lname').val(), $('#email').val(), $('#message').val()].forEach((element, index) => {
		if (element.length === 0) {
			ct += 1;
			if (localStorage.getItem('darkflag') != 'enabled') form_fields[index].style.outline = '1px solid #cf0061';
			else form_fields[index].style.outline = '1px solid #9d86e9';
		} else form_fields[index].style.outline = 'none';
	});

	if (ct) return false;

	form_fields.forEach((element) => {
		element.style.outline = 'none';
	});

	var jqxhr = $.ajax({
		url: url,
		method: 'GET',
		dataType: 'json',
		data: $form.serializeObject(),
	}).success((document.querySelector('.ack').style.opacity = '1'));
});
