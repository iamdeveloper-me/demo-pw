import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vediosetting',
  templateUrl: './vediosetting.component.html',
  styleUrls: ['./vediosetting.component.scss']
})
export class VediosettingComponent implements OnInit {


  Editvediodetail_dailog = false;
		
  constructor() { }

  ngOnInit() {
  }



  closeModel(){

this.Editvediodetail_dailog = false;

}
 
editvedio(){

this.Editvediodetail_dailog = false;

}

}
