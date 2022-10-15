
$(document).ready(function(){
    $('.blog-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1, 
        infinite: false,
        prevArrow: $(".pp2"),
        nextArrow: $(".nn2")
    });
});


let navLinks = document.querySelectorAll(".links")
let currentActiveLink = 0

navLinks.forEach((navLink, idx)=>{
    navLink.addEventListener("click", ()=>{
        // adding event listener to navLink
        navLinks[currentActiveLink].classList.remove("link-clicked")
        navLinks[idx].classList.add("link-clicked")
        currentActiveLink = idx
    })
})




