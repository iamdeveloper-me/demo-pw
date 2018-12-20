import { Component, OnInit } from '@angular/core';
import { apiService } from '../shared/service/api.service';
@Component({
  selector: 'app-allcategory',
  templateUrl: './allcategory.component.html',
  styleUrls: ['./allcategory.component.scss']
})
export class AllcategoryComponent implements OnInit {
	Popular_Wedding_array = []
  constructor(private apiService: apiService) { }

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
    this.apiService.getData(this.apiService.serverPath+'Categories/allcategories').subscribe(data => {
			console.log(data)
			
		//	this.Popular_Wedding_array = data
      for (let i of data) {
        if(i.isPopular == true){
          this.Popular_Wedding_array.push(i);
        }
        console.log( this.Popular_Wedding_array)
      }
      
    
    },
      error => {
       console.log(error)
      }
    )
  }

}

