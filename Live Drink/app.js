var accContent = document.getElementById("content"),
	acc = document.getElementById("accardion"),


	accContent2 = document.getElementById("content2"),
	acc2 = document.getElementById("accardion2"),

	accContent3 = document.getElementById("content3"),
	acc3 = document.getElementById("accardion3"),

	search = document.getElementById("search"),	
	language = document.getElementById("language"),

	langItem1 = document.getElementById("language__item1"),
	langItem2 = document.getElementById("language__item2"),
	langItem3 = document.getElementById("language__item3"),
	headerImg2 = document.getElementById("header__img2"),
	headerImg1 = document.getElementById("header__img1"),
	nav = document.getElementById("nav2");


	let ass=['I’m very grateful to you for introducing me and my whole family to your extensive range of smoothies and organic juices. We are true fans and regular customers of your store!'
		,'I am amazed and extremely satisfied by your smoothies, their taste, and the customer service you provide to unexperienced clients who know nothing about organic drinks.'
		,'Your healthy drinks have a wonderful taste and the amazing selection of their flavors is what really attracts me in your store. Thank you for fast delivery and your fresh drinks!'
	];

	var gh=0		
			
	function rk4(){
		document.getElementById("lj1").setAttribute("style","transition:0.5s")
		document.getElementById("lj2").setAttribute("style","transition:0.5s")
		document.getElementById("lj3").setAttribute("style","transition:0.5s")
		document.getElementById("as1").innerHTML=ass[0]
		document.getElementById("lj1").style.opacity="1"
		document.getElementById("lj2").style.opacity="0.5"
		document.getElementById("lj3").style.opacity="0.5"
	}

				
	function lk5(){
		document.getElementById("as1").innerHTML=ass[1]
	
	
		document.getElementById("lj2").style.opacity="1"
		document.getElementById("lj1").style.opacity="0.5"
		document.getElementById("lj3").style.opacity="0.5"
	}

	
	function lk8(){
	
		document.getElementById("as1").innerHTML=ass[2]
		document.getElementById("lj3").style.opacity="1"
		document.getElementById("lj2").style.opacity="0.5"
		document.getElementById("lj1").style.opacity="0.5"
	}
	
	function lk9(){
	
		if(gh<ass.length-1){gh++} else{gh=0}
			document.getElementById("as1").innerHTML=ass[gh]
		if(gh==0){
			document.getElementById("lj1").style.opacity="1"
			document.getElementById("lj2").style.opacity="0.5"
			document.getElementById("lj3").style.opacity="0.5"
		}
		else if(gh==1){
			document.getElementById("lj2").style.opacity="1"
			document.getElementById("lj1").style.opacity="0.5"
			document.getElementById("lj3").style.opacity="0.5"
		}
		else{
			document.getElementById("lj3").style.opacity="1"
			document.getElementById("lj1").style.opacity="0.5"
			document.getElementById("lj2").style.opacity="0.5"
		}						
	}

			
	setInterval(lk9,3000)



function openAcc () {
	acc.classList.toggle("accardion-active");
	accContent.classList.toggle("accardion-open");

	acc2.classList.remove("accardion-active");
	accContent2.classList.remove("accardion-open");

	acc3.classList.remove("accardion-active");
	accContent3.classList.remove("accardion-open");
}

function openAcc2 () {
	acc2.classList.toggle("accardion-active");
	accContent2.classList.toggle("accardion-open");

	acc.classList.remove("accardion-active");
	accContent.classList.remove("accardion-open");

	acc3.classList.remove("accardion-active");
	accContent3.classList.remove("accardion-open");
}

function openAcc3 () {
	acc3.classList.toggle("accardion-active");
	accContent3.classList.toggle("accardion-open");

	acc.classList.remove("accardion-active");
	accContent.classList.remove("accardion-open");

	acc2.classList.remove("accardion-active");
	accContent2.classList.remove("accardion-open");

}

$(window).on("scroll", function(){
	$(".carusel").removeClass('carusel__active')
})


$(".close3").on("click",function(){
	$(".carusel").toggleClass('carusel__active')
});

