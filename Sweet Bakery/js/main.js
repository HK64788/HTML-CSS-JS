$(function(){

	var scrollTopBtn = document.getElementById("scroll-top")

	var nav = $("#nav"),
	introH = $("#intro").innerHeight(),
	scrollOffset = $(window).scrollTop();




	// fixed header
	checkScroll(scrollOffset);

	$(window).on("scroll", function	() {

		scrollOffset = $(this).scrollTop();

		checkScroll(scrollOffset);

	});


	function checkScroll (scrollOffset) {
		
		if ( scrollOffset >= introH ) {
			nav.addClass("nav-fixed");
			scrollTopBtn.style.transform = "scale(1)"
		} else {
			nav.removeClass("nav-fixed");
			scrollTopBtn.style.transform = "scale(0)"

		}

	}

	$(".products__inner").slick({
		dots: true,
		adaptiveHeight: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		speed: 1000,
		easing: "ease",
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2500,
		initialSlide: 0,
		arrows: false,
		responsive: [
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
			{
				breakpoint: 790,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 560,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
						
		]
	});

	$(".comment__inner").slick({
		dots: true,
		adaptiveHeight: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		speed: 1000,
		easing: "ease",
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2500,
		initialSlide: 0,
		arrows: false,
		responsive: [
					{
						breakpoint: 1000,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					}
						
		]
	});


	


	$(".acc__item").on("click", function(){
		let titles = $('.acc__title'),
			content = $('.about__content');

		for (let i = 0; i < titles.length;i++){
			titles[i].classList.remove('acc__selected')
		}

		for (let i = 0; i < content.length;i++){
			content[i].style.display = 'none'
		}


		titles[this.id].classList.add("acc__selected")
		content[this.id].style.display = 'block'

	});



	var offerSlide = document.getElementById("offerSlide"),
		teamSlide = document.getElementById("teamSlide"),
		logoSlide = document.getElementById("logoSlide");

	
	
	window.onresize = checkSlider
	window.onload = checkSlider

	

	function checkSlider (){
		$(teamSlide).slick({
			dots: true,
			adaptiveHeight: true,
			slidesToShow: 2,
			slidesToScroll: 2,
			speed: 500,
			easing: "ease",
			infinite: true,
			autoplay: true,
			autoplaySpeed: 2500,
			responsive: [
				{
					breakpoint: 2046,
					settings: "unslick"
				},
				{
					breakpoint: 1000,
					settings: "slick",
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
					}
				},
				{
					breakpoint: 560,
					settings: "slick",
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				}
			]
		});


		$(offerSlide).slick({
			dots: true,
			adaptiveHeight: true,
			slidesToShow: 2,
			slidesToScroll: 2,
			speed: 500,
			easing: "ease",
			infinite: true,
			autoplay: true,
			autoplaySpeed: 2500,
			responsive: [
				{
					breakpoint: 2046,
					settings: "unslick"
				},
				{
					breakpoint: 1000,
					settings: "slick",
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
					}
				},
				{
					breakpoint: 560,
					settings: "slick",
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				}
			]
		});

		$(logoSlide).slick({
			dots: true,
			adaptiveHeight: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			speed: 500,
			easing: "ease",
			infinite: false,
			autoplay: true,
			autoplaySpeed: 2500,
			responsive: [
				{
					breakpoint: 2046,
					settings: "unslick"
				},
				{
					breakpoint: 1000,
					settings: "slick",
					settings: {
						slidesToShow: 4,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 790,
					settings: "slick",
					settings: {
						slidesToShow: 3,
						slidesToScroll: 2,
					}
				},
				{
					breakpoint: 500,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					}
				}
			]
		});
	}

	

});

var search = document.getElementById("search"),
	navBar = document.getElementById("navBar")

function openSearch(){
	search.style.transform = "scale(1)"
	navBar.style.transform = "scale(0)"

	cart.classList.remove("cart-oppened")
	cart2.classList.remove("cart-oppened")
	navMedia.classList.remove("nav-media-oppened")
	moreInfo.classList.remove("more-info-oppened")
}

function closeSearch(){
	search.style.transform = "scale(0)"
	navBar.style.transform = "scale(1)"
}


$(document).ready(function () {

	

	$(".cart__input").number_plugin({
	    width: '45px', 
	    height: '35px', 
	    negative: false, 
	    step: 1, 
	    animate: true, 
	    delay: 100, 
	    max: 100, 
	    min: 1, 
	    style: 'line', 
	});

	$(".cart__input2").number_plugin({
	    width: '45px', 
	    height: '35px', 
	    negative: false, 
	    step: 1, 
	    animate: true, 
	    delay: 100, 
	    max: 100, 
	    min: 1, 
	    style: 'line', 
	});
});

var cart = document.getElementById("cart")
var cart2 = document.getElementById("cart2")

function openCart(){
	cart.classList.toggle('cart-oppened')

	cart2.classList.remove("cart-oppened")
	navMedia.classList.remove("nav-media-oppened")
	moreInfo.classList.remove("more-info-oppened")
	closeSearch()
}
function openCart2(){
	cart2.classList.toggle('cart-oppened')

	cart.classList.remove("cart-oppened")
	navMedia.classList.remove("nav-media-oppened")
	moreInfo.classList.remove("more-info-oppened")
	closeSearch()
}

var navMedia = document.getElementById("nav-media"),
	navMediaBtn = document.getElementById("nav-media-btn")

navMediaBtn.onclick = function(){
	navMedia.classList.toggle("nav-media-oppened")

	cart.classList.remove("cart-oppened")
	cart2.classList.remove("cart-oppened")
	moreInfo.classList.remove("more-info-oppened")
	closeSearch()
}

var moreInfo = document.getElementById("more-info"),
	moreInfoBtn = document.getElementById("more-info-btn")

moreInfoBtn.onclick = function(){
	moreInfo.classList.toggle("more-info-oppened")

	cart.classList.remove("cart-oppened")
	cart2.classList.remove("cart-oppened")
	navMedia.classList.remove("nav-media-oppened")
	closeSearch()
}

$(window).on("scroll", function(){
	cart.classList.remove("cart-oppened")
	cart2.classList.remove("cart-oppened")
	moreInfo.classList.remove("more-info-oppened")
});



let mediaBtn = document.querySelectorAll(".media-btn"),
	mediaCont = document.querySelectorAll(".nav-media-content")








mediaBtn.forEach(function(element){
	element.onclick = dropDown
})

function dropDown (){
	for(let i = 0; i < mediaCont.length;i++){
		
		mediaCont[i].classList.remove("media-content-oppened")
	}


	mediaCont[this.id].classList.toggle("media-content-oppened")
}

$("#scroll-top").on("click",function(event){
	event.preventDefault();
	$("html, body").animate({
		scrollTop: 0,
	}, 500);
}); 
	






