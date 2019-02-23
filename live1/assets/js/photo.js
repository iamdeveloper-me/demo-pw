$(document).ready(function () {
   // alert("hi");
    /**
     *  create a new pinboxes! ;)
     *  
     *  avaiable parameters in the options:
     *   every new item in the boxes uses the new item Indicator
     *   
     *   newitemindicator : "new", 
     *   subcontainer : ".prodcont" 
     */
    $('#categoryProductContainer').pinbox({subcontainer:'.actioninside'}).hide(0).fadeIn(1000);
    
    $('#ajaxtrigger').bind('click', function () {
        
        $('#ajax').children().each(function () {
            //add an ajax class so we can see where are the new boxes placed
            $(this).addClass('ajax');
        })
        
        var ajaxResult = $('#ajax').html();
        //set the result into the container:
        $('#categoryProductContainer').append(ajaxResult);
        //update the pinbox view
        $('#categoryProductContainer').pinbox({subcontainer:'.actioninside'}).hide(0).fadeIn(1500);
    });
    
    
});