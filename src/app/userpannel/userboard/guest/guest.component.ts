import { Component, OnInit } from '@angular/core';
import { GuestserviceService } from './guestservice.service';
import { apiService } from 'app/shared/service/api.service';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.scss']
})
export class GuestComponent implements OnInit {
  twitterDailog = false
  guestList: any;
  constructor(public _guestservice: GuestserviceService,private apiService : apiService) {
    
    this._guestservice.getMyGuestList().subscribe(res=>{
      this.guestList = res;  
      console.log(this.guestList)
    });
   }
    

  ngOnInit(){ 
  $.getScript('http://code.jquery.com/jquery-1.11.1.min.js'); 

$(".guestclick").click(function() {
  $('.guestbox').show();
  $(".guestclick").addClass("activebuttontab");
  $(".groupclick").removeClass("activebuttontab");
  $(".menuclick").removeClass("activebuttontab");
  $(".inviteclick").removeClass("activebuttontab");
  $('.groupbox').hide();
  $('.invitebox').hide();
  $('.menubox').hide();
});
$(".groupclick").click(function() {
  $('.groupbox').show();
  $(".guestclick").removeClass("activebuttontab");
  $(".groupclick").addClass("activebuttontab");
  $(".menuclick").removeClass("activebuttontab");
  $(".inviteclick").removeClass("activebuttontab");
  $('.guestbox').hide();
  $('.invitebox').hide();
  $('.menubox').hide();
});
$(".menuclick").click(function() {
  $('.groupbox').hide();
  $('.guestbox').hide();
  $('.invitebox').hide();
  $('.menubox').show();
  $(".guestclick").removeClass("activebuttontab");
  $(".groupclick").removeClass("activebuttontab");
  $(".menuclick").addClass("activebuttontab");
  $(".inviteclick").removeClass("activebuttontab");
});
$(".inviteclick").click(function() {
  $('.groupbox').hide();
  $('.guestbox').hide();
  $('.invitebox').show();
  $(".guestclick").removeClass("activebuttontab");
  $(".groupclick").removeClass("activebuttontab");
  $(".menuclick").removeClass("activebuttontab");
  $(".inviteclick").addClass("activebuttontab");
  $('.menubox').hide();
});

$(document).ready(function () {
    $('.material-button-toggle').on("click", function () {
        $(this).toggleClass('open');
        $('.option').toggleClass('scale-on');
    });
});

$(window).scroll(function(){
      if ($(this).scrollTop() > 150) {
         $('.tabbutton').addClass('fixedpostioneddesktop');
      } else  {
         $('.tabbutton').removeClass('fixedpostioneddesktop');
      }
  });


  $("li").removeClass("user");
  $("#login").hide();



  var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
  }


  myGuests(){
    this.apiService.getData(this.apiService.serverPath+'Guests/myGuests',).subscribe(
      data => {
      console.log(data);
    },
    error => {
      console.log(error)
    }
  )
}

  createupdateguests(guest){
    this.apiService.postData(this.apiService.serverPath+'Guests/createupdateguests',guest.value).subscribe(
      data => {
        console.log(data)
      },
      error => {
        console.log(error);
      }
    )
  }

  myguestscounts(){
    this.apiService.getData(this.apiService.serverPath+'Guests/myguestscounts',).subscribe(
      data => {
        console.log(data)
      },
      error => {
        console.log(error);
      }
    )
  }

  myguestssearch(search){
    this.apiService.postData(this.apiService.serverPath+'Guests/myguestssearch',search.value).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    )
  }

  closeModel(){
    this.twitterDailog = false
  }
}


export class GuestsVM {
  guestsId : number;
  name : string;
  memberId : number;
  groupsId : number;
  groups:Array<GroupsVM>;
  menuId : number;
  menu:Array<MenuVM>;
  ageGroup : string;
  invitationSent : boolean;
}

export class GroupsVM {
  groupsId : number;
  memberId : number;
  name: string;
}

export class 	MenuVM {
  menuId : number;
  memberId : number;
  name : number;
}

export class SearchGuestsVM {
  query : string;
}