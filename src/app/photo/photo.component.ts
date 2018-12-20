import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {

   ngOnInit() {
   $.getScript('./assets/js/blocksit.min.js');
   $.getScript('./assets/js/lazy.js');
   $.getScript('./assets/js/jquery.pinbox.js');
   $.getScript('./assets/js/photo.js');
   }
//  save(){
//    this.ngOnInit();
//    this._router.navigateByUrl('home/photo');
//    location.reload();
//  }
}
