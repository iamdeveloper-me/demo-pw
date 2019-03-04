$(function(){
      
    $(".fancybox").fancybox({
        openEffect: 'none',
        closeEffect: 'none',
        afterShow: function() { 
            $('<div class="expander"></div>').appendTo(this.inner).click(function() {
                $(document).toggleFullScreen();
            });
        },
        afterClose: function() {
            $(document).fullScreen(false);
        }
    });

    $(document).bind("fullscreenerror", function() {
        alert("Browser rejected fullscreen change");
    });

});
