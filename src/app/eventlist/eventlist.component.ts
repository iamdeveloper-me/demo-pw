import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { apiService } from '../shared/service/api.service';
@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.scss']
})
export class EventlistComponent implements OnInit {

  constructor(private meta:Meta ,private apiService: apiService) { 
    this.meta.addTag({ name: 'description', content: 'Event Title | Perfect Weddings' });

  }
  data;
  all_event:any;
  noImage:string='https://s3.us-east-2.amazonaws.com/prefect-image/store_noimg.jpg';
  ngOnInit() {

    this.data = JSON.parse(sessionStorage.getItem('event'));
    console.log(this.data);
    this.apiService.postData(this.apiService.serverPath+'PerfectWedding/searchevents',{
      "page": 0,
      "pageSize": 100000,
      "sortDir": "",
      "sortedBy": "asc",
      "searchQuery": "",
      "location": "",
      "eventType": "all",
      "dates": "all"
    }).subscribe(data => {
        // console.log(data.items);
        this.all_event = data.items;
        console.log(this.all_event); 
      });  
  }

}
