import { Component, OnInit } from '@angular/core';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { Http,Headers } from '@angular/http';
import { DatePipe } from '@angular/common';
import {  FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import swal from 'sweetalert2';
import {
 // ChangeDetectionStrategy,
  ViewChild,
  TemplateRef
} from '@angular/core';

import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-calendertable',
 // changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calendertable.component.html',
  styleUrls: ['./calendertable.component.scss']
})
export class CalendertableComponent implements OnInit {
  
    jobArray: any = [];
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
   final_List = [];
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
    event_data= { "events": []};
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

   // $.getScript('./assets/js/calendar.js');

  

        let headers = new Headers();
        var authToken = localStorage.getItem('userToken');
        this.userId = localStorage.getItem('userId');
        this.vendorid = localStorage.getItem('vendorid');
        headers.append('Accept', 'application/json')
        headers.append('Content-Type', 'application/json');
        headers.append("Authorization",'Bearer '+authToken);
     //all
        this.http.post(this.geturl,{
          filter: 3
        },{headers:headers}).subscribe(data =>{
          

          this.final_List = data.json();

          this.final_List.forEach(function (value) {
            this.event_data.events.push(value);
          }); 
         
          console.log(this.final_List );
    
         

        },error => {  console.log(error)});

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

        
  
          // setTimeout(function(){ document.getElementById("last_li").click(); setTimeout(function(){ document.getElementById("last_li").click(); }, 200); }, 200);
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
    demo(){
      console.log("demo test")
      this.demo1();
    }
    demo1(){
      console.log("demo1 test")
      
    }


