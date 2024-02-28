$(document).ready(function() {
    // alert("ok");
    $('.accordion-item.active .accordion-body').slideDown();
    $('.accordion-header').click(function() {
        // alert("ok");

        $(this).parent().toggleClass('active');
        $(this).parent().children('.accordion-body').slideToggle();
    });
});