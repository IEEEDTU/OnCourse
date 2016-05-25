/* For responsiveness of modal image */

var windowsWidth = $(window).width(),
    windowsHeight = $(window).height(),
    modalImage = $('.modal-body').find('img');

if (windowsWidth > windowsHeight) {
    modalImage.css({
        width: '500px',
        height: 'auto'
    });
} else {
    modalImage.css({
        width: 'auto',
        height: '160px'
    });
}