            @ViewChild('create') validationForm: FormGroup;
            @ViewChild('modalContent') modalContent: TemplateRef<any>;
            view: string = 'month';
            viewDate: Date = new Date();
            refresh: Subject<any> = new Subject();
            activeDayIsOpen: boolean = true;
    job(jo){
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
          this.jobArray.splice(index, 1);
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

 

    ///calender
    // Initialize the calendar by appending the HTML dates
  
   
     months = [ 
      "January", 
      "February", 
      "March", 
      "April", 
      "May", 
      "June", 
      "July", 
      "August", 
      "September", 
      "October", 
      "November", 
      "December" 
  ];
 init_calendar(date) {
  $(".tbody").empty();
  $(".events-container").empty();
  var calendar_days = $(".tbody");
  var month = date.getMonth();
  var year = date.getFullYear();
  var day_count = this.days_in_month(month, year);
  var row = $("<tr class='table-row'></tr>");
  var today = date.getDate();
  // Set date to 1 to find the first day of the month
  date.setDate(1);
  var first_day = date.getDay();
  // 35+firstDay is the number of date elements to be added to the dates table
  // 35 is from (7 days in a week) * (up to 5 rows of dates in a month)
  for(var i=0; i<35+first_day; i++) {
      // Since some of the elements will be blank, 
      // need to calculate actual date from index
      var day = i-first_day+1;
      // If it is a sunday, make a new row
      if(i%7===0) {
          calendar_days.append(row);
          row = $("<tr class='table-row'></tr>");
      }
      // if current index isn't a day in this month, make it blank
      if(i < first_day || day > day_count) {
          var curr_date = $("<td class='table-date nil'>"+"</td>");
          row.append(curr_date);
      }   
      else {
          var curr_date = $("<td class='table-date'>"+day+"</td>");
          var events = this.check_events(day, month+1, year);
          if(today===day && $(".active-date").length===0) {
              curr_date.addClass("active-date");
              this.show_events(events, this.months[month], day);
          }
          // If this date has any events, style it with .event-date
          if(events.length!==0) {
              curr_date.addClass("event-date");
          }
          // Set onClick handler for clicking a date
          curr_date.click({events: events, month: this.months[month], day:day}, this.date_click);
          row.append(curr_date);
      }
  }
  // Append the last row and set the current year
  calendar_days.append(row);
  $(".year").text(year);
}

// Get the number of days in a given month/year
days_in_month(month, year) {
  var monthStart:any = new Date(year, month, 1);
  var monthEnd:any = new Date(year, month + 1, 1);
  return (monthEnd - monthStart) / (1000 * 60 * 60 * 24);    
}

// Event handler for when a date is clicked
 date_click(event) {
   alert(JSON.stringify(event));
  $(".events-container").show(250);
  $("#dialog").hide(250);
  $(".active-date").removeClass("active-date");
  $(this).addClass("active-date");
  this.show_events(event.data.events, event.data.month, event.data.day);
}

// Event handler for when a month is clicked
 month_click(event) {
  $(".events-container").show(250);
  $("#dialog").hide(250);
  var date = event.data.date;
  $(".active-month").removeClass("active-month");
  $(this).addClass("active-month");
  var new_month = $(".month").index('this');
  date.setMonth(new_month);
  this.init_calendar(date);
}

// Event handler for when the year right-button is clicked
 next_year(event) {
  $("#dialog").hide(250);
  var date = event.data.date;
  var new_year = date.getFullYear()+1;
  $("year").html(new_year);
  date.setFullYear(new_year);
  this.init_calendar(date);
}

// Event handler for when the year left-button is clicked
 prev_year(event) {
  $("#dialog").hide(250);
  var date = event.data.date;
  var new_year:any = date.getFullYear()-1;
  $("year").html(new_year);
  date.setFullYear(new_year);
  this.init_calendar(date);
}

// Event handler for clicking the new event button
 new_event(event) {
  // if a date isn't selected then do nothing
  if($(".active-date").length===0)
      return;
  // remove red error input on click
  $("input").click(function(){
      $(this).removeClass("error-input");
  });
  // empty inputs and hide events
  $("#dialog input[type=text]").val('');
  $("#dialog input[type=number]").val('');
  $(".events-container").hide(250);
  $("#dialog").show(250);
  // Event handler for cancel button
  $("#cancel-button").click(function() {
      $("#name").removeClass("error-input");
      $("#count").removeClass("error-input");
      $("#dialog").hide(250);
      $(".events-container").show(250);
  });
  // Event handler for ok button
  $("#ok-button").unbind().click({date: event.data.date}, function() {
      var date = event.data.date;
     // var name= $("#name").val().trim();
     
     // var count = parseInt($("#count").val().trim());
    
      var day = parseInt($(".active-date").html());
      // Basic form validation
      // if(name.length === 0) {
      //     $("#name").addClass("error-input");
      // }
      // else if(isNaN(count)) {
      //     $("#count").addClass("error-input");
      // }
      // else {
      //     $("#dialog").hide(250);
      //     console.log("new event");
      //   //  this.new_event_json(name, count, date, day);
      //     date.setDate(day);
      //   ///  this.init_calendar(date);
      // }
  });
}

// Adds a json event to event_data
 new_event_json(name, count, date, day) {
  var event = {
      "occasion": name,
      "invited_count": count,
      "year": date.getFullYear(),
      "month": date.getMonth()+1,
      "day": day
  };
  this.event_data.events.push(event);
}

// Display all events of the selected date in card views
 show_events(events, month, day) {
            // Clear the dates container
            $(".events-container").empty();
            $(".events-container").show(250);
            console.log(this.event_data);
            // If there are no events for this date, notify the user
            if(events.length===0) {
                var event_card = $("<div class='event-card'></div>");
                var event_name = $("<div class='event-name'>There are no events planned for "+month+" "+day+".</div>");
                $(event_card).css({ "border-left": "10px solid #FF1744" });
                $(event_card).append(event_name);
                $(".events-container").append(event_card);
            }
            else {
                // Go through and add each event as a card to the events container
                for(var i=0; i<events.length; i++) {
                    var event_card = $("<div class='event-card'></div>");
                    var event_name = $("<div class='event-name'>"+events[i]["occasion"]+":</div>");
                    var event_count = $("<div class='event-count'>"+events[i]["invited_count"]+" Invited</div>");
                    if(events[i]["cancelled"]===true) {
                        $(event_card).css({
                            "border-left": "10px solid #FF1744"
                        });
                        event_count = $("<div class='event-cancelled'>Cancelled</div>");
                    }
                    $(event_card).append(event_name).append(event_count);
                    $(".events-container").append(event_card);
                }
            }
}

// Checks if a specific date has any events
check_events(day, month, year) {
        var events = [];
        for(var i=0; i<this.event_data["events"].length; i++) {
            var event = this.event_data["events"][i];
            if(event["day"]===day &&
                event["month"]===month &&
                event["year"]===year) {
                    events.push(event);
                }
        }
        return events;
}

// Given data for events in JSON format




}
