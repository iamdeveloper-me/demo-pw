

import { Component, OnInit } from '@angular/core';
import { apiService } from '../shared/service/api.service';

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
   ngOnInit() { this.search_tips() }
  constructor(private apiService: apiService) { }
  search_tips(){
    this.apiService.postData(this.apiService.serverPath+'PerfectWedding/searchblogs',{
      page: 1,
      pageSize: 1,
      sortDir: "string",
      sortedBy: "asc",
      searchQuery: "string",
      blogTopicId: 0
    }).subscribe(data => {
      console.log(data)


      //this.max = [];
    },
      error => {
       console.log(error)
      }
    )
  }


}
