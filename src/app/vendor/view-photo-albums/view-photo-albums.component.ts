import { Http ,Headers } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit  ,ChangeDetectionStrategy } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import swal from 'sweetalert2';
import { ProgressHttp } from 'angular-progress-http';


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
  albumImagesModify =[];
  totalImage=[];
  myalbumimages=[];
  lodar = false;
  total;
  progress_bar:boolean = false;
  private albumget: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Albums/myalbums'
  eventArray:any = [];
  private url: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/'
  private uploadimage: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/ImageUploader/FileUploader'
  private Setasbackground: string = "http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Albums/setascoverimage"
  private BackgroundImage: string = "http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Albums/BackgroundImage"
  // private albumcoverimage: string = "http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Albums/albumcoverimage"

  uploadphoto_dailog = false;
  colour_table = [];
  selcte_setAsBackground;
  find_image;
  albumid:any;
  albumname:any;
  id:any;
  tags:any;
  progressPercentage:number = 0
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
  constructor(private http: Http ,  private route: ActivatedRoute,public toastr: ToastrService,private _http: ProgressHttp

  ) { 
    
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
                          
                          console.log(item);
                          // console.log(item.tags);
                          this.albumname = item.albumName;
                          this.tags = item.tags;
                          this.colourtags = item.colorTags;
                          this.myalbumimages =  item.albumImages;
                          }
                        } });
  }

  ngOnInit() {

     $.getScript('./assets/js/vendorsidebar.js');

  this.route.params.subscribe( params => {
    console.log(params) ;
        this.albumid = params;
  });
  $(function() {
    var current_progress = 0;
    var interval = setInterval(function() {
        current_progress += 10;
        $(".dynamic")
        .css("width", current_progress + "%")
        .attr("aria-valuenow", current_progress)
        .text(current_progress + "% Complete");
        if (current_progress >= 100)
            clearInterval(interval);
    }, 2000);
  });


  let headers = new Headers();
  var authToken = localStorage.getItem('userToken');
  headers.append('Accept', 'application/json')
  headers.append('Content-Type', 'application/json');
  headers.append("Authorization",'Bearer '+authToken);

  this.http.get(this.url+"api/Albums/BackgroundImage",{headers:headers})
  .subscribe(data => {console.log(data.json())},error=>{console.log(error)});
    $(".gearicon").click(function(){
    
      $( this ).toggleClass( "open" );
  });

    this.http.get(this.albumget,{headers:headers}).subscribe(data =>{  
        this.eventArray = data.json()
    
        console.log(this.eventArray);
        // for (var item of  this.eventArray ) {
        //         if(item.albumImages.length == 0)
        //         {  
        //             this.image.path = 'https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
        //          
        //         }else{  
        //            
                   
        //               }
            
        // }
       })


       this.http.get('http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Albums/storefrontimage',{headers:headers}).subscribe(data =>{
        console.log(data.json())

       if(data.json().setAsBackground == true ){   
        this.selcte_setAsBackground =  data.json().setAsBackground;
        this.id =  data.json().albumImageId;
          } 
        
    
      },error=>{console.log(error)})
  //Album Get
  this.http.get(this.url+'api/Albums/myalbums',{headers:headers})
  .subscribe(data =>{
   this.totalImage =  data.json();
   console.log(data.json()); 
   console.log(this.albumid.id); 
   for (var item of  this.totalImage ) {
   
   if(this.albumid.id == item.albumsId)
    {
   
     console.log(item);
    // console.log(item.tags);
    this.albumname = item.albumName;
    this.tags = item.tags;
    this.colourtags = item.colorTags;
    this.myalbumimages =  item.albumImages;

    for (var albumtag of  this.myalbumimages ) {
      if(albumtag.tags != null && albumtag.colorTags != null){
        albumtag['tags'] = albumtag['tags'].split(',');
        albumtag['colorTags'] = albumtag['colorTags'].split(',');
      }
      
      this.albumImagesModify.push(albumtag);
      console.log(this.albumImagesModify)
     
    }


  
     }
    }
  
    for (var image of  this.albumImagesModify ) 
    {  
       for (var g of  image.colorTags ) 
        {
          this.colour_table.push(g)
          this.colour_table = this.colour_table.filter((el, i, a) => i === a.indexOf(el))

         }
    }
    console.log(this.colour_table)
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
    // let con = confirm('Are you sure you want to delete this?')
    // if (con) {
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
                    this.albumImagesModify =  item.albumImages;
                    console.log(  this.albumImagesModify ); 
                }
            }
          });},(error)=>{console.log(error)});

    // }

  }else{
      console.log('Cancel Process !');
   }
  },error=>{
    alert(JSON.stringify(error));
 })
   return;

  }
  // fileChangeListener($event) {
  //   console.log($event)
  //   var image: any = new Image();
  //   var file: File = $event.target.files[0];
  //   var myReader: FileReader = new FileReader();
  //   console.log(myReader)
  //   var that = this;
  //   myReader.onloadend = function (loadEvent: any) {
  //     image.src = loadEvent.target.result;
  
  //     //that.cropper.setImage(image);

  //   };

  //   myReader.readAsDataURL(file);
  // }

  uploadAll(){
   

  
 
    this.lodar = true;
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
   
    this.uploader.queue = [];
    // this.http.post(this.uploadimage,formData,{headers:headers})
    //   .subscribe(data =>{console.log(data.json());
    //     this.uploadphoto_dailog = false;
    //     this.http.get(this.url+'api/Albums/myalbums',{headers:headers})
    //     .subscribe(data =>{
    //      this.totalImage =  data.json();
      
    //      console.log(this.albumid.id); 
    //      console.log(data.json()); 
        
    //      for (var item of  this.totalImage ) {
    //         if(this.albumid.id == item.albumsId)
    //           {
    //               this.albumImagesModify =  item.albumImages;
    //               console.log(  this.albumImagesModify ); 
                 
    //           }
    //       }


    //       // $(function() {
    //       //   var current_progress = 0;
    //       //   var interval = setInterval(function() {
    //       //       current_progress += 10;
    //       //       $("#dynamic")
    //       //       .css("width", current_progress + "%")
    //       //       .attr("aria-valuenow", current_progress)
    //       //       .text(current_progress + "% Complete");
    //       //       if (current_progress >= 100)
    //       //           clearInterval(interval);
    //       //   }, 1000);
    //       // });
    //       this.lodar = false;
         
    //     });  this.toastr.success(data.json().message);},(error)=>{console.log(error)});

        this._http.withUploadProgressListener(progress => {this.progress_bar = true; console.log(`Uploading ${progress.percentage}%`);this.closeModel(); this.progressPercentage = progress.percentage})
        .withDownloadProgressListener(progress => { console.log(`Downloading ${progress.percentage}%`); })
        .post('http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/ImageUploader/AlbumImageUpload', formData,{headers: headers})
        .subscribe(data =>{
          this.totalImage =  data.json();
       
          // console.log(this.albumid.id); 
          // console.log(data.json()); 
         
          for (var item of  this.totalImage ) {
             if(this.albumid.id == item.albumsId)
               {
                   this.albumImagesModify =  item.albumImages;
                   console.log(  this.albumImagesModify ); 
                  
               }
           }
 
 
           // $(function() {
           //   var current_progress = 0;
           //   var interval = setInterval(function() {
           //       current_progress += 10;
           //       $("#dynamic")
           //       .css("width", current_progress + "%")
           //       .attr("aria-valuenow", current_progress)
           //       .text(current_progress + "% Complete");
           //       if (current_progress >= 100)
           //           clearInterval(interval);
           //   }, 1000);
           // });
           this.lodar = false;
           this.toastr.success(data.json().message);
           this.progress_bar =  false
          
         }
        ,error=>{
          console.log(error)
        }); 
        
       
  }

  albumcoverimage(albumId){
    console.log(albumId)
    let headers = new Headers();
    var authToken = localStorage.getItem('userToken');
    headers.append('Accept', 'application/json')
    headers.append('Content-Type', 'application/json');
    headers.append("Authorization",'Bearer '+authToken);
    this.http.get('http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Albums/albumcoverimage?AlbumId' + '=' + albumId,{headers:headers}).subscribe(data =>{
      console.log(data.json())
    },error=>{console.log(error)})


  }
  setas_storefront_image(a){
    console.log(a)
    let headers = new Headers();
    var authToken = localStorage.getItem('userToken');
    headers.append('Accept', 'application/json')
    headers.append('Content-Type', 'application/json');
    headers.append("Authorization",'Bearer '+authToken);

    // this.http.get(this.urll+'/api/albums/setasstorefrontimage?AlbumImageId'+'='+image.id,{headers:headers}).subscribe(data =>{
          
    //   console.log(data.json());
    //   this.getstoreimage();
    
    //  });
    this.http.get('http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/albums/setasstorefrontimage?AlbumImageId' + '=' + a,{headers:headers}).subscribe(data =>{
      console.log(data.json())
      this.toastr.success(data.json().message);

      this.http.get('http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Albums/storefrontimage',{headers:headers}).subscribe(data =>{
        console.log(data.json())

       if(data.json().setAsBackground == true ){   
        this.selcte_setAsBackground =  data.json().setAsBackground;
        this.id =  data.json().albumImageId;
          } 
        
    
      },error=>{console.log(error)})
    },error=>{console.log(error)})
  }
  setascoverimage(setId){
    let headers = new Headers();
        var authToken = localStorage.getItem('userToken');
        headers.append('Accept', 'application/json')
        headers.append('Content-Type', 'application/json');
        headers.append("Authorization",'Bearer '+authToken);
      
    this.http.get(this.Setasbackground,{headers:headers}).subscribe(data =>{
            this.Set_as_background = data.json() as string[];
            console.log( this.Set_as_background );
            this.toastr.success(data.json().message);
        },error=>{console.log(error)})
      console.log(setId)
  }

  closeModel(){this.uploadphoto_dailog = false;
    this.lodar= false;
  }
  popup_closeModel(){
    this.progress_bar= false;
  }
}
