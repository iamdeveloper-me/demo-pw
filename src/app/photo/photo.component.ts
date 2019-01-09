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
  colors: Array<ColorPicker>;
  constructor(private pagerService: PagerService,private apiService: apiService ) { }
   categories:any = [];
   pho_data:any = {}
   category
   categoryId=''
   searchQuery=''
   userId;
   find_color_tag ='';
   multy_colour_search = []
   tag_colour = false
   showTag =  false;
   showTag2= false;
   csvColors:string;
    // array of all items to be paged
    private allItems:any = [];
    // pager object
    pager: any = {};
    // paged items
    pagedItems: any[];
    default_colour_tags = true
    error_1 = '';
    createColorPanel(){
      this.colors= Array<ColorPicker>();
      this.colors.push({colorName:'pink', isSelected:false});
      this.colors.push({colorName:'red', isSelected:false});
      this.colors.push({colorName:'orange', isSelected:false});
      this.colors.push({colorName:'yellow', isSelected:false});
      this.colors.push({colorName:'green', isSelected:false});
      this.colors.push({colorName:'Blue', isSelected:false});
      this.colors.push({colorName:'purple', isSelected:false});
      this.colors.push({colorName:'brown', isSelected:false});
      this.colors.push({colorName:'black', isSelected:false});
      this.colors.push({colorName:'grey', isSelected:false});
     }
   ngOnInit() {
  // $.getScript('./assets/js/blocksit.min.js');
  // $.getScript('./assets/js/lazy.js');
   //$.getScript('./assets/js/jquery.pinbox.js');
   //$.getScript('./assets/js/photo.js');
   this.showTag2= false
   this.createColorPanel()
   this.userId = localStorage.getItem('userId');
   console.log(this.userId)
   console.log( this.colors)
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
  colourArray(a)
  {
    console.log(a)
    
    this.multy_colour_search.push(a)
    this.multy_colour_search = this.multy_colour_search.filter((el, i, a) => i === a.indexOf(el))
    
    console.log(  this.multy_colour_search)
    this.find_color_tag =  this.multy_colour_search.join(",")
    console.log(this.find_color_tag )
    // if(c.isSelected){
    //   c.isSelected = false;
    // } else{
    //   c.isSelected =true;
    // }
    // let selectedColors = this.colors.filter(c=>c.isSelected==true);
    //  this.csvColors='';
    // // this.colour_picker1=[];
    // for (let i = 0; i < selectedColors.length; i++) {
    //  this.csvColors+= selectedColors[i].colorName+',';
    //   this.multy_colour_search .push(selectedColors[i].colorName);
    // }
    // console.log(  this.multy_colour_search)
    // this.find_color_tag =  this.multy_colour_search.join(",")
    //  console.log(this.find_color_tag )
  }
   find_photo(f){
          console.log( this.colors.filter(c=>c.colorName==f.value.searchQuery));
          if( this.colors.filter(c=>c.colorName==f.value.searchQuery).length == 0){
            this.showTag2 = true ;
            this.showTag = false;
          }else{
            this.showTag = true;
            this.showTag2 = false;
          }
          // this.find_color_tag= f.value.searchQuery
           console.log(f.value.categoryId)
           if(f.value.categoryId == 'undefined'){
             f.value.categoryId = 0 
           }
           if(this.find_color_tag == ""){
            this.default_colour_tags = true
           }else{
            this.default_colour_tags = false
           }
            const a = {
              page: 0,
              pageSize: 30,
              sortDir: "",
              sortedBy: "asc",
              searchQuery:this.find_color_tag?this.find_color_tag:f.value.searchQuery ,
              categoryId: f.value.categoryId,
              UserId : this.userId
          }
          console.log(a)
          this.search_api(a)
   }
   search_api(a){
      this.apiService.postData(this.apiService.serverPath+'PerfectWedding/searchphotos',a)
      .subscribe(data => {
        console.log(data.items)
        this.pagedItems = [];
        this.allItems = []
        for (var pagedItem of   data.items  ) {
            if(pagedItem['colorTags'] == null || pagedItem['tags'] == null){
              this.allItems.push(pagedItem);
            }else{
              pagedItem['colorTags'] =  pagedItem['colorTags'].split(',');
              pagedItem['tags'] =  pagedItem['tags'].split(',');
              this.allItems.push(pagedItem);
            }
        }
        this.setPage(1);
        console.log(this.pagedItems)
        if( this.pagedItems.length == 0 ){
            this.error_1 = "no data found"
        }else{
          this.error_1 = " "
        }
      },error => {  console.log(error)});
   }
   popup(listall_categories){
     console.log(listall_categories)
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
export class ColorPicker{
  public colorName: string;
   public isSelected:boolean;
}
