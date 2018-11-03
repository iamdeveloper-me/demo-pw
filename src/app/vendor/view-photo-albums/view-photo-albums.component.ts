import { Http ,Headers } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit  ,ChangeDetectionStrategy } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';

const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
@Component({
  selector: 'app-view-photo-albums',
  templateUrl: './view-photo-albums.component.html',
  //changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./view-photo-albums.component.scss']
})


export class ViewPhotoAlbumsComponent implements OnInit {
  Set_as_background:any = [];
  fileToUpload:any;
  
  totalImage=[];
  myalbumimages=[];
  private albumget: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Albums/myalbums'
  eventArray:any = [];
  private url: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/'
  private uploadimage: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/ImageUploader/FileUploader'
  private Setasbackground: string = "http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Albums/Setasbackground"
  private BackgroundImage: string = "http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Albums/BackgroundImage"
  
  uploadphoto_dailog = false;



  albumid:any;
  albumname:any;
  tags:any;
  colourtags:any;
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
  constructor(private http: Http ,  private route: ActivatedRoute,public toastr: ToastrService) { 
    
  let headers = new Headers();
  var authToken = localStorage.getItem('userToken');
  headers.append('Accept', 'application/json')
  headers.append('Content-Type', 'application/json');
  headers.append("Authorization",'Bearer '+authToken);


  //Album Get
  this.http.get(this.url+'api/Albums/myalbums',{headers:headers})
  .subscribe(data =>{
   this.totalImage =  data.json();
   console.log(data.json()); 
   console.log(this.albumid.id); 

   console.log(data.json()); 
   for (var item of  this.totalImage ) {
   
   if(this.albumid.id == item.albumsId)
    {
    //    alert("dsf"); 
     console.log(item);
    // console.log(item.tags);
    this.albumname = item.albumName;
    this.tags = item.tags;
    this.colourtags = item.colorTags;
    this.myalbumimages =  item.albumImages;
     }
}
  
   
  });
  }

