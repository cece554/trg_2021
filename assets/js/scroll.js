$(function() {
  $('.scroll-down').click (function() {
    $('html, body').animate({scrollTop: $('section.portfolioSection').offset().top }, 'slow');
    return false;
  });
});
