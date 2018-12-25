import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { apiService } from '../shared/service/api.service';
import { PagerService } from '../_services'
@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {
  constructor(private pagerService: PagerService,private apiService: apiService ) { }
   categories:any = [];
   ALL_categories:any = [];
   pho_data:any = {}

   categoryId=''
   searchQuery=''
    // array of all items to be paged
    private allItems:any = [];
 
    // pager object
    pager: any = {};
 
    // paged items
    pagedItems: any[];


   ngOnInit() {
   $.getScript('./assets/js/blocksit.min.js');
 //  $.getScript('./assets/js/lazy.js');
   $.getScript('./assets/js/jquery.pinbox.js');
  // $.getScript('./assets/js/photo.js');

   this.apiService.postData(this.apiService.serverPath+'PerfectWedding/searchphotos',{
    page: 0,
    pageSize: 10000,
    sortDir: "",
    sortedBy: "",
    searchQuery: "",
    categoryId: 0
    }).map((response: Response) => response)
   .subscribe(data => {
     console.log(data)
        // set items to json response
        this.allItems = data['items'];
    
        // initialize to page 1
        this.setPage(1);
   },error => {  console.log(error)});
   

   this.apiService.getData(this.apiService.serverPath+'Categories/allcategories').map((response: Response) => response)
   .subscribe(data => {
     console.log(data)
     this.categories = data
   },error => {  console.log(error)});
   
   }
   find_photo(f){
   
      const a = {
        page: 0,
        pageSize: 30,
        sortDir: "asc",
        sortedBy: "",
        searchQuery: f.value.searchQuery,
        categoryId: f.value.categoryId
        }
        console.log(a)
    this.apiService.postData(this.apiService.serverPath+'PerfectWedding/searchphotos',a).map((response: Response) => response)
     .subscribe(data => {
       console.log(data)
       alert(data)
       this.ALL_categories = data
     },error => {  console.log(error)});
   }

   popup(listall_categories){
     console.log(listall_categories)
     this.pho_data = listall_categories
   }

   setPage(page: number) {
    // get pager object from service
    console.log(this.allItems.length);
    this.pager = this.pagerService.getPagerPhotos(this.allItems.length, page);

    // get current page of items
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
}
}
