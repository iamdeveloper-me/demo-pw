import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { apiService } from '../shared/service/api.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.scss']
})
export class EventlistComponent implements OnInit {

  constructor(private meta : Meta, private title : Title,private apiService: apiService, 
    private route : ActivatedRoute ) { 
    this.meta.addTag({ name: 'description', content: 'Event Title | Perfect Weddings' });
  }

  data:any = {};
  all_event:any;
  animal;
  noImage:string='https://s3.us-east-2.amazonaws.com/prefect-image/store_noimg.jpg';
  snapshotParam = "initial value";
  subscribedParam = "initial value";
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.animal = params
      console.log(this.animal.params.eventId);
      this.event_all_load(this.animal.params.eventId);
    });

  //  this.data = JSON.parse(sessionStorage.getItem('event'));
    //console.log(this.data);
  }

  event_all_load(a){
      //Event Api
      console.log(a)
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
          this.all_event = data.items;
          console.log(this.all_event); 
          this.data = this.all_event.filter(items => items.eventId == a);
         console.log(this.data)
             //Meta Tags
          this.title.setTitle(this.data[0].eventTitle + ` | ` + this.data[0].districts);   
          this.meta.addTag({name:'description',content:'Team Contact | Perfect Weddings'});  
        });  
  }
}
