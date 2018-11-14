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
colour = '';
colour_pink = 'pink';
colour_red = 'red';
colour_orange = 'orange';
colour_yellow = 'yellow';
colour_green = 'green';
colour_Blue = 'Blue';
colour_purple = 'purple';
colour_brown = 'brown';
colour_black = 'black';
colour_grey = 'grey';
colour_white = 'white';
colour_picker1 = [];
tags_picker1 = [];
taggg = '';
t='';
tai:any;
choose:any ;
a:any;
albumImagesModify = [];

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
  
      for (var albumtag of  this.myalbumimages ) {
        if(albumtag.tags != null && albumtag.colorTags != null){
          albumtag['tags'] = albumtag['tags'].split(',');
          albumtag['colorTags'] = albumtag['colorTags'].split(',');
        }
        
        this.albumImagesModify.push(albumtag);
        console.log(this.albumImagesModify)
      }
      
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
  openModel(e){
   
    this.description_dailog = true
    console.log(e);
    this.formdata = e;
      this.album_tag =  this.formdata.tags.split(',');
      console.log(  this.album_tag );
  }

  tags_bage(e){
    console.log(e);
   this.t = e;
   this.tags_picker1.push(e);
    console.log(   this.tags_picker1);
    this.tai =  this.tags_picker1

    this.taggg = '';
  }
  colour_picker(d){
  console.log(d)
  this.colour = d;
  this.colour_picker1.push(this.colour );
  console.log( this.colour_picker1);
  // for (var c of  this.colour_picker1 ) {
  //   console.log(c);
  //   this.a =  c.split(',');
  // }

   this.a  = this.colour_picker1
  // console.log(this.a );
 
}
remove_tag_picker(g){
  console.log(g);
 
  this.tags_picker1.splice(g, 1);
}
remove_colour_picker(g){
  console.log(g);
  this.colour_picker1.splice(g, 1);
  
}
editSetting(f){
       
  this.description_dailog = false;
  console.log(f);
  console.log(this.tags_picker1.join(','));
  console.log(this.colour_picker1.join(','));

  let headers = new Headers();
  var authToken = localStorage.getItem('userToken');
  headers.append('Accept', 'application/json')
  headers.append('Content-Type', 'application/json');
  headers.append("Authorization",'Bearer '+authToken);
const fire  = {       
   AlbumImageId: f.value.AlbumImageId,
  AlbumsId: f.value.AlbumsId,
  Tags:this.tags_picker1.join(','),
  ColorTags:  this.colour_picker1.join(','),
  SetAsBackground: true}
  console.log(fire)
      this.http.post(this.update_portfolio_album,{
        albumImageId: f.value.AlbumImageId,
        AlbumsId: f.value.AlbumsId,
        Tags:this.tags_picker1.join(','),
        ColorTags:  this.colour_picker1.join(','),
        SetAsBackground: true
      },{headers:headers}).subscribe(data =>{
     
      console.log(data.json());
      this.toastr.success(data.json().message);
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
      this.albumImagesModify.splice(index,1);
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







  


