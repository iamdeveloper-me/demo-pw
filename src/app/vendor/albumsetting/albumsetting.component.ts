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
   private update_portfolio_album: string = "http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Albums/updateimagesettings"
description_dailog = false;
albumid:any;
formdata:any = {};
myalbumimages=[];
totalImage=[];
album_tag;
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
    //  this.album_tag =  this.totalImage.tags.split(',');
    //  console.log(  this.album_tag );
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
        for (var albumtag of  this.myalbumimages ) {
          console.log(albumtag.tags);
          this.album_tag =  albumtag.tags.split(',');
        }
     
    });
  }

  ngOnInit() {
    this.route.params.subscribe( params => {
      console.log(params) ;
          this.albumid = params;
    });
  }
  openModel(e){
   
    this.description_dailog = true
    console.log(e);
    this.formdata = e;
      this.album_tag =  this.formdata.tags.split(',');
      console.log(  this.album_tag );
  }


editSetting(f){
       
  this.description_dailog = false;
  console.log(f);
               
  let headers = new Headers();
  var authToken = localStorage.getItem('userToken');
  headers.append('Accept', 'application/json')
  headers.append('Content-Type', 'application/json');
  headers.append("Authorization",'Bearer '+authToken);
const fire  = {       
   AlbumImageId: f.value.AlbumImageId,
  AlbumsId: f.value.AlbumsId,
  Tags: f.value.tags,
  ColorTags: f.value.colorTags,
  SetAsBackground: true}
  console.log(fire)
      this.http.post(this.update_portfolio_album,{
        albumImageId: f.value.AlbumImageId,
        AlbumsId: f.value.AlbumsId,
        Tags: f.value.tags,
        ColorTags: f.value.colorTags,
        SetAsBackground: true
      },{headers:headers}).subscribe(data =>{
     
      console.log(data.json());
  },error=> console.log(error)    )
  this.description_dailog = false;

}

onSelect(tags){
  console.log(tags);
  console.log('tag selected: value is ' + tags);
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

  addtagss(e){
    console.log(e);
  }
}







  


