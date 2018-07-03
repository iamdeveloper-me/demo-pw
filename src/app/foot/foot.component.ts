import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foot',
  templateUrl: './foot.component.html',
  styleUrls: ['./foot.component.scss']
})
export class FootComponent implements OnInit {

  constructor() { }

  ngOnInit() {


    $(".footer_bg button.btn.btn-info").click(function(){
      $(this).toggleClass("hide_menus");
  });

    
  }

}
