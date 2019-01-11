import { DomSanitizer } from '@angular/platform-browser';
import { Http ,Headers} from '@angular/http';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ChangeDetectionStrategy } from '@angular/core';
import { Component, ViewEncapsulation, ViewChild, ElementRef, PipeTransform, Pipe, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { Router } from '@angular/router'
import {   Input } from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';

const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Pipe({ name: 'safeget' })
export class SafePipeP implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  //changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./videos.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class VideosComponent implements OnInit {

  video: string = "https://www.youtube.com/embed/CD-E-LDc384"
  basicplan:number;
    Addvediodetail_dailog = false;
    loader = false;
    
    videoForm: FormGroup;


    video_all_data =[];
    video_total:number;
    form: FormGroup;

    constructor( private fb: FormBuilder,public http: Http, private router: Router) {
      this.basicplan = JSON.parse(localStorage.getItem('basic-plan'));
         
     }
     createForm() {
      const reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
      this.form = this.fb.group({
        title: new FormControl('',Validators.required),
        // link: new FormControl('',Validators.pattern(reg)),
        link: new FormControl('',Validators.required),

        
       
      });
    }
    get title() { return this.form.get('title') };
    get link() { return this.form.get('link') };
    //Validation
    submitted = false;
    get f() { return this.form.controls; }

  // On submit
  addDetails() {

    //Validation
    this.submitted = true;
    if (this.form.invalid) {
        return;
    }
    //Validation End!
  
    const data = {
      "videosId": 0,
      "title": this.form.value['title'],
      "link": this.form.value['link'].split('watch?v=').join('embed/'),
      "createdOn": "2018-10-30T20:19:33.381Z"
    }
    let headers = new Headers();
          var authToken = localStorage.getItem('userToken');
          var categoryid = localStorage.getItem('categoryid');
          headers.append('Accept', 'application/json')
          headers.append('Content-Type', 'application/json');
          headers.append("Authorization",'Bearer '+authToken);

      this.http.post('http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Videos/createupdatevideos',data,{headers:headers})
                .subscribe(
                    resp => {
                      this.Addvediodetail_dailog = false;
                        this.video_all_data.push(data);
                        this.ngOnInit();
                    },
                    e => {
                       console.log(e)
                    }
                )


  }

  //VideoPopup
  addVideo(){
    swal({
  
      title: "Limited Video Plan",
      text: "Please Upgrade Your Plan For Unlimited Video !",
      type: "warning",
      showCancelButton: true,
      confirmButtonClass: "btn-default",
      confirmButtonText: "Upgrade Now!",
      cancelButtonText: "Remind Me Later!",
  }).then((res)=>{
                  if(res.value===true){
                    this.router.navigate(['../vendor/membership'])
                 } else{
                     console.log('Cancel Process !');
                  }
},error=>{
    alert(JSON.stringify(error));
  })
  return;
}

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
    @Input() name;
   
    videosave() {
  
      let headers = new Headers();
          var authToken = localStorage.getItem('userToken');
          var categoryid = localStorage.getItem('categoryid');
        
          headers.append('Accept', 'application/json')
          headers.append('Content-Type', 'application/json');
          headers.append("Authorization",'Bearer '+authToken);

      this.http.post('http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Videos/createupdatevideos',this.videoForm.value,{headers:headers})
                .subscribe(
                    resp => {
                      
                       
                    },
                    e => {
                      console.log(e)
                     
                    }
                )


    }
  ngOnInit() {
    this.createForm();
      let headers = new Headers();
          var authToken = localStorage.getItem('userToken');
          var categoryid = localStorage.getItem('categoryid');
      
          headers.append('Accept', 'application/json')
          headers.append('Content-Type', 'application/json');
          headers.append("Authorization",'Bearer '+authToken);
 this.http.get('http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Videos/myvideos',{headers:headers}).subscribe((res)=>{
              
                this.video_all_data = res.json();
                this.video_total =  this.video_all_data.length

                this.loader =  true
                
          })
 $.getScript('./assets/js/vendorsidebar.js');
  const reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
  this.videoForm = this.fb.group(
    {   
        title:       ['', Validators.required],
        Link:       ['',Validators.required ],
        videosId: ["0"],
        createdOn: "2018-10-29T17:35:51.067Z"
    })
  
    
  }

  closeResult: string;

  closeModel(){

this.Addvediodetail_dailog = false;

}
 
addeditvedio(){

this.Addvediodetail_dailog = false;

}

}