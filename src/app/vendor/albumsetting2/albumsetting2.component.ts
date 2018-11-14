import { Component, OnInit } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-albumsetting2',
  templateUrl: './albumsetting2.component.html',
  styleUrls: ['./albumsetting2.component.scss']
})
export class Albumsetting2Component implements OnInit {

  PortgetArray:any= {};
  formdata:any={};
description_dailog = false;
private mygeturl: string  = "http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/myportfolio"
private update_portfolio: string  = "http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com//api/Albums/updateimagesettings"
   

  constructor( public http: Http,public toastr: ToastrService ) { }

  ngOnInit() {
    let headers = new Headers();
    var authToken = localStorage.getItem('userToken');
    headers.append('Accept', 'application/json')
    headers.append('Content-Type', 'application/json');
    headers.append("Authorization",'Bearer '+authToken);
  
        this.http.get(this.mygeturl,{headers:headers}).subscribe(data =>{
        this.PortgetArray = data.json() as string[];
        console.log(data.json());
    })
  }
  openModel(e)
  {
    this.formdata = e;
  }
 editSettting(e){
               
                console.log(e);
               
                let headers = new Headers();
                var authToken = localStorage.getItem('userToken');
                headers.append('Accept', 'application/json')
                headers.append('Content-Type', 'application/json');
                headers.append("Authorization",'Bearer '+authToken);
              
                    this.http.post(this.update_portfolio,{
                      portfolioId: 61,
                      filesId: 396,
                      tags: "string",
                      colorTags: "string",
                      setAsBackgroud: true
                    },{headers:headers}).subscribe(data =>{
                   
                    console.log(data.json());
                })
                this.description_dailog = false;
          }

closeModel(){   
  this.description_dailog = false;
}
delete_portfolio(e,index){

  let con = confirm('Are you sure you want to delete this?')
  if (con) {
          
      console.log(e);
      var id = e.portfolioId;
      console.log(id);
      this.PortgetArray.splice(index, 1);
      let headers = new Headers();
      var authToken = localStorage.getItem('userToken');
      headers.append('Accept', 'application/json')
      headers.append('Content-Type', 'application/json');
      headers.append("Authorization", 'Bearer ' + authToken);
      console.log('http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com//api/Supplier/removeportfolio?portfolioId'+ '=' + id);
      this.http.post('http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com//api/Supplier/removeportfolio',{portfolioId: id}, { headers: headers }).subscribe(data => {
  
        console.log(data.json());
        this.toastr.success(data.json().message);
      }, error => { console.log(error) });

  }


}

}
