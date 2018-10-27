import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {  ViewEncapsulation, Input } from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';

const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';



@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./videos.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class VideosComponent implements OnInit {
    constructor( ) { }
    uploader: FileUploader = new FileUploader({
        url: URL,
        isHTML5: true
      });
      hasBaseDropZoneOver = false;
      hasAnotherDropZoneOver = false;
    
      // Angular2 File Upload
      fileOverBase(e: any): void {
        this.hasBaseDropZoneOver = e;
      }
    
      fileOverAnother(e: any): void {
        this.hasAnotherDropZoneOver = e;
      }
    @Input() name;
   

  ngOnInit() {
    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/jquery/jquery.min.js');
  $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/bootstrap/js/bootstrap.bundle.min.js');
  $.getScript('./assets/js/vendorsidebar.js');
  
  }

  closeResult: string;

  
 


}
