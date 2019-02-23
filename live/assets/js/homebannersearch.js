 $(document).ready(function() {
    setTimeout(function(){
        if ($("#source") === undefined) {
            setTimeout(function(){ createDropDown(); }, 2000);
        } else {
            createDropDown();
        }
    }, 2000);

    $(document).on('click', ".dropdown dt a", function() {
        $(".dropdown dd ul").toggle();
        // if ($(".dropdown dd ul").hasClass("hide")) {
        //     $(".dropdown dd ul").removeClass("hide");
        // } else {
        //     $(".dropdown dd ul").addClass("hide");
        // }
    });
    $(document).bind('click', function(e) {
        var $clicked = $(e.target);
        if (! $clicked.parents().hasClass("dropdown"))
            $(".dropdown dd ul").hide();
    });
                
    $(document).on('click', ".dropdown dd ul li a", function() {
        var text = $(this).html();
        $(".dropdown dt a").html(text);
        $(".dropdown dd ul").hide();
        
        var source = $("#source");
        source.val($(this).find("span.value").html())
    });
});
        

function createDropDown(){
   
    var source = $("#source");
    var selected = source.find("option[selected]");  // get selected <option>
    var options = $("option", source);  // get all <option> elements
    // create <dl> and <dt> with selected value inside it
    $("#append").append('<dl id="target" class="dropdown"></dl>')
    $("#target").append('<dt><a>' + selected.text() + 
        '<span class="value">' + selected.val() + 
        '</span></a></dt>')
    $("#target").append('<dd><ul></ul></dd>')
    // iterate through all the <option> elements and create UL
    options.each(function(){
        $("#target dd ul").append('<li><a>' + 
            $(this).text() + '<span class="value">' + 
            $(this).val() + '</span></a></li>');
    });
     // $(".dropdown dd ul").addClass("hide");
}