$(document).ready(function(){
    // Při kliknutí na odkaz v hlavičce
    $('header a').click(function(e){
        // Zrušte výchozí akci prokliku
        e.preventDefault();
        // Získejte hodnotu atributu href odkazu
        var section = $(this).attr('href');
        // Posuňte se na danou sekci
        $('html, body').animate({
            scrollTop: $(section).offset().top
        }, 1000);
    });
});
