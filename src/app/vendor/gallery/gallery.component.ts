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
  private albumget: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Albums/myalbums'
  private uploadimage: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/ImageUploader/FileUploader'
 
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
    $.getScript('http://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js');
    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/jquery/jquery.min.js');
    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/bootstrap/js/bootstrap.bundle.min.js');
    $.getScript('http://code.jquery.com/jquery-1.11.1.min.js');
    $.getScript('https://code.jquery.com/ui/1.12.1/jquery-ui.js');
    $.getScript('./assets/js/vendorsidebar.js');

    }


    @ViewChild("fileInput") fileInput;

    addFile(info): void {
        console.log(info);
    
        let fi = this.fileInput.nativeElement;
        if (fi.files && fi.files[0]) {
             
            let fileToUpload = fi.files;
            let headers = new  HttpHeaders();
            var authToken = localStorage.getItem('userToken');
            headers.append('Accept', 'application/json')
            headers.append('Content-Type', 'multipart/form-data');
            headers.append("Authorization",'Bearer '+authToken);
            alert("fvf");

       
            console.log(fileToUpload)
  
            // this.http.post(this.uploadimage,{files: input , AlbumId: 2},{headers:headers})
            // .subscribe(data =>{console.log(data);},(error)=>{console.log(error)});
       }
        }
        addFile_t(info){
          console.log(info);

        }
        ss(file: FileList){
          console.log(file.item(0))
          let headers = new Headers();
            var authToken = localStorage.getItem('userToken');
            headers.append('Accept', 'application/json')
            headers.append('Content-Type', 'application/json');
            headers.append("Authorization",'Bearer '+authToken);
            this.http.post(this.uploadimage,{files: [file.item(0)] , AlbumId: 2},{headers:headers}).subscribe((dta)=>{
              console.log(dta)
            })

        }
  }

