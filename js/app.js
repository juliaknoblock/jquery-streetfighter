$(document).ready(function() {
  $('.ryu')
  

  .mouseenter(function() {
    $('.still').hide();
    $('.ready').show();
  }) /*there is no semicolon here, because you don't want code to end here*/
  
  .mouseleave(function() {
    $('.ready').hide();
    $('.still').show();
 })

.mousedown(function() {
	playHadouken();
    $('.ready').hide();
    $('.throwing').show();
    $('.hadouken').finish().show().animate(
  {'left': '1020px'},
  500,
  function() {
    $(this).hide();
    $(this).css('left', '520px');
  }
);
  })
  .mouseup(function() {
    $('.throwing').hide();
    $('.ready').show();
    // ryu goes back to his ready position
  });
 });

//code below makes the x down key
//function work...

$(document).keydown(function(e) {
    if(e.which == 88) {
    $('.still').hide();
    $('.ready').hide();
    $('.cool').show();
  }
});

$(document).keyup(function(e) {
    if(e.which == 88) {
    $('.cool').hide();  
    $('.still').show();
  }
});
//keydown code ends


//code below plays audio
function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

