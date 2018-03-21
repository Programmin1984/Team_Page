//Pulled from https://bootstrapious.com/p/bootstrap-tips-and-tricks on 3/3/2018
//This is for use in the navbar.
$('.dropdown-toggle').click(function(e) {
  if ($(document).width() > 768) {
    e.preventDefault();

    var url = $(this).attr('href');

       
    if (url !== '#') {
    
      window.location.href = url;
    }

  }
});