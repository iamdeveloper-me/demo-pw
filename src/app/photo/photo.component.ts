import { Component, OnInit ,HostListener} from '@angular/core';
import { apiService } from '../shared/service/api.service';
import { PagerService } from '../_services'
@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {
    colors: Array<ColorPicker>;
    categories:any = [];
    pho_data:any = {}
    loading = false;
    categoryId=''
    searchQuery=''
    userId;
    find_color_tag ='';
    multy_colour_search = []
    showTag =  false;
    showTag2= false;
    colour_showTag = [];
    pageNumber=0
    default_colour_tags = true
    csvColors:string;
    // array of all items to be paged
    private allItems:any = [];
    // pager object
    pager: any = {};
    // paged items
    pagedItems: any[];
    error_1 = '';
    constructor(private pagerService: PagerService,private apiService: apiService ) {
      this.showTag2= false
      this.createColorPanel()
      this.userId = localStorage.getItem('userId');
    
      this.apiService.getData(this.apiService.serverPath+'Categories/allcategories').map((response: Response) => response).subscribe(data => {
        this.categories = data
      },error => {  console.log(error)});

    }
    ngOnInit() {
      // $.getScript('./assets/js/blocksit.min.js');
      // $.getScript('./assets/js/lazy.js');
      //$.getScript('./assets/js/jquery.pinbox.js');
      //$.getScript('./assets/js/photo.js');    
           
      this.onpageload();
      $.getScript('https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.2/dist/jquery.fancybox.min.js');

      $(document).ready(function(){
      $('.head').on('click', function(){
          $('.colorlist').toggleClass('seelist');
          });
      $('.Search_img').on('click', function(){
          $('.colorlist').removeClass('seelist');
          });
      $('.Search_img').on('click', function(){
          $('.clearclass').removeClass('seelist');
          });



    

    })
     




    }
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
    onpageload(){

      this.pagedItems = [];
      this.apiService.postData(this.apiService.serverPath+'PerfectWedding/searchphotos',{
        page: 0,
        pageSize: 10000,
        sortDir: "",
        sortedBy: "asc",
        searchQuery: "",
        categoryId: 0
        }).subscribe(data => {
          //console.log(data.items)
          this.loading=false;  
          for (var pagedItem of  data.items ) {
              if(pagedItem['colorTags'] == null || pagedItem['tags'] == null){
                this.pagedItems.push(pagedItem);
              }else{
                pagedItem['colorTags'] =  pagedItem['colorTags'].split(',');
                pagedItem['tags'] =  pagedItem['tags'].split(',');
                this.pagedItems.push(pagedItem);
               
              }
              
              }
              
            // this.allItems = data['items'];
              console.log(this.pagedItems)
           // this.setPage(1);
      },error => {  console.log(error)});
    }
    setMyStyles(){
      let styles = {'background-color':'red'};
      return styles;
    }
    colourArray(a){
        if(a.isSelected){
          a.isSelected = false;
        } else{
          a.isSelected =true;
        }
        let selectedColors = this.colors.filter(c=>c.isSelected==true);
        this.csvColors='';
        this.multy_colour_search=[];
        for (let i = 0; i < selectedColors.length; i++) {
        this.csvColors+= selectedColors[i].colorName+',';
          this.multy_colour_search.push(selectedColors[i].colorName);
        }
        this.find_color_tag =  this.multy_colour_search.join(",")
        console.log(this.find_color_tag )
    }
    find_photo(f){
      this.loading = false;
      this.colour_showTag = [];
      for (const key of this.multy_colour_search) {
        this.colors.filter(c=>c.colorName==key)
        console.log( this.colors.filter(c=>c.colorName==key))
        if( this.colors.filter(c=>c.colorName==key).length == 0){
          this.showTag2 = true ;
          this.showTag = false;
        }else{
          this.showTag = true;
          this.showTag2 = false
          this.colour_showTag.push(key)
          console.log(this.colour_showTag )
        }
      }
      if(f.value.searchQuery && this.colour_showTag.length == 0){
        this.showTag2 = true ;
        this.showTag = false;
      }else{
        this.showTag = true;
        this.showTag2 = false;
      }
      if(f.value.categoryId == 'undefined'){
        f.value.categoryId = 0 
      }
      const a = {
        page: 0,
        pageSize: 30,
        sortDir: "",
        sortedBy: "asc",
        searchQuery:this.find_color_tag?this.find_color_tag:f.value.searchQuery ,
        categoryId: f.value.categoryId?f.value.categoryId:0,
        UserId : this.userId
      }
      console.log(a)
      this.search_api(a)
    }
    search_api(a){
     
        this.apiService.postData(this.apiService.serverPath+'PerfectWedding/searchphotos',a)
        .subscribe(data => {
          this.pagedItems = [];
          this.allItems = []
          for (var pagedItem of data.items  ) {
            if(pagedItem['colorTags'] == null || pagedItem['tags'] == null){
              this.pagedItems.push(pagedItem);
            }else{
              pagedItem['colorTags'] =  pagedItem['colorTags'].split(',');
              pagedItem['tags'] =  pagedItem['tags'].split(',');
              this.pagedItems.push(pagedItem);
            }
          }
          //this.setPage(1);
          if( this.pagedItems.length == 0 ){
              this.error_1 = "no data found"
          }else{
            this.error_1 = " "
          }
        },error => {  console.log(error)});
    }
    popup(listall_categories){
      this.pho_data = listall_categories
    }
    setPage(page: number) {
      // get pager object from service
    //  this.pager = this.pagerService.getPagerPhotos(this.allItems.length, page);
      // get current page of items
    //  this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }
    @HostListener("window:scroll", [])
    scrollToBottom(){
          if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            // you're at the bottom of the page
            this.pageNumber+=1;
            this.loading = true
             this.onpageload()
           // this.setPage(1);
          }
    }
}
export class ColorPicker{
   public colorName: string;
   public isSelected:boolean;
}
