import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Http ,Headers} from '@angular/http';

import { Component, ViewEncapsulation, ViewChild, ElementRef, PipeTransform, Pipe, OnInit } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
constructor(public toastr: ToastrService,private sanitizer: DomSanitizer , public fb: FormBuilder) { }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  
}

@Component({
  selector: 'app-vediosetting',
  templateUrl: './vediosetting.component.html',
  styleUrls: ['./vediosetting.component.scss']
})

export class VediosettingComponent implements OnInit {
  validtionform:FormGroup
  objVideo:any = {}
  ;
  form: FormGroup;
  video: string = "https://www.youtube.com/embed/CD-E-LDc384"
  // videoForm: FormGroup


  Editvediodetail_dailog = false;
  
  video_all_data= [];
  constructor(private http: Http,private fb: FormBuilder) {
    this.createForm();
    const reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

    this.validtionform = fb.group({
      'id': new FormControl(Validators.required),
      'title': new FormControl(Validators.required),
      'link': new FormControl(Validators.required,Validators.pattern(reg)),
    });
   }
   get title() { return this.validtionform.get('title'); }

   get link() { return this.validtionform.get('link'); }
  createForm() {
    const reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
    this.form = this.fb.group({
      tit: ['',Validators.required],
      s_url: ['', [Validators.required, Validators.pattern(reg)]],
    });
  }
  addDetails() {
    alert(this.form.value )
  }
  ngOnInit() {
    const reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
    // this.videoForm = this.fb.group(
    //   {
    //       id:      [],
    //       title:       ['', Validators.required],
    //       Link:       ['', Validators.required, Validators.pattern(reg)],
    //       videosId: ["0"],
    //       createdOn: "2018-10-29T17:35:51.067Z"
    //   })

    let headers = new Headers();
          var authToken = localStorage.getItem('userToken');
          var categoryid = localStorage.getItem('categoryid');
          console.log(categoryid);
          headers.append('Accept', 'application/json')
          headers.append('Content-Type', 'application/json');
          headers.append("Authorization",'Bearer '+authToken);
 this.http.get('http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Videos/myvideos',{headers:headers}).subscribe((res)=>{
                console.log(res.json())
                this.video_all_data = res.json();
                
          })
  }



  closeModel(){

this.Editvediodetail_dailog = false;

}
 
editvedio(){

this.Editvediodetail_dailog = true;

}
singleData(data){
  this.objVideo = data;
  // this.validtionform =  data;
  console.log(this.validtionform)
  this.Editvediodetail_dailog = true 
}
videosave(){
  
const updatedata = this.objVideo
  
  console.log(updatedata)
  let headers = new Headers();
          var authToken = localStorage.getItem('userToken');
          var categoryid = localStorage.getItem('categoryid');
          console.log(categoryid);
          headers.append('Accept', 'application/json')
          headers.append('Content-Type', 'application/json');
          headers.append("Authorization",'Bearer '+authToken);

      this.http.post('http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Videos/createupdatevideos',{
        videosId: this.objVideo['id'],
        Title: this.objVideo['title'],
        Link: this.objVideo['link'],
        createdOn: "2018-10-30T15:48:46.151Z"
      },{headers:headers})
                .subscribe(
                    resp => {
                        // this.t.success('Project created successfully');
                        // this.ui.laddaSave = false;
                        // this.initForm();
                        console.log(resp)
                        if(resp.status == 200){
                          // this.toastr.error(e.statusText );

                          this.Editvediodetail_dailog = false;  
                        }
                        
                        // Editvediodetail_dailog
                    },
                    e => {
                      // this.toastr.error(e.statusText );
                        // this.ui.laddaSave = false;
                        // this.l.error('Project error', e);
                        // this.t.error(e.error.error.detail);
                    }
                )
}
deleteData(data){
  console.log(data.videosId)
  let headers = new Headers();
          var authToken = localStorage.getItem('userToken');
          var categoryid = localStorage.getItem('categoryid');
          console.log(categoryid);
          headers.append('Accept', 'application/json')
          headers.append('Content-Type', 'application/json');
          headers.append("Authorization",'Bearer '+authToken);

          if(confirm("Are you sure to delete ")) {
            this.http.get('http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Videos/removevideo?VideoId'+'='+data.videosId,{headers:headers}).subscribe((res)=>{
              this.video_all_data.splice(this.video_all_data.indexOf(data.videosId),1);
                console.log('Delete Responce '+res)
                                           })
          }
      
}
}