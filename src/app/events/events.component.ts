import { Component, OnInit } from '@angular/core';
import { apiService } from '../shared/service/api.service';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor(private apiService: apiService) { }

  ngOnInit() {

    this.event();
  }
  page2 = 4;
  event(){
    this.apiService.postData(this.apiService.serverPath+'Home/searchevents',{
      page: 0,
      pageSize: 0,
      sortDir: "string",
      sortedBy: "asc",
      searchQuery: "string",
      location: "string",
      eventType: "Free",
      dates: "All"
    }).subscribe(data => {
      console.log(data)
    },
      error => {
       console.log(error)
      }
    )
  }
}
