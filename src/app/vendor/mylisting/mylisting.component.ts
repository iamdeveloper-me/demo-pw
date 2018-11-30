import { Component, OnInit, DebugElement, AfterViewInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-mylisting',
  templateUrl: './mylisting.component.html',
  styleUrls: ['./mylisting.component.scss']
})
export class MylistingComponent implements OnInit, AfterViewInit {
  private base_url : string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Reviews'
  edit_re= false;

  countryArray = [  {
    "reviewId": 0,
    "feedback": "string"
  }];
  public SearchModel = <any>{};
  public eventsData: Array<any> = [];
  public page: number = 0;
  public pagesCount: number = 0;
  public searchQuery: string;
  public Loading: boolean = false;
  public isSearching: boolean = false;
  modify_reply = {
    "reviewId": 0,
    "feedback": "string"
  }
  // code by v
  page_number : number = 0;
  collection: any[];  
  options = [{key : 'Highest Rating', value : 1}, {key : 'Lowest Rating', value : 2}, {key : 'Most Recent', value : 3}, {key : 'Earliest', value : 4}, {key : 'Not Replied', value : 5}, {key : 'Replied', value : 6}, {key : 'Pinned', value : 7}, {key : 'Unread', value : 8}]

  optionSelected = 3;

  onOptionsSelected(event){
    this.optionSelected = parseInt(event)
    this.MyReviews()
    console.log(event); //option value will be sent as event
  }
  // the end

  public filterCriteria = {
      pageNumber: 1,
      sortDir: 'ASC',
      sortedBy: 'Title'
  };

    constructor(public http: Http ,public toastr: ToastrService,) { 
        this.MyReviews();
    }
  Pinned;
  
  header(){
    let header = new Headers();
    var authToken = localStorage.getItem('userToken');
    header.append('Accept', 'application/json')
    header.append('Content-Type', 'application/json');
    header.append("Authorization",'Bearer '+authToken);
    return header;
  }

  MyReviews(){
      var data = {
        "page": this.page_number, 
        "pageSize": 10,
        "sortDir": 'asc',
        "sortedBy": '',
        "searchQuery": '',
        "status": this.optionSelected
      }

    this.http.post(this.base_url + "/myreviews", data, { headers: this.header() }).subscribe(
        data =>{
          this.countryArray = data.json()
          console.log(  this.countryArray);  
          this.collection = this.countryArray
          
    },error=>{
          console.log(error)
    });
  }
  
  ReviewReadStatus(reviewId, reviewStatus){
    var data = {
        "reviewId": reviewId,
        "reviewStatus": reviewStatus
    }

    this.http.post(this.base_url + "/ReviewReadStatus", data, { headers: this.header() }).subscribe(
        data =>{
        console.log(data.json());
        this.MyReviews()
    },error=>{
        console.log(error);
    });
  }

  UpdateReviewstatus(){
    var data = {
        "page": 0, 
        "pageSize": 10,
        "sortDir": 'asc',
        "sortedBy": '',
        "searchQuery": '',
        "status": 8
    }

    this.http.post(this.base_url + "/myreviews", data, { headers: this.header() }).subscribe(
        data =>{
            alert("dfd")
          this.countryArray = data.json()
          console.log(  this.countryArray);  

          for (let item of this.countryArray) {
              console.log(item )
            //   for (let item of item.items) {
            //         if(this.item.reviewStatus == 1 )
            //         {
            //             this.ReviewReadStatus( item.reviewId,item.reviewStatus);
            //         }
            // }
            }
          
    },error=>{
          console.log(error)
    });
  }

  GetMarkAsPinned(reviewId){
    console.log(reviewId)

    this.http.get(this.base_url + "/markaspinned?ReviewId" + '=' + reviewId,{ headers: this.header() }).subscribe(
        data =>{
            console.log(data.json());
            this.MyReviews()
    },error=>{
        console.log(error);
    });
  }

  ngOnInit() {
    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/jquery/jquery.min.js');
    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/bootstrap/js/bootstrap.bundle.min.js');
    $.getScript('./assets/js/vendorsidebar.js');
    // HighestRate=1,
    // LowestRate=2,
    // MostRecent=3,
    // Earliest=4,
    // NotReplied=5,
    // Replied=6,
    // Pinned=7

    setTimeout(function(){

        this.UpdateReviewstatus()
    }, 25000);
    
  }

  ngAfterViewInit(){
    
  }
  public sort(sortValue) {
    if (this.filterCriteria.sortedBy == sortValue)
        this.filterCriteria.sortDir = this.filterCriteria.sortDir == 'ASC' ? 'DESC' : 'ASC';
    else {
        this.filterCriteria.sortedBy = sortValue;
        this.filterCriteria.sortDir = 'asc';
    }
    this.search(this.SearchModel.page);
}

public range() {
    var step = 2;
    var doubleStep = step * 2;
    var start = Math.max(0, this.page - step);
    var end = start + 1 + doubleStep;
    if (end > this.pagesCount) { end = this.pagesCount; }
    var ret = [];
    for (var i = start; i != end; ++i) {
        ret.push(i);
    }
    return ret;
}

public search(page) {
    page = page || 0;
    this.SearchModel.page = page;
    this.SearchModel.pageSize = 10;
    this.SearchModel.sortDir = this.filterCriteria.sortDir;
    this.SearchModel.sortedBy = this.filterCriteria.sortedBy;
    this.SearchModel.searchQuery = this.searchQuery;
    this.isSearching = true;
    // this.eventsApi.eventsGetFutureEvents(this.SearchModel).then((response: angular.IHttpPromiseCallbackArg<API.Client.PagedCollectionEventsViewModel>) =>
    // {
    //     this.page = response.data["Page"];
    //     this.pagesCount = response.data["TotalPages"];
    //     this.eventsData = response.data["Items"];
    //     this.isSearching = false;
    // });
}
open(a){
    this.edit_re = true;
    console.log(a);
    this.modify_reply =a;
}
    feed_baack(e){
            this.http.post(this.base_url + "/sendfeedback",e.value, { headers: this.header() }).subscribe(
                data =>{
                console.log(data.json());
                this.toastr.success(data.json().message);
                        
                this.MyReviews();
                this.edit_re= false;
            },error=>{
                console.log(error);
            });
    }
    closeModel(){
        this.edit_re= false;
    }
}

