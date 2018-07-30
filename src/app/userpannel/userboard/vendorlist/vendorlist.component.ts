import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendorlist',
  templateUrl: './vendorlist.component.html',
  styleUrls: ['./vendorlist.component.scss']
})
export class VendorlistComponent implements OnInit {

  constructor() { }

  ngOnInit() {  $("li").removeClass("user");
  $("#login").hide();

//   $(document).ready(function(){

//     $(".filter-button").click(function(){
//         var value = $(this).attr('data-filter');
        

//         if(value == "all")
//         {
//             //$('.filter').removeClass('hidden');
//             $('.filter').show('1000');
//         }
//         else
//         {
// //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
// //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
//             $(".filter").not('.'+value).hide('3000');
//             $('.filter').filter('.'+value).show('3000');

            
//         }





//     });
    
//     if ($(".filter-button").removeClass("active")) {
// $(this).removeClass("active");
// }
// $(this).addClass("active");

// });

 $(document).ready(function(){
$('.filterbtn').click(function(e){
//alert("hi")
    $(".filterboxtik").toggleClass( "in");
});
});
 $(document).ready(function(){
$('.closebtn').click(function(e){
//alert("hi")
$(this).parent('.yikyik').addClass("hip");
});
});



  }

}
