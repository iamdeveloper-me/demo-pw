import { Component, OnInit, Input, ViewChild } from '@angular/core'
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Http, Headers } from '@angular/http';
import { DatePipe } from '@angular/common';
import { Subject, Observable, observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { error } from 'util';


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
  description_dailog = false; 
  eventArray: any = [];
  modelfield: any = {};
  eventdate: any;
  endtime: any;
  startime: any = {};
  fileIdfield: any = {};
  refresh: Subject<any> = new Subject();
  test: string;
  myDate = new Date();
  imageToShow: any;
  imageService: any;
  isImageLoading: any;
  past = false;
  up = false;
  twitterDailog = false;
  isCreateEventVisible=false;
  public sub_id: any; public dist_id: any; public country_id: any;
  objevent= new EventsCreateUpdateVM();  
  imageToUpload: any;
  public arra = new Array(); public district = new Array(); public suburb = new Array();

  countryArray: string[];
  private uploadimage: string = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/FilesUploader/FileUploader';
  private eventposturl: string = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Events/createupdateevent'
  
  private myevent_Post_url: string = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Events/myevents'
  private event_detail_get_url: string = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Events/eventdetails'
  private removeeventgeturl: string = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Events/removeevent'
  constructor(private modalService: NgbModal, public http: Http, private datePipe: DatePipe)
   { 
     this.test = this.datePipe.transform(this.myDate, 'yyyy-MM-dd'); 
      this.objevent = new EventsCreateUpdateVM();
    }
  
  ngOnInit() {
    let headers = new Headers();
    var authToken = localStorage.getItem('userToken');
    headers.append('Accept', 'application/json')
    headers.append('Content-Type', 'application/json');
    headers.append("Authorization", 'Bearer ' + authToken);
  
    this.http.get("http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/LookupMaster/countries").subscribe(data => {
      this.countryArray = data.json();
      console.log(this.countryArray);
      this.arra = this.countryArray
    })

     this.past_upcomming_event(2);

    // this.http.get('http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Events/eventdetails?Id' +'='+37 ,{headers:headers}).subscribe(data =>{
    // console.log(data.json());})
    // this.http.get(this.removeeventgeturl,{headers:headers}).subscribe(data =>{
    // console.log(data.json());})

    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/jquery/jquery.min.js');
    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/bootstrap/js/bootstrap.bundle.min.js');

    $.getScript('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js');


    $.getScript('./assets/js/vendorsidebar.js');

    // $("#filter2").show();
    // $("#action2").hide();

    $(".Suppliertab").click(function () {
    
      $(".Suppliertab").addClass("selected");
      $(".Registertab").removeClass("selected");
    });

    $(".Registertab").click(function () {
     
      $(".Suppliertab").removeClass("selected");
      $(".Registertab").addClass("selected");
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
  getImageF
  romService() {
    this.isImageLoading = true;
    this.imageService.getImage('https://s3.us-east-2.amazonaws.com/prefect-image/efc074d5-ccb0-41af-94c8-3d51acaa1a65username.png').subscribe(data => {
      this.createImageFromBlob(data);
      this.isImageLoading = false;
    }, error => {
      this.isImageLoading = false;
      console.log(error);
    });
  }
  // path = "https://s3.us-east-2.amazonaws.com/prefect-image/Beach_2B.jpg";
  path = "https://s3.us-east-2.amazonaws.com/prefect-image/Beach_2B.jpg";
  data: any = [{ files: { path: "https://s3.us-east-2.amazonaws.com/prefect-image/Beach_2B.jpg" } }]
  list: any = {
    files: "",
    eventTitle: "",
    venueName: "",
    filesId: "",
    location: "",
    lat: "",
    long: "",
    capacity: "",
    entryFee: "",
    entry: "",
    eventDescription: "",
    eventsDates: [
      {
        eventDate: "",
        startTime: "",
        endTime: ""
      }]
  }

  gallery = { files: '' }
  @ViewChild("fileInput") fileInput;

  // function run on file selection..
  onFileChanged(event) {
    this.imageToUpload = event.target.files[0];
  }

  addFile(info): void {
    console.log(info);

    let fi = this.fileInput.nativeElement;
    if (fi.files && fi.files[0]) {

      let fileToUpload = fi.files;
      let headers = new Headers();
      var authToken = localStorage.getItem('userToken');

      headers.append("Authorization", 'Bearer ' + authToken);
      const formData = new FormData();
      formData.append('AlbumId', '2')
      for (let image of fileToUpload) {
        formData.append(image.name, image)
      }


      console.log(fileToUpload)
      this.http.post(this.uploadimage, formData, { headers: headers })
        .subscribe(data => { 
          this.fileIdfield = data.json() as string[], 
          console.log(this.fileIdfield), 
          console.log(data.json()) }, 

          (error) => { console.log(error) });
    }

  }

  event(data) {        
                      let headerForImageUpload = new Headers();
                      var authToken = localStorage.getItem('userToken');
                      headerForImageUpload.append("Authorization", 'Bearer ' + authToken);
                      const formData = new FormData();
                      formData.append('AlbumId', '2');
                      alert(JSON.stringify(this.imageToUpload));
                      formData.append(this.imageToUpload.name, this.imageToUpload);
                      console.log(this.imageToUpload)
                      
                      this.http.post(this.uploadimage, formData, { headers: headerForImageUpload }).subscribe((data) => {
                        let response=JSON.parse(data.text());
                        console.log(response);
                        let fileId = response.filesId;
                        this.objevent.filesId = fileId;
                        this.fileIdfield = data.json() as string[];
             
                                            let headers = new Headers();
                                            var authToken = localStorage.getItem('userToken');
                                            headers.append('Accept', 'application/json')
                                            headers.append('Content-Type', 'application/json');
                                            headers.append("Authorization", 'Bearer ' + authToken);
                                            console.log(this.objevent);
                                             this.http.post(this.eventposturl,this.objevent,{headers:headers}).subscribe((data)=>{
                                               let response=JSON.parse(data.text());
                                                  alert(JSON.stringify(response.message));
                                                  this.objevent = new EventsCreateUpdateVM();
                                                  this.past_upcomming_event(2);
                                                  this.twitterDailog = false;
                                             },error=>{
                                              alert(JSON.stringify(data));
                                             })
                      
   }) }


  /////////////////////////////////popupmode
  closeResult: string;
  // Open default modal
  open(content) {
    this.isCreateEventVisible = true;
    this.modalService.open(content).result.then((result) => {
      alert(result);
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
    alert('create event opened');
    this.modalService.open(customContent, { windowClass: 'dark-modal' });
  }
  // Open content with dark section
  openContent() {
    alert('create event opened');
    const modalRef = this.modalService.open(NgbduserModalContent);
    modalRef.componentInstance.name = 'World';
  }

  editevent(v) {
    console.log(v);
    this.modelfield = v;
    this.eventdate = v.eventsDates[0].eventDate.split('T')[0]
    this.endtime = v.eventsDates[0].endTime.split('T')[1]
    this.startime = v.eventsDates[0].startTime.split('T')[1]
  }

  editsave(data: any) {
    console.log(data);

    console.log(this.fileIdfield);

    let headers = new Headers();
    var authToken = localStorage.getItem('userToken');
    headers.append('Accept', 'application/json')
    headers.append('Content-Type', 'application/json');
    headers.append("Authorization", 'Bearer ' + authToken);



  const editData = {
          eventId: 0,
          eventTitle: data.value.Title,
          filesId: this.fileIdfield,
          venueName:  data.value.venueName,
          countryId: data.value.country_id,
          districtId: data.value.dist_id,
          suburbId: data.value.sub_id,
          location:  data.value.Location,
          lat: 0,
          long: 0,
          capacity: data.value.Capacity,
          entry: data.value.entry,
          entryFee: data.value.entryFee,
          eventDescription: data.value.eventDescription,
          eventsDates: [
            {
              eventsMoreDatesId: 0,
              eventId: 0,
              eventDate: '2018-11-16T12:40:37.708Z',
              startTime: this.startime,
              endTime: this.endtime
            }
          ]

}
    console.log(editData)
    this.http.post(this.eventposturl, editData, { headers: headers }).subscribe(data => {
      console.log(data.json());

    },error=>{console.log(error)})
  }

  past_upcomming_event(past){
    console.log(past);
   // if (past == 1) 
   //  { past = true;
   //    up = false;
   //   }else{
   //    past = false;
   //    up = true;
   //   }
    let headers = new Headers();
    var authToken = localStorage.getItem('userToken');
    headers.append('Accept', 'application/json')
    headers.append('Content-Type', 'application/json');
    headers.append("Authorization", 'Bearer ' + authToken);
    this.http.post(this.myevent_Post_url, { Filter: past },{ headers: headers }).subscribe(data => {
      this.eventArray = data.json() as string[];
      console.log(data.json());
    },error => {console.log(error);})
  }

  deletevent(data, index) {
    alert(data)
    // console.log(id);
    var id = data.eventId;
    console.log(id);
    this.eventArray.splice(index, 1);
    let headers = new Headers();
    var authToken = localStorage.getItem('userToken');
    headers.append('Accept', 'application/json')
    headers.append('Content-Type', 'application/json');
    headers.append("Authorization", 'Bearer ' + authToken);
    console.log('http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Events/removeevent?id' + '=' + id);
    this.http.get('http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Events/removeevent?id' + '=' + id, { headers: headers }).subscribe(data => {
    }, error => { console.log(error) });
  }

  country(event): void {
    const newVal = event.target.value;
    this.district = this.arra[newVal].districts
  }
  districtA(event): void {
    const newVal = event.target.value;
    this.suburb = this.district[newVal].suburb
  }
  subr(event): void {
    const newVal = event.target.value;
    console.log(newVal)
  }
 closeModel(){         
    this.description_dailog = false;  
    this.twitterDailog = false;
  }


}
export class EventsCreateUpdateVM{
  eventId:number;
eventTitle:	string
filesId	:number;
venueName:	string
countryId:number;
districtId:number;
suburbId:number;
location:	string
lat:	number;
long:	number;
capacity:	number;
entry:	string;
entryFee:	number
eventDescription:	string;
eventsDates: Array<EventsDatesVM>;
constructor(){
  this.eventsDates = new Array<EventsDatesVM>();
  let objeventdates = {
    endTime:'00:00',
    startTime: '00:00',
    eventDate:'16/11/2018',
    eventsMoreDatesId:0,
    eventId:0,
  };
  // this.eventsDates.push(objeventdates);
}

}
export class EventsDatesVM{
  eventsMoreDatesId:number;
eventId:	number;
eventDate:	string;
startTime:	string;
endTime:	string;
}