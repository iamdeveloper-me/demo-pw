import { Component, OnInit,ViewChild } from '@angular/core';
import { ViewEncapsulation, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Http,Headers } from '@angular/http';

export class NgbdgalleryModalContent {
  @Input() name;
  constructor(public activeModal: NgbActiveModal) { }

}

@Component({
  selector: 'app-portfolioview',
  templateUrl: './portfolioview.component.html',
  styleUrls: ['./portfolioview.component.scss']
})
export class PortfolioviewComponent implements OnInit {

    PortgetArray:any= {};
    PortpostArray:any= {};
    // Portpost1Array:any= {};

    private mygeturl: string  = "http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/myportfolio"
    private myposturl: string  = "http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/addportfolio"
    // private mypost1url: string  = "http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/savelisting"



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
 
         this.http.post(this.myposturl,formData,{headers:headers})
         .subscribe(data =>{console.log(data);},(error)=>{console.log(error)});
    }
     }
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
      event(list){
        let headers = new Headers();
                  var authToken = localStorage.getItem('userToken');
                  headers.append('Accept', 'application/json')
                  headers.append('Content-Type', 'application/json');
                  headers.append("Authorization",'Bearer '+authToken);
                  
        this.http.post(this.myposturl,
            {
            filesId: 1
          
        },{headers:headers}).subscribe(data =>{
        console.log(data.json());
        console.log(this.PortpostArray);
    
      })
    }
}