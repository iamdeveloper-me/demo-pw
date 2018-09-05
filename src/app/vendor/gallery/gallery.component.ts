import {Component, OnInit ,ChangeDetectionStrategy,ViewChild} from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { ViewEncapsulation, Input } from '@angular/core';
import { ImageuploadService } from '../../shared/service/vendor/imageupload.service';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
    selector: 'ngbd-modal-content',
    template: `
    <div class="modal-header">
      <h4 class="modal-title">Hi there!</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Hello, {{name}}!</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary btn-raised" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgbdgalleryModalContent {
    @Input() name;
    constructor(public activeModal: NgbActiveModal ) { }

}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
    gallery = { files: ''}
    private url: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Albums/createupdatealbum' 
   private albumget: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Albums/myalbums'
    // private removeimage: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Albums/removeimage'
    
    vendor: any = {};
    fileToUpload:any;

  ngOnInit() {
   
  $.getScript('http://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js');
  $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/jquery/jquery.min.js');
  $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/bootstrap/js/bootstrap.bundle.min.js');
  
  $.getScript('http://code.jquery.com/jquery-1.11.1.min.js');
  $.getScript('https://code.jquery.com/ui/1.12.1/jquery-ui.js');
  

  $.getScript('./assets/js/vendorsidebar.js');

 
  let headers = new Headers();
  var authToken = localStorage.getItem('userToken');
  headers.append('Accept', 'application/json')
  headers.append('Content-Type', 'application/json');
  headers.append("Authorization",'Bearer'+authToken);
  console.log(authToken);
  // this.http.post(this.url,{
  //   albumsId: 0,
  //   albumName: "string",
  //   albumType: 1,
  //   tags: "string",
  //   colorTags: "string"
  // },{headers:headers}).subscribe(
  //   data =>{ this.vendor = data.json();
  //       console.log("decfdefv========rrr===");
  //            console.log(this.vendor);
  //          });

          //  this.http.get(this.albumget,{headers:headers}).subscribe(
          //   data =>{ this.albumget = data.json();
          //       console.log("get album");
          //            console.log(this.albumget);
          //          });


        //    this.http.post(this.uploadimage,{ files: this.fileToUpload , 
        //                                       albumsId: 2 },{headers:headers}).subscribe(
        //     data =>{ this.uploadimage = data.json();
        //         console.log("imageupload");
        //              console.log(this.uploadimage);
        //            },(error)=>{console.log(error)});

                //    this.http.get(this.removeimage,{headers:headers}).subscribe(
                //     data =>{ this.vendor = data.json();
                //         console.log("removeimage");
                //              console.log(this.vendor);
                //            });
        


  }
  constructor(  private imageservice: ImageuploadService ,private modalService: NgbModal ) { }

  @ViewChild("fileInput") fileInput;

  addFile(info): void {
      console.log(info);
  
      let fi = this.fileInput.nativeElement;
      if (fi.files && fi.files[0]) {
      
          let fileToUpload = fi.files;
          this.imageservice
              .upload(fileToUpload)
              .subscribe(res => {
                  console.log(res);
              },(error)=>{console.log(error)});
     }
      }
  
      addAlbum(): void {
       
   alert("ad");
    this.imageservice.upalbumload()
                .subscribe(res => {
                    console.log(res);
                },(error)=>{console.log(error)});
     
        }
        getAlbum(): void {
       
            alert("get");
             this.imageservice.getalbumload()
                         .subscribe(res => {
                             console.log(res);
                         },(error)=>{console.log(error)});
              
                 }

    }

