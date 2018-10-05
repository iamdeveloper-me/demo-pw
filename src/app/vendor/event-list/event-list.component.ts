import { Component, OnInit ,Input ,ViewChild} from '@angular/core'
import { NgbModal,  ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Http,Headers } from '@angular/http';
import { DatePipe } from '@angular/common';
import { Subject } from 'rxjs';
import { NgForm } from '@angular/forms';


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
    eventdate:any;
    endtime:any;
    startime:any= {};
    fileIdfield:any= {};
    refresh: Subject<any> = new Subject();
    test: string;
    myDate = new Date(); 
    imageToShow: any;
    imageService: any;
    isImageLoading: any;
    public sub_id:any;    public dist_id:any;    public country_id:any;


    public arra = new Array();public district = new Array();public suburb = new Array();

    countryArray:string[];
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
        console.log( data.json());
       //szzzzzzzzzzzzzzzzzz debugger
       
    })
    this.http.get("http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/LookupMaster/countries").subscribe(data => { 
      this.countryArray = data.json();  
      console.log(this.countryArray);
      this.arra = this.countryArray
    })

        // this.http.get('http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Events/eventdetails?Id' +'='+37 ,{headers:headers}).subscribe(data =>{
        // console.log(data.json());})
        // this.http.get(this.removeeventgeturl,{headers:headers}).subscribe(data =>{
        // console.log(data.json());})
        // this.http.get(this.servicesgeturl,{headers:headers}).subscribe(data =>{
        //     console.log(data.json());})
    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/jquery/jquery.min.js');
    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/bootstrap/js/bootstrap.bundle.min.js');

     $.getScript('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js');


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
// path = "https://s3.us-east-2.amazonaws.com/prefect-image/Beach_2B.jpg";
path = "https://s3.us-east-2.amazonaws.com/prefect-image/Beach_2B.jpg";
   data:any = [  {files:  {path: "https://s3.us-east-2.amazonaws.com/prefect-image/Beach_2B.jpg"} }]   
  list:any = {    files: "",
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
                    } ]
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
        .subscribe(data =>{  this.fileIdfield = data.json() as string[] ,console.log( this.fileIdfield ), console.log( data.json())},(error)=>{console.log(error)});
   }
    }
  event(list){
    console.log(list);
    console.log(list.value.filesId);
console.log(list.capacity);
// console.log(list.eventDate);
// console.log(list.startTime );
// console.log(list.endTime );


if(  typeof(list.value.filesId) == "undefined") 
{ alert("plz upload event image ");
  list.value.filesId = 1 
 console.log(list.value.filesId);}else
{

                        let headers = new Headers();
                        var authToken = localStorage.getItem('userToken');
                        headers.append('Accept', 'application/json')
                        headers.append('Content-Type', 'application/json');
                        headers.append("Authorization",'Bearer '+authToken);
                      var data_obj= {
                
                          eventId: 0,
                          eventTitle: list.value.Title,
                          filesId: list.value.filesId,
                          venueName: list.value.venueName,
                          location: list.value.Location,
                          lat: 0,
                          long: 0,
                          capacity: list.capacity,
                          entry: list.value.entry,
                          entryFee: list.value.entryFee,
                          eventDescription: list.value.eventDescription,
                          eventsDates: [
                            {
                              eventsMoreDatesId: 0,
                              eventId: 0,
                              eventDate: list.eventDate ,
                              startTime: list.startTime,
                              endTime:  list.endTime ,
                            }
                          ]
                        }


                        // startTime: list.eventDate+"T"+list.startTime+":00" ,
                        // endTime:  list.endTime+"T"+list.endTime+":00" ,
              this.http.post(this.eventposturl,data_obj,{headers:headers}).subscribe(data =>{
              console.log(data.json());
              console.log(this.eventArray)
              this.eventArray.push(data_obj)
              console.log(this.eventArray)

             //  debugger
            })
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
    this.eventdate = v.eventsDates[0].eventDate.split('T')[0]
    this.endtime = v.eventsDates[0].endTime.split('T')[1]
    this.startime = v.eventsDates[0].startTime.split('T')[1]
    // console.log( this.eventdate );
    // console.log( this.endtime );
    // console.log( this.startime );
    // console.log( this.modelfield );
    
  }

  editsave(data :any ){
    console.log(data);


    let headers = new Headers();
              var authToken = localStorage.getItem('userToken');
              headers.append('Accept', 'application/json')
              headers.append('Content-Type', 'application/json');
              headers.append("Authorization",'Bearer '+authToken);
              


            const  editData = {
       
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
                     eventDate: this.eventdate ,
                     startTime:  this.startime,
                     endTime:  this.endtime,
                  }
                ]
              }
              console.log(editData)
    this.http.post(this.eventposturl,editData,{headers:headers}).subscribe(data =>{
    console.log(data.json());

    })


  

}

  

  deletevent(data,index){
    alert(data)
   // console.log(id);
    var id = data.eventId;
    console.log(id);
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

  country(event): void {  
    const newVal = event.target.value;
    console.log(newVal)
    // this.c_id = this.arra[newVal].countryId
    // this.country_name =this.arra[newVal].countryName
    this.district = this.arra[newVal].districts
    console.log(this.district)
  }
  districtA(event): void {  
    const newVal = event.target.value;
    // this.d_id = this.district[newVal].districtId
    // this.district_name =this.district[newVal].name
    this.suburb = this.district[newVal].suburb
  }
  subr(event): void {  
    const newVal = event.target.value;
    // this.s_id = this.suburb[newVal].suburbId
    // this.subr_name =this.suburb[newVal].name
    console.log(newVal)
  }

}
  