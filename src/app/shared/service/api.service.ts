import { Injectable, } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable ,  Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthGuardService } from 'app/services/auth-guard.service';
import { headersToString } from 'selenium-webdriver/http';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class apiService {
  constructor(public actRoute: ActivatedRoute ,public router : Router,private auth : AuthGuardService,private http: HttpClient,
    public toaster: ToastrService
    ) { }
  serverPath = "http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/"
  getData(url) : Observable<any> {
    var authToken = sessionStorage.getItem('userToken');

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept' : 'application/json',
        'Authorization': 'Bearer '+authToken
      })
    };

    return this.http.get(url,httpOptions);
  }


  postData(url, reqObj) : Observable<any> {
    var authToken = sessionStorage.getItem('userToken');

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept' : 'application/json',
        'Authorization': 'Bearer '+authToken
      })
    };

    return this.http.post(url,reqObj,httpOptions);
  }

  postImageData(url, reqObj) : Observable<any> {
    var authToken = sessionStorage.getItem('userToken');
    let httpOptions = {
      headers: new HttpHeaders({
        // 'Content-Type':  'multipart/form-data',
        
        'Authorization': 'Bearer '+authToken
      })
    };

    return this.http.post(url,reqObj,httpOptions);
  }




  // Calender Date 12-12-2019 to {year:2019,month:12,day:12}

  returnJsonDate(dashed_date){
   const date =  { "year": parseInt(dashed_date.split('-')[0]),"month": parseInt(dashed_date.split('-')[1]),"day": parseInt( dashed_date.split('-')[2])}
    return date;
  }

  dateTFormatToJson(t_formated_date){
   const date = {"year": parseInt(t_formated_date.split('-')[0]),"month": parseInt(t_formated_date.split('-')[1]),"day": parseInt( t_formated_date.split('-')[2])}  
   return date;
}
  dateJsonTodashed(format){
  const date = format['year'] +'-'+ format['month'] +'-'+ format['day'] ;
  return date;
  }



  public bookMark(data, type , action_which_lacation,page){
    switch(page) { 
      case "albums": { 
        var id = data['id'] 
        break; 
      } 
      case "honeymoonpage": { 
        var id = data['vendorId'] 
         break; 
      }
      case "searchresult": { 
        var id = data['vendorId'] 
         break; 
      } 
      case "eventPage": { 
        var id = data['eventId'] 
        break; 
      } 
      case "promoted_list": { 
        var id = data['vendorId'] 
         break; 
      }
      default: { 
         //statements; 
         break; 
      } 
   }
   if(this.auth.userActive()){
    this.fillBookmark(id, type , action_which_lacation).subscribe(data=>{
      console.log(data)
      this.toaster.success(data.message);
    })
   }else{
    this.router.navigateByUrl('/home?returnURl='+this.router.url);   } 
   
  }

  fillBookmark(id, type, action_which_lacation){
    const data = {
      "id": id,
      "type": type,
   //   "action": action_which_lacation,
    //  "promoted": true
    }
    return this.postData(this.serverPath + 'couple/markasbookmark',data);     

   }

   public fillLikeUser(data, type , action_which_lacation,page){
    switch(page) { 
      case "albums": { 
        var id = data['id'] 
        break; 
      } 
      case "honeymoonpage": { 
        var id = data['vendorId'] 
         break; 
      }
      case "searchresult": { 
        var id = data['vendorId'] 
         break; 
      } 
      case "eventPage": { 
        var id = data['eventId'] 
        break; 
      } 
      case "promoted_list": { 
        var id = data['vendorId'] 
         break; 
      }
       

      default: { 
         //statements; 
         break; 
      } 
   }
 this.fillLike(id, type , action_which_lacation).subscribe(data=>{
      console.log(data)
    }) 
   
  }
   fillLike(id, type, action_which_lacation){
    const data = {
      "id": id,
      "type": type,
      "action": action_which_lacation,
      "promoted": true
    }
    return this.postData(this.serverPath + 'PerfectWedding/loguseraction',data);     

   }
   deleteAction(url,data): Observable<any>{
    var authToken = sessionStorage.getItem('userToken');
    let httpOptions = {
      headers: new HttpHeaders({
        // 'Content-Type':  'multipart/form-data',
        
        'Authorization': 'Bearer '+authToken
      })
    };
 
    return this.http.delete(this.serverPath+ url,data);
   }
   deleteAction2(url,data){
    var authToken = sessionStorage.getItem('userToken');
    let options = {
      
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+authToken
      }),
      body: {
        id: data
      },
    };
    console.log(options);
   return this.http.delete(this.serverPath+ url,options)}
   
}