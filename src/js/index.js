import "bootstrap";
import Flickity from "flickity";
import "../scss/index.scss";
import './typed-text';

$("#alert").click(() => {
  alert("jQuery works!");
});

// Your jQuery code 
$(function(){
  $(window).scroll(function(){
  
    if($(this).scrollTop()>=30){
        $("header").css("background-color", "#1B1F3B")
    }else{
        $("header").css("background-color", "transparent")
    }
  });
  var flkty = new Flickity( '.carousel', {
    wrapAround: true, 
    pageDots: true,
    autoPlay: true,
    imagesLoaded: true
  });
});


