import { Component, OnInit ,Input ,ViewChild} from '@angular/core'
import { NgbModal,  ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Http,Headers } from '@angular/http';
import { DatePipe } from '@angular/common';
import { Subject } from 'rxjs';


export class NgbduserModalContent {
  @Input() name;
  constructor(public activeModal: NgbActiveModal) {} 
     
    }
    
  
@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
    eventArray:any= [];
    modelfield:any= {};
    refresh: Subject<any> = new Subject();
    test: string;
    myDate = new Date(); 
    imageToShow: any;
    imageService: any;
    isImageLoading: any;

    private uploadimage: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/FilesUploader/FileUploader';
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
        this.http.get(this.myeventgeturl,{headers:headers}).subscribe(data =>{
      
        this.eventArray = data.json() as string[];
        console.log( this.eventArray);
    })

        // this.http.get('http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Events/eventdetails?Id' +'='+37 ,{headers:headers}).subscribe(data =>{
        // console.log(data.json());})
        // this.http.get(this.removeeventgeturl,{headers:headers}).subscribe(data =>{
        // console.log(data.json());})
        // this.http.get(this.servicesgeturl,{headers:headers}).subscribe(data =>{
        //     console.log(data.json());})
    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/jquery/jquery.min.js');
    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/bootstrap/js/bootstrap.bundle.min.js');
    $.getScript('./assets/js/vendorsidebar.js');

    $("#filter2").show();
    $("#action2").hide(); 

    $(".Suppliertab").click(function(){
        $("#filter2").show();
        $("#action2").hide();  
        $(".Suppliertab").addClass("selected"); 
        $(".Registertab").removeClass("selected");  
    });

        $(".Registertab").click(function(){
        $("#filter2").hide();
        $("#action2").show();
        $(".Suppliertab").removeClass("selected"); 
        $(".Registertab").addClass("selected");  
    });

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





createImageFromBlob(image: Blob) {
   let reader = new FileReader();
   reader.addEventListener("load", () => {
      this.imageToShow = reader.result;
   }, false);

   if (image) {
      reader.readAsDataURL(image);
   }
}
getImageFromService() {
        this.isImageLoading = true;
        this.imageService.getImage('https://s3.us-east-2.amazonaws.com/prefect-image/efc074d5-ccb0-41af-94c8-3d51acaa1a65username.png').subscribe(data => {
          this.createImageFromBlob(data);
          this.isImageLoading = false;
        }, error => {
          this.isImageLoading = false;
          console.log(error);
        });
        }
  list:any = { 
eventTitle: "string",
 
  venueName: "string",
  location: "string",
 
  entry: "string",

  eventDescription: "string",
  eventsDates: [
    {
      
      eventDate: "2018-09-17T08:51:07.539Z",
      startTime: "2018-09-17T08:51:07.539Z",
      endTime: "2018-09-17T08:51:07.539Z"
    }
  ]}
  event(list){
console.log(list.eventTitle);
    let headers = new Headers();
              var authToken = localStorage.getItem('userToken');
              headers.append('Accept', 'application/json')
              headers.append('Content-Type', 'application/json');
              headers.append("Authorization",'Bearer '+authToken);
             var data_obj= {
       
                eventId: 0,
                eventTitle: list.eventTitle,
                filesId: 1,
                venueName: list.venueName,
                 location: list.location,
                 lat: 0,
                long: 0,
                capacity: 0,
                entry: list.entry,
                entryFee: 0,
                eventDescription: list.eventDescription,
                eventsDates: [
                  {
                     eventsMoreDatesId: 0,
                     eventId: 0,
                     eventDate:list.eventDate ,
                     startTime:list.startTime ,
                     endTime:list.endTime ,
                  }
                ]
              }
    this.http.post(this.eventposturl,data_obj,{headers:headers}).subscribe(data =>{
    console.log(data.json());
    console.log(this.eventArray)
    this.eventArray.push(data_obj)
    console.log(this.eventArray)


  })

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
        alert("xcbvdfg");
        this.http.post(this.uploadimage,formData,{headers:headers})
        .subscribe(data =>{console.log(data);},(error)=>{console.log(error)});
   }
    }
  constructor(private modalService: NgbModal,public http: Http,private datePipe: DatePipe) { this.test = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');}
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

  editevent(v){
    console.log(v);
    this.modelfield = v;
    console.log( this.modelfield );
  }


  editsave(data){
    console.log(data);
    let headers = new Headers();
              var authToken = localStorage.getItem('userToken');
              headers.append('Accept', 'application/json')
              headers.append('Content-Type', 'application/json');
              headers.append("Authorization",'Bearer '+authToken);
              
    this.http.post(this.eventposturl,{
       
        eventId: data.value.id,
        eventTitle: data.value.Title,
        filesId: 1,
        venueName: data.value.venueName,
         location: data.value.Location,
         lat: 0,
        long: 0,
        capacity: data.value.Capacity,
        entry: data.value.entry,
        entryFee: 0,
        eventDescription: data.value.eventDescription,
        eventsDates: [
          {
             eventsMoreDatesId: 0,
             eventId: 0,
             eventDate: data.value.eventDate ,
             startTime: data.value.startTime ,
             endTime: data.value.endTime ,
          }
        ]
      },{headers:headers}).subscribe(data =>{
    console.log(data.json());




  })

}

  

  deletevent(data,index){
    //alert(id)
   // console.log(id);
    var id = data.eventId;
    this.eventArray.splice(index,1);
    let headers = new Headers();
    var authToken = localStorage.getItem('userToken');
    headers.append('Accept', 'application/json')
    headers.append('Content-Type', 'application/json');
    headers.append("Authorization",'Bearer '+authToken);
    console.log('http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Events/removeevent?id'+'='+id);
    this.http.get('http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Events/removeevent?id'+'='+id,{headers:headers}).subscribe(data =>{

     console.log(data.json());
   
    },error =>{ console.log(error)});
  }


  addEvent(): void {
    // this.eventArray.push({     
    //   filesId: 1, 
    //   draggable: true,
    //   resizable: {
    //   }
    // });
    // this.refresh.next();
  }
}
  