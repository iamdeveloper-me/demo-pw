import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-photo-albums',
  templateUrl: './view-photo-albums.component.html',
  styleUrls: ['./view-photo-albums.component.scss']
})
export class ViewPhotoAlbumsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(".gearicon").click(function(){
    //  alert();
      $( this ).toggleClass( "open" );
  });
  }

}
