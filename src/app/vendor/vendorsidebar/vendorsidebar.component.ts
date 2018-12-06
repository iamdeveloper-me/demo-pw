import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
@Component({
  selector: 'app-vendorsidebar',
  templateUrl: './vendorsidebar.component.html',
  styleUrls: ['./vendorsidebar.component.scss']
})
export class VendorsidebarComponent implements OnInit {
  private base_url : string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Reviews'
 countss;

public shouldShow = false;
 route:boolean = false
  constructor(public http: Http ) { }
  header(){
    let header = new Headers();
    var authToken = localStorage.getItem('userToken');
    header.append('Accept', 'application/json')
    header.append('Content-Type', 'application/json');
    header.append("Authorization",'Bearer '+authToken);
    return header;
  }

  ngOnInit() { 
    // $('.sidebar-brand').on('click', function(){
   
    //      $('this').addClass('colour');
    //   });
    if(window.location.href.indexOf('/payment-selection/') != -1 || window.location.href.indexOf('/msg/') != -1 || window.location.href.indexOf('settingalbum/business-services') != -1 || window.location.href.indexOf('/albumviewphoto/') != -1 || window.location.href.indexOf('/settingalbum/') != -1){
      this.route = true;
    }else{
      this.route = false;

    }
    $.getScript('./assets/js/jquery.slimscroll.min.js');
    $.getScript('./assets/js/vendorsidebar.js');
    
 $(".blackoverlaymain").click(function(){
       //alert("hi");
    });

    

    var data = {
      "page": 0, 
      "pageSize": 10,
      "sortDir": 'asc',
      "sortedBy": '',
      "searchQuery": '',
      "status": 8
    }
  
  this.http.post(this.base_url + "/myreviews", data, { headers: this.header() }).subscribe(
      data =>{
      
      //   console.log(data.json().items);  

      //   for (let entry of data.json().items) {
         
      //     console.log( entry.reviewStatusString);
      //     console.log(entry); // 1, "string", false
      // }
      
        this.countss = data.json().count
  },error=>{
        console.log(error)
  });

    }
tog(){
   $('this').addClass('colour');
}
}
