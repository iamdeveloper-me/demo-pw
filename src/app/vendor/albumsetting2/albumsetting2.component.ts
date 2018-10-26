import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-albumsetting2',
  templateUrl: './albumsetting2.component.html',
  styleUrls: ['./albumsetting2.component.scss']
})
export class Albumsetting2Component implements OnInit {


description_dailog = false;


  constructor() { }

  ngOnInit() {
  }


 editSettting(){
      this.description_dailog = false;



// if(data.status == 200)
//       {
//         this.photo_ved_dailog = false;
//         this.phone_dailog = false;
//         console.log("saved");
//       }


      }

closeModel(){
       
  this.description_dailog = false;

}


}
