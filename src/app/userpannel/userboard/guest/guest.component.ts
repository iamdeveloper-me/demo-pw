import { Component, OnInit } from '@angular/core';
import { GuestserviceService, GroupVm } from './guestservice.service';
import { ToastrService } from 'ngx-toastr';
import { NumberValueAccessor } from '@angular/forms/src/directives';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.scss']
})
export class GuestComponent implements OnInit {
  twitterDailog = false;
  groupDailog = false;
  menuDailog = false;
  guestList: any;
  totalGuests:Number;
  totalChilds: number;
  totalAdulst: number;
  constructor(public _guestservice: GuestserviceService, public toaster: ToastrService) {
    this.myguestCount();
    this.getMyGroups();
    this.searchMyGuest();
    this.getMenuGuestCount()
    this.getMyMenu();
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
  createUpdateGroup(){
    console.log(this._guestservice.objGroup);
    this._guestservice.addUpdateGroup().subscribe(res=>{
      this.toaster.success(res.message,'Done !');
      this._guestservice.objGroup = new GroupVm();
      this.closeModel();
      this.getMyGroups();
      this.getMyMenu();
    },error=>{
      this.toaster.error(error,'Error');
      console.log(error);
    }
    )
  }
  getMyGroups(){
    this._guestservice.getMyGroups().subscribe(res=>{
      this._guestservice.myGroups = res;
      console.log(this._guestservice.myGroups);
    })
  }
  searchMyGuest(){
    this._guestservice.searchMyGuest('').subscribe(res=>{
      this.guestList = res;
    })
  }
  myguestCount(){
    this._guestservice.myguestCount().subscribe(res=>{
      this.guestList = res;
      this.totalAdulst = res.adults;
      this.totalChilds = res.childs;
      this.totalGuests = res.total;
    })
  }

  closeModel(){
    this.twitterDailog = false
    this.groupDailog = false;
    this.menuDailog = false;
  }
  createUpdateMenu(){
    this._guestservice.createUpdateMenu().subscribe(res=>{
      this.toaster.success(res.message,'Done !');
      this.getMenuGuestCount();
    },error=>{
      this.toaster.error(error,'Error');
    })
  }
  editMenu(m){
    this._guestservice.objMenu = m;
  }
  getMenuGuestCount(){
    this._guestservice.getMenuGuestCount().subscribe(res=>{
      this._guestservice.menuGuestCount = res;
      console.log(this._guestservice.menuGuestCount);
    })
  }
  getMyMenu(){
    this._guestservice.getMyMenu().subscribe(res=>{
      this._guestservice.myMenuList = res;
      console.log(this._guestservice.myMenuList)
    })
  }

  /// Guest Section
  createUpdateGuest(){
    this._guestservice.objGuest.groupsId
    this._guestservice.objGuest.groups.name = this._guestservice.myGroups.filter(g=>g.groupsId==this._guestservice.objGuest.groupsId)[0].name;
    this._guestservice.createUpdateGuest().subscribe(res=>{
      if(this._guestservice.objGuest.guestsId ===res.guestsId){
        this.toaster.success(res.message, 'Updated !');
        this.searchMyGuest();
        this.closeModel();
      }else{
        this.toaster.success(res.message, 'Done !');
      }
      console.log(res);
    },error=>{
      this.toaster.error(error,'Error !');
    })
  }
}
