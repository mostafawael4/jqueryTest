let width = $('.sidebar').outerWidth(true);

$('.open').click(() => {
  $('.tefa').animate({ left: `0px` }, 300);
});

$('.close').click(() => {
  $('.tefa').animate({ left: `-${width}px` }, 300);
});





$('.singer1').click(()=>{
  $('#panel1').slideToggle("slow");
  $('#panel2').slideUp("slow");
  $('#panel3').slideUp("slow");
  $('#panel4').slideUp("slow");
})
$('.singer2').click(() => {
  $('#panel2').slideToggle('slow');
  $('#panel1').slideUp('slow');
  $('#panel3').slideUp('slow');
  $('#panel4').slideUp('slow');
});
$('.singer3').click(()=>{
  $('#panel3').slideToggle("slow");
  $('#panel2').slideUp('slow');
  $('#panel1').slideUp('slow');
  $('#panel4').slideUp('slow');
})
$('.singer4').click(()=>{
  $('#panel4').slideToggle("slow");
  $('#panel2').slideUp('slow');
  $('#panel3').slideUp('slow');
  $('#panel1').slideUp('slow');
})


let countDownDate = new Date('October 10, 2024 00:00:00').getTime();

let countDownFunction = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  $('.day').html(`${days} D`);
  $('.hour').html(`${hours} h`);
  $('.minute').html(`${minutes} m`);
  $('.second').html(`${seconds} s`);

  if (distance < 0) {
    clearInterval(countDownFunction);
    $('.day').html('0');
    $('.hour').html('0');
    $('.minute').html('0');
    $('.second').html('0');
  }
}, 1000);



let maxWord = 100;
$('.countWord').html(maxWord);
$('textarea').keyup(() => {
  let countChar = $('textarea').val().toString().length;
  $('.countWord').html(maxWord - countChar);
  if (maxWord - countChar < 0) {
    $('.countWord').html('your available character finished');
  }
});
