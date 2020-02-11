/*
    Author: Mahesh
    Desription: Displaying product items
 */

 
// Products Data

var prodClothing = [
                {
                    "image": "../carouselMenu/assets/img/burberry.jpeg",
                    "brand": "Burberry",
                    "model": "Polo",
                    "offer": "10%"
                },
                {
                    "image": "../carouselMenu/assets/img/raulphLauren.jpeg",
                    "brand": "Raulphlauren",
                    "model": "Jeans",
                    "offer": "20%"
                },
                {
                    "image": "../carouselMenu/assets/img/calvinKlein.jpeg",
                    "brand": "Bata",
                    "model": "Shoes",
                    "offer": "30%"
                },
                {
                    "image": "../carouselMenu/assets/img/calvinKleinJeans.jpeg",
                    "brand": "Omega",
                    "model": "Chronometer",
                    "offer": "40%"
                },
                {
                    "image": "../carouselMenu/assets/img/burberry.jpeg",
                    "brand": "Burberry",
                    "model": "Polo",
                    "offer": "10%"
                },
                {
                    "image": "../carouselMenu/assets/img/raulphLauren.jpeg",
                    "brand": "Raulphlauren",
                    "model": "Jeans",
                    "offer": "20%"
                }         
            ]

var produAccessories = [
                {
                    "image": "../carouselMenu/assets/img/nikeAirjordan1.png",
                    "brand": "Nike",
                    "model": "Shoes",
                    "offer": "10%"
                },
                {
                    "image": "../carouselMenu/assets/img/lacoste.png",
                    "brand": "Bata",
                    "model": "Shoes",
                    "offer": "20%"
                },
                {
                    "image": "../carouselMenu/assets/img/omega.jpeg",
                    "brand": "Omega",
                    "model": "Chronometer",
                    "offer": "30%"
                },
                {
                    "image": "../carouselMenu/assets/img/adidas.png",
                    "brand": "Adidas",
                    "model": "Shoes",
                    "offer": "40%"
                },
                {
                    "image": "../carouselMenu/assets/img/nikeZoom.png",
                    "brand": "Nike",
                    "model": "Shoes",
                    "offer": "10%"
                },
                {
                    "image": "../carouselMenu/assets/img/lacoste.png",
                    "brand": "Bata",
                    "model": "Shoes",
                    "offer": "20%"
                }
            ]

// Retreving and displaying data in html

var container = document.getElementById("container");

function displayProducts(data, elem){

    
    var result = "";
        result += "<div class = 'prod-flex owl-carousel owl-theme' >"        
        
        for (item in data){                 
            result +=
                        "<div class='prodItem main'>"+
                        "<img src="+data[item].image+">"+
                        "<h3>"+data[item].brand+"</h3>"+
                        "<p>"+data[item].model+"</p>"+
                        "<p>"+data[item].offer+" Off</p>"+
                        "</div>"                                                                        
        }
        
        elem.insertAdjacentHTML('beforeend', result+"</div>");
}

displayProducts(prodClothing, container);
displayProducts(produAccessories, container);


$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
            rtl:true,
            loop:true,
            margin:10,
            nav:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:5
                }
            }
})
    });
