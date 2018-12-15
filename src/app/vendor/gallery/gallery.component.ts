import {Component, OnInit,ViewChild ,ChangeDetectionStrategy,NgZone} from '@angular/core';
import { Http,Headers } from '@angular/http';
import { apiService } from '../../shared/service/api.service';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})

export class GalleryComponent implements OnInit {
  // $.getScript('./assets/js/vendorsidebar.js');
  @ViewChild("fileInput") fileInput;
  gallery = { files: ''}
  fileToUpload:any;
  albumsId:'';
  urls = new Array<string>();
  basicplane
  eventArray:any = {};
  portfolio:any = [];
  iterations = [1,2];
  data:any;
  portArray:any = [];
  portArray_length
  albumArray:any = [];
  albumArray_length;
  private albumget: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Albums/myalbums'
private getportfolio: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/myportfolio'



  constructor(
    public http: Http,
    private apiService : apiService,
  ) { }
  ngOnInit() {
  
       $.getScript('./assets/js/vendorsidebar.js');

    let headers = new Headers();
    var authToken = localStorage.getItem('userToken');
    
    headers.append('Accept', 'application/json')
    headers.append('Content-Type', 'application/json');
    headers.append("Authorization",'Bearer '+authToken);
    var basicplan = localStorage.getItem('basic-plan');
    this.basicplane =  localStorage.getItem('basic-plan');
      console.log(parseInt(basicplan) );
      if( parseInt(basicplan) == 1 ){
       
        $(".albumlist").hide();
      }else{
        $('div').removeClass("overlay");
      
      }
    
      this.basicplane = parseInt(localStorage.getItem('basic-plan')) 
    
    this.showport();

    this.showalbum();
  }

        showport()
        {            
           
          //poryfolio get

          this.apiService.getData(this.getportfolio).subscribe(res =>{
            this.portfolio = res;
            this.portArray = res;
            this.portArray_length = this.portArray.length 
            },
            error => { console.log('aaaaaaaaaaa',error)
          }
          )
        }

        showalbum(){ 
                      
                      let headers = new Headers();
                      var authToken = localStorage.getItem('userToken');
                    
                      headers.append('Accept', 'application/json')
                      headers.append('Content-Type', 'application/json');
                      headers.append("Authorization",'Bearer '+authToken);
                      
                      
                      this.http.get(this.albumget,{headers:headers}).subscribe(data =>{  
                      this.albumArray = data.json() ;
                      this.albumArray_length = this.albumArray.length
                    })
                 }
detectFiles(event) {
  this.urls = [];
  let files = event.target.files;
  if (files) {
    for (let file of files) {
      let reader = new FileReader();
      reader.onload = (e: any) => {
        this.urls.push(e.target.result);
      }
      reader.readAsDataURL(file);
    }
  }
}
  }
