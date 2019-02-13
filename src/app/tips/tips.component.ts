import { Component, OnInit } from '@angular/core';
import { apiService } from '../shared/service/api.service';
import { Http,Headers } from '@angular/http';
import { ToastrService } from 'ngx-toastr';
import { Meta } from '@angular/platform-browser';
import { PagerService } from 'app/_services';
import { TopicPipe } from './topic.pipe';
@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.scss'],
  providers: [TopicPipe]
})
export class TipsComponent  {
    searchquery= ''
    onSearch=''
    tipsArray:string[];
    tipsArrays_items:any[];
    blogArray:string[];
    distinctTipic: any;
    selectedTipic:string = 'all';
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
    pagedItems: any[];
    pager: any = {};
    allItems: any[];

    constructor(private pagerService: PagerService,private apiService: apiService,public http: Http ,public toastr: ToastrService,private meta:Meta) {
      this.meta.addTag({ name: 'description', content: 'Wedding Tips & Articles | Perfect Weddings' });
     }
    ngOnInit() { 
      this.apiService.postData(this.apiService.serverPath+'PerfectWedding/searchblogs',{
        page: 0,
        pageSize: 25,
        sortDir: "",
        sortedBy: "Any", 
        searchQuery: '',
        blogTopicId: 0
        }).subscribe(data => {
        this.tipsArrays_items = data.items; 
        this.distinctTipic = [new Set(this.tipsArrays_items.map(x=>x.blogTopic.topic))][0];
        this.allItems = this.tipsArrays_items
        this.setPage(1);
        },
        error => {
         console.log(error)
        }
      )

    }

    setPage(page: number) {
      this.pager = this.pagerService.getPagerEvent(this.allItems.length, page);
      this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }
}

