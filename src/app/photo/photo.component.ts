import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { apiService } from '../shared/service/api.service';
@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {
  constructor(private apiService: apiService ) { }
   categories:any = [];
   ALL_categories:any = [];
   pho_data:any = {}
   ngOnInit() {
   $.getScript('./assets/js/blocksit.min.js');
   $.getScript('./assets/js/lazy.js');
   $.getScript('./assets/js/jquery.pinbox.js');
   $.getScript('./assets/js/photo.js');

   this.apiService.postData(this.apiService.serverPath+'PerfectWedding/searchphotos',{
    page: 0,
    pageSize: 25,
    sortDir: "",
    sortedBy: "",
    searchQuery: "",
    categoryId: 0
    }).map((response: Response) => response)
   .subscribe(data => {
     console.log(data)
     this.ALL_categories = data
   },error => {  console.log(error)});
   

   this.apiService.getData(this.apiService.serverPath+'Categories/allcategories').map((response: Response) => response)
   .subscribe(data => {
     console.log(data)
     this.categories = data
   },error => {  console.log(error)});
   
   }
   find_photo(f){
    console.log(f.value)

    this.apiService.postData(this.apiService.serverPath+'PerfectWedding/searchphotos',{
      page: 0,
      pageSize: 0,
      sortDir: "asc",
      sortedBy: "",
      searchQuery: f.value.searchQuery,
      categoryId: f.value.categoryId
      }).map((response: Response) => response)
     .subscribe(data => {
       console.log(data)
       this.ALL_categories = data
     },error => {  console.log(error)});
   }

   popup(listall_categories){
     console.log(listall_categories)
     this.pho_data = listall_categories
   }
}
