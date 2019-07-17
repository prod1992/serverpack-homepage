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
  $(document).ready(function () {
    if ($(window).scrollTop() >= 30) {
      $("header").css("background-color", "#1B1F3B")
    } else {
      $("header").css("background-color", "transparent")
    }
  })


  $(window).scroll(function () {

    if ($(this).scrollTop() >= 30) {
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


