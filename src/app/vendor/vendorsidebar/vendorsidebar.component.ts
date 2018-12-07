import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
@Component({
  selector: 'app-vendorsidebar',
  templateUrl: './vendorsidebar.component.html',
  styleUrls: ['./vendorsidebar.component.scss']
})
export class VendorsidebarComponent implements OnInit {
  private base_url : string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Reviews'
 counts;
  
public shouldShow = false;
 route:boolean = false
  constructor(public http: Http ) {
    this.readStatus();
  }
  header(){
    let header = new Headers();
    var authToken = localStorage.getItem('userToken');
    header.append('Accept', 'application/json')
    header.append('Content-Type', 'application/json');
    header.append("Authorization",'Bearer '+authToken);
    return header;
  }

  ngOnInit() { 
    if(window.location.href.indexOf('/msg/') != -1 || window.location.href.indexOf('settingalbum/business-services') != -1 || window.location.href.indexOf('/albumviewphoto/') != -1 || window.location.href.indexOf('/settingalbum/') != -1){
      this.route = true;
    }else{
      this.route = false;

    }
    $.getScript('./assets/js/jquery.slimscroll.min.js');
    $.getScript('./assets/js/vendorsidebar.js');
    

    
  }
  readStatus(){

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
          this.counts = data.json().count
    },error=>{
          console.log(error)
    });
  }

}
