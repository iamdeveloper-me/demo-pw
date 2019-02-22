import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageuploadService {
  private api: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com' 

  private url: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Albums/createupdatealbum' 
  private albumget: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Albums/myalbums'

  private uploadimage: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/ImageUploader/FileUploader'
  constructor(public http: Http ) { }


  upload(fileToUpload: any) {
    alert("upload");
    let headers = new Headers();
    var authToken = localStorage.getItem('userToken');
    headers.append('Accept', 'application/json')
    headers.append('Content-Type', 'application/json');
    headers.append("Authorization",'Bearer'+authToken);
    let input = new FormData();
    input.append("file", fileToUpload);
    return this.http
        .post(this.uploadimage,{ files: input, AlbumId: 2 },{headers:headers});
}
upalbumload(){   
  let headers = new Headers();
  var authToken = localStorage.getItem('userToken');
  headers.append('Accept', 'application/json')
  headers.append('Content-Type', 'application/json');
  headers.append("Authorization",'Bearer'+authToken);
  return this.http.post(this.url,{
    albumsId: 0,
    albumName: "string",
    albumType: 0,
    tags: "string",
    colorTags: "string"
  },{headers:headers});

  
}

uploadDeal(fileToUpload: any) {
  alert("upload Deal");
  let headers = new Headers();
  var authToken = localStorage.getItem('userToken');
  headers.append('Accept', 'application/json')
  headers.append('Content-Type', 'application/json');
  headers.append("Authorization",'Bearer'+authToken);
  let input = new FormData();
  debugger
  for (let file of fileToUpload)
  {
    input.append('ffff', fileToUpload);
      
  }
  return this.http
      .post(this.uploadimage,{ files: input, dealId: 49 },{headers:headers});
}

}
