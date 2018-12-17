import { Component, OnInit } from '@angular/core';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { Http,Headers } from '@angular/http';
import { DatePipe } from '@angular/common';
import {  FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import swal from 'sweetalert2';
import {ViewChild,TemplateRef} from '@angular/core';
import { TimeSlot } from '../location/location.component';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

/// New Calendar Dependancy
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
@Component({
  selector: 'app-calendertable',
  templateUrl: './calendertable.component.html',
  styleUrls: ['./calendertable.component.scss']
})
export class CalendertableComponent implements OnInit {
    edit_startDate:{};edit_endDate:{};customDay;isDisabled;endtime;select_time: TimeSlot;jobArray: any = [];
    http_header:Headers;
    objVendorJob:VendorJobsVM;
    all = 3;end_date:string;start_date:string;upcomming =2;past = 1;vendorJobsId = 0;
    edit_job_form = {vendorJobsId: 0,clientName: '',clientNumber: '',
                      eventTitle: "string",eventLocation: '',startDate: "2018-11-23T07:28:05.224Z",
                      endDate: "2018-11-23T07:28:05.224Z",startTime: "2018-12-05T09:54:26.407Z",
                      endTime: "2018-12-05T09:54:26.407Z",noOfGuests: 0,userId: '',vendorId: 0
                    };
    jobdate = false;jobedit = false;final_List = [];clientName;eventTitle;clientNumber;eventLocation;
    startDate;endDate;startTime;endTime;noOfGuests;
   
    private creat_job_url: string = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/VendorJobs/createupdatejobs';
    private geturl: string = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/VendorJobs/myjobs';
    vendor: any = [];
    test: string;
    dates: string;
    entry: string;
    myDate = new Date(); 
    userId;
    vendorid;
    event_data = { "events": []};
    t: any;
    currentJustify = 'start';
    currentOrientation = 'horizontal';
      public beforeChange($event: NgbTabChangeEvent) {
        if ($event.nextId === 'bar') {
          $event.preventDefault();
        }
      };
        /// New Calander Code Here ///
  showModal: boolean;
  title = 'ngularfullcalendarbootstrap';
  name: string;
  date: string;
  calendarOptions: Options;
  eventDetails:any;
  /// End Of New Calander Code Here ///

    constructor(private toastr: ToastrService,private modal: NgbModal,public http: Http,private datePipe: DatePipe) { 
     this.test = this.datePipe.transform(this.myDate, 'yyyy-mm-dd');
     this.select_time = new TimeSlot();
     this.objVendorJob=new VendorJobsVM();
    }
    ngOnInit() {
                  $.getScript('./assets/js/vendorsidebar.js');
                  this.http_header = new Headers();
                  var authToken = localStorage.getItem('userToken');
                  this.userId = localStorage.getItem('userId');
                  this.vendorid = localStorage.getItem('vendorid');
                  this.http_header.append('Accept', 'application/json')
                  this.http_header.append('Content-Type', 'application/json');
                  this.http_header.append("Authorization",'Bearer '+authToken);
                  
                  //all
                  this.http.post(this.geturl,{filter: 3},{headers:this.http_header}).subscribe(data =>{             
                    this.jobArray = data.json();
                    console.log(this.jobArray );
                    // this.final_List.forEach(function (value) { this.event_data.events.push(value); });
                  },error => { console.log(error)});

                    $(".weddingjobstab").click(function(){
                      $("#weddingjobs").show();
                      $("#calendartabing").hide();  
                      $(".weddingjobstab").addClass("selected"); 
                      $(".calendartab").removeClass("selected");   
                    });

                    $(".calendartab").click(function(){
                      $("#weddingjobs").hide();
                      $("#calendartabing").show();
                      $(".weddingjobstab").removeClass("selected"); 
                      $(".calendartab").addClass("selected");   
                    });
                    $(function() {
                        $(".nav-link").on("click", function(){
                        $(".nav-link").removeClass("active");
                        $(this).addClass("active");
                      });
                    });
          //accordian my wedding job 
          var acc = document.getElementsByClassName("accordion");
          var i;

          for (i = 0; i < acc.length; i++) {
              acc[i].addEventListener("click", function() {
                  this.classList.toggle("active");
                  var panel = this.nextElementSibling;
                  if (panel.style.display === "block") {
                      panel.style.display = "none";
                  } else {
                      panel.style.display = "block";
                  }
              });
          } 
          // New Calendar funciton Called
          this.initNewCalander();
    }
            @ViewChild('create') validationForm: FormGroup;
            @ViewChild('modalContent') modalContent: TemplateRef<any>;
            view: string = 'month';
            viewDate: Date = new Date();
            refresh: Subject<any> = new Subject();
            activeDayIsOpen: boolean = true;

            job(jo){
              console.log(jo);
            
                      this.end_date = jo.value['endDate']['year']+'-'+jo.value['endDate']['month']+'-'+jo.value['endDate']['day']
                      this.start_date = jo.value['startDate']['year']+'-'+jo.value['startDate']['month']+'-'+jo.value['startDate']['day']
                      jo.value.startDate = this.start_date
                      jo.value.endDate = this.end_date
                                let headers = new Headers();
                                var authToken = localStorage.getItem('userToken');
                                headers.append('Accept', 'application/json')
                                headers.append('Content-Type', 'application/json');
                                headers.append("Authorization",'Bearer '+authToken);
                                this.jobdate = false;
                                this.http.post(this.creat_job_url,jo.value,{headers:headers}).subscribe(
                                  data =>{ 
                                          console.log( data.json() );
                                          this.toastr.success(data.json().message );
                                          this.jobview(3);
                                          this.showModal=false;
                                          // this.jobview.reset();
                                          }),error => {  console.log(error)};
            
            }
            edit_job_modle(a){
              console.log(a);
              console.log(a.startDate);
              console.log(a.endDate);
              this.jobedit = true;
              this.edit_job_form = a;
              this.edit_startDate =  { "year": parseInt(a.startDate.split('T')[0].split('-')[0])   , 
                                                "month": parseInt(a.startDate.split('T')[0].split('-')[1])  ,
                                                 "day": parseInt(a.startDate.split('T')[0].split('-')[2])}

              this.edit_endDate   =  {"year": parseInt(a.endDate.split('T')[0].split('-')[0])   , 
                                               "month": parseInt(a.endDate.split('T')[0].split('-')[1])  ,
                                               "day": parseInt(a.endDate.split('T')[0].split('-')[2])}                    
                                               console.log(  this.edit_startDate);
                                               console.log (this.edit_endDate  );
              this.edit_job_form.startDate = a.startDate.split('T')[0].split('"')[0];
            //   a.endDate.split('T')[0];
            // { "YEAR": 2018, "MONTH": 12, "DAY": 22 }
              this.edit_job_form.endDate  = a.endDate.split('T')[0]
           
            }
            edit_job(b){
              console.log(b.value);
            //  this.end_date = b.value['endDate']['year']+'-'+b.value['endDate']['month']+'-'+b.value['endDate']['day']
             // this.start_date = b.value['startDate']['year']+'-'+b.value['startDate']['month']+'-'+b.value['startDate']['day']
             // b.value.startDate = this.start_date
            //  b.value.endDate = this.end_date
             // console.log(b.value);            
              let headers = new Headers();
              var authToken = localStorage.getItem('userToken');
              headers.append('Accept', 'application/json')
              headers.append('Content-Type', 'application/json');
              headers.append("Authorization",'Bearer '+authToken);
              this.jobedit = false;
              console.log(this.objVendorJob);
              this.http.post(this.creat_job_url,this.objVendorJob,{headers:headers}).subscribe(
                data =>{ 
                        console.log( data.json() );
                        this.ngOnInit()
                        this.toastr.success(data.json().message );
                        }),error => {  console.log(error)};
            
            }
            deletevent(job,index){
              this.jobArray.splice(index, 1);
                swal({
                    title: "Are you sure?",
                text: "You will not be able to recover event!",
                type: "warning",
                showCancelButton: true,
                confirmButtonClass: "btn-default",
                confirmButtonText: "Yes, delete it!",
                cancelButtonText: "No, cancel plx!",
                }).then((res)=>{
                    if(res.value===true){
                    console.log(job);
                    
                    var deleteid = job.vendorJobsId ;
                    let headers = new Headers();
                    var authToken = localStorage.getItem('userToken');
                    headers.append('Accept', 'application/json')
                    headers.append('Content-Type', 'application/json');
                    headers.append("Authorization",'Bearer '+authToken);
                
                    this.http.get('http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/VendorJobs/removejob?VendorJobId'+'='+deleteid,{headers:headers}).subscribe(
                        data =>{
                    console.log(data.json());
                    this.toastr.success(data.json().message );
                                
                    },error =>{ console.log(error)});
                    }else{
                    }
                    },error=>{
                    alert(JSON.stringify(error));
                    })
                    return;
                
            
            }

            close(){this.jobdate =false;this.jobedit = false;}
            jobview(a){
            
              let headers = new Headers();
              var authToken = localStorage.getItem('userToken');
              headers.append('Accept', 'application/json')
              headers.append('Content-Type', 'application/json');
              headers.append("Authorization",'Bearer '+authToken);
             // upcomming
              
              this.http.post(this.geturl,{
                filter: a
              },{headers:headers}).subscribe(data =>{
                console.log( data.json() );
              
                this.jobArray = data.json() as string[]; 
              },error => {  console.log(error)});
            }
           /// New Calendar Code Start
          initNewCalander(){
            this.calendarOptions = {
              editable: true,
              eventLimit: true,
              displayEventEnd:true,
              eventOverlap:true,
              nowIndicator:true,
              eventDurationEditable:true,
              noEventsMessage:'No Event Found On This Day',
              displayEventTime:true,
              eventColor:'red',
              eventTextColor:'white',
              //header: {left: 'prev,next today',center: 'title',right: 'month,agendaWeek,agendaDay,listMonth'},
              header: {left: 'prev,next ',center: 'title',right: ''},
              events: [{title: 'Sales Meeting',date: '2018-11-21'}],
          
            };
          }
          eventClick(model: any) {
            this.name = model.event.title;
            this.date = model.event.start;
            this.showModal = true;
          }
          hide(){
         // this.calendarOptions.events.push(this.eventObj);
          this.showModal = false;
        }
        dayClick(){
          this.showModal=true;
        }
        clickButton(details){
          
        }
        showJobDialog(){

        }
        /// New Calendar Code End

}
export class VendorJobsVM{
    vendorJobsId:	number;
    clientName:string;
    clientNumber:string;
    eventTitle:string;
    eventLocation:string;
    startDate:string;
    endDate:string;
    startTime:string;
    endTime:string;
    noOfGuests:number;
    userId:string;
    vendorId:number;
}
