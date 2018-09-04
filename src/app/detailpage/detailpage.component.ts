import { Component, OnInit } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-detailpage',
  templateUrl: './detailpage.component.html',
  styleUrls: ['./detailpage.component.scss']
})
export class DetailpageComponent implements OnInit {
  private url: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Reviews/postreview'

  constructor(public http: Http,public toastr: ToastrService) { }
  
  ngOnInit() {
  //  window.location.reload;
   // $.getScript('./assets/js/jssor.slider.min.js');
   // $.getScript('./assets/js/jsorslider.js');
    $.getScript('./assets/js/prism.min.js'); 
          $.getScript('./assets/js/owljsor.js');
          $.getScript('./assets/js/curosselfun.js');

       // $(".overviewbtn").click(function(){
       // //alert("hi");
       // 		$(".overviewbtn").addClass("btnactive");
       // 		$(".aboutbtn").removeClass("btnactive");
       // 		$(".reviewbtn").removeClass("btnactive");
       // 		$(".gallerybtn").removeClass("btnactive");
       // 		$(".overviewsection").show();
       // 		$(".aboutsection").hide();
       // 		$(".reviewsection").hide();
       // 		$(".slidersection").hide();
       // });
       // $(".aboutbtn").click(function(){
       // //alert("hi");
       // 		$(".overviewbtn").removeClass("btnactive");
       // 		$(".aboutbtn").addClass("btnactive");
       // 		$(".reviewbtn").removeClass("btnactive");
       // 		$(".gallerybtn").removeClass("btnactive");
       // 		$(".aboutsection").show();
       // 		$(".overviewsection").hide();
       // 		$(".reviewsection").hide();
       // 		$(".slidersection").hide();
       // });
       // $(".reviewbtn").click(function(){
       // //alert("hi");
       // 		$(".overviewbtn").removeClass("btnactive");
       // 		$(".aboutbtn").removeClass("btnactive");
       // 		$(".gallerybtn").removeClass("btnactive");
       // 		$(".reviewbtn").addClass("btnactive");
       // 		$(".reviewsection").show();
       // 		$(".overviewsection").hide();
       // 		$(".aboutsection").hide();
       // 		$(".slidersection").hide();
       // });

       // $(".gallerybtn").click(function(){
       // //alert("hi");
       // 		$(".gallerybtn").addClass("btnactive");
       // 		$(".overviewbtn").removeClass("btnactive");
       // 		$(".aboutbtn").removeClass("btnactive");
       // 		$(".reviewbtn").removeClass("btnactive");
       // 		$(".slidersection").show();
       // 		$(".reviewsection").hide();
       // 		$(".overviewsection").hide();
       // 		$(".aboutsection").hide();
       // });

}
review =  {  rating: '',
             comments: "",
             rateVendorID: 'a96129c3-8861-43aa-8bc9-1c155f1ffd79' }
putReview(review){
 
var headers = new Headers();
var authToken = localStorage.getItem('userToken');
headers.append('Accept', 'application/json')
headers.append('Content-Type', 'application/json');
headers.append("Authorization",'Bearer '+authToken);

if(!authToken) 
{  this.toastr.error('Login To Give Your Review', 'Inconceivable!');
}

 console.log(review);
 var rating1 = review.rating;
 var comments1 = review.comments;
 var rateVendorID1 = review.rateVendorID


console.log(comments1);
console.log(rating1);
console.log(rateVendorID1);
this.http.post(this.url,{ rating: rating1, comments: comments1,rateVendorID: "74ae3dbf-a882-42b3-96cd-84a42749820e"},
  {headers:headers}).subscribe(data =>{  console.log( data.json());
                                        },error=>{console.log(error)}
                              );

console.log("dcxzs"); 
        }   
        
        
}
