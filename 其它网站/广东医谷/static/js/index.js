// external js: flickity.pkgd.js

var $carousels = $('.carousel_1');
$carousels.flickity();

// sync Flickity instances
// select index on any Flickity select
$carousels.on( 'select.flickity', function( event ) {
  var $target = $( event.currentTarget );
  var flkty = $target.data('flickity');
  var selectedIndex = flkty.selectedIndex;
  $carousels.each( function( i, carousel ) {
    var $carousel = $( carousel );
    flkty = $carousel.data('flickity');
    if ( flkty.selectedIndex != selectedIndex ) {
      $carousel.flickity( 'select', selectedIndex );
    }
  });
});