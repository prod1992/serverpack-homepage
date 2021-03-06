import "bootstrap";
import Flickity from "flickity";
import "../scss/index.scss";
import './typed-text';
import AOS from 'aos';
// import isotope from "isotope-layout";
import "./isotope";
$("#alert").click(() => {
  alert("jQuery works!");
});

// Your jQuery code 
$(function () {
  var closed
  $(".navbar-toggler").on( "click", function() {
    closed = eval($(".navbar-toggler").attr('aria-expanded'));
    console.log(closed)
    if(!closed){
      $("header").css("background-color", "#1B1F3B")
      $('.navbar-toggler-open').hide();
    } else {
      $("header").css("background-color", "transparent");
      $('.navbar-toggler-open').show()
      if ($(window).scrollTop() >= 30) {
        $("header").css("background-color", "#1B1F3B")
      } 
    }
  });
  $(document).ready(function () {
    if ($(window).scrollTop() >= 30) {
      $("header").css("background-color", "#1B1F3B")
    } else {
      $("header").css("background-color", "transparent")
    }
  })

  $(window).resize(function(){
    var bodyWidth = $('body').width();
    $("header").css("max-width", bodyWidth + "px");
    // $(".elements").css("max-width", bodyWidth + "px");
  })


  $(window).scroll(function () {
    closed = eval($(".navbar-toggler").attr('aria-expanded'));
    console.log(closed)
    if ($(this).scrollTop() >= 30) {
      $("header").css("background-color", "#1B1F3B")
    }else if($(this).scrollTop() < 30 && closed){
      $("header").css("background-color", "#1B1F3B")
    } else {
      $("header").css("background-color", "transparent")
    }
  });
  var flkty = new Flickity('.carousel', {
    wrapAround: true,
    pageDots: true,
    autoPlay: true,
    imagesLoaded: true
  });
  AOS.init();
  
  $('.dropdown-menu a.dropdown-item').on('click', function(e) {
	  if (!$(this).next().hasClass('show')) {
		$(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
	  }
	  var $subMenu = $(this).next(".dropdown-menu");
	  $subMenu.toggleClass('show');

	  $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
		$('.dropdown-submenu .show').removeClass("show");
	  });

	  return false;
	});
});


