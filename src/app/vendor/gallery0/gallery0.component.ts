import { Component, OnInit,ViewChild } from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { apiService } from '../../shared/service/api.service';
import { Headers, Http } from '@angular/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { ProgressHttp } from 'angular-progress-http';

import { HttpEventType, HttpResponse, } from '@angular/common/http';
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
@Component({
  selector: 'app-gallery0',
  templateUrl: './gallery0.component.html',
  styleUrls: ['./gallery0.component.scss']
})
export class Gallery0Component implements OnInit {
  @ViewChild("fileInput") fileInput;
  bar = false;
  private getportfolio: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/myportfolio'
  private albumget: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Albums/myalbums'
  private url: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/';
  private uploadimage: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/FilesUploader/FileUploader'
  lodar = false;
  basicplane;
  progress_bar:boolean = false
  constructor(   public toastr: ToastrService,private apiService : apiService ,public http: Http, private router: Router ,private _http: ProgressHttp) { }
  portArray:any  [];
  portfolio:any = [];
  albumArray:any = [];
  uploadphoto_dailog = false;
  createalbum_dailog = false;
  progressPercentage:number = 0
  
  uploader: FileUploader = new FileUploader({
    url: URL,
    isHTML5: true
  });
  hasBaseDropZoneOver = false;
  hasAnotherDropZoneOver = false;
  // Angular2 File Upload
  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }
  ngOnInit() {
    $.getScript('./assets/js/vendorsidebar.js');
    this.apiService.getData(this.getportfolio).subscribe(res =>{
      this.portfolio = res;
      this.portArray = res;
      },
      error => { console.log('aaaaaaaaaaa',error)
    }
    )

    let headers = new Headers();
    var authToken = localStorage.getItem('userToken');
    this.basicplane = parseInt(localStorage.getItem('basic-plan')) 
    headers.append('Accept', 'application/json')
    headers.append('Content-Type', 'application/json');
    headers.append("Authorization",'Bearer '+authToken);
    
    
    this.http.get(this.albumget,{headers:headers}).subscribe(data =>{  
    this.albumArray = data.json() ;
  })
  }
   //Album create your token
  createAlbum(Album){
         
    this.createalbum_dailog = false;

    console.log(Album);
   
    let headers = new  Headers();
    var authToken = localStorage.getItem('userToken');
    headers.append("content-type",'application/json ');
    headers.append("Authorization",'Bearer '+authToken);

    const album = {
      albumsId: 0,
      albumName: Album.value.albumName,
      albumType: 0,
      tags: "add tags",
      colorTags: "add colour tags"
    }
    this.http.post(this.url+'api/Albums/createupdatealbum',album,{headers:headers})
      .subscribe(data =>{console.log(data.json())
        this.router.navigate(['../vendor/albumview'])
        
      },(error)=>{console.log(error._body);
        this.toastr.error(error._body.split('[')[1].split(']')[0]);
        // this.toastr.warning(error._body);
     
  });
  }
  addFile(info): void {
    // console.log(info);
 
     let fi = this.fileInput.nativeElement;
   
     if (fi.files && fi.files[0]) {
          
         let fileToUpload = fi.files;
         let headers = new  Headers();
         var authToken = localStorage.getItem('userToken');
      
         headers.append("Authorization",'Bearer '+authToken);
         const formData = new FormData();
         formData.append('AlbumId','2')
         for (let image of fileToUpload){
           formData.append(image.name,image)
         }

    
         console.log(fileToUpload)

         this.http.post(this.uploadimage,formData,{headers:headers})
         .subscribe(data =>{console.log(data);},(error)=>{console.log(error)});
    }
  }
  uploadAll(){

         
    //this.lodar = true;
     const formData = new FormData();
      //this.bar = true 
   
     for(let file of this.uploader.queue){
     formData.append(file['some'].name,file['some'])
     }        

    
     // Headers
     let headers = new  Headers();
     var authToken = localStorage.getItem('userToken');
     headers.append("Authorization",'Bearer '+authToken);
    //  this._http.post(this.url+'api/ImageUploader/PortfolioUploader',formData,{headers:headers})
    //    .subscribe(data =>{ 
    //                        this.toastr.success(data.json().message);
    //                        this.uploadphoto_dailog = false; 
    //                       //  this.router.navigate(['../vendor/portfolioview'])
                            
    //                      }
    //                      ,(error)=>{
    //                        console.log(error);
    //                        swal({
    //                          title:  error._body.split('[')[1].split(']')[0],
    //                        text: "can upload only 5",
    //                        type: "warning",
    //                        showCancelButton: true,
    //                        confirmButtonClass: "btn-default",
    //                        confirmButtonText: "Yes",
    //                        cancelButtonText: "No",
    //                        }).then((res)=>{
    //                          console.log(res);
    //                          if(res.value===true){
                              
    //                              this.router.navigate(['../vendor/membership'])
    //                          }else{ this.router.navigate(['../vendor/portfolioview'])}
                         
    //                         },error=>{
    //                           alert(JSON.stringify(error));
    //                        })
    //                          return;
                          
    //                      },
    //                      event =>{
    //                       if (event.type === HttpEventType.UploadProgress) {
    //                         // This is an upload progress event. Compute and show the % done:
    //                         const percentDone = Math.round(100 * event.loaded / event.total);
    //                         console.log(`File is ${percentDone}% uploaded.`);
    //                       } else if (event instanceof HttpResponse) {
    //                         console.log('File is completely uploaded!');
    //                       }
    //                      }
    //                     );

    this._http.withUploadProgressListener(progress => {this.progress_bar = true; console.log(`Uploading ${progress.percentage}%`);this.closeModel(); this.progressPercentage = progress.percentage})
        .withDownloadProgressListener(progress => { console.log(`Downloading ${progress.percentage}%`); })
        .post(this.url+'api/ImageUploader/PortfolioUploader', formData,{headers: headers})
        .subscribe((response) => {
          this.progress_bar = false;
          this.toastr.success(response.json().message);
                               //  this.uploadphoto_dailog = false; 
                                 this.router.navigate(['../vendor/portfolioview'])
                                  
                               }
                               ,(error)=>{
                                 console.log(error);
                                 swal({
                                   title:  error._body.split('[')[1].split(']')[0],
                                 text: "can upload only 5",
                                 type: "warning",
                                 showCancelButton: true,
                                 confirmButtonClass: "btn-default",
                                 confirmButtonText: "Yes",
                                 cancelButtonText: "No",
                                 }).then((res)=>{
                                   console.log(res);
                                   if(res.value===true){
                                    
                                       this.router.navigate(['../vendor/membership'])
                                   }else{ this.router.navigate(['../vendor/portfolioview'])}
                               
                                  },error=>{
                                    alert(JSON.stringify(error));
                                 })
                                   return;
                                
        });
                      
    
  }
  upgrade(){
    this.basicplane = parseInt(localStorage.getItem('basic-plan')) 
    console.log(this.basicplane)
    if( parseInt(this.basicplane) == 1 ){ 
      $(".drop_zone").hide();
      swal({
          title: "Change your plan for Album",
        text: "upgrade your plan",
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: "btn-default",
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        }).then((res)=>{
          console.log(res);
          if(res.value===true){
              this.router.navigate(['../vendor/membership'])
          }
      
         },error=>{
           alert(JSON.stringify(error));
        })
          return;
        
    }else{
      this.basicplane = 0
   }
   }

  closeModel(){
       
    this.uploadphoto_dailog = false;
    this.createalbum_dailog = false;
    this.uploader.queue =[];
  
  }
}
