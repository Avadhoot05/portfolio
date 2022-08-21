let darkflag = localStorage.getItem('darkflag');

console.log(darkflag);
if (darkflag == 'enabled') {
	document.body.classList.add('dark');
} else {
	document.body.classList.remove('dark');
}

anime({
	targets: '.close',
	opacity: 1,
	duration: 500,
	easing: 'easeInSine',
	delay: anime.stagger(30, { start: 1000 }),
});

anime({
	targets: '.navigation-bar-mobile a',
	opacity: 1,
	duration: 1000,
	easing: 'easeInSine',
	delay: anime.stagger(100, { start: 100 }),
});
