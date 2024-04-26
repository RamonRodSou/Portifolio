/* ---------- Btn LerMais / Btn Ler Menos ------------*/


$(document).ready(async function () {
    $('.sobreMim__span--p').click(async function () {
        const lerSobreMim = $('.sobreMim__texto');
        const sobreMimTexto = $('.sobreMim__span--p');

        if (lerSobreMim.css('overflow') === 'hidden' && lerSobreMim.css('height') === '300px') {
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
            $('html, body').animate({ scrollTop: 0 }, 'fast');
        }
    });
});


/* ---------- Saiba Mais / Saiba mens Projetos------------*/


$(document).ready(async function () {
    $('.saibaMais').each(function () {
        const btn = $(this);
        const descricao = btn.closest('.projetos__lista').find('.projetos__descricao--invisivel');

        btn.click(async function () {
            if (descricao.css('display') === 'none') {
                descricao.css({
                    'display': 'flex',
                });
                btn.text('Fechar');
            } else {
                descricao.css({
                    'display': 'none',
                });
                btn.text('Saiba mais');
            }
        });
    });
});


/* ---------- BTN Projeto / Inicio ------------*/

$(document).ready(async function () {
    $('.projetobtn').click(async function () {
        const display = $('.displayNone');
        const displayli = $('.displayNoneli');
        const btn = $('.projetobtn');
        const projeto = $('.projetosSec');
        const apresentacao = $('#apresentacao');
        const menu = $('.menu');

        if (display.css('display') === 'none' && displayli.css('display') === 'none') {
            display.css({
                'display': 'block',
            });
            displayli.css({
                'display': 'inline',
            });

            btn.text('Projetos');
            projeto.css({
                'display': 'none',
            });

            apresentacao.css({
                'display': 'inline',
            });

        }
        else {
            display.css({
                'display': 'none',
            });
            displayli.css({
                'display': 'none',
            });
            projeto.css({
                'display': 'block',
            });       
            btn.text('Início');
            
            apresentacao.css({
                'display': 'none',
            });

            menu.css({
                'position:': 'absolute',
                'top':'0' 
            })
        }
    });
});
