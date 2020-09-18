var tippy = require('scriptjs');

scriptjs('https://unpkg.com/tippy.js@5', function() {
    tippy();
});



tippy('#sulp', {
    content: '<strong>Sul</strong><br> 25 profissionais',
    theme: 'custom',
    maxWidth: 350,
    placement: "right-start",
});

tippy('#nordestep', {
    content: '<strong>Nordeste</strong><br> 13 profissionais',
    theme: 'custom',
    maxWidth: 350,
    placement: "right-start",
});

tippy('#nortep', {
    content: '<strong>Norte</strong><br> 7 profissionais',
    theme: 'custom',
    maxWidth: 350,
    placement: "right-start",
});

tippy('#centro-oestep', {
    content: '<strong>Centro-oeste</strong><br> 33 profissionais',
    theme: 'custom',
    maxWidth: 350,
    placement: "top",
});