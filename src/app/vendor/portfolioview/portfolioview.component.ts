import { Component, OnInit,ViewChild ,ChangeDetectionStrategy, ElementRef} from '@angular/core';
import { ViewEncapsulation, Input } from '@angular/core';
import swal from 'sweetalert2';
import { ProgressHttp } from 'angular-progress-http';

 
import { Router } from '@angular/router';
import { Http,Headers } from '@angular/http';
import { FileUploader, FileItem } from 'ng2-file-upload/ng2-file-upload';
import { ToastrService } from 'ngx-toastr';
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';


@Component({
  selector: 'app-portfolioview',
  templateUrl: './portfolioview.component.html',
  //changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./portfolioview.component.scss'],
  
})
export class PortfolioviewComponent implements OnInit {
    @ViewChild('previewimg') previewimg: ElementRef;
    fileToUpload:any;
    PortgetArray:any= [];
    PortpostArray:any= {};
    Set_as_background:any = [];
    uploadphoto_dailog = false;
    //lodar =false;
    selected_Background;
    portfolioId;
    basicplane;
    progress_bar:boolean = false
    progressPercentage:number = 0
    free_limit;
    urlll = ''
    fileNames=[];
    previewImages = [];
    // Portpost1Array:any= {};
    private url: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/';
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
    constructor(private _http: ProgressHttp,public http: Http ,public toastr: ToastrService,   private router: Router ) { }
    ngOnInit() {

                    $.getScript('https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.2/dist/jquery.fancybox.min.js');
                    $.getScript('./assets/js/vendorsidebar.js');
                    this.basicplane = parseInt(localStorage.getItem('basic-plan')) 
                    let headers = new Headers();
                    var authToken = localStorage.getItem('userToken');
                    headers.append('Accept', 'application/json')
                    headers.append('Content-Type', 'application/json');
                    headers.append("Authorization",'Bearer '+authToken);
                    this.http.get(this.mygeturl,{headers:headers}).subscribe(data =>{
                    this.PortgetArray = data.json() ;
                   // var basicplan = localStorage.getItem('basic-plan');
          
                    //console.log(data.json());
                    })

                 
                    $(function() {
                      var current_progress = 0;
                      var interval = setInterval(function() {
                          current_progress += 10;
                          $("#dynamic")
                          .css("width", current_progress + "%")
                          .attr("aria-valuenow", current_progress)
                          .text(current_progress + "% Complete");
                          if (current_progress >= 100)
                              clearInterval(interval);
                      }, 1000);
                    });
                   
                    this.http.get(this.Get_backgroundImage,{headers:headers}).subscribe(data =>{
                        console.log(data.json());
                        if(data.json().setAsBackgroud == true){
                            this.selected_Background = data.json().setAsBackgroud;
                           this.portfolioId = data.json().portfolioId;

                        }
                    },error=>{ console.log(error)})

                          
               }
 

