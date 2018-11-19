import { Component, OnInit, DebugElement } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'app-mylisting',
  templateUrl: './mylisting.component.html',
  styleUrls: ['./mylisting.component.scss']
})
export class MylistingComponent implements OnInit {
  private url: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Reviews/postreview'
  private urlg: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Reviews/myreviews'
  
  countryArray:string[];
  public SearchModel = <any>{};
  public eventsData: Array<any> = [];
  public page: number = 0;
  public pagesCount: number = 0;
  public searchQuery: string;
  public Loading: boolean = false;
  public isSearching: boolean = false;

  // code by v
  page_number : number = 0;
  collection: any[];  
  options = [{key : 'Highest Rating', value : 1}, {key : 'Lowest Rating', value : 2}, {key : 'Most Recent', value : 3}, {key : 'Earliest', value : 4}, {key : 'Not Replied', value : 5}, {key : 'Replied', value : 6}, {key : 'Pinned', value : 7}]

  optionSelected = 1;

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

    constructor(public http: Http) { 
        this.MyReviews();
        this.ReviewReadStatus();
        this.GetMarkAsPinned();
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
      this.urlg;
      var data = {
        "page": this.page_number, 
        "pageSize": 10,
        "sortDir": 'asc',
        "sortedBy": '',
        "searchQuery": '',
        "status": this.optionSelected
      }
    
    this.http.post(this.urlg, data, { headers: this.header() }).subscribe(
        data =>{
          this.countryArray = data.json()
          this.collection = this.countryArray
          console.log(this.countryArray);  
    },error=>{
          console.log(error)
    });
  }
  
  ReviewReadStatus(){
    var data = {
        "reviewId": 13,
        "reviewStatus": 1
    }
    var review_status_url = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Reviews/ReviewReadStatus';
    this.http.post(review_status_url, data, { headers: this.header() }).subscribe(
        data =>{
        console.log(data.json());
    },error=>{
        console.log(error);
    });
  }

  GetMarkAsPinned(){
      var id =13;
    var mark_as_pinned = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Reviews/markaspinned?ReviewId' + '=' + id;
    this.http.get(mark_as_pinned,{ headers: this.header() }).subscribe(
        data =>{
            console.log(data.json());
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
}