let images = [
	'img/1.jpg',
	'img/2.jpg',
	'img/3.jpg',
	'img/4.jpg',
	'img/5.jpg',
	'img/6.jpg'
]

let slider = document.querySelector(".carusel__img")
let img = slider.querySelector("img")
let i = 0;

let img2;
let defoultImg;
let test;

$(".footer__img").on("click",function(event){
	img2 = event.target
	if (img2.tagName == 'DIV') {
		defoultImg = img2.firstElementChild
	} else {
		defoultImg = img2
	} 
})


$(".footer__img").on("click",function(){
	$(".carusel").toggleClass('carusel__active')
	
	img.src = defoultImg.src

	i = defoultImg.parentElement.id

	
	// setInterval(()=>function(){
	// 	img.src = images[i]

	// 	i++
	// 	if (i == images.length) {
	// 		i = 0
	// 	} 
	// }, 3000)
	
});

function caruselPrev(){
	if (i == 0) {
		i = images.length
	}
	i--
	img.src = images[i]
	
	
	if (i == images.length) {
		i = 0
	}
}

function caruselNext(){
	if (i == images.length) {
		i = 0
	}
	i++
	if (i == images.length) {
		i = 0
	}
	img.src = images[i]
	

	
}



function openSearch() {
	search.style.display = "block";
}

function closeSearch() {
	search.style.display = "none";
}

let gridCont = document.getElementById('gridCont')

let gal = document.getElementById('gal')
let fruits = document.getElementById('fruits')
let veg = document.getElementById('veg')

let g1 = document.getElementById('g1')
let g2 = document.getElementById('g2')
let g3 = document.getElementById('g3')
let g4 = document.getElementById('g4')
let g5 = document.getElementById('g5')
let g6 = document.getElementById('g6')
let g7 = document.getElementById('g7')

function galleryAll(){
	gal.classList.add('active2')
	fruits.classList.remove('active2')
	veg.classList.remove('active2')

	g1.style.display = 'block'
	g2.style.display = 'block'
	g3.style.display = 'block'
	g4.style.display = 'block'
	g5.style.display = 'block'
	g6.style.display = 'block'
	g7.style.display = 'block'

	g5.style.gridColumnStart = '1'
	g5.style.gridRowStart = '3'
	g5.style.gridRowEnd = '4'

	g6.style.gridColumnStart = '3';
    g6.style.gridColumnEnd = '5';
    g6.style.gridRowStart = '3';
    g6.style.gridRowEnd = '6';

    g3.style.gridColumnStart = '3';
    g3.style.gridRowStart = '1';
    g3.style.gridRowEnd = '3';
}

function galleryFruits(){

	fruits.classList.add('active2')
	gal.classList.remove('active2')
	veg.classList.remove('active2')
	g1.style.display = 'none'
	g2.style.display = 'block'
	g3.style.display = 'none'
	g4.style.display = 'none'
	g5.style.display = 'block'
	g6.style.display = 'block'
	g7.style.display = 'none'

	g5.style.gridColumnStart = '0'
	g5.style.gridRowStart = '1'
	g5.style.gridRowEnd = '3'

	g6.style.gridColumnStart = '3';
    g6.style.gridColumnEnd ='5';
    g6.style.gridRowStart = '1';
    g6.style.gridRowEnd = '4';
}

function galleryVeg(){
	veg.classList.add('active2')
	gal.classList.remove('active2')
	fruits.classList.remove('active2')
	g1.style.display = 'block'
	g2.style.display = 'none'
	g3.style.display = 'block'
	g4.style.display = 'block'
	g5.style.display = 'none'
	g6.style.display = 'none'
	g7.style.display = 'block'

	g3.style.gridColumnStart = '2';
    g3.style.gridRowStart = '1';
    g3.style.gridRowEnd = '3';
}



function openNav(){
	nav.classList.toggle("nav__opened");
	shop.classList.remove("shop-opened");
}

