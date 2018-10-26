import { Component, OnInit,ViewChild ,ChangeDetectionStrategy} from '@angular/core';
import { ViewEncapsulation, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Http,Headers } from '@angular/http';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';

const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
export class NgbdgalleryModalContent {
  @Input() name;
  constructor(public activeModal: NgbActiveModal) { }

}

@Component({
  selector: 'app-portfolioview',
  templateUrl: './portfolioview.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./portfolioview.component.scss'],
  
})
export class PortfolioviewComponent implements OnInit {
    fileToUpload:any;
    PortgetArray:any= {};
    PortpostArray:any= {};
    Set_as_background:any = [];
    uploadphoto_dailog = false;

    // Portpost1Array:any= {};
    private uploadimage: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/FilesUploader/FileUploader'
    private addportfolio: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/addportfolio'
    private mygeturl: string  = "http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/myportfolio"
    private Setasbackground: string = "http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/Setasbackground"
    private BackgroundImage: string = "http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/BackgroundImage"
  ngOnInit() {

    let headers = new Headers();
    var authToken = localStorage.getItem('userToken');
    headers.append('Accept', 'application/json')
    headers.append('Content-Type', 'application/json');
    headers.append("Authorization",'Bearer '+authToken);
  
        this.http.get(this.mygeturl,{headers:headers}).subscribe(data =>{
        this.PortgetArray = data.json() as string[];
        console.log(data.json());
    })
       


       this.http.get(this.BackgroundImage,{headers:headers}).subscribe(data =>{

        console.log(data.json()  );
    },error=>{console.log(error)})


   $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/jquery/jquery.min.js');
   $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/bootstrap/js/bootstrap.bundle.min.js');
   $.getScript('./assets/js/vendorsidebar.js');
   $.getScript('https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.js');
   $.getScript('https://code.jquery.com/jquery-1.11.1.min.js');

  }
   //model

   closeResult: string;

   gallery = { files: ''}
   @ViewChild("fileInput") fileInput;

   constructor(private modalService: NgbModal, public http: Http ) { }
 
   // Open default modal
   open(content) {
       this.modalService.open(content).result.then((result) => {
           this.closeResult = `Closed with: ${result}`;
       }, (reason) => {
           this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
       });
   }
 
   // This function is used in open
   private getDismissReason(reason: any): string {
       if (reason === ModalDismissReasons.ESC) {
           return 'by pressing ESC';
       } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
           return 'by clicking on a backdrop';
       } else {
           return `with: ${reason}`;
       }
   }
 
   // Open modal with dark section
   openModal(customContent) {
       this.modalService.open(customContent, { windowClass: 'dark-modal' });
   }
 
   // Open content with dark section
   openContent() {
       const modalRef = this.modalService.open(NgbdgalleryModalContent );
       modalRef.componentInstance.name = 'World';
   }
 
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

 list:any = {
    "filesId": 1
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


  closeModel(){
       
  this.uploadphoto_dailog = false;
}
setbackground(setId){
 let headers = new Headers();
    var authToken = localStorage.getItem('userToken');
    headers.append('Accept', 'application/json')
    headers.append('Content-Type', 'application/json');
    headers.append("Authorization",'Bearer '+authToken);
  
this.http.get(this.Setasbackground,{headers:headers},{PortfolioId: setId}).subscribe(data =>{
        this.Set_as_background = data.json() as string[];
        console.log( this.Set_as_background );
    },error=>{console.log(error)})
  console.log(setId)}
}