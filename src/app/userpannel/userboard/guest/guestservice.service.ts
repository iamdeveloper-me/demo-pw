import { Injectable, OnInit } from '@angular/core';
import { apiService } from 'app/shared/service/api.service';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class GuestserviceService implements OnInit {
url = 'Guests/myGuests';
createUpdateGroup_url = 'Groups/createupdategroups';
objGroup:GroupVm;
  constructor(public apiservice: apiService) {
    this.objGroup = new GroupVm();
   };
   ngOnInit(){

   }
   getMyGuestList(): Observable <any>  {
     return this.apiservice.getData(this.apiservice.serverPath+ this.url);
   };
   addUpdateGroup(): Observable<any>{
    return this.apiservice.postData(this.apiservice.serverPath+this.createUpdateGroup_url,this.objGroup);
   }
  }
  export class GroupVm {
    groupsId: number;
    memberId: number;
    name: string;
  }
