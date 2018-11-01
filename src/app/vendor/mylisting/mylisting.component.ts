import { Component, OnInit } from '@angular/core';
import { Http,Headers } from '@angular/http';

@Component({
  selector: 'app-mylisting',
  templateUrl: './mylisting.component.html',
  styleUrls: ['./mylisting.component.scss']
})
export class MylistingComponent implements OnInit {
  private url: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Reviews/postreview'
  private urlg: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com//api/Reviews/myreviews'
  countryArray:string[];
  public SearchModel = <any>{};
  public eventsData: Array<any> = [];
  public page: number = 0;
  public pagesCount: number = 0;
  public searchQuery: string;
  public Loading: boolean = false;
  public isSearching: boolean = false;

  public filterCriteria = {
      pageNumber: 1,
      sortDir: 'ASC',
      sortedBy: 'Title'
  };



  constructor(public http: Http) { }
  Pinned;
  ngOnInit() {
    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/jquery/jquery.min.js');
    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/bootstrap/js/bootstrap.bundle.min.js');
    $.getScript('./assets/js/vendorsidebar.js');
    let headers = new Headers();
    var authToken = localStorage.getItem('userToken');
    headers.append('Accept', 'application/json')
    headers.append('Content-Type', 'application/json');
    headers.append("Authorization",'Bearer '+authToken);
//     HighestRate=1,
// LowestRate=2,
// MostRecent=3,
// Earliest=4,
// NotReplied=5,
// Replied=6,
// Pinned=7
    const dat = {
      page: 1,
      pageSize: 0,
      sortDir:  1,
      sortedBy: 1, 
      searchQuery: 1,
      Status: 0
    }
  
     this.http.post(this.urlg,dat,{headers:headers}).subscribe(
      data =>{ 
     
        this.countryArray = data.json()  
          console.log(this.countryArray);  
             },error=>{console.log(error)});
       
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
    console.log(ret);
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

