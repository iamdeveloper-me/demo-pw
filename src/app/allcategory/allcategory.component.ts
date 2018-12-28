import { Component, OnInit } from '@angular/core';
import { apiService } from '../shared/service/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-allcategory',
  templateUrl: './allcategory.component.html',
  styleUrls: ['./allcategory.component.scss']
})
export class AllcategoryComponent implements OnInit {
	Popular_Wedding_array = []
  constructor( private router: Router ,private apiService: apiService) { }

  ngOnInit() {
		this.Popular_Wedding()
 	$.getScript('./assets/register/js/jquery-2.2.4.min.js');
 	$.getScript('./assets/js/stopExecutionOnTimeout.js');
	// Parallaxing + add class active on scroll
	// $(document).scroll(function () {
	//   // parallaxing
	//   var $movebg = $(window).scrollTop() ;
	//   $('.zoom_in').css('background-positionY', ($movebg) + '-1 px');
	// });
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
			console.log(data)
			this.Popular_Wedding_array = data   
    },
      error => {
       console.log(error)
      }
    )
  }
	Categories_each(c){
  
    let catId= c.categoryId;
    let CatName= c.categoryName;
    console.log(c)
    this.router.navigate(['home/searchresult',catId+'/'+CatName]);
  }
}

