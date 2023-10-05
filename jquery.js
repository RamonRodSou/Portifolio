// $('.sobreMim__span--p').on('click',lerSobreMim)

// function lerSobreMim () {
//     $('.sobreMim__texto').css(
//         {
//             'overflow':'visible', 
//             'height': 'auto', 
//         })   
// }

$(document).ready(function() {
    $('.sobreMim__span--p').click(function () {
        var lerSobreMim = $('.sobreMim__texto');
        var sobreMimTexto = $('.sobreMim__span--p');

        if(lerSobreMim.css('overflow') === 'hidden' && lerSobreMim.css('height') === '300px'){
            lerSobreMim.css({
                'overflow': 'visible',
                'height': 'auto'
            });
            sobreMimTexto.text('Ler menos');
        }
        else {
            lerSobreMim.css({
                'overflow': 'hidden',
                'height': '300px'
            });
            sobreMimTexto.text('Ler mais');
        }
    });
});
