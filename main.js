$(document).ready(function(){
// get the button and image elements
var $button = $("#menu");
// toggle the 'src' attribute value
$button.on('click', function() {
 $("ul").slideToggle("slow");
  if ($button.attr('src') === 'img/menu.svg') {
    $button.attr('src', 'img/x.svg');
  } else {
    $button.attr('src', 'img/menu.svg');
  }
  /*
    $button.fadeOut(1000, function() {
        // change the image source here
        $button.fadeIn(1000);
        $nextImageSource.delay(500).fadeIn(1000);
    });
*/

});
});