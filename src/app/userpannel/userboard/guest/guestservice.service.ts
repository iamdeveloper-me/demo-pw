import { Injectable, OnInit } from '@angular/core';
import { apiService } from 'app/shared/service/api.service';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class GuestserviceService implements OnInit {
url = 'Guests/myGuests';
  constructor(public apiservice: apiService) {
    
   };
   ngOnInit(){

   }
   getMyGuestList(): Observable <any>  {
     return this.apiservice.getData(this.apiservice.serverPath+ this.url);
   };

}
