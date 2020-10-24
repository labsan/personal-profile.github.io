// Sidenav
const sidenav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sidenav);

// Slider
const slider = document.querySelectorAll('.slider');
M.Slider.init(slider, {
    indicators: false,
    height: 600,
    interval: 2000
});

// Parallax
const parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax);

// Materialbox
const materialbox = document.querySelectorAll('.materialboxed');
M.Materialbox.init(materialbox);

// Scrollspy
const scroll = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scroll, {
    scrollOffset: 50
});