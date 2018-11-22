import { Component, OnInit,ViewChild ,ChangeDetectionStrategy} from '@angular/core';
import { ViewEncapsulation, Input } from '@angular/core';
import swal from 'sweetalert2';

import { Http,Headers } from '@angular/http';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { ToastrService } from 'ngx-toastr';
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';


@Component({
  selector: 'app-portfolioview',
  templateUrl: './portfolioview.component.html',
  //changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./portfolioview.component.scss'],
  
})
export class PortfolioviewComponent implements OnInit {
    fileToUpload:any;
    PortgetArray:any= [];
    PortpostArray:any= {};
    Set_as_background:any = [];
    uploadphoto_dailog = false;
    selected_Background;
    portfolioId;
    // Portpost1Array:any= {};
    private uploadimage: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/FilesUploader/FileUploader'
    private addportfolio: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/addportfolio'
    private mygeturl: string  = "http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/myportfolio"
    private Setasbackground: string = "http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/setasstorefrontimage"
    private Get_backgroundImage: string = "http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/storefrontimage"
    storefrontimage;
    closeResult: string;
    gallery = { files: ''};
    list:any = {
        "filesId": 1
    }
    ngOnInit() {

        $.getScript('https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.2/dist/jquery.fancybox.min.js');
                    $.getScript('./assets/js/vendorsidebar.js');
                    let headers = new Headers();
                    var authToken = localStorage.getItem('userToken');
                    headers.append('Accept', 'application/json')
                    headers.append('Content-Type', 'application/json');
                    headers.append("Authorization",'Bearer '+authToken);
                    this.http.get(this.mygeturl,{headers:headers}).subscribe(data =>{
                    this.PortgetArray = data.json() as string[];
                    //console.log(data.json());
                    })
                    this.http.get(this.Get_backgroundImage,{headers:headers}).subscribe(data =>{
                        console.log(data.json());
                        if(data.json().setAsBackgroud == true){
                            this.selected_Background = data.json().setAsBackgroud;
                           this.portfolioId = data.json().portfolioId;

                        }
                    },error=>{ console.log(error)
                           })

               }
 

    @ViewChild("fileInput") fileInput;
    constructor( public http: Http ,public toastr: ToastrService) { }
    uploader: FileUploader = new FileUploader({
        url: URL,
        isHTML5: true
    });
    hasBaseDropZoneOver = false;
    hasAnotherDropZoneOver = false;
  // Angular2 File Upload

    fileOverBase(e: any): void {
        this.hasBaseDropZoneOver = e;
    }
    fileOverAnother(e: any): void {
        this.hasAnotherDropZoneOver = e;
    }
    uploadAll(){
        this.uploadphoto_dailog = false;
        const formData = new FormData();
        for(let file of this.uploader.queue){
             formData.append(file['some'].name,file['some'])
        }        
    
        let headers = new  Headers();
        var authToken = localStorage.getItem('userToken');
        headers.append("Authorization",'Bearer '+authToken);

        this.http.post(this.uploadimage,formData,{headers:headers})
        .subscribe(data =>{ 
            //console.log(data.json().filesId);
            const data2 = {
                portfolioId: 0,
                filesId: data.json().filesId,
                tags: "",
                colorTags: "",
                setAsBackgroud: false
            }

            //console.log(data2);
           
            this.http.post(this.addportfolio,data2,{headers:headers})
        .subscribe(data =>{ 
                            //console.log(data.json());
                            this.uploader.queue = [];
                            this.http.get(this.mygeturl,{headers:headers})
                            .subscribe(data =>{   
                            //console.log(data.json()); 
                            this.PortgetArray =data.json() });
                        
                        },(error)=>{  //console.log(error)
                                });
        
        },(error)=>{   //console.log(error)
                  });
    }
    closeModel(){this.uploadphoto_dailog = false;
    }
    setbackground(setId){
        let headers = new Headers();
        console.log(setId)

        var authToken = localStorage.getItem('userToken');
        headers.append('Accept', 'application/json')
        headers.append('Content-Type', 'application/json');
        headers.append("Authorization",'Bearer '+authToken);

    
       this.http.get('http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/setasstorefrontimage?PortfolioId'+ '=' + setId,{headers:headers}).subscribe(data =>{
            this.Set_as_background = data.json() as string[];
            console.log( this.Set_as_background );
            this.toastr.success(data.json().message);
            this.http.get(this.Get_backgroundImage,{headers:headers}).subscribe(data =>{
                console.log(data.json());
                if(data.json().setAsBackgroud == true){
                    this.selected_Background = data.json().setAsBackgroud;
                   this.portfolioId = data.json().portfolioId;

                }
            },error=>{ console.log(error)
                   })
        },error=>{// console.log(error)
                })
    //console.log(setId)
    }

    delete_portfolio(e,index){

swal({
    title: "Are you sure?",
  text: "You will not be able to recover this imaginary file!",
  type: "warning",
  showCancelButton: true,
  confirmButtonClass: "btn-default",
  confirmButtonText: "Yes, delete it!",
  cancelButtonText: "No, cancel plx!",
  }).then((res)=>{
    console.log(res);
    if(res.value===true){
     // alert('delete Process !');
    //  let con = confirm('Are you sure you want to delete this?')
    //  if (con) {
             
         //console.log(e);
         var id = e.portfolioId;
         //console.log(id);
         this.PortgetArray.splice(index, 1);
         let headers = new Headers();
         var authToken = localStorage.getItem('userToken');
         headers.append('Accept', 'application/json')
         headers.append('Content-Type', 'application/json');
         headers.append("Authorization", 'Bearer ' + authToken);
        // console.log('http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com//api/Supplier/removeportfolio?portfolioId'+ '=' + id);
         this.http.post('http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com//api/Supplier/removeportfolio',{portfolioId: id}, { headers: headers }).subscribe(data => {
     
        // console.log(data.json());
         this.toastr.success(data.json().message);
         }, error => { 
             //console.log(error) 
         });
    //  }
    }else{
     // alert('Cancel Process !');

    }
   },error=>{
     alert(JSON.stringify(error));
  })
    return;
    
  }

}


