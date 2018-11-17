import { Component, OnInit,ViewChild } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators} from '@angular/forms';
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
t='';
tag_array = [];
choose:any ;
a = [];
tag_error;
e_data;
taggg:any;
albumImagesModify = [];
colour_tag_error;
@ViewChild('portEdit') validationForm: FormGroup;
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
     $.getScript('./assets/js/vendorsidebar.js');
    this.route.params.subscribe( params => {
      console.log(params) ;
          this.albumid = params;
    });
  }
  openModel(e){
   
    this.description_dailog = true
    console.log(e);
    this.formdata = e;

    if(e.tags.length != 0  && e.colorTags.length != 0 ){
      this.tag_array = e.tags?e.tags:[];
      this.a = e.colorTags;
      console.log(  this.a);
    }
    
      // this.album_tag =  this.formdata.tags.split(',');
      // console.log(  this.album_tag );
  }

  tags_bage(e){
    
              if(this.tag_array.length != 0 && e != ''){
                      console.log(e);
                      this.tag_array.push(e);
                      console.log( this.tag_array);
                      this.taggg = '';
              }else{
                   this.tag_array = [];
                   this.tag_array.push(e);
                   this.taggg = '';
              }
   }
  colour_picker(d){
                    this.a.push(d);
                    console.log(this.a);
                    //this.colour = d;
                    this.colour_picker1.push(d);

                    //console.log( this.colour_picker1);
                    // for (var c of  this.colour_picker1 ) {
                    //   console.log(c);
                    //   this.a =  c.split(',');
                    // }

                     //this.a  = this.colour_picker1
                    // console.log(this.a )
}
remove_tag_picker(g){
  console.log(g);
 
  this.tag_array.splice(g, 1);
  if(this.tag_array.length == 0 )
  { 
   
     this.tag_error = "required tags"
  }
}
remove_colour_picker(g){
  console.log(g);
  this.a.splice(g, 1);
  if(this.a.length == 0 )
  {
  
     this.colour_tag_error = "required colour tags"
  }
  
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
            SetAsBackground: true
          }
         console.log(fire)
      this.http.post(this.update_portfolio_album,fire,{headers:headers}).subscribe(data =>{
            console.log(data.json());   
            this.albumImagesModify = [];  
          //Album Get
          this.http.get(this.url+'api/Albums/myalbums',{headers:headers})
          .subscribe(data =>{
                            console.log(data.json()); 
                            for (var item of  data.json() ) {
                            
                            if(this.albumid.id == item.albumsId)
                        
                              {   console.log(item);
                              
                              
                                for (var albumtag of  item.albumImages ) {

                                  if(albumtag.tags != null && albumtag.colorTags != null){
                                 
                                    albumtag['tags'] = albumtag['tags'].split(',');
                                    albumtag['colorTags'] = albumtag['colorTags'].split(',');
                                  }
                                  this.albumImagesModify.push(albumtag);
                                  console.log(this.albumImagesModify);
                                }
                              }
                            }
                            
                               this.tags = item.tags;
                               this.colourtags = item.colorTags;
                          });
      this.toastr.success(data.json().message);
  },error=> console.log(error)    )
  this.description_dailog = false;

}

err(e){
  console.log(e)
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







  


