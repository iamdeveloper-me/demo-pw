import { Component, OnInit } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { ToastrService } from 'ngx-toastr';
import swal from 'sweetalert2';
@Component({
  selector: 'app-albumsetting2',
  templateUrl: './albumsetting2.component.html',
  styleUrls: ['./albumsetting2.component.scss']
})
export class Albumsetting2Component implements OnInit {
colors: Array<ColorPicker>;
csvColors:string;
PortgetArray:any= {};
formdata:any={};
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
tag_array2:string;
taggg:any;
t='';
tai = [];
choose:any ;
a:any = [];
description_dailog = false;
tag_error ;
colour_tag_error;
albumImagesModify = [];
albumImages = [];
private mygeturl: string  = "http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/myportfolio"
private update_portfolio: string  = "http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/updateportfolio"

constructor( public http: Http,public toastr: ToastrService ) {
  this.createColorPanel();
 }
 createColorPanel(){
  this.colors= Array<ColorPicker>();
  this.colors.push({colorName:'pink', isSelected:false});
  this.colors.push({colorName:'red', isSelected:false});
  this.colors.push({colorName:'orange', isSelected:false});
  this.colors.push({colorName:'yellow', isSelected:false});
  this.colors.push({colorName:'green', isSelected:false});
  this.colors.push({colorName:'Blue', isSelected:false});
  this.colors.push({colorName:'purple', isSelected:false});
  this.colors.push({colorName:'brown', isSelected:false});
  this.colors.push({colorName:'black', isSelected:false});
  this.colors.push({colorName:'grey', isSelected:false});
 }
 SelectColor(c){
  if(c.isSelected){
    c.isSelected = false;
  } else{
    c.isSelected =true;
  }
  let selectedColors = this.colors.filter(c=>c.isSelected==true);
  this.csvColors='';
  this.colour_picker1=[];
  for (let i = 0; i < selectedColors.length; i++) {
    this.csvColors+= selectedColors[i].colorName+',';
    this.colour_picker1.push(selectedColors[i].colorName);
  }
 }


  
    remove_tag_picker(g){
      console.log(g); 
      this.tai.splice(g, 1);
      console.log(this.tai); 
      if(this.tai.length == 0 )
      { 
        
          this.tag_error = "required tags"
      }
    }
  
    ngOnInit() {
    $.getScript('./assets/js/vendorsidebar.js');

                let headers = new Headers();
       
                var authToken = localStorage.getItem('userToken');
                headers.append('Accept', 'application/json')
                headers.append('Content-Type', 'application/json');
                headers.append("Authorization",'Bearer '+authToken);
                    this.http.get(this.mygeturl,{headers:headers}).subscribe(data =>{
                      console.log(data.json())
                      this.albumImagesModify = data.json()
                      
                      this.albumImagesModify.forEach(ele=>{
                        if(ele['tags'] != ''){
                          ele['tags'] = ele['tags'].split(',')
                          ele['colorTags'] = ele['colorTags'].split(',')
                          this.albumImages.push(ele)
                          console.log(this.albumImages)
                        }else{
                          
                          this.albumImages.push(ele)
                        }
                      })
                      console.log('albumImages',this.albumImages)
                            // for (var item of  data.json()) {
                            //   this.tags = item.tags;
                            //   this.colourtags = item.colorTags;
                            //     if(item.tags != null){
                            //       item['tags'] = item['tags'].split(',');
                            //       item['colorTags'] = item['colorTags'].split(',');
                            //     }else{
                            //     this.albumImagesModify.push(item)
                            //     }
                            //     debugger
                            //     this.albumImagesModify.push(item);
                            // } 
                            // debugger
                      })
    }
    openModel(e)
    {
      this.formdata = e;
      console.log(this.formdata)
          this.tai = this.formdata['tags'].split(',')
       //   this.tai = this.tai.filter(element => element !== "")
       //   this.tai = this.tai.filter(element => element !== ',')
          console.log( this.tai )
          this.a = this.formdata.colorTags;
          this.createColorPanel();
          for (let i = 0; i < e.colorTags.length; i++) {
            let c= this.colors.filter(cn=>cn.colorName==e.colorTags[i])[0].isSelected=true;
          }
    }

    tags_edit(e){
      this.taggg = ''
     
     
      this.tai.push(e)
      this.tai = this.tai.filter(element => element !== "")         
      console.log(this.tai); 
     }
    editSettting(e){
        
      this.tag_array2 = this.tai.join(',')
      console.log(this.tag_array2)
      const fire = {
       portfolioId: e.value.portfolioId,
       filesId: e.value.filesId,
       tags:  this.tag_array2,
       colorTags: this.csvColors,
       setAsBackgroud: false
      }
      this.postapi_tag(fire)        

    }



    postapi_tag(fire){


      let headers = new Headers();
      var authToken = localStorage.getItem('userToken');
      headers.append('Accept', 'application/json')
      headers.append('Content-Type', 'application/json');
      headers.append("Authorization",'Bearer '+authToken);
      this.http.post(this.update_portfolio,fire,{headers:headers}).subscribe(data =>{
          this.toastr.success(data.json().message);
          this.albumImagesModify = [];
          this.http.get(this.mygeturl,{headers:headers})
          .subscribe(data =>{
                            for (var item of  data.json()) {
                              this.tags = item.tags;
                              this.colourtags = item.colorTags;
                                if(item.tags != null){
                                  item['tags'] = item['tags'].split(',');
                                  item['colorTags'] = item['colorTags'].split(',');
                               
                                }
                                this.albumImagesModify.push(item);
                                console.log( this.albumImagesModify)
                              
                            } 
                          });
      
        },error => {console.log(error)})
      this.description_dailog = false;
    }
    closeModel(){   
       this.description_dailog = false;
    }
    delete_portfolio(e,index){

      swal({
        title: "Are you sure?",
      text: "You will not be able to recover this file!",
      type: "warning",
      showCancelButton: true,
      confirmButtonClass: "btn-default",
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      }).then((res)=>{
        if(res.value===true){
      var id = e.portfolioId;
      this.albumImagesModify.splice(index, 1);
      let headers = new Headers();
      var authToken = localStorage.getItem('userToken');
      headers.append('Accept', 'application/json')
      headers.append('Content-Type', 'application/json');
      headers.append("Authorization", 'Bearer ' + authToken);
      this.http.post('http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com//api/Supplier/removeportfolio',{portfolioId: id}, { headers: headers }).subscribe(data => {
      this.toastr.success(data.json().message);
      }, error => { console.log(error) });
}else{
 }
},error=>{
  alert(JSON.stringify(error));
})
 return;

    }
}
export class ColorPicker{
  public colorName: string;
  public isSelected:boolean;
}

