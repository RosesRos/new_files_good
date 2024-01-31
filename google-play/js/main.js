window.addEventListener('load', function () {

    document.querySelector('.scroll-top').addEventListener('click', function() {		
        window.scrollTo({ top: 0, behavior: 'smooth' });	
    })
		
    window.addEventListener('scroll', function(){
        if ( this.scrollY > 1000) {
            document.querySelector('.scroll-top').style.opacity = '1';
        } else {
            document.querySelector('.scroll-top').style.opacity = '0';
        }
    })

})

var swiper = new Swiper(".gallerySwiper", {
    slidesPerView: "auto",
    spaceBetween: 16,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});