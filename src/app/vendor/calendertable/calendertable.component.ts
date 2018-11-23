import { Component, OnInit } from '@angular/core';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { Http,Headers } from '@angular/http';
import { DatePipe } from '@angular/common';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import swal from 'sweetalert2';
import {
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef
} from '@angular/core';

import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-calendertable',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calendertable.component.html',
  styleUrls: ['./calendertable.component.scss']
})
export class CalendertableComponent implements OnInit {
   jobArray:string[];
   all = 3;
   upcomming =2;
   past = 1
   vendorJobsId = 0;
   edit_job_form = {
    vendorJobsId: 0,
    clientName: "string",
    clientNumber: "string",
    eventTitle: "string",
    eventLocation: "string",
    startDate: "2018-11-23T07:28:05.224Z",
    endDate: "2018-11-23T07:28:05.224Z",
    userId: "string",
    vendorId: 0
  };
  
   jobdate = false;
   jobedit = false;

   clientName;
   eventTitle;
   clientNumber;
   eventLocation;
   startDate;
   endDate;
  private creat_job_url: string = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/VendorJobs/createupdatejobs';
  private geturl: string = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/VendorJobs/myjobs';
  vendor: any = [];
  test: string;
  dates: string;
  entry: string;
  myDate = new Date(); 
  userId;
  vendorid;
  t: any;
  currentJustify = 'start';
  currentOrientation = 'horizontal';


  public beforeChange($event: NgbTabChangeEvent) {
    if ($event.nextId === 'bar') {
      $event.preventDefault();
    }
  };

  constructor(private toastr: ToastrService,private modal: NgbModal,public http: Http,private datePipe: DatePipe) { 
   this.test = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
  }
 
  ngOnInit() {
   
    $.getScript('./assets/js/vendorsidebar.js');
   $.getScript('./assets/js/calendar.js');
  

    let headers = new Headers();
    var authToken = localStorage.getItem('userToken');
    this.userId = localStorage.getItem('userId');
    this.vendorid = localStorage.getItem('vendorid');
    headers.append('Accept', 'application/json')
    headers.append('Content-Type', 'application/json');
    headers.append("Authorization",'Bearer '+authToken);
     //all
    //  this.http.post(this.geturl,{
    //   filter: 3
    // },{headers:headers}).subscribe(data =>{
    //   console.log( data.json() );
    //   this.jobArray = data.json() as string[]; 
  
    //  },error => {  console.log(error)});

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

  // setTimeout(() => {
  //   this.jobview(2)
  //   this.jobview(1)
  //   this.jobview(3)
  //   this.jobview(3)
  // }, 200);
  
  setTimeout(function(){ document.getElementById("last_li").click(); setTimeout(function(){ document.getElementById("last_li").click(); }, 200); }, 200);
  // jQuery('#last_li').click();

  $(function() {
    $(".nav-link").on("click", function(){
      // debugger
      $(".nav-link").removeClass("active");
      $(this).addClass("active");
    });
});

    //accordian my wedding job 
    var acc = document.getElementsByClassName("accordion");
          var i;

          for (i = 0; i < acc.length; i++) {
              acc[i].addEventListener("click", function() {
                  /* Toggle between adding and removing the "active" class,
                  to highlight the button that controls the panel */
                  this.classList.toggle("active");

                  /* Toggle between hiding and showing the active panel */
                  var panel = this.nextElementSibling;
                  if (panel.style.display === "block") {
                      panel.style.display = "none";
                  } else {
                      panel.style.display = "block";
                  }
              });
          }
  }


  @ViewChild('create') validationForm: FormGroup;


 @ViewChild('modalContent') modalContent: TemplateRef<any>;
  view: string = 'month';
  
  viewDate: Date = new Date();

  refresh: Subject<any> = new Subject();
  activeDayIsOpen: boolean = true;
  

  job(jo){    let headers = new Headers();
              var authToken = localStorage.getItem('userToken');
              headers.append('Accept', 'application/json')
              headers.append('Content-Type', 'application/json');
              headers.append("Authorization",'Bearer '+authToken);
              this.jobdate = false;
              this.http.post(this.creat_job_url,jo.value,{headers:headers}).subscribe(
                data =>{ 
                        console.log( data.json() );
                        this.toastr.success(data.json().message );
                   
                        }),error => {  console.log(error)};
  
  }
  
  edit_job_modle(a){
    console.log(a);
    this.jobedit = true;
    this.edit_job_form = a;
  }
  edit_job(b){
    console.log(b.value);
    let headers = new Headers();
    var authToken = localStorage.getItem('userToken');
    headers.append('Accept', 'application/json')
    headers.append('Content-Type', 'application/json');
    headers.append("Authorization",'Bearer '+authToken);
    this.jobedit = false;
    this.http.post(this.creat_job_url,b.value,{headers:headers}).subscribe(
      data =>{ 
              console.log( data.json() );
              this.toastr.success(data.json().message );
          
              }),error => {  console.log(error)};
  
  }
  deletevent(job,index){
    this.jobArray.splice(index, 1);

    swal({
      title: "Are you sure?",
    text: "You will not be able to recover this imaginary file!",
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
        // alert(id)
   
  }

  close()
 {
   this.jobdate =false;
   this.jobedit = false;
  }
 
  jobview(a){
    let headers = new Headers();
    var authToken = localStorage.getItem('userToken');
    headers.append('Accept', 'application/json')
    headers.append('Content-Type', 'application/json');
    headers.append("Authorization",'Bearer '+authToken);
    //upcomming
    this.http.post(this.geturl,{
      filter: a
    },{headers:headers}).subscribe(data =>{
      console.log( data.json() );
      this.jobArray = data.json() as string[]; 
  
     },error => {  console.log(error)});
  }
  jobview_Past(a){ let headers = new Headers();
    var authToken = localStorage.getItem('userToken');
    headers.append('Accept', 'application/json')
    headers.append('Content-Type', 'application/json');
    headers.append("Authorization",'Bearer '+authToken);
    //upcomming
    this.http.post(this.geturl,{
      filter: a
    },{headers:headers}).subscribe(data =>{
      console.log( data.json() );
      this.jobArray = data.json() as string[]; 
  
     },error => {  console.log(error)});}
  jobview_Upcoming(a){ let headers = new Headers();
    var authToken = localStorage.getItem('userToken');
    headers.append('Accept', 'application/json')
    headers.append('Content-Type', 'application/json');
    headers.append("Authorization",'Bearer '+authToken);
    //upcomming
    this.http.post(this.geturl,{
      filter: a
    },{headers:headers}).subscribe(data =>{
      console.log( data.json() );
      this.jobArray = data.json() as string[]; 
  
     },error => {  console.log(error)});}
}
