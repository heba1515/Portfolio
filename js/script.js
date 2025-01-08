
$(document).ready(function() {
    $('#fullpage').fullpage({
        'verticalCentered': false,
        'scrollingSpeed': 600,
        'autoScrolling': false,
        'css3': true,
        'navigation': true,
        'navigationTooltips': ['Home', 'About', 'Portifolio', 'Services', 'Contact'],
        'slidesNavigation': true,
        'controlArrows': false,
        'navigationPosition': 'right',
    });
});

var typed = new Typed('#element', {
    strings: ["heba sabri"],
    typeSpeed: 60,
    backSpeed: 60,
    smartBackspace: true,
    startDelay: 300,
    backDelay: 700,
    loop: true,
    loopCount: Infinity,
});