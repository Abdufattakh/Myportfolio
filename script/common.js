// window.addEventListener('load', () => {
//   setTimeout(() => {
//     document.querySelector('.blocks__content').classList.add('loader-hide');
//   }, 1000);
// });
$('.header-menu').click(function () {
  $('.header-menu__item').toggleClass('open');
  $('.nav-ul').toggleClass('open');
  $('.nav-ul_link').toggleClass('open');
  $('body').toggleClass('locked');
});

$(document).ready(function () {

  AOS.init();

})
