
// cards = document.querySelectorAll(".blog-slider-card")

// cardSliderIndex = 0;

// console.log("hi")
// cards.forEach((card, idx) => {
//     // card.style.traslateX = `${idx * 100}%`
//     // card.style.transform = `translateX(${idx * 105}%)`
// });

// function slideNext(){
//     if(Math.abs(cardSliderIndex + 1) < cards.length){
//         cardSliderIndex ++
//         changeSilder()
//         console.log(cardSliderIndex);
//     }
// }

// function slidePrev(){
//     if(Math.abs(cardSliderIndex - 2) < cards.length){
//         cardSliderIndex --
//         changeSilder()
//         console.log(cardSliderIndex);
//     }
// }

// function changeSilder(){
//     cards.forEach((card, idx) => {
//         card.style.transform = `translateX(${-(cardSliderIndex - idx)* 100}%)`
//     });
// }


$(document).ready(function(){
    $('.blog-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $(".pp2"),
        nextArrow: $(".nn2")
    });
});
