$(document).ready(function() {
    $('.toggle-button').click(function() {
        $(this).closest('.tr').toggleClass('toggled');
    });
});