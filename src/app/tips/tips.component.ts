
import { Component, OnInit } from '@angular/core';
import { apiService } from '../shared/service/api.service';
@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.scss']
})
export class TipsComponent  {

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
