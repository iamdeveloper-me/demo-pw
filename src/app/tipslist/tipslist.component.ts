import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { apiService } from 'app/shared/service/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tipslist',
  templateUrl: './tipslist.component.html',
  styleUrls: ['./tipslist.component.scss']
})
export class TipslistComponent implements OnInit {

  constructor
  (
    private meta : Meta, 
    private title : Title,
    private apiService : apiService,
    private route : ActivatedRoute 
  ) { }

  tipsArrays_items:any[];
  tipsdata;
  UrlData;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.UrlData = params
      console.log(this.UrlData.params.blogId);
      this.tipsList(this.UrlData.params.blogId);
    });
    // this.data = JSON.parse(sessionStorage.getItem('page'));
    // console.log(this.data);
  }

  tipsList(a){
    this.apiService.postData(this.apiService.serverPath+'PerfectWedding/searchblogs',{
      "page": 0,
      "pageSize": 25,
      "sortDir": "Any",
      "sortedBy": "",
      "searchQuery": "",
      "blogTopicId": 0
      }).subscribe(res => {
        this.tipsArrays_items = res.items; 
        this.tipsdata = this.tipsArrays_items.filter(items => items.blogId == a);
        console.log(this.tipsdata);
            //Meta Tags
      this.title.setTitle(this.tipsdata[0].blogTopic.topic + ` | Perfect Weddings`);    
      this.meta.addTag({name:'description',content:'Wedding Tips & Articles |Perfect Weddings'});  
      },
      error => {
       console.log(error)
      })  
  }

}
