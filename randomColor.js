
    $( document ).ready(function() {
    loadRandomColors();
    $('.color-hex').mouseenter(function(){
        $(this).css("opacity","1");
    });
    $('.color-hex').mouseleave(function(){
        $(this).css("opacity","0.5");
    });
    $('.refresh').click(function(){
        loadRandomColors();
        });

    $('.color-hex').click(function(){
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
        $('.color').each(function(){
        var numberColor =  Math.random().toString(16).substr(2,6).toUpperCase(); 
        console.log (numberColor);  
        var rColor = '#' + numberColor;
        $(this).css('background-color', rColor);
        $(this).children('.color-hex').text(rColor);
    })
}