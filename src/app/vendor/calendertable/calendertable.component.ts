import { Component, OnInit } from '@angular/core';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { Http,Headers } from '@angular/http';
import { DatePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent
} from 'angular-calendar';
import { getEventsInPeriod } from 'calendar-utils';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};
@Component({
  selector: 'app-calendertable',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calendertable.component.html',
  styleUrls: ['./calendertable.component.scss']
})
export class CalendertableComponent implements OnInit {
   jobArray:string[];
   

   event = {  vendorJobsId: 0,
              clientName: "",
              numberOfPeople: 0,
              clientPhoneNumber: "",
              jobLocation: "",
              lat: 0,
              long: 0,
              jobDate: "",
              jobTime: "",
              userId: "",
              vendorId: 0
             }

  private urlgetremove: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/VendorJobs/removejob'
  private url: string = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/VendorJobs/createupdatejobs';
  private geturl: string = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/VendorJobs/myjobs';
  vendor: any = [];
  test: string;
  dates: string;
  entry: string;
  myDate = new Date(); 
  t: any;
  currentJustify = 'start';
  currentOrientation = 'horizontal';

  public beforeChange($event: NgbTabChangeEvent) {
    if ($event.nextId === 'bar') {
      $event.preventDefault();
    }
  };

  constructor(private modal: NgbModal,public http: Http,private datePipe: DatePipe) { 
   this.test = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
  }

  ngOnInit() {
     this.getEvents();

    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/jquery/jquery.min.js');
    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/bootstrap/js/bootstrap.bundle.min.js');
    $.getScript('./assets/js/vendorsidebar.js');
    $.getScript('./assets/js/calendar.js');




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



  getEvents(){
    
    let headers = new Headers();
    var authToken = localStorage.getItem('userToken');
    headers.append('Accept', 'application/json')
    headers.append('Content-Type', 'application/json');
    headers.append("Authorization",'Bearer '+authToken);
    this.http.get(this.geturl,{headers:headers}).subscribe(data =>{
    this.jobArray = data.json() as string[]; 

   });
   
  }

  @ViewChild('modalContent') modalContent: TemplateRef<any>;
  view: string = 'month';
  newEvent: CalendarEvent;
  viewDate: Date = new Date();
  modalData: {
    action: string;
    event: CalendarEvent;
  };
  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edit this event', event);
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('This event is deleted!', event);
      }

    }
    
    
  ];
  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [
    {
      start: subDays(startOfDay(new Date()), 1),
      end: addDays(new Date(), 1),
      title: 'A 3 day event',
      color: colors.red,
      actions: this.actions
    },
    {
      start: startOfDay(new Date()),
      title: 'An event with no end date',
      color: colors.yellow,
      actions: this.actions
    },
    {
      start: subDays(endOfMonth(new Date()), 3),
      end: addDays(endOfMonth(new Date()), 3),
      title: 'A long event that spans 2 months',
      color: colors.blue
    },
    {
      start: addHours(startOfDay(new Date()), 2),
      end: new Date(),
      title: 'A draggable and resizable event',
      color: colors.yellow,
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    }
  ];

  activeDayIsOpen: boolean = true;
  
  
  dayClicked({ date, events}: { date: Date; events: CalendarEvent[] }): void {
         
    

    if (isSameMonth(date, this.viewDate)) {
      if ( (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) || events.length === 0)
        {
          this.activeDayIsOpen = false;
       
        } else {
          this.activeDayIsOpen = true;
        this.viewDate = date;
        }
        if( (isSameDay(this.viewDate, date) && this.activeDayIsOpen === false) || events.length === 0){
          this.modal.open(this.modalContent, { size: 'lg' });
         
        }

    }
  }
  eventTimesChanged({
    event,
    newStart,
    newEnd
    }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.handleEvent('Dropped or resized', event);
    this.refresh.next();
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  addEvent(): void {
    this.newEvent = {
      title: 'New event',
      start: startOfDay(new Date()),
      end: endOfDay(new Date()),
      color: colors.red,
      draggable: true,
      resizable: {
      beforeStart: true,
      afterEnd: true
      },
      actions: this.actions,
    }
    this.events.push(this.newEvent);

    // this.refresh.next();
    this.handleEvent('Add new event', this.newEvent);
     this.refresh.next();
  }

job(jo){
  console.log(jo)
  var contactname =    jo.event.clientName;
  var contactnumber =  jo.event.contactnumber ;
  var guest =          jo.event.guest;
  var location =       jo.event.location;
  var starts =         jo.event.start;
  var end =            jo.event.end; 
  let headers = new Headers();
  var authToken = localStorage.getItem('userToken');
  var userId = localStorage.getItem('userId');
  var vendorid = localStorage.getItem('vendorid');
  headers.append('Accept', 'application/json')
  headers.append('Content-Type', 'application/json');
  headers.append("Authorization",'Bearer '+authToken);

  this.http.post(this.url,{      
    vendorJobsId: 0,
    clientName: contactname,
    numberOfPeople: guest,
    clientPhoneNumber: contactnumber,
    jobLocation: location,
    lat: 0,
    long: 0,
    jobDate: starts,
    jobTime: end,
    userId: userId,
    vendorId: vendorid },{headers:headers}).subscribe(
    data =>{ const vendor = data.json(); 
            
      this.vendor.push(vendor);
             console.log(this.vendor.push(vendor));
            });
  
  }

  deletevent(job,index){
   // alert(id)
    console.log(job);
    this.jobArray.splice(index, 1);
   
    var deleteid = job.vendorJobsId ;
    let headers = new Headers();
    var authToken = localStorage.getItem('userToken');
    headers.append('Accept', 'application/json')
    headers.append('Content-Type', 'application/json');
    headers.append("Authorization",'Bearer '+authToken);

    console.log('http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/VendorJobs/removejob?VendorJobId'+'='+deleteid);
    this.http.get('http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/VendorJobs/removejob?VendorJobId'+'='+deleteid,{headers:headers}).subscribe(
      data =>{
     console.log(data.json());
    },error =>{ console.log(error)});
 }

}
