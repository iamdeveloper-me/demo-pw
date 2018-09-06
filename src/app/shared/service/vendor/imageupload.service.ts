import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ImageuploadService {
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
    console.log(fileToUpload);
    // console.log(headers)
    return this.http
        .post(this.uploadimage,{ files: input, AlbumId: 2 },{headers:headers});
}
upalbumload(){   
  let headers = new Headers();
  var authToken = localStorage.getItem('userToken');
  headers.append('Accept', 'application/json')
  headers.append('Content-Type', 'application/json');
  headers.append("Authorization",'Bearer'+authToken);
  console.log(authToken)
  return this.http.post(this.url,{
    albumsId: 0,
    albumName: "string",
    albumType: 0,
    tags: "string",
    colorTags: "string"
  },{headers:headers});

  
}

}
