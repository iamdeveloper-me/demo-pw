import { Component, OnInit  } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.scss']
})
export class TipsComponent  {

  private searchblog : string = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/PerfectWedding/searchblogs';
    searchData : any = {
      page: 0,
      pageSize: 0,
      sortDir: "",
      sortedBy: "",
      searchQuery: "",
      blogTopicId: 0,
    }

  private topicurl : string = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/PerfectWedding/blogtopics';
  tipsData  : any = 
    [
      {
        blogTopicId: 0,
        topic: "",
      }
    ];

    tipsArray:string[];

  page = 4;
   page1 = 4;
   page2 = 4;
   page3 = 4;
   page4 = 4;
   page5 = 4;
   currentPage = 2;
   currentPage1 = 2;
   currentPage2 = 2;
   isDisabled = true;

   ngOnInit() { }

  //  public categories = new Array()

  constructor(public http: Http ,public toastr: ToastrService) { }

  onSubmit(f){
    console.log(f);
    // this.topicurl = this.tipsData;
    let headers = new Headers();
    var authToken = localStorage.getItem('userToken');
    headers.append('Accept', 'application/json')
    headers.append('Content-Type', 'application/json');
    headers.append("Authorization",'Bearer '+authToken);

    this.http.get(this.topicurl,{headers:headers}).subscribe(
      data =>{ this.topicurl = data.json();
        this.tipsArray = data.json(); 
               console.log(data.json());
      });error =>{
        console.log(error);
      };
      
  }




}
