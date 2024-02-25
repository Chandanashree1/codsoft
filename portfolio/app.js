$(document).ready(function () {
    $(window).scroll(function () {
        // checks if window is scrolled more than 500px, adds/removes solid class
        if ($(this).scrollTop() > 550) {
            $('.navbar').addClass('solid');
            $('.back-to-top').addClass('visible');
        } else {
            $('.navbar').removeClass('solid');
            $('.back-to-top').removeClass('visible');
        }

    });
});


$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {$(document).ready(function() {
                fillStars("html", 80); // Example: HTML with 80% proficiency
                fillStars("css", 70);  // Example: CSS with 70% proficiency
                fillStars("Python", 90); // Example: Python with 90% proficiency
                fillStars("javascript", 85); // Example: JavaScript with 85% proficiency
                fillStars("c", 60); // Example: C++ with 60% proficiency
              });
              
              function fillStars(skill, percentage) {
                var stars = Math.round(percentage / 10);
                $('.' + skill).css('width', stars * 10 + '%');
              }
              

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});
