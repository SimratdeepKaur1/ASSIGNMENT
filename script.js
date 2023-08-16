$(document).ready(function() {
  // Fix Navigation Bar
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('header.menu').addClass('fixed-nav');
    } else {
      $('header.menu').removeClass('fixed-nav');
    }
  });
  $(document).ready(function() {
    var currentSlide = 0; // Initialize current slide index
    
    // Open lightbox and load content
    $(".image-container, .video-container").on("click", function() {
        currentSlide = $(this).index(); // Get the index of clicked thumbnail
        showSlide(currentSlide);
        $(".lightbox-overlay").fadeIn();
    });
  
    // Close lightbox on close button click
    $(".close-btn, .lightbox-overlay").on("click", function(event) {
      if (!$(event.target).hasClass("close-btn")) {
        return;
    }
        $(".lightbox-overlay").fadeOut();
    });
  
    // Show the slide content
    function showSlide(slideIndex) {
        const slides = $(".slide"); // Get all slide elements
        const slide = slides.eq(slideIndex); // Get the current slide
      
        // Hide all slides
        slides.hide();
      
        // Show the current slide
        slide.show();
    }
  
    // Previous slide button
    $(".prev-btn").on("click", function() {
        currentSlide = (currentSlide - 1 + $(".slide").length) % $(".slide").length;
        showSlide(currentSlide);
    });
  
    // Next slide button
    $(".next-btn").on("click", function() {
        currentSlide = (currentSlide + 1) % $(".slide").length;
        showSlide(currentSlide);
    });
});



  
     

  // Adding input event listeners for validation while typing
  $('#firstName').on('input', function() {
    const firstName = $(this).val().trim();
    if (firstName.length >= 5) {
      $('#firstNameError').text('');
    } else {
      $('#firstNameError').text('First name should be at least 5 characters');
    }
  });
  $('#lastName').on('input', function() {
    const lastName = $(this).val().trim();
    if (lastName.length >= 5) {
      $('#lastNameError').text('');
    } else {
      $('#lastNameError').text('Last name should be at least 5 characters');
    }
  });
  $('#email').on('input', function() {
    const email = $(this).val().trim();
    if (isValidEmail(email)) {
      $('#emailError').text('');
    } else {
      $('#emailError').text('Invalid email format');
    }
  });
  $('#date').on('input', function() {
    const date = $(this).val().trim();
    if (isValidDate(date)) {
      $('#dateError').text('');
    } else {
      $('#dateError').text('Invalid date format (dd/mm/yy)');
    }
  });

  $('#phone').on('input', function() {
    const phone = $(this).val().trim();
    if (isValidPhone(phone)) {
      $('#phoneError').text('');
    } else {
      $('#phoneError').text('Phone must contain 10 digits');
    }
  });
  $('#message').on('input', function() {
    const message = $(this).val().trim();
    if (message.length >= 50) {
      $('#messageError').text('');
    } else {
      $('#messageError').text('Message should be at least 50 characters');
    }
  });

  // ... (similar event listeners for other fields)

  // Form Submission and Validation
  $('#contactForm').submit(function(event) {
    event.preventDefault();

    if (validateForm()) {
      // If validation passes, proceed with form submission
      console.log('Form submission about to occur');
      this.submit();
    }
  });

  // Validation function to check all fields
  function validateForm() {
    let isValid = true;

    const firstName = $('#firstName').val().trim();
    const lastName = $('#lastName').val().trim();
    const email = $('#email').val().trim();
    const date = $('#date').val().trim();
    const phone = $('#phone').val().trim();
    const message = $('#message').val().trim();

    // Validate First Name
    if (firstName.length < 5) {
      $('#firstNameError').text('First name should be at least 5 characters');
      isValid = false;
    } else {
      $('#firstNameError').text('');
    }

    // Validate Last Name
    if (lastName.length < 5) {
      $('#lastNameError').text('Last name should be at least 5 characters');
      isValid = false;
    } else {
      $('#lastNameError').text('');
    }

    // Validate Email
    if (!isValidEmail(email)) {
      $('#emailError').text('Invalid email format');
      isValid = false;
    } else {
      $('#emailError').text('');
    }

    // Validate Date
    if (!isValidDate(date)) {
      $('#dateError').text('Invalid date format (dd/mm/yy)');
      isValid = false;
    } else {
      $('#dateError').text('');
    }

    // Validate Phone
    if (!isValidPhone(phone)) {
      $('#phoneError').text('Phone must contain 10 digits');
      isValid = false;
    } else {
      $('#phoneError').text('');
    }

    // Validate Message
    if (message.length < 50) {
      $('#messageError').text('Message should be at least 50 characters');
      isValid = false;
    } else {
      $('#messageError').text('');
    }

    return isValid;
  }
  $('button').on('mouseover', function() {
    const buttonText = $(this).text();
    $(this).text(buttonText.toUpperCase());
  });

  // Revert back to original text when mouse leaves
  $('button').on('mouseout', function() {
    const originalText = $(this).data('original-text');
    $(this).text(originalText);
  });

  // ... (rest of the code)
;

  $(document).ready(function() {
    var nav = $('.nav');
    var navOffset = nav.offset().top;

    $(window).scroll(function() {
      if ($(window).scrollTop() >= navOffset) {
        nav.addClass('nav-fixed');
      } else {
        nav.removeClass('nav-fixed');
      }
    });
  });
});
