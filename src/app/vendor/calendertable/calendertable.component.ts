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
   
   events: CalendarEvent[] = [];
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
  vendor: any = {};
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
    let headers = new Headers();
    var authToken = localStorage.getItem('userToken');
    headers.append('Accept', 'application/json')
    headers.append('Content-Type', 'application/json');
    headers.append("Authorization",'Bearer '+authToken);
    this.http.get(this.geturl,{headers:headers}).subscribe(data =>{
    this.jobArray = data.json() as string[]; 
    for (let entry of data.json()) {
      this.events.push({
          title: entry.clientName,
          start: entry.clientName,
      });
     }
    });

    console.log(this.events);
    this.http.get('http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/VendorJobs/removejob',
   {headers:headers}).subscribe((data) => { 
       console.log( data.json() as string[] );
    });
    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/jquery/jquery.min.js');
    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/bootstrap/js/bootstrap.bundle.min.js');
    $.getScript('./assets/js/vendorsidebar.js');

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
 
  // events: CalendarEvent[] = [];
  activeDayIsOpen: boolean = true;
  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
     console.log('Event clicked', event);
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
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
  var userId = localStorage.getItem('vendorId');
  headers.append('Accept', 'application/json')
  headers.append('Content-Type', 'application/json');
  headers.append("Authorization",'Bearer '+authToken);

  this.http.post(this.url,{       vendorJobsId: 0,
    clientName: contactname,
    numberOfPeople: guest,
    clientPhoneNumber: contactnumber,
    jobLocation: location,
    lat: 0,
    long: 0,
    jobDate: starts,
    jobTime: end,
    userId: userId,
    vendorId: 12 },{headers:headers}).subscribe(
    data =>{ this.vendor = data.json(); console.log(this.vendor);});
  
  }

  deletevent(id){
    alert(id)
    var deleteid = id ;
    let headers = new Headers();
    var authToken = localStorage.getItem('userToken');
    headers.append('Accept', 'application/json')
    headers.append('Content-Type', 'application/json');
    headers.append("Authorization",'Bearer '+authToken);
    console.log(this.urlgetremove + '/' + deleteid);
    this.http.get(this.urlgetremove + '/' + deleteid,{headers:headers}).subscribe(data =>{
     console.log(data.json());
    },error =>{ console.log(error)});
  }

 
}
