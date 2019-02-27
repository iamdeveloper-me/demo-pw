import { Injectable, OnInit } from '@angular/core';
import { apiService } from 'app/shared/service/api.service';
import { Observable, observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class GuestserviceService implements OnInit {
url = 'Guests/myGuests';
createUpdateGroup_url = 'Groups/createupdategroups';
getMyGroup_url = 'Groups/mygroups';
groupGuestCount_url = 'groups/groupguestscount'
myGuestSearch_url = 'Guests/myguestssearch';
myGuestCount_url = 'Guests/myguestscounts';
createUpdateMenu_url = 'Menu/createupdatemenu'
menuGuestCount_Url = 'Menu/menuguestscount';
mymenu_url = 'Menu/mymenu';

/// Guest
createUpdaateGuest_Url = 'Guests/createupdateguests';

objGroup:GroupVm;
objMenu: MenuVm;
menuGuestCount: any;
myGroups: any;
objGuest:guestVm;
myMenuList: any;
  constructor(public apiservice: apiService) {
    this.objGroup = new GroupVm();
    this.objMenu = new MenuVm();
    this.objGuest = new guestVm();
   };
   ngOnInit(){

   }
   getMyGuestList(): Observable <any>  {
     return this.apiservice.getData(this.apiservice.serverPath+ this.url);
   };
   addUpdateGroup(): Observable<any>{
    return this.apiservice.postData(this.apiservice.serverPath+this.createUpdateGroup_url,this.objGroup);
   }
   getMyGroups(): Observable<any>{
     return this.apiservice.getData(this.apiservice.serverPath+this.groupGuestCount_url);
   }
   searchMyGuest(searchquery){
     return this.apiservice.postData(this.apiservice.serverPath+ this.myGuestSearch_url,{'searchquery': searchquery});
   }
   myguestCount(): Observable<any>{
     return this.apiservice.getData(this.apiservice.serverPath+ this.myGuestCount_url);
   }
   createUpdateMenu(): Observable<any>{
    return this.apiservice.postData(this.apiservice.serverPath+ this.createUpdateMenu_url,this.objMenu);
   }
   getMenuGuestCount(): Observable<any>{
    return this.apiservice.getData(this.apiservice.serverPath + this.menuGuestCount_Url);
   }
   getMyMenu(): Observable<any>{
     return this.apiservice.getData(this.apiservice.serverPath+ this.mymenu_url);
   }
   createUpdateGuest(): Observable<any>{
     console.log(JSON.stringify(this.objGuest));
          return this.apiservice.postData(this.apiservice.serverPath + this.createUpdaateGuest_Url,this.objGuest);
   }
  }
  export class GroupVm {
   public groupsId: number;
   public memberId: number;
   public name: string;
  }
  export class MenuVm {
      public menuId:number;
      public memberId:number;
      public name: string;
  }
  export class guestVm {
    guestsId: number;
    name: string;
    memberId: number;
    groupsId: number;
    groups: GroupVm;
    menuId: number;
    menu: MenuVm;
    ageGroup: string;
    invitationSent: boolean;
    constructor(){
      this.guestsId=0;
      this.memberId = 0;
      this.menu = new MenuVm();
      this.menu.memberId=0;
      this.menu.name='';
      this.menu.menuId=0;
      this.groups = new GroupVm();
      this.groups.memberId=0;
      this.groups.name='';
      this.groups.groupsId = 0;

    }
  }
