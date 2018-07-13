import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {

  constructor() { }

  public ngOnInit() {
    $.getScript('./assets/js/blocksit.min.js');
    $.getScript('./assets/js/lazy.js');
    
  }
 save(){
   this.ngOnInit();
 }
 

}
