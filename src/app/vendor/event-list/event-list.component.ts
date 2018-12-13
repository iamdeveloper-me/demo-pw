import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core'
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Http, Headers } from '@angular/http';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';
import { Subject } from 'rxjs';
import { NgbDateStruct, NgbDatepickerI18n, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import swal from 'sweetalert2';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { TimeSlot } from '../location/location.component';
import { getHours, getMinutes } from 'date-fns';
import { forEach } from '@angular/router/src/utils/collection';
import { viewClassName } from '@angular/compiler';
import { MOMENT } from 'angular-calendar';
import * as moment from 'moment'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
const now = new Date();
const I18N_VALUES = {
  en: {
    weekdays: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  },
};
//export class TimeSlot
export class NgbduserModalContent {
  @Input() name;
  constructor(public activeModal: NgbActiveModal) { }
}

// Range datepicker Start 
const equals = (one: NgbDateStruct, two: NgbDateStruct) =>
  one && two && two.year === one.year && two.month === one.month && two.day === one.day;

const before = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day < two.day : one.month < two.month : one.year < two.year;

const after = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day > two.day : one.month > two.month : one.year > two.year;
// Range datepicker Ends
@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  model: NgbDateStruct;
  // Range datepicker start
  hoveredDate: NgbDateStruct;

  fromDate: NgbDateStruct;
  toDate: NgbDateStruct;

  popupModel;
  date: {year: number, month: number};
  displayMonths = 2;
  navigation = 'select';
  disabledModel: NgbDateStruct = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  disabled = true;
  customModel: NgbDateStruct;
  select_time: TimeSlot
  description_dailog = false;
  eventArray: any = [];
  modelfield: any = { eventId: '' };
  
  eventdate: any;
  endtime: any;
  startime: any = {};
  fileIdfield: any = {};
  refresh: Subject<any> = new Subject();
  test: string;
  myDate = new Date();
  imageToShow: any;
  imageService: any;
  startimee: any;
  isImageLoading: any;
  past = false;
  startTimee: string;
  up = false;
  twitterDailog = false;
  updateendtime;
  updatestarttime;
  eventupdaterDailog = false;
  isCreateEventVisible = false;
  startDates;
  endDates;
  Titlee;
  image_field;
  suburbId_valid;
  districtId_valid;
  showLoader: boolean = false;
  public c_id: any;
  public country_name: any;
  @ViewChild('ele_country') ele_country: ElementRef;
  @ViewChild('ele_distid') ele_distid: ElementRef;
  @ViewChild('ele_suburb') ele_suburb: ElementRef;
  @ViewChild('ele_startTime') ele_startTime: ElementRef;
  @ViewChild('ele_endTime') ele_endTime: ElementRef;
  arr = []
  venueNamee;
  location;
  capacity;
  entryFees;
  entry;
  eventDescriptions;
  endDate;
  search;
  public sub_id: any; public dist_id: any; public country_id: any;
  objevent = new EventsCreateUpdateVM();

  imageToUpload: any;
  public arra = new Array(); public district = new Array(); public suburb = new Array();

  countryArray: string[];
  private uploadimage: string = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/FilesUploader/FileUploader';
  private eventposturl: string = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Events/createupdateevent'

  private myevent_Post_url: string = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Events/myevents'
  private event_detail_get_url: string = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Events/eventdetails'
  private removeeventgeturl: string = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Events/removeevent'
  constructor(public toastr: ToastrService, private modalService: NgbModal, public http: Http, private datePipe: DatePipe) {
    this.test = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
    this.objevent = new EventsCreateUpdateVM();
    //  this.past_upcomming_event(2);
    this.select_time = new TimeSlot();
    this.select_time.timing.splice(0, 1);
  }

  // Range datepicker starts
  onDateChange(date: NgbDateStruct) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && after(date, this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered = date => this.fromDate && !this.toDate && this.hoveredDate && after(date, this.fromDate) && before(date, this.hoveredDate);
  isInside = date => after(date, this.fromDate) && before(date, this.toDate);
  isFrom = date => equals(date, this.fromDate);
  isTo = date => equals(date, this.toDate);
  // Range datepicker ends


  // Selects today's date
  selectToday() {
   // this.model =  now.getFullYear() +'-'+  now.getMonth() + 1 +'-'+  now.getDate();
  }

  // Custom Day View Starts
  isWeekend(date: NgbDateStruct) {
    const d = new Date(date.year, date.month - 1, date.day);
    return d.getDay() === 0 || d.getDay() === 6;
  }

  isDisabled(date: NgbDateStruct, current: {month: number}) {
    return date.month !== current.month;
  }
  // Custom Day View Ends  

  ngOnInit() {
    let headers = new Headers();
    var authToken = localStorage.getItem('userToken');
    headers.append('Accept', 'application/json')
    headers.append('Content-Type', 'application/json');
    headers.append("Authorization", 'Bearer ' + authToken);

    this.http.get("http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/LookupMaster/countries").subscribe(data => {
      this.countryArray = data.json();
      //console.log(this.countryArray);
      this.arra = this.countryArray
      this.country();
      this.districtA();
      this.subr();
    })
    this.past_upcomming_event(3);
    $.getScript('./assets/js/vendorsidebar.js');
    $(".Suppliertab").click(function () {
      $(".Suppliertab").addClass("selected");
      $(".Registertab").removeClass("selected");
    });
    $(".Registertab").click(function () {
      $(".Suppliertab").removeClass("selected");
      $(".Registertab").addClass("selected");
    });
  }

  @ViewChild('list') validationForm: FormGroup;


  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.imageToShow = reader.result;
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
  }

  romService() {
    this.isImageLoading = true;
    this.imageService.getImage('https://s3.us-east-2.amazonaws.com/prefect-image/efc074d5-ccb0-41af-94c8-3d51acaa1a65username.png').subscribe(data => {
      this.createImageFromBlob(data);
      this.isImageLoading = false;
    }, error => {
      this.isImageLoading = false;
      //console.log(error);
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
        endTime: "",
        startDate: "",
        endDate: "",
      }]
  }

  gallery = { files: '' }
  @ViewChild("fileInput") fileInput;

  // function run on file selection..
  onFileChanged(event) {
    this.imageToUpload = event.target.files[0];
    this.image_field = '';
  }

  addFile(info): void {
    //console.log(info);

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


     // console.log(fileToUpload);

      this.http.post(this.uploadimage, formData, { headers: headers })
        .subscribe(data => {
          this.fileIdfield = data.json()
            //console.log(this.fileIdfield),

            //console.log(data.json())
        },

          (error) => { 
            //console.log(error) 
          });
    }

  }
  Titleee(event: any) {
 //   console.log(event);
    this.Titlee = ''
  }
  startDatess(event: any) { this.startDates = '' }
  endDatess(event: any) { this.endDate = ''; }
  venueNamees(event: any) { this.venueNamee = ''; }
  eventDescriptionss(event: any) { this.eventDescriptions = ''; }
  entryFeess(event: any) { this.entryFees = ''; }
  entrys(event: any) { this.entry = ''; }
  capacitys(event: any) {

    const pattern = /[0-9]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
      this.capacity = 'Only Numbers'
      this.toastr.error('Only Numbers');
    }
    this.capacity = '';
  }
  locations(event: any) { this.location = ''; }

  event(list) {
   
    //console.log(this.objevent.eventTitle);
    if(this.imageToUpload==undefined){
      this.image_field = 'Please Select Event Image !';
  
     // this.toastr.error('Please Select Event Image !');
      return false;
    }
    if (typeof (this.objevent.eventTitle) == 'undefined') {
      this.Titlee = ' Titlee Field Required'
    } else {
      this.Titlee = ''
    }
    if (typeof (this.objevent.startDate) == 'undefined') {
      this.startDates = 'startDates Field Required'
    } else {
      this.startDates = '';
    }
    if (typeof (this.objevent.endDate) == 'undefined') {

      this.endDate = 'Field Required'
    } else {
      this.endDate = '';
    }
    if (typeof (this.objevent.eventDescription) == 'undefined') {
      this.eventDescriptions = 'Field Required'
    } else {
      this.eventDescriptions = '';
    }

    if (typeof (this.objevent.entry) == 'undefined') {
      this.entry = 'Field Required'
    } else {
      this.entry = '';
    }
    if (typeof (this.objevent.capacity) == 'undefined') {
      this.capacity = 'Field Required'
    } else {
      this.capacity = '';
    }
    if (typeof (this.objevent.location) == 'undefined') {
      this.location = 'Field Required'
    } else {
      this.location = '';
    }
    if (typeof (this.objevent.venueName) == 'undefined') {
      this.venueNamee = 'Field Required'
    } else {
      this.venueNamee = '';
    }

    if (typeof (this.objevent.entryFee) == 'undefined') {
      this.entryFees = 'Field Required'
    } else {
      this.entryFees = '';
    }
    if (typeof (this.objevent.entry) == 'undefined') {
      this.entry = 'Field Required'
      this.toastr.error('Please Select Valid Entry Type!');
    }
    if (typeof (this.startTimee) == 'undefined') {
      this.startTimee = 'Field Required'
      this.toastr.error('Please Select Start Time!');
    } 
    if (typeof (this.endtime) == 'undefined') {
      this.endtime = 'Field Required'
      this.toastr.error('Please Select End Time!');
    }
    if (typeof (this.objevent.districtId) == 'undefined') {
      this.districtId_valid = 'Please Select Valid District!'
      this.toastr.error('Please Select Valid District!');
    } 
    if (typeof (this.objevent.suburbId) == 'undefined') {
      this.suburbId_valid =  "Please Select Valid Suburb!"
      this.toastr.error('Please Select Valid Suburb!');
    } 
    if (typeof (this.objevent.venueName) != 'undefined' &&
      typeof (this.objevent.venueName) != 'undefined' &&
      typeof (this.objevent.location) != 'undefined' &&
      typeof (this.objevent.capacity) != 'undefined' &&
      typeof (this.objevent.entry) != 'undefined' &&
      typeof (this.objevent.eventDescription) != 'undefined' &&
      typeof (this.objevent.endDate) != 'undefined' &&
      typeof (this.objevent.startDate) != 'undefined' &&
      typeof (this.objevent.eventTitle) != 'undefined'
    ) {
      this.twitterDailog = false;
      let headerForImageUpload = new Headers();
      var authToken = localStorage.getItem('userToken');
      headerForImageUpload.append("Authorization", 'Bearer ' + authToken);
      const formData = new FormData();
      formData.append('AlbumId', '2');
      //    alert(JSON.stringify(this.imageToUpload));
      if (this.objevent.entry == 'Paid' && (this.objevent.entryFee==undefined || this.objevent.entryFee==0)) {
        this.entry = 'Field Required'
        this.toastr.error('Please Enter Valid Entry Fees!');
      }else{
      formData.append(this.imageToUpload.name, this.imageToUpload);
      this.showLoader = true;
      this.http.post(this.uploadimage, formData, { headers: headerForImageUpload }).subscribe((data) => {
        let response = JSON.parse(data.text());
        let fileId = response.filesId;
        this.objevent.filesId = fileId;
        this.fileIdfield = data.json() as string[];
        let headers = new Headers();
        var authToken = localStorage.getItem('userToken');
        headers.append('Accept', 'application/json')
        headers.append('Content-Type', 'application/json');
        headers.append("Authorization", 'Bearer ' + authToken);
        var startDate = this.objevent.startDate
        var endDate = this.objevent.endDate

        this.objevent.startDate = startDate["year"]+'-'+startDate["month"]+'-'+startDate["day"]
 
        this.objevent.endDate = endDate["year"]+'-'+endDate["month"]+'-'+endDate["day"]

         console.log(this.objevent.startDate,this.objevent.endDate )
         var startDate = this.objevent.startDate
       
         console.log( this.objevent.endDate)
        let events =
        {
          "eventsMoreDatesId": 0,
          "eventId": 0,
          "eventDate": this.objevent.eventdate,
          "startDate": this.objevent.startDate,
          "endDate": this.objevent.endDate,
          "startTime": this.startTimee,
          "endTime": this.endtime
        }
        this.objevent.eventsDates.push(events);
        console.log(this.objevent)
        this.http.post(this.eventposturl, this.objevent, { headers: headers }).subscribe((data) => {
          let response = JSON.parse(data.text());
          // alert(JSON.stringify(response.message));
          this.toastr.success("created  event sucessfully");
          this.showLoader = false;
          this.objevent = new EventsCreateUpdateVM();

         // this.past_upcomming_event(0)
          this.twitterDailog = false;
          //list.reset()


          list.reset()
        }, error => {
          console.log(error)
         // console.log(error.json().capacity[0])
          this.toastr.error(error.json().capacity);
          this.showLoader = false;
          list.reset()
        })
      })
    }
    } else {
    //  this.toastr.error("fill completly");
    }


  }


  /////////////////////////////////popupmode
  closeResult: string;
  // Open default modal
  open(content) {
    this.isCreateEventVisible = true;
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
    const modalRef = this.modalService.open(NgbduserModalContent);
    modalRef.componentInstance.name = 'World';
  }

  editevent(v) {
    console.log(v);
    this.objevent.districtId = v.districtId;
    this.objevent.suburbId = v.suburbId;
    this.objevent.countryId = v.countryId;
    this.country();
    this.districtA();
    this.subr();
    this.startimee = v.eventsDates[0].startTimeString;
    this.endtime = v.eventsDates[0].endTimeString;
    this.startDates = v.eventsDates[0].startDate.split('T')[0];
    //this.startDates = now.getFullYear() +'-'+  now.getMonth() + 1 +'-'+  now.getDate();
    this.endDates = v.eventsDates[0].endDate.split('T')[0];
    this.modelfield = v;
    this.objevent = v;
    //console.log(this.objevent);
    // this.ele_country.nativeElement.value=v.countryId;
    // this.ele_distid.nativeElement.value=v.districtId;
    // this.ele_suburb.nativeElement.value=v.sub_id;
    this.eventupdaterDailog = true;

  }

  editsave(data: any) {
    let headers = new Headers();
    var authToken = localStorage.getItem('userToken');
    headers.append('Accept', 'application/json')
    headers.append('Content-Type', 'application/json');
    headers.append("Authorization", 'Bearer ' + authToken);
    console.log(data);
 
    const editData = {
      eventId: data.value.eventId,
      eventTitle: data.value.Title,
      filesId: data.value.filesId,
      venueName: data.value.venueName,
      countryId: data.value.country_id,
      districtId: data.value.dist_id,
      suburbId: data.value.sub_id,
      location: data.value.Location,
      lat: 0,
      long: 0,
      capacity: data.value.Capacity,
      entry: data.value.entry,
      entryFee: data.value.entryFee,
      eventDescription: data.value.eventDescription,
      eventsDates: [
        {
          eventsMoreDatesId: 0,
          eventId: data.value.eventId,
          eventDate: data.value.eventdate,
          startTime: data.value.startTime,
          endTime: data.value.endTime,
          startDate: data.value.startDate,
          endDate: data.value.endDate,
        }
      ]
    }
  
    if (this.ele_suburb.nativeElement.value.length == 0) {
      this.toastr.error('Invalid Suburb! Please Select Valid Suburb');
    } else if (this.ele_startTime.nativeElement.value.length == 0) {
      this.toastr.error('Invalid Start Time! Please Select Valid Start Time');
    } else if (this.ele_endTime.nativeElement.value.length == 0) {
      this.toastr.error('Invalid End Time! Please Select Valid End Time');
    } else if (this.modelfield.entry == undefined) {
      this.toastr.error('Invalid Entry Type! Please Select Valid Entry Type');
    }
    else if (this.modelfield.entry != 'Free' && this.modelfield.entryFee==null){
      this.toastr.error('Invalid Entry Fees! Please Enter Valid Entry Fees');
    }
    else {
      this.http.post(this.eventposturl, editData, { headers: headers }).subscribe(data => {
        //console.log(data.json());
        this.toastr.success("saved sucessfully");
        this.eventupdaterDailog = false;
        this.past_upcomming_event(0);
        //data.reset();
      }, error => {
        //console.log(error);
        this.toastr.error(error);
      })
    }
  }

  past_upcomming_event(past) {
   // console.log(past);
    let headers = new Headers();
    var authToken = localStorage.getItem('userToken');
    headers.append('Accept', 'application/json')
    headers.append('Content-Type', 'application/json');
    headers.append("Authorization", 'Bearer ' + authToken);
    //  this.eventArray.unshift(this.objevent);
    this.http.post(this.myevent_Post_url, { Filter: past }, { headers: headers }).subscribe(data => {
      this.eventArray = data.json();
     // console.log(JSON.stringify(this.eventArray));
      for (let entry of data.json()) {
        this.event_Detail(entry.eventId)
      }
    }, error => { 
     // console.log(error);
     })
  }

  deletevent(data, index) {

    swal({
      title: "Are you sure?",
      text: "You will not be able to recover this event!",
      type: "warning",
      showCancelButton: true,
      confirmButtonClass: "btn-default",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel plx!",
    }).then((res) => {
      if (res.value === true) {
        var id = data.eventId;
       // console.log(id);
        this.eventArray.splice(index, 1);
        let headers = new Headers();
        var authToken = localStorage.getItem('userToken');
        headers.append('Accept', 'application/json')
        headers.append('Content-Type', 'application/json');
        headers.append("Authorization", 'Bearer ' + authToken);
        //console.log('http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Events/removeevent?id' + '=' + id);
        this.http.get('http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Events/removeevent?id' + '=' + id, { headers: headers }).subscribe(data => {
          this.toastr.success("delete sucessfully");
        }, error => { 
         // console.log(error)
         });
      } else {
        // alert('Cancel Process !');
      }
    }, error => {
      alert(JSON.stringify(error));
    })
    return;

  }
  search_event(e) {
    let headers = new Headers();
    var authToken = localStorage.getItem('userToken');
    headers.append('Accept', 'application/json')
    headers.append('Content-Type', 'application/json');
    headers.append("Authorization", 'Bearer ' + authToken);
    const a = {
      filter: 3,
      search: e.value.search
    }
    this.http.post(this.myevent_Post_url, a, { headers: headers }).subscribe(data => {
      for (let entry of data.json()) {
        this.event_Detail(entry.eventId)
      }
    }, error => { 
      //console.log(error); 
    })
  }
  event_Detail(e) {
    var id = e;
    let headers = new Headers();
    var authToken = localStorage.getItem('userToken');
    headers.append('Accept', 'application/json')
    headers.append('Content-Type', 'application/json');
    headers.append("Authorization", 'Bearer ' + authToken);
    this.eventArray = [];
    this.http.get('http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Events/eventdetails?id' + '=' + id, { headers: headers }).subscribe(data => {
      this.eventArray.push(data.json())

    }, error => { 
      //console.log(error); 
    })
  }
  country(): void {
    this.c_id = this.objevent.countryId;
  }
  districtA(): void {
    if (this.objevent.countryId != undefined) {
      this.district = this.arra.filter(c => c.countryId == this.objevent.countryId)[0].districts;
    } else {
      this.objevent.countryId = 1;
      this.district = this.arra.filter(c => c.countryId == this.objevent.countryId)[0].districts;
    }
    this.subr();
  }

  subr(): void {
    if (this.objevent.districtId != undefined) {
   
      let abc = this.district.filter(d => d.districtId == this.objevent.districtId)[0];
      if (abc) {
        this.suburb = this.district.filter(d => d.districtId == this.objevent.districtId)[0].suburb;
      }
    }


  }

  closeModel(list) {
    list.reset()
    this.fileInput.nativeElement.value = "";
    this.eventupdaterDailog = false;
    //list.reset();
    this.twitterDailog = false;
    this.Titlee = ''
    this.startDates = '';
    this.endDate = '';
    this.venueNamee = '';
    this.eventDescriptions = '';
    this.entryFees = '';
    this.entry = '';
    this.capacity = '';
    this.location = '';
    this.image_field  = '';
    this.suburbId_valid  = '';
    this.districtId_valid  = ''
  }

}
export class EventsCreateUpdateVM {
  eventId: number;
  eventTitle: string
  filesId: number;
  venueName: string
  countryId: number;
  districtId: number;
  suburbId: number;
  location: string
  lat: number;
  long: number;
  capacity: number;
  entry: string;
  entryFee: number
  eventDescription: string;
  eventsDates: Array<EventsDatesVM>;
  eventdate: string = '';
  endDate: string;
  startDate: string;
  constructor() {
    this.eventId = 0;
    this.eventsDates = new Array<EventsDatesVM>();
    let objeventdates = {
      endTime: '00:00',
      startTime: '00:00',
      eventDate: '16/11/2018',
      startDate: "2018-11-23T14:20:30.221Z",
      endDate: "2018-11-23T14:20:30.221Z",
      eventsMoreDatesId: 0,
      eventId: 0,
    };

    this.lat = 0;
    this.long = 0;
  }

}
export class EventsDatesVM {
  eventsMoreDatesId: number;
  eventId: number;
  eventDate: string;
  startTime: string;
  endTime: string;
  startDate: string;
  endDate: string;
}
