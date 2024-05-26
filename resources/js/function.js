let anyclasses = document.querySelectorAll(".black_friday , .get-started")
let sign_up_popup = document.querySelector(".sign-up-popup")
let close = document.querySelector(".sign-up-popup-close")
anyclasses.forEach((addactive) => {
    addactive.addEventListener("click", () => {
        sign_up_popup.classList.add("active")
    })
    close.addEventListener("click", () => {
        sign_up_popup.classList.remove("active")
    })
});

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Professional Book Publishers')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Best Self-Publishing Service')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Publish A Book On Amazon')
    .pauseFor(2500)
    .start();

var timeInSecs, ticker;
function startTimer(e) {
    timeInSecs = parseInt(e), ticker = setInterval("tick()", 1e3)
}
function tick() {
    var e = timeInSecs;
    e > 0 ? timeInSecs-- : (clearInterval(ticker), startTimer(180));
    var s = Math.floor(e / 60);
    e %= 60, document.getElementById("mins-text").innerHTML = 1 == s || s > 19 && s % 10 == 1 || s > 1 && s < 5 || e > 19 && e % 10 > 1 && s % 10 < 5 ? "минуты" : "минут", document.getElementById("secs-text").innerHTML = 1 == e || e > 19 && e % 10 == 1 ? "секунда" : e > 1 && e < 5 || e > 19 && e % 10 > 1 && e % 10 < 5 ? "секунды" : "секунд", document.getElementById("mins").innerHTML = s, document.getElementById("secs").innerHTML = e
}
var days, hours, minutes, seconds, target_date = (new Date).getTime() + 1728e5,
    countdown = document.getElementById("tiles");
function getCountdown() {
    var e = (new Date).getTime(),
        s = (target_date - e) / 1e3;
    days = pad(parseInt(s / 86400)), s %= 86400, hours = pad(parseInt(s / 3600)), s %= 3600, minutes = pad(parseInt(s / 60)), seconds = pad(parseInt(s % 60)), countdown.innerHTML = "<span>" + days + "</span><span>" + hours + "</span><span>" + minutes + "</span><span>" + seconds + "</span>"
}
function pad(e) {
    return (e < 10 ? "0" : "") + e
}

jQuery(document).ready(function () {
    jQuery('.portfolio-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        center: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 5.4
            }
        }
    });

    $('.testimonials-slider').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

});

$(window).scroll(function () {
    var sticky = $('header'),
        scroll = $(window).scrollTop();

    if (scroll >= 100) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
});


$(document).ready(function() {

	$('.image-popup-vertical-fit').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}
		
	});

	$('.image-popup-fit-width').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		image: {
			verticalFit: false
		}
	});

	$('.image-popup-no-margins').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom',
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300
		}
	});

});