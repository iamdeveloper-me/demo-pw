import { Component, OnInit } from '@angular/core';
import { apiService } from '../shared/service/api.service';
import { MasterserviceService } from '../ngservices/masterservice.service';
import { PagerService } from '../_services';
import 'rxjs/add/operator/map'
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor( public http:Http, private pagerService: PagerService,private apiService: apiService,private masterservice: MasterserviceService ) { }
  locations = [];
  private allItems: any[];
  location:string = 'all'
  eventType:string = 'All'
  dates:string =  "All"
  pager: any = {};
  pagedItems: any[];
  searchevents:any = {};
  page = []
  pagesSelected = 10000
  pageSize:number = 10000
  total_item_page
  page_sizzze  = 1;
  searchQuery: ""
  ngOnInit() {
                this.locationD();
                this.http.post(this.apiService.serverPath+'Home/searchevents',{
                  "page": 0,
                  "pageSize": 100000,
                  "sortDir": "",
                  "sortedBy": "asc",
                  "searchQuery": "",
                  "location": "",
                  "eventType": "all",
                  "dates": "all"
                }).map((response: Response) => response.json()).subscribe(data => {
                    console.log(data)
                    this.allItems = data['items']
                    this.setPage(1);
                  });  
  }
  page2 = 4;
  event(list){

   
    this.http.post(this.apiService.serverPath+'Home/searchevents',{
      page: 0,
      pageSize: 1000000,
      sortDir: "",
      sortedBy: "asc",
      searchQuery: list.value.searchQuery,
      location: list.value.location,
      eventType: list.value.eventType,
      dates: list.value.dates
    }).map((response: Response) => response.json()).subscribe(data => {
        this.allItems = data['items']
        this.setPage(1);
    });
    this.locationD()
  }
  setPage(page: number) {
    this.pager = this.pagerService.getPagerEvent(this.allItems.length, page);
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
  locationD(){ 
    this.masterservice.getAllLocation().subscribe(data => {
     console.log(data);
     this.locations = data;
     },error => {  console.log(error) })
  }
}
