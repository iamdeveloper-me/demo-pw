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
  searchevents:any = {};
  page = []

  pageSize:number = 10000
  // array of all items to be paged
 // private allItems: any[];
  total_item_page
  page_sizzze  = 1;
  pager: any = {};
  searchQuery: ""
    
      eventType: "Free"
      dates: "All"

  pagedItems: any[];
  ngOnInit() {

    this.apiService.postData(this.apiService.serverPath+'Home/searchevents',{
      page: 0,
      pageSize: 1,
      sortDir: "",
      sortedBy: "asc",
      searchQuery: "",
      location: "",
      eventType: "Free",
      dates: "All"
    }).subscribe(data => {
          
          this.searchevents = data
          console.log( this.searchevents)

          this.setPage(1 ,this.searchevents.totalPages);
        });
    this.location();
  }
  page2 = 4;


  setPage(page: number,a) {
    // get pager object from service
    console.log(page)
    this.page_sizzze = page
    this.pager = this.pagerService.getPager(a, page);
    //console.log(this.pager)
    // get current page of items
    this.pagedItems = a.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
  
  event(list){
        console.log(list.value);
        this.apiService.postData(this.apiService.serverPath+'Home/searchevents',{
          page: 0,
          pageSize: list.value.pageSize,
          sortDir: "",
          sortedBy: "asc",
          searchQuery: list.value.searchQuery,
          location: list.value.location,
          eventType: list.value.eventType,
          dates:list.value.dates
        }).subscribe(data => {
              this.searchevents = data ;
              // set items to json response
              console.log(data)
              this.total_item_page = data.totalPages;
            
              // initialize to page 1
              this.setPage(1,this.total_item_page);
            },error => {console.log(error)});
  }

  location(){ 
    this.masterservice.getAllLocation().subscribe(data => {
     console.log(data);
     this.locations = data;
     },error => {  console.log(error) })
  }
}
