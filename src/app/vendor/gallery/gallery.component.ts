import {Component, OnInit,ViewChild ,NgModule} from '@angular/core';
import { Http,Headers } from '@angular/http';
//import { HttpClient , HttpHeaders  } from '@angular/common/http';
import { ImageuploadService } from '../../shared/service/vendor/imageupload.service';
import { Alert } from 'selenium-webdriver';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  gallery = { files: ''}
  fileToUpload:any;
  private albumget: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Albums/myalbums'
  private uploadimage: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/ImageUploader/FileUploader'
  data:any;
  selectedFile =null;
  files:any;


    constructor(public http: Http,public shttp:HttpClient ,private imageservice: ImageuploadService) { }
    ngOnInit() {
      console.log(this.files)
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
        console.log(fi)
        if (fi.files && fi.files[0]) {
             
            let fileToUpload = fi.files;
            let headers = new  Headers();
            var authToken = localStorage.getItem('userToken');
            headers.append('Accept', 'application/json')
            headers.set('Content-Type', 'application/json;WebKitFormBoundaryjvkzDXBG87NjKCvQ');
            headers.append("Authorization",'Bearer '+authToken);
            alert("fvf");
            console.log(fileToUpload);
            alert('52+++++++++++++++++++++++++++++')
           // const mapped = Object.keys(fileToUpload).map(key => ({type: key, value: fileToUpload[key]}));
           const dataa = new FormData();
           dataa.append('files', fileToUpload);
           dataa.append('AlbumId', '2');
           console.log(dataa)


           this.data = {AlbumId : 2,files: fileToUpload} 
           console.log(this.data)

          this.http.post(this.uploadimage,dataa,{headers:headers}).subscribe((data)=>{
            console.log(data)
          },error=>{
            console.log('errorr')
          }
          )
       
        }
      }




      onFileSelected(event){
this.selectedFile = event.target.file[0];
console.log(this.selectedFile)
      }
    }