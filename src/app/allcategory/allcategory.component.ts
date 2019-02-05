import { Component, OnInit } from '@angular/core';
import { apiService } from '../shared/service/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-allcategory',
  templateUrl: './allcategory.component.html',
  styleUrls: ['./allcategory.component.scss']
})
export class AllcategoryComponent implements OnInit {
	Popular_Wedding_array = [];

	objFilterParam: filterParam;
  constructor( private router: Router ,private apiService: apiService) { 
		this.objFilterParam = new filterParam();
	}
  ngOnInit() {
		this.Popular_Wedding()
		$.getScript('./assets/register/js/jquery-2.2.4.min.js');
		$.getScript('./assets/js/stopExecutionOnTimeout.js');
		$(window).scroll( function(){
			var bottom_of_window = $(window).scrollTop() + $(window).height();
			//fade-in
			$('.fade-ani').each(function(){
				var bottom_of_object = $(this).position().top + $(this).outerHeight();
				if( bottom_of_window > bottom_of_object ){
					$(this).addClass('showing');
				}
				else{
					$(this).removeClass('showing');
				}
			});
		})
	}
  Popular_Wedding(){
    this.apiService.getData(this.apiService.serverPath+'/Categories/categorieswithlistingcount').subscribe(data => {
      this.Popular_Wedding_array = data;
      // console.log(this.Popular_Wedding_array);   
    },
      error => {
       console.log(error)
      }
    )
  }
  Categories_each(c,isAllSupplier,isDreamLocation){
	
    if(c){
	 this.objFilterParam.catId  = c.categoryId;
   this.objFilterParam.categoryName= c?c.categoryName:'';
   this.objFilterParam.isDreamLocation=isDreamLocation;
   this.objFilterParam.isAllSupplier=isAllSupplier;
   this.objFilterParam.page = 0;
   this.objFilterParam.pageSize = 25;
   this.objFilterParam.sortDir = "";
   this.objFilterParam.sortedBy ="";
   this.objFilterParam.searchQuery ="";

  }

   sessionStorage.setItem('filterParam',JSON.stringify(this.objFilterParam));
    this.router.navigate(['home/weddingvendors',this.objFilterParam.categoryName.replace(/\s/g,'')]);
  }
}

export class filterParam{
  catId:number=0;
  categoryName:string='';
  isAllSupplier:boolean=false;
  isDreamLocation:boolean=false;
  page:number=0;
  pageSize: number=3;
  sortDir: "";
  sortedBy: "";
  searchQuery: "";
  locationId:number;
  totalCount:number;
}
