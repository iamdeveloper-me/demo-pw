$(document).ready(function(){
    alert("hell");
    
    $("#lists").click(function(){
         $("#list").show();
         $("#chat").hide();
         $("#editprofile").hide();
     });

     $("#chats").click(function(){
        $("#chat").show();
        $("#list").hide();
        $("#editprofile").hide();
    });

    $("#edits").click(function(){
        $("#editprofile").show();
        $("#chat").hide();
        $("#list").hide();
    });
    
});