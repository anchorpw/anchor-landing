$( document ).ready(function() {
    $( 'a.scrollLink' ).click(function( event ) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top - 150 }, 500);
    });

    $('#formIntroSubmit').click(function() {
        $('#formIntro').hide();
        $('#formIntroSuccess').fadeIn();

        return false;
    });

    $('#formIContactUsSubmit').click(function() {
        $('#formContactUs').hide();
        $('#formContactUsSuccess').fadeIn();

        return false;
    })

    $('.dropdown').click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active');
        $(this).find('.dropdown-menu').slideToggle(300);
    });
    $('.dropdown').focusout(function () {
        $(this).removeClass('active');
        $(this).find('.dropdown-menu').slideUp(300);
    });
    $('.dropdown .dropdown-menu li').click(function () {
        $(this).parents('.dropdown').find('span').text($(this).text());
        $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
    });
});
