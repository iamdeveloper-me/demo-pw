import {Component, OnInit,ViewChild ,ChangeDetectionStrategy} from '@angular/core';
import { Http,Headers } from '@angular/http';
import { HttpClient , HttpHeaders  } from '@angular/common/http';
import { ImageuploadService } from '../../shared/service/vendor/imageupload.service';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';

const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  gallery = { files: ''}
  fileToUpload:any;
  totalAlbum:string[];

  iterations = [1,2];
 
  private albumget: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Albums/myalbums'
  private uploadimage: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/ImageUploader/FileUploader'
  private url: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/'

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
    constructor(public http: Http,private imageservice: ImageuploadService,public HttpClient: HttpClient) { }
    ngOnInit() {
      let headers = new Headers();
      var authToken = localStorage.getItem('userToken');
      headers.append('Accept', 'application/json')
      headers.append('Content-Type', 'application/json');
      headers.append("Authorization",'Bearer '+authToken);
      this.http.get(this.albumget,{headers:headers})
      .subscribe(data =>{console.log(data.json());  });

      //Album Get
      this.http.get(this.url+'api/Albums/myalbums',{headers:headers})
      .subscribe(data =>{
       this.totalAlbum =  data.json()  as string[]; 
      });

    $.getScript('http://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js');
    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/jquery/jquery.min.js');
    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/bootstrap/js/bootstrap.bundle.min.js');
    $.getScript('http://code.jquery.com/jquery-1.11.1.min.js');
    $.getScript('https://code.jquery.com/ui/1.12.1/jquery-ui.js');
    $.getScript('./assets/js/vendorsidebar.js');

    $(document).on('click', ".saveall", function() {
      //alert("hi")
      // $(this).parents('.modal').modal('toggle');
      // $(this).parents('.modal').removeClass('show');
      // $(this).parents('.modal').modal('hide');
      $(this).parents('.modal').css("display", "none");
      $(this).parents('.modal').removeClass("show");
      $('.modal-backdrop').hide();
      $('.modal-backdrop').removeClass("fade");
      $('.modal-backdrop').removeClass("show");
      $('body').removeClass("modal-open");
    });

    }


    @ViewChild("fileInput") fileInput;

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
          console.log(Album);
          var  albumtype = Album.value.albumName;
          let headers = new  Headers();
          var authToken = localStorage.getItem('userToken');
          headers.append("content-type",'application/json ');
          headers.append("Authorization",'Bearer '+authToken);

          const album = {
            "albumsId": 0,
            "albumName": albumtype,
            "albumType": 0,
            "tags": "string",
            "colorTags": "string"
          }
          this.http.post(this.url+'api/Albums/createupdatealbum',album,{headers:headers})
            .subscribe(data =>{console.log(data);},(error)=>{console.log(error)});
        }
        


        uploadAll(){
          const formData = new FormData();
          for(let file of this.uploader.queue){
          formData.append(file['some'].name,file['some'])
          }
          formData.append('AlbumId', '4')
          
          // Headers
          let headers = new  Headers();
          var authToken = localStorage.getItem('userToken');
          headers.append("Authorization",'Bearer '+authToken);
          
          //Post Album 2 photos
          this.http.post(this.uploadimage,formData,{headers:headers})
            .subscribe(data =>{console.log(data);},(error)=>{console.log(error)});
        }
  }
