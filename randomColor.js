
$(document).ready(function () {
    loadRandomColors();
    $('.color-hex').mouseenter(function () {
        $(this).css("opacity", "1");
    });
    $('.color-hex').mouseleave(function () {
        $(this).css("opacity", "0.5");
    });
    $('.refresh').click(function () {
        loadRandomColors();
    });

    $('.color-hex').click(function () {
        var input = $('<input>');
        var color = $(this).text();
        $('body').append(input);
        input.val(color).select();
        document.execCommand('copy');
        input.remove();
        $('.copied').fadeIn().delay(1500).fadeOut();
    });
});

function loadRandomColors() {
    $('.color').each(function () {
        var randomRedColor = Math.floor(Math.random() * 255);
        var randomGreenColor = Math.floor(Math.random() * 255);
        var randomBlueColor = Math.floor(Math.random() * 255);
        $(this).css('background-color', 'rgb(' + randomRedColor + ',' + randomGreenColor + ',' + randomBlueColor + ')');
        const rgbToHex = (r, g, b) => {
            return '#' + [r, g, b].map(x => {
                const hex = x.toString(16);
                return hex.length === 1 ? '0' + hex : hex;
            }).join('');
        }
        var hexValue = rgbToHex(randomRedColor, randomGreenColor, randomBlueColor);
        $(this).children('.color-hex').text(hexValue);
    })
}