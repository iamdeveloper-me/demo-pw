import { Component, OnInit } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { apiPath } from '../../shareApi/apiPath';

@Component({
  selector: 'app-business-services',
  templateUrl: './business-services.component.html',
  styleUrls: ['./business-services.component.scss'],

})
export class BusinessServicesComponent implements OnInit {
  private api = apiPath.url; 
  selected_category;
  categoryserveice;
  service_provide_dailog = false;
  service_provide_dailog_2 = false;
  service_provide_dailog_3 = false;
  service_provide_dailog_4 = false;

  constructor(public http: Http){ }  
  ngOnInit() {  
            
              $.getScript('./assets/js/vendorsidebar.js');
              let headers = new Headers();
              var authToken = localStorage.getItem('userToken');
              var categoryid = localStorage.getItem('categoryid');
              headers.append('Accept', 'application/json')
              headers.append('Content-Type', 'application/json');
              headers.append("Authorization",'Bearer '+authToken);
              //jo data post kar rhe h 
              this.http.get(this.api+'api/Supplier/businessservices',{headers:headers}).subscribe(data =>{
                console.log(data.json());
                this.selected_category =  data.json();
                  });
              // 20 data
              this.http.get(this.api+'api/Categories/categorieswithservices',{headers:headers}).subscribe(data =>{
                this.categoryserveice = data.json() as string[];
                console.log( this.categoryserveice );

            
              },error => {console.log(error)});
      }
}


