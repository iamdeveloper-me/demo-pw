import { Component, OnInit ,HostListener} from '@angular/core';
import { apiService } from '../shared/service/api.service';
import { Meta , Title } from '@angular/platform-browser';
import { MasterserviceService } from '../ngservices/masterservice.service';
import { PagerService } from 'app/_services';
@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {
    colors: Array<ColorPicker>;
    item:any = [];
col: any = []
item_tags:any = []
titleSet:any = [];
        categories:any = [];

    category:any
    pho_data:any = {}
    loading = false;
    oneTime = false
    categoryId=''
    searchQuery=''
    userId;
    find_color_tag ='';
    multy_colour_search = []
    colout_tag =  false;
    showTag2= false;
    photo_search_param: photoSearchParam;
    colour_showTag = [];//array to show colour tag after select & handle colour tag and tag 
    pageNumber=0
    default_colour_tags = true
    csvColors:string;
    // paged items
    allItems: any[];
    error_1 = '';
    pager: any = {};
    pagedItems: any[];
    constructor(public pagerService : PagerService,private masterservice: MasterserviceService,private apiService: apiService,private meta:Meta, private title : Title ) {
     this.colout_tag= false;
      this.allItems = [];
      this.photo_search_param = new  photoSearchParam();
      this.createColorPanel()
      this.userId = localStorage.getItem('userId');
      this.apiService.getData(this.apiService.serverPath+'Categories/allcategories').map((response: Response) => response).subscribe(data => {
        this.categories = data
      },error => {  console.log(error)});

    
    }
    ngOnInit() {
      this.title.setTitle('Wedding Photos & Inspirations |Perfect Weddings');    
      this.meta.addTag({name:'description',content:'Wedding Photos & Inspirations |Perfect Weddings'});    
  
      // $.getScript('./assets/js/blocksit.min.js');
      // $.getScript('./assets/js/lazy.js');
      // $.getScript('./assets/js/jquery.pinbox.js');
      //   
           
      this.onpageload();
      $.getScript('../../assets/register/jquery.fancybox.min.js');
     // $.getScript('https://rawgithub.com/kayahr/jquery-fullscreen-plugin/master/jquery.fullscreen.js');
     $.getScript(''); 


     

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
    removeTag(pos){
this.titleSet.splice(pos,1)      
this.find_photo(); 
    }
    changeData(str){
      // var grade:string = str; 
       switch(str) { 
          case "title": { 
           // debugger
           
              this.titleSet.push(this.photo_search_param.searchQuery)

      
            console.log(this.titleSet)
            this.find_photo();
           break; 
          } 
          case "color-picker": { 
           this.find_photo();
             break; 
          } 
          case "category": {
           this.photo_search_param['categoryId'] = this.category
           this.find_photo();          
             break;    
          } 
        
          default: { 
             console.log("Invalid choice"); 
             break;              
          } 
       } 
     }
    bookMark(data, type , action_which_lacation){
      const id = data['id'] 
     this.masterservice.fillBookmark(id, type , action_which_lacation).subscribe(data=>{
       console.log(data)
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
    removeColor(index_pos){
      const index: number = index_pos;
      if (index !== -1) {
          this.photo_search_param['color'].splice(index, 1);
          this.colors[index]['isSelected'] = false
      }  
      this.changeData('color-picker')       
    }
    colorDeselect(){
      this.colors.forEach(el=>{
        el['isSelected'] = false
      })
      this.oneTime = false
      this.photo_search_param.color = []
      this.find_photo();
    }
    onpageload(){
      
      this.apiService.postData(this.apiService.serverPath+'PerfectWedding/searchphotos',
      this.photo_search_param
        ).subscribe(data => {
          console.log(data)
          this.loading=false;  
          for (var pagedItem of  data.items ) {
              if(pagedItem['colorTags'] == null || pagedItem['tags'] == null){
                this.allItems.push(pagedItem);
              }else{
                pagedItem['colorTags'] =  pagedItem['colorTags'].split(',');
                pagedItem['tags'] =  pagedItem['tags'].split(',');
                this.allItems.push(pagedItem);
              }
            }
            this.setPage(1)
      },error => {  console.log(error)});
    }
    colourArray(a){
      this.photo_search_param.page+=1;
        if(a.isSelected){
          a.isSelected = false;
        } else{
          a.isSelected =true;
          this.oneTime = true
        }
       
        let selectedColors = this.colors.filter(c=>c.isSelected==true);
        this.csvColors='';
        this.photo_search_param.color=[];
        for (let i = 0; i < selectedColors.length; i++) {
          this.csvColors+= selectedColors[i].colorName+',';
          this.photo_search_param.color.push(selectedColors[i].colorName);
        }
        this.changeData('color-picker')
   }
    find_photo(){

      this.loading = false;
      console.log(this.photo_search_param)
      this.photo_search_param.categoryId = this.category
      if(this.photo_search_param.color.length > 0 && this.photo_search_param.searchQuery == null){
        this.colout_tag = true;
        this.showTag2 = false;
      }
      if(this.photo_search_param.color.length == 0 && this.photo_search_param.searchQuery){
        this.colout_tag = false;
        this.showTag2 = true;
      }
      if(this.photo_search_param.color.length > 0 && this.photo_search_param.searchQuery){
        this.colout_tag = true;
        this.showTag2 = true;
      }
      this.search_api()
    }
    search_api(){
      this.pageNumber=0;
      this.photo_search_param.page=0;
    


        this.apiService.postData(this.apiService.serverPath+'PerfectWedding/searchphotos',this.photo_search_param)
        .subscribe(data => {
          console.log(data)
          this.allItems = [];
          for (var pagedItem of data.items  ) {
            if(pagedItem['colorTags'] == null || pagedItem['tags'] == null){
              this.allItems.push(pagedItem);
            }else{
              pagedItem['colorTags'] =  pagedItem['colorTags'].split(',');
              pagedItem['tags'] =  pagedItem['tags'].split(',');
              this.allItems.push(pagedItem);
            }
          }
          console.log( this.allItems)
         this.setPage(1)
        
          if( this.allItems.length == 0 ){
              this.error_1 = "NO INSPIRATIONS FOUND!"
             
          }else{
            this.error_1 = " "
          }
     //     this.photo_search_param.count +=1
        },error => {  console.log(error)});
    }
    popup(listall_categories){
      this.pho_data = listall_categories
    }
    // @HostListener("window:scroll", [])
    // scrollToBottom(){
    //   if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    //     // you're at the bottom of the page
    //     this.photo_search_param.page+=1;
    //     this.loading = true
    //     this.onpageload()
    //   }
    // }
    setPage(page: number) {
      this.pager = this.pagerService.getPagerEvent(this.allItems.length, page);
      this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }

    classAdd(item){
      this.item_tags = item['tags']
      setTimeout(() => {
        $('.fancybox-content').append('<div class="colorcoderfullveiw"></div>')
        $('.fancybox-content').append('<div class="tagfullveiw"></div>')
        $('.fancybox-toolbar').append('<button  class="fancybox-button fancybox-button--share" title="Share"><a href="whatsapp://send?text=Text to send withe message: http://13.59.229.254"><i class="material-icons">share</i></a></button><button data-fancybox-zoom="" class="fancybox-button fancybox-button--share" title="Like"><i class="material-icons">favorite_border</i></button>')
        // $('.fancybox-caption').append('<button  class="fancybox-button fancybox-button--share" title="Share"><i class="material-icons">share</i></button>')
  
    }, 50);

      if(item["colorTags"] !=null){
           if(item["colorTags"].indexOf("") == -1){
            this.col = item["colorTags"]
           }else{
            item["colorTags"].splice(item["colorTags"].indexOf(""))
            this.col = item["colorTags"]
           }
        
         this.col.forEach(element => {
           console.log(element)
         });

   
       setTimeout(() => {
         this.colors.forEach(element => {
           if(element['isSelected'] == true){
           }
         });
       }, 60);
   
       setTimeout(() => {
         this.col.forEach(element => {

           $('.colorcoderfullveiw').append('<span class="colortag"  style="background-color:'+element+'"> </span>')
         });
       }, 60);
       setTimeout(() => {
        this.item_tags.forEach(element => {

          $('.tagfullveiw').append('<span>'+element+' </span>')
        });
      }, 70);
      
      }
      
    
  }
 
}


export class ColorPicker{
   public colorName: string;
   public isSelected:boolean;
}
export class  photoSearchParam  {
  page:number;
  count:number;
  pageSize: number;
  sortDir: string;
  sortedBy: string;
  searchQuery:string;
  tagSearch: string;
  categoryId: any;
  UserId : number; 
  color: Array<any>;
  constructor(){
    this.UserId = 0;
    this.page=0;
    this.count = 0;
    this.searchQuery = '';

    this.pageSize=30;
    this.sortedBy = 'asc';
    this.color = [];
  }
  
}
