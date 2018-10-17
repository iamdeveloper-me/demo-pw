import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photogallerydetail',
  templateUrl: './photogallerydetail.component.html',
  styleUrls: ['./photogallerydetail.component.scss']
})
export class PhotogallerydetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   $.getScript('./assets/js/prism.min.js'); 
    $.getScript('./assets/js/owljsor.js');
    $.getScript('./assets/js/jquery.fancybox.min.js');
    $.getScript('./assets/js/curosselfun.js');
  }

}
