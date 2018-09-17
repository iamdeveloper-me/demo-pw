import { Component, OnInit ,Input ,ViewChild} from '@angular/core'

import { NgbModal,  ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Http,Headers } from '@angular/http';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
export class NgbduserModalContent {
  @Input() name;
  constructor(public activeModal: NgbActiveModal) { }
}

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
    private  uploadimage: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/FilesUploader/FileUploader';
    private eventposturl: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Events/createupdateevent'
    private myeventgeturl: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Events/myevents'
    private eventdetailgeturl: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Events/eventdetails'
    private removeeventgeturl: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Events/removeevent'
    private  servicesgeturl: string = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/LookupMaster/services';
  ngOnInit() {

    let headers = new Headers();
    var authToken = localStorage.getItem('userToken');
    headers.append('Accept', 'application/json')
    headers.append('Content-Type', 'application/json');
    headers.append("Authorization",'Bearer '+authToken);
  
    this.http.post(this.eventposturl,{
        eventId: 0,
        eventTitle: "string",
        filesId: 1,
        venueName: "string",
        location: "string",
        lat: 0,
        long: 0,
        capacity: 0,
        entry: "string",
        entryFee: 0,
        eventDescription: "string",
        eventsDates: [
          {
            eventsMoreDatesId: 0,
            eventId: 0,
            eventDate: "2018-09-14T06:50:38.768Z",
            startTime: "2018-09-14T06:50:38.768Z",
            endTime: "2018-09-14T06:50:38.768Z"
          }
        ]
      },{headers:headers}).subscribe(data =>{
    console.log(data.json());
 
  })
        // this.http.get(this.myeventgeturl,{headers:headers}).subscribe(data =>{
        // console.log(data.json());})
        // this.http.get(this.eventdetailgeturl,{headers:headers}).subscribe(data =>{
        // console.log(data.json());})
        // this.http.get(this.removeeventgeturl,{headers:headers}).subscribe(data =>{
        // console.log(data.json());})
        // this.http.get(this.servicesgeturl,{headers:headers}).subscribe(data =>{
        //     console.log(data.json());})

    $("#action").hide();
    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/jquery/jquery.min.js');
    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/bootstrap/js/bootstrap.bundle.min.js');
    $.getScript('./assets/js/vendorsidebar.js');
  
    $(".Suppliertab").click(function(){
        $("#filter").show();
        $("#action").hide();  
        $(".Suppliertab").addClass("selected"); 
        $(".Registertab").removeClass("selected");  
    });

        $(".Registertab").click(function(){
        $("#filter").hide();
        $("#action").show();
        $(".Suppliertab").removeClass("selected"); 
        $(".Registertab").addClass("selected");  
    });
  }
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

        this.http.post(this.uploadimage,formData,{headers:headers})
        .subscribe(data =>{console.log(data);},(error)=>{console.log(error)});
   }
    }
  constructor(private modalService: NgbModal,public http: Http) {}
  /////////////////////////////////popupmodel
  closeResult: string;
  // Open default modal
  open(content) {
      console.log(content);
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
      const modalRef = this.modalService.open( NgbduserModalContent);
      modalRef.componentInstance.name = 'World';
  }


}
