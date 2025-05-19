const swiper = new Swiper(".swiper", {
	slidesPerView: 1,
	direction: "horizontal",
	loop: false,
	spaceBetween: 2,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});

const swiper2 = new Swiper(".swiper2", {
	slidesPerView: 2,
	direction: "horizontal",
	loop: false,
	spaceBetween: 2,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});