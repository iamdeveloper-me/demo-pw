import { Component, OnInit } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-albumsetting',
  templateUrl: './albumsetting.component.html',
  styleUrls: ['./albumsetting.component.scss']
})
export class AlbumsettingComponent implements OnInit {

description_dailog = false;

  constructor(private http: Http ,  private route: ActivatedRoute) { 
    

  }

  ngOnInit() {
    
  }
 
editSetting(){
       
  this.description_dailog = false;

}


  //Album Get

closeModel(){
       
  this.description_dailog = false;

}

}







  


