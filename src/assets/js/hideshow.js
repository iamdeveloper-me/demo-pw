$(document).ready(function(){
    // $("#hide").click(function(){
    //     $("#login").hide();
    // });

    $("#new").click(function(){
        $("#signupheading").show();
        $("#signupform").show();
        $("#loginheading").hide();
        $("#new").hide();
        $("#signinuser").show(); 
    });

    $("#signinuser").click(function(){ $("#loginheading").show();  
    $("#signupform").hide(); 
    $("#signupheading").hide();
    $("#signinuser").hide();  
    $("#new").show();
  });
  
//   $( ".accordintik" ).click(function() {
//     //alert("hi")
//     $( this ).toggleClass( "showtik" );
//    });

    
});