import { Component, OnInit } from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import { ColorPicker } from 'app/vendor/albumsetting2/albumsetting2.component';
import { ColorHelper } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-eventcelandar',
  templateUrl: './eventcelandar.component.html',
  styleUrls: ['./eventcelandar.component.scss']
})
export class EventcelandarComponent implements OnInit {
  showModal: boolean;
  title = 'ngularfullcalendarbootstrap';
  name: string;
  date: string;
  calendarOptions: Options;
  eventDetails:any;
  constructor() { }

  ngOnInit() {
    this.calendarOptions = {
      editable: true,
      eventLimit: true,
      eventColor:'red',
      eventTextColor:'white',
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay,listMonth'
      },
      events: [{
        title: 'Sales Meeting',
        date: '2018-11-21'
      }],

    };
  }
  eventClick(model: any) {
    this.name = model.event.title;
    this.date = model.event.date;
    this.showModal = true;
  }
  hide() {
    this.showModal = false;
  }
  dayClick(){
        
  }
  job(create){

  }

}
