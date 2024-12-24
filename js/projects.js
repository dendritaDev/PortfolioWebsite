// Filtering logic
$(window).load(function () {
    var $container = $('#itemsWork');
    $container.isotope({
      filter: '*', // Show all items initially
      animationOptions: {
        duration: 750,
        easing: 'linear',
        queue: false
      }
    });
    $('.cat a').click(function () {
      $('.cat .active').removeClass('active');
      $(this).addClass('active');
      var selector = $(this).attr('data-filter');
      $container.isotope({
        filter: selector,
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false
        }
      });
      return false;
    });
  });
  
  // Add event listeners to project items (if needed)
  // ... (This code might be unnecessary if you are not using 
  //      separate project pages and just linking to external URLs)