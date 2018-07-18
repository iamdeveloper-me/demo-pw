 $('input[id=base-input]').change(function() {
        $('#fake-input').val($(this).val().replace("C:\\fakepath\\", ""));
    });

//==================Javascript code for custom input type file on button ================//

    $('input[id=main-input]').change(function() {
        console.log($(this).val());
        var mainValue = $(this).val();
        if(mainValue == ""){
            document.getElementById("fake-btn").innerHTML = "Choose File";
        }else{
            document.getElementById("fake-btn").innerHTML = mainValue.replace("C:\\fakepath\\", "");
        }
    });

//=========================input type file change on button ends here==================== //

//    ===================== snippet for profile picture change ============================ //

    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('.infoimg')
                        .attr('src', e.target.result)
                        .width(400)
                        .height(300);
            };
            reader.readAsDataURL(input.files[0]);
        }
    }

//    =================================== ends here ============================================ //

    var checkme = document.getElementById('checker');
    var userImage = document.getElementById('image-input');
    var userName = document.getElementById('companyname');
    var userPhone1 = document.getElementById('phone1');
    var userPhone2 = document.getElementById('phone2');
    var userEmail = document.getElementById('companytitle');
    var usercountry = document.getElementById('country');
    var usercity = document.getElementById('city');
    var userPostalcode = document.getElementById('postalcode');
    var useraddress = document.getElementById('address');

    var UserSend = document.getElementById('submit');
    var editPic = document.getElementById('PicUpload');
  




    var suntime = document.getElementById('suntime');
    var montime = document.getElementById('montime');
    var tuetime = document.getElementById('tuetime');
    var wedtime = document.getElementById('wedtime');
    var thutime = document.getElementById('thutime');
    var fritime = document.getElementById('fritime');
    var sattime = document.getElementById('sattime');


    checkme.onchange = function() {
        UserSend.disabled = !this.checked;
        userImage.disabled = !this.checked;
        userName.disabled = !this.checked;
        userPhone1.disabled = !this.checked;
        userPhone2.disabled = !this.checked;
        userEmail.disabled = !this.checked;
        usercountry.disabled =!this.checked;
        usercity.disabled = !this.checked;
        userPostalcode.disabled = !this.checked;
        useraddress.disabled = !this.checked;


        suntime.disabled = !this.checked;
        montime.disabled = !this.checked;
        tuetime.disabled = !this.checked;
        wedtime.disabled = !this.checked;
        thutime.disabled = !this.checked;
        fritime.disabled = !this.checked;
        sattime.disabled = !this.checked;

        editPic.style.display = this.checked ? 'block' : 'none';
    };



    var checkmedescription = document.getElementById('checkerdescription');
    var userdescription = document.getElementById('description');
    var userfacebook = document.getElementById('facebook');
    var usergoogle = document.getElementById('google');
    var userpinterest = document.getElementById('pinterest');
    var userInstagram = document.getElementById('Instagram');
    
    
    checkmedescription.onchange = function() {
        UserSend.disabled = !this.checked;
        userdescription.disabled = !this.checked;
        userfacebook.disabled = !this.checked;
        usergoogle.disabled = !this.checked;
        userpinterest.disabled = !this.checked;
        userInstagram.disabled = !this.checked;

    };

    
