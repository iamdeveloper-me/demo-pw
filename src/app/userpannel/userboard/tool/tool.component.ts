import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.scss']
})
export class ToolComponent implements OnInit {

  constructor(public router : Router) { }

  ngOnInit() {
  }

  routeChange(change){
    switch(change) { 
      case 'User/Timeline': { 
        this.router.navigate([change])
         break; 
      } 
     case 'User/Inspirations': { 
        this.router.navigate([change]) 
         break; 
      } 
      case 'User/Bookmarks': { 
        this.router.navigate([change]) 
         break; 
      } 
      case 'User/GuestList': { 
        this.router.navigate([change]) 
         break; 
      } 
      case 'User/vendor': { 
        this.router.navigate([change]) 
         break; 
      } 
      case 'User/Budget': { 
        this.router.navigate([change]) 
         break; 
      } 
      case 'User/UserReviews': { 
        this.router.navigate([change]) 
         break; 
      } 
      
      default: { 
         //statements; 
         break; 
      } 
    } 
  }
}
