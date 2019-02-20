import { Component, OnInit } from '@angular/core';
import { apiService } from '../shared/service/api.service';
import { MasterserviceService } from '../ngservices/masterservice.service';
import { PagerService } from '../_services';
import 'rxjs/add/operator/map'
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { AuthGuardService } from 'app/services/auth-guard.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  objSearchlistvm: SearchListingVM;

  constructor(public auth:AuthGuardService, public http:Http, private pagerService: PagerService,private apiService: apiService,private masterservice: MasterserviceService,private router:Router,private meta:Meta, private title : Title ) {
              this.objSearchlistvm = new SearchListingVM()

  }

  locations = [];
   allItems: any[];
  location:string = 'All'
  eventType:string = 'All'
  dates:string =  "All"
  pager: any = {};
  pagedItems: any[];
  searchevents:any = {};
  upperSearchQuery;
  page = []
  pagesSelected = 10000
  pageSize:number = 10000
  total_item_page
  page_sizzze  = 1;
  searchQuery: ""
  ngOnInit() {
    this.title.setTitle('Top Wedding Events in Mauritius |Perfect Weddings');    
    this.meta.addTag({name:'description',content:'Top Wedding Events in Mauritius |Perfect Weddings'});    
    sessionStorage.clear();
    this.locationD();
    this.event();
  }
  page2 = 4;

  event(){
    //Event API
    this.http.post(this.apiService.serverPath+'PerfectWedding/searchevents',this.objSearchlistvm).map((response: Response) => response.json()).subscribe(data => {
        this.allItems = data.items;
        console.log(this.allItems);
        this.setPage(1);
    });
    this.locationD()
  }
  changeData(str){
   // var grade:string = str; 
    switch(str) { 
       case "title": { 
        this.objSearchlistvm['searchQuery'] = this.searchQuery
        this.event();
        break; 
       } 
       case "location": { 
        this.objSearchlistvm['location'] = this.location
        this.event();
          break; 
       } 
       case "eventType": {
        this.objSearchlistvm['eventType'] = this.eventType
        this.event();          
          break;    
       } 
       case "datesFilter": { 
        this.objSearchlistvm['dates'] = this.dates
        this.event(); 
          break; 
       }  
       default: { 
          console.log("Invalid choice"); 
          break;              
       } 
    } 
  }
  setPage(page: number) {
    this.pager = this.pagerService.getPagerEvent(this.allItems.length, page);
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
  locationD(){ 
    this.masterservice.getAllLocation().subscribe(data => {
     this.locations = data;
     },error => {  console.log(error) })
  }

  goToNextPage(a){
    sessionStorage.setItem('event',JSON.stringify(a));
    this.router.navigate(['home/event_list']);
  }
  bookMark(data, type , action_which_lacation){
    const id = data['eventId'] 
    if(this.auth.userActive()){
      this.masterservice.fillBookmark(id, type , action_which_lacation).subscribe(data=>{
        console.log(data)
      })
    }else{
        this.router.navigateByUrl('/home',{ queryParams: { login: true}});
        
  
       }
    
   
  }

}


export class SearchListingVM { 
  page: number;
  pageSize: number;
  sortDir: string;
  sortedBy: string;
  searchQuery: string;
  location: string;
  eventType: string;
  dates: string
  constructor(){
    this.pageSize=25;
    this.page=0;
    this.sortDir = 'asc';
    this.searchQuery = ''
    this.location = 'all';
    this.eventType = 'all';
    this.dates = 'all';
  }
}