$(document).ready(function(){
    // when the share button is clicked
    $('.share-icon-desktop > button, .share-icon-mobile').click(function(){
        // the icon container will appear/disappear
        $('.icons').toggleClass("flex");
    });
})