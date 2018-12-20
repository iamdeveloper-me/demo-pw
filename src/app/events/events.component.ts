import { Component, OnInit } from '@angular/core';
import { apiService } from '../shared/service/api.service';
import { MasterserviceService } from '../ngservices/masterservice.service';
import { PagerService } from '../_services';
import 'rxjs/add/operator/map'
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor( private pagerService: PagerService,private apiService: apiService,private masterservice: MasterserviceService ) { }
  locations = [];
  searchevents:any = [];
  page = []

  pageSize:number = 10000
  // array of all items to be paged
  private allItems: any[];
  pager: any = {};

  // paged items
  pagedItems: any[];
  ngOnInit() {

    
    this.location();
  }
  page2 = 4;
  event(list){
    console.log(list.value);
    // this.apiService.postData(this.apiService.serverPath+'Home/searchevents',{
    //   page: 0,
    //   pageSize: 1,
    //   sortDir: "",
    //   sortedBy: "asc",
    //   searchQuery: "",
    //   location: "",
    //   eventType: "Free",
    //   dates: "All"
    // }).subscribe(data => {
    //   //console.log(data)
    //   this.searchevents = data ;
    //   console.log(this.searchevents)
    //   this.page = data.json().items
    // },
    //   error => {
    //    console.log(error)
    //   }
    // )
    this.apiService.postData(this.apiService.serverPath+'Home/searchevents',{
      page: 0,
      pageSize: 1,
      sortDir: "",
      sortedBy: "asc",
      searchQuery: "",
      location: "",
      eventType: "Free",
      dates: "All"
    }).map((response: Response) => response)
        .subscribe(data => {
          this.searchevents = data ;
          // set items to json response
          this.allItems = data['items'];
          debugger
          // initialize to page 1
          this.setPage(1);
        });
  }


  setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.allItems.length, page);

    // get current page of items
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
  


  location(){ 
    this.masterservice.getAllLocation().subscribe(data => {
     console.log(data);
     this.locations = data;
     },error => {  console.log(error) })
  }
}
