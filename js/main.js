// Menu //

const navbarToggle = document.querySelector("[data-collapse-toggle]");
const navbarDropdown = document.querySelector(
  navbarToggle.getAttribute("data-collapse-toggle")
);

navbarToggle.addEventListener("click", () => {
  const expanded =
    navbarToggle.getAttribute("aria-expanded") === "true" || false;
  navbarToggle.setAttribute("aria-expanded", !expanded);
  navbarDropdown.classList.toggle("hidden");
});

function toggleDropdown() {
  const dropdown = document.querySelector("#dropdownMenu");
  const isHidden = dropdown.classList.contains("hidden");
  dropdown.classList.toggle("hidden", !isHidden);
}

$(document).ready(function() {
    $(".navbar-toggle").click(function() {
      $(this).find(".toggle-icon").toggleClass("fa-bars fa-times"); // Replace with your icon classes
      $($(this).data("collapse-toggle")).toggle();
    });
  });

  $(document).ready(function() {
    $('#toggleButton').click(function() {
      $('#toggleButton').addClass('hidden');
      $('#closeButton').removeClass('hidden');
      $('#navbar-dropdown').removeClass('hidden');
    });
  
    $('#closeButton').click(function() {
      $('#closeButton').addClass('hidden');
      $('#toggleButton').removeClass('hidden');
      $('#navbar-dropdown').addClass('hidden');
    });
  });

  // Back To Top //

  $(document).ready(function() {
    const homeOffSet = $('#home').offset().top;
    const btnUp = $('#btnUp');

    btnUp.hide(); // Hide the button initially

    $(window).scroll(function() {
        const scrollTop = $(this).scrollTop();

        if (scrollTop > homeOffSet - 0) {
            btnUp.fadeIn(700);
        } else {
            btnUp.fadeOut(700);
        }
    });

    $('#btnUp').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 1000);
        // new WOW().init();
    });
});

//////////////////////////////////////////
// Swipper //
const swiper = new Swiper('.swiper', {

  loop: false,

  breakpoints: {
      0: {
          slidesPerView: 2,
          spaceBetween: 10,
      },
      641: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      769: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      1100: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
  },

  speed: 1000,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
},

  autoplay: {
      delay: 800,
      disableOnInteraction: true,
      
  },

});

// Development-Assets //
$(document).ready(function() {
  let numberElement = $('#number1');
  let count = 1;
  let activated = false;

  $(window).on('scroll', function() {
  let elementOffset = numberElement.offset().top;
  let windowHeight = $(window).height();
  let scrollHeight = $(document).scrollTop();

  if (scrollHeight + windowHeight >= elementOffset && !activated) {
    activated = true;

    let interval = setInterval(function() {
      numberElement.text(convertToArabicNumerals(count));
      count++;

      if (count > 200) {
        clearInterval(interval);
        }
      }, 5);
    }
  });
});
//////////////////////////////////
$(document).ready(function() {
  let numberElement = $('#number2');
  let count = 1;
  let activated = false;

  $(window).on('scroll', function() {
  let elementOffset = numberElement.offset().top;
  let windowHeight = $(window).height();
  let scrollHeight = $(document).scrollTop();

  if (scrollHeight + windowHeight >= elementOffset && !activated) {
    activated = true;

    let interval = setInterval(function() {
      numberElement.text(convertToArabicNumerals(count));
      count=count+3;

      if (count > 1001) {
        clearInterval(interval);
        }
      },0);
    }
  });
});
//////////////////////////////////
$(document).ready(function() {
  let numberElement = $('#number3');
  let count = 1;
  let activated = false;

  $(window).on('scroll', function() {
  let elementOffset = numberElement.offset().top;
  let windowHeight = $(window).height();
  let scrollHeight = $(document).scrollTop();

  if (scrollHeight + windowHeight >= elementOffset && !activated) {
    activated = true;

    let interval = setInterval(function() {
      numberElement.text(convertToArabicNumerals(count));
      count++;

      if (count > 12) {
        clearInterval(interval);
        }
      }, 100);
    }
  });
});
//////////////////////////////////
function convertToArabicNumerals(number) {
  let arabicNumerals = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  let result = '';
  while (number > 0) {
    let digit = number % 10;
    result = arabicNumerals[digit] + result;
    number = Math.floor(number / 10);
  }
  return result;
}
//////////////////////////////////