  ngOnInit() {


  this.route.params.subscribe( params => {
    console.log(params) ;
        this.albumid = params;
  });


  let headers = new Headers();
  var authToken = localStorage.getItem('userToken');
  headers.append('Accept', 'application/json')
  headers.append('Content-Type', 'application/json');
  headers.append("Authorization",'Bearer '+authToken);

 

    this.http.get(this.albumget,{headers:headers}).subscribe(data =>{  
        this.eventArray = data.json()
    
        console.log(this.eventArray);
        // for (var item of  this.eventArray ) {
        //         if(item.albumImages.length == 0)
        //         {  
        //             this.image.path = 'https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
        //             alert("empty array"); 
        //         }else{  
        //             alert("not empty array");
                   
        //               }
            
        // }
       })
  //Album Get
  this.http.get(this.url+'api/Albums/myalbums',{headers:headers})
  .subscribe(data =>{
   this.totalImage =  data.json();
   console.log(data.json()); 
   console.log(this.albumid.id); 

   console.log(data.json()); 
   for (var item of  this.totalImage ) {
   
   if(this.albumid.id == item.albumsId)
    {
    //    alert("dsf"); 
     console.log(item);
    // console.log(item.tags);
    this.albumname = item.albumName;
    this.tags = item.tags;
    this.colourtags = item.colorTags;
    this.myalbumimages =  item.albumImages;
     }
}
  
   
  });
  this.http.get(this.BackgroundImage,{headers:headers})
  .subscribe(data => {console.log(data.json())},error=>{console.log(error)});
    $(".gearicon").click(function(){
    //  alert();
      $( this ).toggleClass( "open" );
  });
  let modalId = $('#image-gallery');

$(document)
  .ready(function () {

    loadGallery(true, 'a.thumbnail');

    //This function disables buttons when needed
    function disableButtons(counter_max, counter_current) {
      $('#show-previous-image, #show-next-image')
        .show();
      if (counter_max === counter_current) {
        $('#show-next-image')
          .hide();
      } else if (counter_current === 1) {
        $('#show-previous-image')
          .hide();
      }
    }

    /**
     *
     * @param setIDs        Sets IDs when DOM is loaded. If using a PHP counter, set to false.
     * @param setClickAttr  Sets the attribute for the click handler.
     */

    function loadGallery(setIDs, setClickAttr) {
      let current_image,
        selector,
        counter = 0;

      $('#show-next-image, #show-previous-image')
        .click(function () {
          if ($(this)
            .attr('id') === 'show-previous-image') {
            current_image--;
          } else {
            current_image++;
          }

          selector = $('[data-image-id="' + current_image + '"]');
          updateGallery(selector);
        });

      function updateGallery(selector) {
        let $sel = selector;
        current_image = $sel.data('image-id');
        $('#image-gallery-title')
          .text($sel.data('title'));
        $('#image-gallery-image')
          .attr('src', $sel.data('image'));
        disableButtons(counter, $sel.data('image-id'));
      }

      if (setIDs == true) {
        $('[data-image-id]')
          .each(function () {
            counter++;
            $(this)
              .attr('data-image-id', counter);
          });
      }
      $(setClickAttr)
        .on('click', function () {
          updateGallery($(this));
        });
    }
  });

// build key actions
$(document)
  .keydown(function (e) {
    switch (e.which) {
      case 37: // left
        if ((modalId.data('bs.modal') || {})._isShown && $('#show-previous-image').is(":visible")) {
          $('#show-previous-image')
            .click();
        }
        break;

      case 39: // right
        if ((modalId.data('bs.modal') || {})._isShown && $('#show-next-image').is(":visible")) {
          $('#show-next-image')
            .click();
        }
        break;

      default:
        return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
  });

  }
  






  //service
  deleteImage(image,index){


    let con = confirm('Are you sure you want to delete this?')
    if (con) {
      console.log(image);
      console.log(index);
      console.log(image.albumImageId);
      this.myalbumimages.splice(index,1);
      let headers = new Headers();
      var authToken = localStorage.getItem('userToken');
      headers.append('Accept', 'application/json')
      headers.append('Content-Type', 'application/json');
      headers.append("Authorization",'Bearer '+authToken);
    
    
      //Album Getremoveevent?id'+'='+id  ?AlbumImageId'+'='+image.albumImageId
      this.http.get(this.url+'api/Albums/removeimage?AlbumImageId'+'='+image.albumImageId,{headers:headers})
      .subscribe(data =>{
        console.log(data.json());
        this.toastr.success(data.json().message);
          }); 

    }

  }



  uploadAll(){

   this.uploadphoto_dailog = false;
    const formData = new FormData();
    for(let file of this.uploader.queue){
    formData.append(file['some'].name,file['some'])
    }
    formData.append('AlbumId', this.albumid.id)
    
    // Headers
    let headers = new  Headers();
    var authToken = localStorage.getItem('userToken');
    headers.append("Authorization",'Bearer '+authToken);
    
    //Post Album 2 photos
    console.log(formData);
    this.http.post(this.uploadimage,formData,{headers:headers})
      .subscribe(data =>{console.log(data.json());
        this.http.get(this.url+'api/Albums/myalbums',{headers:headers})
        .subscribe(data =>{
         this.totalImage =  data.json();
         console.log(data.json()); 
         console.log(this.albumid.id); 
      
         console.log(data.json()); 
         for (var item of  this.totalImage ) {
         
         if(this.albumid.id == item.albumsId)
          {
          //    alert("dsf"); 
          // console.log(item);
          // console.log(item.albumImages);
          this.myalbumimages =  item.albumImages;
           }
      }
        
         
        });
        

        // this.myalbumimages.unshift({dealId: data.json().id ,
        //   albumImageId: 3,
        //   albumsId:4,
        //   originalFileName: "50309108-81f1-4c45-9d70-9215e752d28cScreenshot from 2018-08-22 18-00-49.png",
        //   path:    "https://s3.us-east-2.amazonaws.com/prefect-image/50309108-81f1-4c45-9d70-9215e752d28cScreenshot from 2018-08-22 18-00-49.png",
        //   serverFileName:""});
      },(error)=>{console.log(error)});
  }

setbackground(setId){
 let headers = new Headers();
    var authToken = localStorage.getItem('userToken');
    headers.append('Accept', 'application/json')
    headers.append('Content-Type', 'application/json');
    headers.append("Authorization",'Bearer '+authToken);
  
this.http.get(this.Setasbackground,{headers:headers}).subscribe(data =>{
        this.Set_as_background = data.json() as string[];
        console.log( this.Set_as_background );
    },error=>{console.log(error)})
  console.log(setId)}



        closeModel(){
              this.uploadphoto_dailog = false;
              }
}
