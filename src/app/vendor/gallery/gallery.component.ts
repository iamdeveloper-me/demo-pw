import {Component, OnInit,ViewChild ,ChangeDetectionStrategy,NgZone} from '@angular/core';
import { Http,Headers } from '@angular/http';
import { HttpClient , HttpHeaders  } from '@angular/common/http';
import { ImageuploadService } from '../../shared/service/vendor/imageupload.service';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { ToastrService } from 'ngx-toastr';
import { apiService } from '../../shared/service/api.service';

const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  //changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./gallery.component.scss']
})

export class GalleryComponent implements OnInit {
  @ViewChild("fileInput") fileInput;
  gallery = { files: ''}
  fileToUpload:any;
  albumsId:'';
  eventArray:any = {};
  portfolio:any = [];
  iterations = [1,2];
  data:any;
  portArray:any = [];
  albumArray:any = [];
  private albumget: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Albums/myalbums'
  private uploadimage: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/FilesUploader/FileUploader'
  private url: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/';
  private addportfolio: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/addportfolio'
  private getportfolio: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/myportfolio'

  uploadphoto_dailog = false;
  createalbum_dailog = false;
  
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
  constructor(
    public http: Http,
    private imageservice: ImageuploadService,
    public HttpClient: HttpClient,
    public toastr: ToastrService,
    private apiService : apiService,
    private _ngZone: NgZone
  ) { }
  ngOnInit() {
  
       $.getScript('./assets/js/vendorsidebar.js');

    // let headers = new Headers();
    // var authToken = localStorage.getItem('userToken');
    
    // headers.append('Accept', 'application/json')
    // headers.append('Content-Type', 'application/json');
    // headers.append("Authorization",'Bearer '+authToken);
    // var basicplan = localStorage.getItem('basic-plan');
    // //  console.log(parseInt(basicplan) );
    //   if( parseInt(basicplan) == 1 ){
    //     alert("cant create");
    //     $(".albumlist").hide();
    //   }else{
    //     $('div').removeClass("overlay");
      
    //   }
    
    //Album Get
    
    this.showport();

    this.showalbum();





  }


        

       addFile(info): void {
        console.log(info);
    
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

        //Album create your token
        createAlbum(Album){
          
          this.createalbum_dailog = false;

          console.log(Album);
          var  albumtype = Album.value.albumName;
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
            .subscribe(data =>{console.log(data.json())},(error)=>{console.log(error._body);
            this.typeWarning(error._body);
        });
        }

        uploadAll(){

         this.uploadphoto_dailog = false;

          const formData = new FormData();
          for(let file of this.uploader.queue){
          formData.append(file['some'].name,file['some'])
          }        
          // Headers
          let headers = new  Headers();
          var authToken = localStorage.getItem('userToken');
          headers.append("Authorization",'Bearer '+authToken);
          
          //Post Album 2 photos
          this.http.post(this.uploadimage,formData,{headers:headers})
            .subscribe(data =>{ 
              console.log(data.json().filesId);
            
              this.http.post(this.addportfolio,{filesId:data.json().filesId},{headers:headers})
            .subscribe(data =>{ 
              console.log(data.json());
            
            
            
            },(error)=>{console.log(error)});
            
            },(error)=>{console.log(error)});
        }

        typeWarning(a) {
          this.toastr.warning(a);
        }
        
        test = [];
        showport()
        {            
           
          //poryfolio get

          this.apiService.getData(this.getportfolio).subscribe(res =>{
            this.portfolio = res;
            this.portArray = res;
           
            },
            error => { console.log('aaaaaaaaaaa',error)}
          )
        }

        showalbum(){ 
                      
                      let headers = new Headers();
                      var authToken = localStorage.getItem('userToken');
                    
                      headers.append('Accept', 'application/json')
                      headers.append('Content-Type', 'application/json');
                      headers.append("Authorization",'Bearer '+authToken);
                      
                      
                      this.http.get(this.albumget,{headers:headers}).subscribe(data =>{  
                      this.eventArray = data.json();
                      this.albumArray = data.json() ;
                     
                      console.log(this.eventArray);  
                      if(!this.eventArray || this.eventArray.length == 0){
                        console.log("Array is  empty ");
                        $('.album2').hide();
                        
                        }
                      else
                      {
                        console.log("Array is not empty ")
                        $('.album').hide();
                        }
              
              

                      
                        console.log( this.eventArray );
                 
  
                    })
                 }


  closeModel(){
       
  this.uploadphoto_dailog = false;
  this.createalbum_dailog = false;


}

  }
