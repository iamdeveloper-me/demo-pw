import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { apiService } from 'app/shared/service/api.service';

@Component({
  selector: 'app-tipslist',
  templateUrl: './tipslist.component.html',
  styleUrls: ['./tipslist.component.scss']
})
export class TipslistComponent implements OnInit {

  constructor(private meta : Meta, private title : Title,private apiService : apiService) { }
  tipsArrays_items:any[];
  data;
  ngOnInit() {

    this.data = JSON.parse(sessionStorage.getItem('page'));
    console.log(this.data);
    console.log(this.data.blogTopic.topic)
    //Meta Tags
    this.title.setTitle(this.data.blogTopic.topic + ` | Perfect Weddings`);    
    this.meta.addTag({name:'description',content:'Wedding Tips & Articles |Perfect Weddings'});  

    this.apiService.postData(this.apiService.serverPath+'PerfectWedding/searchblogs',{
      "page": 0,
      "pageSize": 25,
      "sortDir": "Any",
      "sortedBy": "",
      "searchQuery": "",
      "blogTopicId": 0
      }).subscribe(res => {
        console.log(res)
        this.tipsArrays_items = res.items; 
        console.log(this.tipsArrays_items);
      },
      error => {
       console.log(error)
      })  

  }


}