var	navCon1 = document.getElementById("nav2__con1"),
	navElem1 = document.getElementById("nav2_element1"),

	navCon2 = document.getElementById("nav2__con2"),
	navElem2 = document.getElementById("nav2_element2"),

	navCon3 = document.getElementById("nav2__con3"),
	navElem3 = document.getElementById("nav2_element3"),

	navCon4 = document.getElementById("nav2__con4"),
	navElem4 = document.getElementById("nav2_element4"),

	navCon5 = $(".nav2__con5");
	navElem5 = document.getElementById("nav2_element5"),

	navCon6 = document.getElementById("nav2__con6"),
	navElem6 = document.getElementById("nav2_element6"),



	$(navElem1).on("click",function (){
		$(navCon1).toggleClass("nav2__show");
	});

	$(navElem2).on("click",function (){
		$(navCon2).toggleClass("nav2__show");
	});

	$(navElem3).on("click",function (){
		$(navCon3).toggleClass("nav2__show");
	});

	$(navElem4).on("click",function (){
		$(navCon4).toggleClass("nav2__show");
	});

	$(navElem5).on("click",function (){
		$(navCon5).toggleClass("nav2__show");
	});

	$(navElem6).on("click",function (){
		$(navCon6).toggleClass("nav2__show");
	});



	var	contact = document.getElementById("contact");

	function showContact(){
		contact.classList.toggle("contact-opened");
	}

	var shop = document.getElementById("shop");
	function openShop(){
		shop.classList.toggle("shop-opened");
		language.classList.remove("language__openned");
	}

	function selectLanguage (){
		language.classList.toggle("language__openned");
		shop.classList.remove("shop-opened");
	}


	$(window).on("scroll", function(){
		closeSearch();
		shop.classList.remove("shop-opened")
		
	});


	$(document).ready(function () {
    	$('.shop__input').number_plugin({
		    width: '65px', 
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


var section = document.querySelector('.stats__inner');
var hasEntered = false;

window.addEventListener('scroll', (e) => {
	var shouldAnimate = (window.scrollY + window.innerHeight) >= section.offsetTop;

	if (shouldAnimate && !hasEntered) {
  	hasEntered = true;
    
    $('.stats__number').each(function () {
    	$(this).prop('Counter',0).animate({
        Counter: $(this).text()
    	}, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
   		});
    });

  }
});




$(function (){




	var header = $("#header"),
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
			header.addClass("header-fixed");
		} else {
			header.removeClass("header-fixed");
		}

	}



	$(langItem1).on("click",function(){
		$(langItem1).addClass("selected");
		$(langItem2).removeClass("selected");
		$(langItem3).removeClass("selected");
		selectLanguage();
	});


	$(langItem2).on("click",function(){
		$(langItem2).addClass("selected");
		$(langItem1).removeClass("selected");
		$(langItem3).removeClass("selected");
		selectLanguage();
	});

	$(langItem3).on("click",function(){
		$(langItem3).addClass("selected");
		$(langItem2).removeClass("selected");
		$(langItem1).removeClass("selected");
		selectLanguage();
	});

	$(".slider").slick({
		dots: true,
		adaptiveHeight: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 500,
		easing: "ease",
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2500,
		initialSlide: 1,
	});


	$(".slider4").slick({
		dots: false,
		adaptiveHeight: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 500,
		easing: "ease",
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2500,
		initialSlide: 0,
	});






	var blogSlide = document.getElementById("blogSlide"),
		teamSlide = document.getElementById("teamSlide"),
		logoSlide = document.getElementById("logoSlide");

	
	window.onload = checkSliders
	window.onresize = checkSliders

	
	function checkSliders(){


		$(teamSlide).slick({
			dots: true,
			adaptiveHeight: true,
			slidesToShow: 3,
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
						slidesToShow: 3,
						slidesToScroll: 2
					}
				},
				{
					breakpoint: 790,
					settings: "slick",
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				},
				{
					breakpoint: 500,
					settings: "slick",
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				}
			]
		});

		$(blogSlide).slick({
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
						slidesToScroll: 2
					}
				},
				{
					breakpoint: 500,
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
						slidesToScroll: 1
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
					settings: "slick",
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					}
				}
			]
		});



	}

	
	


	





});





