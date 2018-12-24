

import { Component, OnInit } from '@angular/core';
import { apiService } from '../shared/service/api.service';

import { Http,Headers } from '@angular/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.scss']
})
export class TipsComponent  {

  private searchblog : string = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/PerfectWedding/searchblogs';
    searchData : any = {
      page: 0,
      pageSize: 0,
      sortDir: "",
      sortedBy: "",
      searchQuery: "",
      blogTopicId: 0,
    }

  private topicurl : string = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/PerfectWedding/blogtopics';
  tipsData  : any = 
    [
      {
        blogTopicId: 0,
        topic: "",
      }
    ];

    tipsArray:string[];
    tipsArray1:string[];
   page = 4;
   page1 = 4;
   page2 = 4;
   page3 = 4;
   page4 = 4;
   page5 = 4;
   currentPage = 2;
   currentPage1 = 2;
   currentPage2 = 2;
   isDisabled = true;
   
   ngOnInit() { 
     this.search_tips();
    
    let headers = new Headers();
    var authToken = localStorage.getItem('userToken');
    headers.append('Accept', 'application/json')
    headers.append('Content-Type', 'application/json');
    headers.append("Authorization",'Bearer '+authToken);

    this.http.get(this.topicurl,{headers:headers}).subscribe(
      data =>{ this.topicurl = data.json();
        this.tipsArray = data.json(); 
               console.log(data.json());
      });error =>{
        console.log(error);
      };

  }
  constructor(private apiService: apiService,public http: Http ,public toastr: ToastrService) { }
  search_tips(){
    this.apiService.postData(this.apiService.serverPath+'PerfectWedding/searchblogs',{
     
      page: 1,
      pageSize: 1,
      sortDir: "string",
      sortedBy: "asc",
      searchQuery: "string",
      blogTopicId: 0

    }).subscribe(data => {
      console.log(data)
      //this.max = [];
    },
      error => {
       console.log(error)
      }
    )
  }



  // onSubmit(f){
  //  console.log(f);
  //   // this.topicurl = this.tipsData;
  //   let headers = new Headers();
  //    var authToken = localStorage.getItem('userToken');
  //   headers.append('Accept', 'application/json')
  //   headers.append('Content-Type', 'application/json');
  //   headers.append("Authorization",'Bearer '+authToken);

  //   this.http.get(this.topicurl,{headers:headers}).subscribe(
  //     data =>{ this.topicurl = data.json();
  //       this.tipsArray = data.json(); 
  //              console.log(data.json());
  //     });error =>{
  //       console.log(error);
  //     };
      
  // }

//  onSearch(f){
//    console.log(f);
//    console.log(this.searchData);
//     let headers = new Headers();
//      var authToken = localStorage.getItem('userToken');
//     headers.append('Accept', 'application/json')
//     headers.append('Content-Type', 'application/json');
//     headers.append("Authorization",'Bearer '+authToken);

//     const sub =  
//     [
//       {
//         blogId: 0,
//         title: "",
//         description: "",
//         author: "",
//         dateAddedOn: "2018-12-24T13:53:59.629Z",
//         tags: "",
//         imagePath: "",
//         status: 0,
//         blogTopicId: 0,
//         blogTopic: {
//           blogTopicId: 0,
//           topic: ""
//         }
//       }
//     ]

//     this.http.post(this.searchblog,sub,{headers:headers}).subscribe(
//       data =>{ this.searchblog = data.json();
//         this.tipsArray1 = data.json(); 
//                console.log(data.json());
//       });error =>{
//         console.log(error);
//       };    
//   }


}