    @ViewChild("fileInput") fileInput;
  
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
    popup(){

     
        this.free_limit =this.PortgetArray.length


        if( parseInt(this.basicplane) == 1 && this.PortgetArray.length == 5 ){ 
            this.uploadphoto_dailog = false;
            swal({
                    title: "Account is limited to only 5images.",
                  text: "upgrade your plan",
                  type: "warning",
                  showCancelButton: true,
                  confirmButtonClass: "btn-default",
                  confirmButtonText: "change plan",
                  cancelButtonText: "No",
                  }).then((res)=>{
                    console.log(res);
                    if(res.value===true){
                        this.router.navigate(['../vendor/membership'])
                    }
                
                   },error=>{
                     alert(JSON.stringify(error));
                  })
                    return;
                  
              }else{
                this.basicplane = 0
                this.uploadphoto_dailog = true;
             }

    }
    previewFile(event) {
       // var preview = this.previewimg.nativeElement;
        let files = event.target.files;
        if (files) {
            for (let file of files) {
                let FI  = new FileItem(this.uploader,file,null);
                this.uploader.queue.push(FI);  
                this.fileNames.push(file.name);
                console.log(file);   
                this.previewImages = [];
                let reader = new FileReader();
                reader.onload = (e: any) => {
                this.previewImages.push(e.target.result);
                console.log(this.previewImages);
                }
                reader.readAsDataURL(file);
            }
        }
    }
    removePreviewImg(index){
        this.previewImages.splice(index,1);
        this.fileNames.splice(index,1);
        this.uploader.queue.splice(index,1);
    }
    uploadAll(){

                    console.log(this.uploader.queue)
                    const formData = new FormData();
                    for(let file of this.uploader.queue){
                            formData.append(file['some'].name,file['some'])
                            file.upload()
                    
                    }        
                    this.previewImages = [];
                    let headers = new  Headers();
                    var authToken = localStorage.getItem('userToken');
                    headers.append("Authorization",'Bearer '+authToken);
                    this._http.withUploadProgressListener(progress => {
                        this.progress_bar = true; console.log(`Uploading ${progress.percentage}%`);
                        this.closeModel(); this.progressPercentage = progress.percentage})
        .withDownloadProgressListener(progress => { console.log(`Downloading ${progress.percentage}%`); })
        .post(this.url+'api/ImageUploader/PortfolioUploader', formData,{headers: headers})
        .subscribe(data =>{ 
            this.toastr.success(data.json().message);
            this.router.navigate(['../vendor/portfolioview'])
            this.http.get(this.mygeturl,{headers:headers})
            .subscribe(data =>{   
                            console.log(data.json()); 
                            this.PortgetArray =data.json() 
                            this.basicplane = parseInt(localStorage.getItem('basic-plan')) 
                            this.uploadphoto_dailog = false;
                            this.progress_bar = false;
                           
            });

         
            },(error)=>{console.log(error)});
    }
    photoupload(formData){
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
                        console.log(data.json()); 
                        this.PortgetArray =data.json() 
                        this.basicplane = parseInt(localStorage.getItem('basic-plan')) 
                        });
                      console.log(data.json());
                        this.toastr.success(data.json());
                    
                    },(error)=>{        this.toastr.error(error.json());
                            });
                            
    },(error)=>{         this.toastr.error(error.json());
                });
    }
    closeModel(){
        this.uploadphoto_dailog = false;
        this.uploader.queue =[];
      //  this.progress_bar = false;

    }
    popup_closeModel(){
        this.progress_bar = false;
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
            this.toastr.success("Image set as Business Cover");
            this.http.get(this.Get_backgroundImage,{headers:headers}).subscribe(data =>{
                console.log(data.json());
                if(data.json().setAsBackgroud == true){
                    this.selected_Background = data.json().setAsBackgroud;
                   this.portfolioId = data.json().portfolioId;

                }
            },error=>{ console.log(error)
                this.toastr.error(error.json());
                   })
        },error=>{// console.log(error)
            this.toastr.error(error.json());
                })
    //console.log(setId)
    }
    delete_portfolio(e,index){

                swal({
                    title: "Are you sure?",
                text: "You will not be able to recover this image!",
                type: "warning",
                showCancelButton: true,
                confirmButtonClass: "btn-default",
                confirmButtonText: "Yes",
                cancelButtonText: "No",
                }).then((res)=>{
                    console.log(res);
                    if(res.value===true){
                        var id = e.portfolioId;
                        this.PortgetArray.splice(index, 1);
                    
                        let headers = new Headers();
                        var authToken = localStorage.getItem('userToken');
                        headers.append('Accept', 'application/json')
                        headers.append('Content-Type', 'application/json');
                        headers.append("Authorization", 'Bearer ' + authToken);       
                        this.http.post('http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com//api/Supplier/removeportfolio',{portfolioId: id}, { headers: headers }).subscribe(data => {
                        this.toastr.success(data.json().message);
                        }, error => { 
                            this.toastr.error(error.json());
                        });
                    }else{
                    }
                },error=>{
                    alert(JSON.stringify(error));
                })
                    return;
    
    }

}


