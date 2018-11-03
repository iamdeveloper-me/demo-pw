import { Component, OnInit } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-albumsetting',
  templateUrl: './albumsetting.component.html',
  styleUrls: ['./albumsetting.component.scss']
})
export class AlbumsettingComponent implements OnInit {
  private album_image: string = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Albums/updateimagesettings'
  // /api/Albums/myalbums
  private url: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/'
  
description_dailog = false;
albumid:any;
myalbumimages=[];
totalImage=[];
albumname:any;
tags:any;
colourtags:any;
  constructor(private http: Http ,  private route: ActivatedRoute ,public toastr: ToastrService) { 
    let headers = new Headers();
    var authToken = localStorage.getItem('userToken');
    headers.append('Accept', 'application/json')
    headers.append('Content-Type', 'application/json');
    headers.append("Authorization",'Bearer '+authToken);
  
  
    //Album Get
    this.http.get(this.url+'api/Albums/myalbums',{headers:headers})
    .subscribe(data =>{
     this.totalImage =  data.json();
     console.log(data.json()); 
     console.log(this.albumid.id); 
  
     console.log(data.json()); 
     for (var item of  this.totalImage ) {
     
     if(this.albumid.id == item.albumsId)
      {
      //    alert("dsf"); 
       console.log(item);
      // console.log(item.tags);
      this.albumname = item.albumName;
      this.tags = item.tags;
      this.colourtags = item.colorTags;
      this.myalbumimages =  item.albumImages;
       }
  }
    
     
    });
  }

  ngOnInit() {
    this.route.params.subscribe( params => {
      console.log(params) ;
          this.albumid = params;
    });
  }
 
editSetting(){
       
  this.description_dailog = false;

}


  //Album Get

closeModel(){
       
  this.description_dailog = false;

}
  //service
  deleteImage(image,index){


    let con = confirm('Are you sure you want to delete this?')
    if (con) {
      console.log(image);
      console.log(index);
      console.log(image.albumImageId);
      this.myalbumimages.splice(index,1);
      let headers = new Headers();
      var authToken = localStorage.getItem('userToken');
      headers.append('Accept', 'application/json')
      headers.append('Content-Type', 'application/json');
      headers.append("Authorization",'Bearer '+authToken);
    
    
      //Album Getremoveevent?id'+'='+id  ?AlbumImageId'+'='+image.albumImageId
      this.http.get(this.url+'api/Albums/removeimage?AlbumImageId'+'='+image.albumImageId,{headers:headers})
      .subscribe(data =>{
        console.log(data.json());
        this.toastr.success(data.json().message);
          }); 

    }

  }


}







  


