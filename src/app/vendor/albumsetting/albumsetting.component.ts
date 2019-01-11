import { Component, OnInit,ViewChild } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import swal from 'sweetalert2';
import { Albumsetting2Component } from '../albumsetting2/albumsetting2.component';
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
tag_array2:string;
choose:any ;
a = [];
tag_error;
e_data;
taggg:any;
albumsetting2: Albumsetting2Component;
albumImagesModify = [];
colour_tag_error;

@ViewChild('portEdit') validationForm: FormGroup;
  constructor(private http: Http ,  private route: ActivatedRoute ,public toastr: ToastrService) { 
    
  }

ngOnInit(){
     $.getScript('./assets/js/vendorsidebar.js');
    this.route.params.subscribe( params => {
          this.albumid = params;
    });

    this.albumsetting2 = new Albumsetting2Component(this.http,this.toastr);
    let headers = new Headers();
    var authToken = localStorage.getItem('userToken');
    headers.append('Accept', 'application/json')
    headers.append('Content-Type', 'application/json');
    headers.append("Authorization",'Bearer '+authToken);
  
  
    //Album Get
    this.http.get(this.url+'api/Albums/myalbums',{headers:headers})
    .subscribe(data =>{
     this.totalImage =  data.json();
     console.log(this.totalImage);
     for (var item of  this.totalImage ) {
     if(this.albumid.id == item.albumsId)
      {
      this.albumname = item.albumName;
      this.myalbumimages =  item.albumImages;
      for (var albumtag of  this.myalbumimages ) {
        if(albumtag.tags != null){
          albumtag['tags_two'] = albumtag['tags'][0].split(',');
         
        }
        if(albumtag.tags != null){
          // albumtag['tags_two'] = albumtag['tags'].split(',');
          albumtag['tags'] = albumtag['tags'][0].split(',');
         
        }
        if(albumtag.colorTags !=null){
          //  albumtag['colorTags'] = albumtag['colorTags'].split(',');
          albumtag['colorTags'] = albumtag['colorTags'].split(',');
        }
        this.albumImagesModify.push(albumtag);
      }
       }
           }
           console.log(this.albumImagesModify);
    });
}
openModel(e){
    this.albumsetting2.createColorPanel();
    this.description_dailog = true
    this.formdata = e;
    console.log(e);
    if(e.tags != null){
      this.tag_array = e.tags;

    }
   console.log(this.albumsetting2.colors)
  

   if(this.formdata['colorTags'] != ''){
    this.formdata['colorTags'].forEach(element => {
      this.albumsetting2.colors.forEach(el=>{
        if(element == el['colorName']){
         el['isSelected'] = true;
        }
      }) 
    });
  }
  
  
    // if(e.colorTags==undefined){e.colorTags=[];}
    // this.a = e.colorTags;
    
    // for (let i = 0; i < e.colorTags.length; i++) {
    //   let c = this.albumsetting2.colors.filter(cn=>cn.colorName==e.colorTags[i])[0].isSelected=true;
    // console.log(c)
    // }
    
}
tags_bage(e){
            
               if(typeof(e) == 'undefined' || e == '')
              {
                this.tag_error = "empty tag not added tags"
              }else{
                      this.tag_array.push(e);
                      this.taggg = '';
              }
}
colour_picker(d){
    if(this.a.length == 0 ){
      this.a.push(d);
      this.a = this.a.filter((el, i, a) => i === a.indexOf(el));
    }
    if(this.a.length > 0 ){
      this.tag_error = '';
      this.a.push(d);
       this.a = this.a.filter((el, i, a) => i === a.indexOf(el));
       console.log(this.a);
    }
     
          

}
remove_tag_picker(g){
  this.tag_array.splice(g, 1);
  console.log(this.tag_array);
  if(this.tag_array.length == 0 )
  { 
   
     this.tag_error = "required tags"
  }
}
remove_colour_picker(g){
  this.a.splice(g, 1);
  console.log(this.a);
  if(this.a.length == 0 )
  {
  
     this.colour_tag_error = "required colour tags"
  }
  
}
editSetting(f){
 console.log(f)
 
                  this.description_dailog = false;
                  this.tag_array = this.tag_array.filter(element => element !== "")
               
                if(this.tag_array.length == 0 ){
                
                  this.tag_array2 =  null
                  const fire  = {       
                                  AlbumImageId: f.value.AlbumImageId,
                                  AlbumsId: f.value.AlbumsId,
                                  Tags:this.tag_array2,
                                  ColorTags:  this.albumsetting2.csvColors,
                                  SetAsBackground: false
                                }
                      
                     
                  this.post_tag_edit(fire)
                }else{
               
                  console.log(   this.albumsetting2.csvColors)
                  const fire  = {       
                                  AlbumImageId: f.value.AlbumImageId,
                                  AlbumsId: f.value.AlbumsId,
                                  Tags:this.tag_array.join(','),
                                  ColorTags:  this.albumsetting2.csvColors,
                                  SetAsBackground: false
                                }
                                          
                              
                  this.post_tag_edit(fire)
   }
  
         

}
post_tag_edit(fire){
        console.log(fire);      
    
        let headers = new Headers();
        var authToken = localStorage.getItem('userToken');
        headers.append('Accept', 'application/json')
        headers.append('Content-Type', 'application/json');
        headers.append("Authorization",'Bearer '+authToken);
        this.albumImagesModify = [];
        this.http.post(this.update_portfolio_album,fire,{headers:headers}).subscribe(
          data =>{
                   //   
                    this.http.get(this.url+'api/Albums/myalbums',{headers:headers}).subscribe(
                      
                      data =>{
                        this.toastr.success(data.json().message);
                        this.ngOnInit();        
                      }
                    );
                      
                    
                  },error=> console.log(error))
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
  this.tag_array = [];
}
  //service
  deleteImage(image,index){
    swal({
      title: "Are you sure?",
    text: "You will not be able to recover this file!",
    type: "warning",
    showCancelButton: true,
    confirmButtonClass: "btn-default",
    confirmButtonText: "Yes",
    cancelButtonText: "No",
    }).then((res)=>{
      console.log(res);
      if(res.value===true){
      this.albumImagesModify.splice(index,1);
      let headers = new Headers();
      var authToken = localStorage.getItem('userToken');
      headers.append('Accept', 'application/json')
      headers.append('Content-Type', 'application/json');
      headers.append("Authorization",'Bearer '+authToken);
      this.http.get(this.url+'api/Albums/removeimage?AlbumImageId'+'='+image.albumImageId,{headers:headers})
      .subscribe(data =>{
        console.log(data.json());
        this.toastr.success(data.json().message);
          }); 
  }else{
   
   }
  },error=>{
    alert(JSON.stringify(error));
 })
   return;
  }
  addtagss(e){
    console.log(e);
  }
}







  


