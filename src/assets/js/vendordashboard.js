$(document).ready(function(){
    // alert("hell");
    // $("#hide").click(function(){
    //     $("#login").hide();
    // });

    // $("#mylist").hide();
    // $("#chat").hide();
    $("#mylisting").click(function(){
         $("#mylist").show();
         $("#myaccount").hide();
         $("#editprofile").hide();
         $("#dash").hide();
     });
     $("#myaccounts").click(function(){
        $("#myaccount").show();
        $("#mylist").hide();
        $("#editprofile").hide();
        $("#dash").hide();
    });

    $("#editprofiles").click(function(){
        $("#editprofile").show();
        $("#myaccount").hide();
        $("#mylist").hide();
        $("#dash").hide();
       
    });
    $("#gallerys").click(function(){
        $("#gallery").show();
        $("#myaccount").hide();
        $("#mylist").hide();
        $("#dash").hide();
        $("#editprofile").hide();
       
    });
});