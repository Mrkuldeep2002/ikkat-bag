// ================show  menu=================
const navMenu = document.getElementById('nav-menu'),
    navToggle =document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

    // ================menu show========
    if(navToggle){
        navToggle.addEventListener('click', () =>{
            navMenu.classList.add('show-menu');
        });
    }
    // ========menu hide=========
    if(navClose){
        navClose.addEventListener('click', () =>{
            navMenu.classList.remove('show-menu');
        });
    }


        //bannerr  slide++++++++++?
        
var slideshows = document.querySelectorAll('[data-component="slideshow"]');
slideshows.forEach(initSlideShow);

function initSlideShow(slideshow) {

	var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`);

	var index = 0, time = 4000;
	slides[index].classList.add('active');

	setInterval( () => {
		slides[index].classList.remove('active');
		
		index++;
		if (index === slides.length) index = 0;

		slides[index].classList.add('active');

	}, time);
}









// swiper categ============/
var swiperCategories = new Swiper(".categories__container", {
    spaceBetween: 24,
    loop: true, 
    
    navigation: {

        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1400: {
            slidesPerView: 5,
            spaceBetween: 70,
        },
    },
});




// product tabs===============
const tabs = document.querySelectorAll('[data-target]'),

tabcontents = document.querySelectorAll('[content]');

tabs.forEach((tab)=>{
    tab.addEventListener('click',()=>{
        const target = document.querySelector(tab.dataset.target);
        tabcontents.forEach((tabcontent) =>{
            tabcontent.classList.remove('active-tab'); 
        });
        target.classList.add("active-tab");
        
        tabs.forEach((tab) =>{
            tab.classList.remove('active-tab'); 
        });
        
        tab.classList.add('active-tab')
    });
});




// FAQ PAGE++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
