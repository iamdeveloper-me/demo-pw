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
   pho_data:any = {}
   categoryId=''
   searchQuery=''
   userId;
   find_color_tag ='pink';
   
   tag_colour = false
   showTag =  false;
   showTag2= false;
    // array of all items to be paged
    private allItems:any = [];
    // pager object
    pager: any = {};
    // paged items
    pagedItems: any[];
    error_1 = '';
   ngOnInit() {
  // $.getScript('./assets/js/blocksit.min.js');
  // $.getScript('./assets/js/lazy.js');
   //$.getScript('./assets/js/jquery.pinbox.js');
   //$.getScript('./assets/js/photo.js');
   this.userId = localStorage.getItem('userId');
   console.log(this.userId)
   this.apiService.postData(this.apiService.serverPath+'PerfectWedding/searchphotos',{
    page: 0,
    pageSize: 10000,
    sortDir: "",
    sortedBy: "asc",
    searchQuery: "",
    categoryId: 0
    }).subscribe(data => {
      //console.log(data.items)
        for (var pagedItem of  data.items ) {
           if(pagedItem['colorTags'] == null || pagedItem['tags'] == null){
            this.allItems.push(pagedItem);
           }else{
            pagedItem['colorTags'] =  pagedItem['colorTags'].split(',');
            pagedItem['tags'] =  pagedItem['tags'].split(',');
            this.allItems.push(pagedItem);
            
           }
           
          }
         // this.allItems = data['items'];
           console.log(this.allItems)
        this.setPage(1);
   },error => {  console.log(error)});
   

   this.apiService.getData(this.apiService.serverPath+'Categories/allcategories').map((response: Response) => response)
   .subscribe(data => {
     //console.log(data)
     this.categories = data
   },error => {  console.log(error)});
   
   }
   setMyStyles() {
    let styles = {'background-color':'red'};
    return styles;
  }
   find_photo(f){
this.find_color_tag= f.value.searchQuery
            if(f.value.categoryId == '0'){
                    const a = {
                      page: 0,
                      pageSize: 30,
                      sortDir: "",
                      sortedBy: "asc",
                      searchQuery: f.value.searchQuery,
                      categoryId: f.value.categoryId,
                      UserId : this.userId
                    }
                    this.search_api(a) 
            }else{   
                    const a = {
                        page: 0,
                        pageSize: 30,
                        sortDir: "",
                        sortedBy: "asc",
                        searchQuery: f.value.searchQuery,
                        categoryId: f.value.categoryId,
                        UserId : this.userId
                    }
                    console.log(a)
                    this.search_api(a)
            }
            
       
   }
   search_api(a){
     
    this.apiService.postData(this.apiService.serverPath+'PerfectWedding/searchphotos',a)
     .subscribe(data => {
       console.log(data.items)
       this.pagedItems = [];
       for (var pagedItem of   data.items  ) {
      //  pagedItem['colorTags'] =  pagedItem['colorTags'].split(',');
      //  this.showTag = true;
      //  this.showTag2 = true ;
      //  this.pagedItems.push(pagedItem);
       //this.tag_colour = true

       if(pagedItem['colorTags'] == null || pagedItem['tags'] == null){
        this.pagedItems.push(pagedItem);
       }else{
        pagedItem['colorTags'] =  pagedItem['colorTags'].split(',');
        pagedItem['tags'] =  pagedItem['tags'].split(',');
        this.showTag = true;
        this.showTag2 = true ;
        this.pagedItems.push(pagedItem);
        
       }
       }
        console.log(this.pagedItems)
       if( this.pagedItems.length == 0 ){
           this.error_1 = "no data found"
       }else{
        this.error_1 = " "
       }
     },error => {  console.log(error)});
   }
   popup(listall_categories){
     //console.log(listall_categories)
     this.pho_data = listall_categories
   }

   setPage(page: number) {
    // get pager object from service
    //console.log(this.allItems.length);
    this.pager = this.pagerService.getPagerPhotos(this.allItems.length, page);

    // get current page of items
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
   }
}
