// Nav controls
$(window).scroll((event) => {
  var scroll = $(window).scrollTop();
  if (scroll > 400) {
    $('.navbar').addClass('fixed-top');
    $('.navbar').removeClass('color-remover');
  } else {
    $('.navbar').removeClass('fixed-top');
    $('.navbar').addClass('color-remover');
  }
});

// Overlay
const overlay = () => {
  document.getElementById('oNav').style.width = '100%';
};

const closeOverlay = () => {
  document.getElementById('oNav').style.width = '0%';
};

console.log(screen.width);
