// Nav controls
$(window).scroll((event) => {
  var scroll = $(window).scrollTop();
  if (scroll > 400) {
    $('.navbar').addClass('fixed-top');
    $('.navbar').removeClass('color-remover');
    $('#logo').attr('src', './assets/img/logo.svg');
  } else {
    $('.navbar').removeClass('fixed-top');
    $('.navbar').addClass('color-remover');
    $('#logo').attr('src', './assets/img/logo2.svg');
  }
});

// Overlay
const overlay = () => {
  document.getElementById('oNav').style.width = '100%';
};

const closeOverlay = () => {
  document.getElementById('oNav').style.width = '0%';
};
