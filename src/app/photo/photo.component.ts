import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {

  constructor( public _router:Router) { }

   ngOnInit() {
  
   $.getScript('./assets/js/blocksit.min.js');
   $.getScript('./assets/js/lazy.js');
   }
//  save(){
//    this.ngOnInit();
//    this._router.navigateByUrl('home/photo');
//    location.reload(); 
//  }
 

}
