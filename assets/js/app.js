
/** SEARCH START */
let searchBody = document.querySelector('.search-body');
let searchIcon = document.querySelector('.search-icon');
let searchCross = document.querySelector('.cross-btn');
let searchForm = document.querySelector('.search-form')
let searchFooter = document.querySelector('search-footer')

searchIcon.addEventListener('click', ()=>{
   if(! searchBody.classList.contains('search-active')){
    searchBody.classList.add('search-active');
    searchForm.classList.add('form-active');
   }

});

searchCross.addEventListener('click', ()=>{
   if( searchBody.classList.contains('search-active')){
     searchBody.classList.remove('search-active');
     searchForm.classList.remove('form-active');
   }
});

/**SEARCH END */

/**JQUERY*/
$(function(){
   $('.parent').slick({
      dots:true,
      arrows:false,
      dotsClass:"container dots-active",
      autoplay: true,
      autoplaySpeed: 2000,
   });
}) 

/** TOOLTIPS */
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

/** PRODUCT */
$(function(){
    
$('.parent_product').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow:`<i class="left_arrow fa-solid fa-chevron-left"></i>`,
    nextArrow:`<i class="right_arrow fa-solid fa-chevron-right"></i>`,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  });
})