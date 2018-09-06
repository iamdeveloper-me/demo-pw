import { Component, OnInit,ViewChild  } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { CropperSettings, ImageCropperComponent } from 'ng2-img-cropper';
@Component({
  selector: 'app-business-info',
  templateUrl: './business-info.component.html',
  styleUrls: ['./business-info.component.scss']
})

export class BusinessInfoComponent implements OnInit {
  public filedata ; 
  data: any;
  cropperSettings: CropperSettings;

  @ViewChild('cropper', undefined)
  cropper: ImageCropperComponent;

  constructor(public http: Http) {
    this.cropperSettings = new CropperSettings();
    this.cropperSettings.croppedWidth =100;
    this.cropperSettings.croppedHeight = 100;
    this.cropperSettings.canvasWidth = 600;
    this.cropperSettings.canvasHeight = 400;
    this.cropperSettings.noFileInput = true;
    this.data = {};
  }
  fileChangeListener($event) {
    var image: any = new Image();
    var file: File = $event.target.files[0];
    var myReader: FileReader = new FileReader();
    var that = this;
    myReader.onloadend = function (loadEvent: any) {
      image.src = loadEvent.target.result;
      that.cropper.setImage(image);

    
      
    };

    myReader.readAsDataURL(file);
    console.log(file);

    this.filedata = image;
  }
  private albumget: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Albums/myalbums'

  private url: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/businessinfo'
  vendor: any = {};
  modelfield : any = {};
  fileToUpload: File = null;
  imag = 'https://s3.us-east-2.amazonaws.com/prefect-image/cake.jpg'; 
  Businesname = 'Rodriguez' ; 
  Description = ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer.' ;
  facebook = 'https://www.facebook.com';
  twitter = 'https://www.twitter.com';
  google = 'https://plus.google.com';
  instagram = 'https://instagram.com' ;
  perfectWedding = ' www.perfectwedding.com' ;

  ngOnInit() {
            
            let headers = new Headers();
            var authToken = localStorage.getItem('userToken');
            headers.append('Accept', 'application/json')
            headers.append('Content-Type', 'application/json');
            headers.append("Authorization",'Bearer '+authToken);
          
            this.http.get(this.url,{headers:headers}).subscribe(data =>{
            console.log(data.json());
            this.vendor = data.json();
            this.facebook = data.json().facebookURL ;
            this.twitter = data.json().twitterURL ;
            this.instagram = data.json().instalURL ;
            this.google = data.json().googleURL;
            this.Businesname = data.json().nameOfBusiness ;
            this.Description = data.json().businessDetails ;  
            this.perfectWedding = data.json().perfectWeddingURL  ;
            });
            this.http.get(this.albumget,{headers:headers}).subscribe(data =>{
              console.log(data.json());  });
              
            $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/jquery/jquery.min.js');
            $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/bootstrap/js/bootstrap.bundle.min.js');
            $.getScript('./assets/js/vendorsidebar.js');
            $('.photogallry').hide();
            $("div").removeClass( "modal-backdrop"); 
            $("#instagram2").removeClass( "modal-backdrop"); 
            function testAnim(x) {
              $('.modal .modal-dialog').addClass('animated');
              $('.modal .modal-dialog').addClass('bounceIn');
          };
        
          $('#facebook').on('show.bs.modal', function (e) {
            var anim = $('#entrance').val();
                testAnim(anim);
          })
          $('#facebook').on('hide.bs.modal', function (e) {
            var anim = $('#exit').val();
                testAnim(anim);
          })
          
          $('#twitter').on('show.bs', function (e) {
            var anim = $('#entrance').val();
                testAnim(anim);
          })
          $('#twitter').on('hide.bs', function (e) {
            var anim = $('#exit').val();
                testAnim(anim);
          })
          
          $('#google').on('show.bs', function (e) {
            var anim = $('#entrance').val();
                testAnim(anim);
          })
          $('#google').on('hide.bs', function (e) {
            var anim = $('#exit').val();
                testAnim(anim);
          })
          
          $('#instagram').on('show.bs', function (e) {
            var anim = $('#entrance').val();
                testAnim(anim);
          })
          $('#instagram').on('hide.bs', function (e) {
            var anim = $('#exit').val();
                testAnim(anim);
          })
          
          $('#instagram2').on('show.bs', function (e) {
            var anim = $('#entrance').val();
                testAnim(anim);
          })
          $('#instagram2').on('hide.bs', function (e) {
            var anim = $('#exit').val();
                testAnim(anim);
          })
          
          $('#Businesname').on('show.bs', function (e) {
            var anim = $('#entrance').val();
                testAnim(anim);
          })
          $('#Businesname').on('hide.bs', function (e) {
            var anim = $('#exit').val();
                testAnim(anim);
          })
          
          $('#Description').on('show.bs', function (e) {
            var anim = $('#entrance').val();
                testAnim(anim);
          })
          $('#Description').on('hide.bs', function (e) {
            var anim = $('#exit').val();
                testAnim(anim);
          })

  }
 
  openModel(b){
    //alert("hh");
    this.modelfield = b;
    //console.log(this.modelfield);
  }


  upForm(info){
            console.log(info);
            console.log(info.value.businessDetails );
        //    console.log (this.filedata);
            var infofacebook = info.value.facebook;
            var infotwitter = info.value.twitter;
            var infogoogle = info.value.google;
            var infodetails = info.value.businessDetails ;
            var infobusiness =   info.value.Businesname;
          // var infoperson = info.value.contactPerson;
            var infopicture = this.filedata.webkitRelativePath ;
            var infoinsta = info.value.instagram;
             var  perfectWeddingsite =   info.value.perfectWedding;
        

              let headers = new Headers();
              var authToken = localStorage.getItem('userToken');
              headers.append('Accept', 'application/json')
              headers.append('Content-Type', 'application/json');
              headers.append("Authorization",'Bearer '+authToken);
            
  
              let updatebusinessinfo = this.http.post("http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/updatebusinessinfo",
                           {   
                              nameOfBusiness: infobusiness,
                              businessDetails: infodetails,
                              contactPerson: 'scsc',
                              pictureUrl: infopicture,
                              facebookURL: infofacebook,
                              twitterURL: infotwitter,
                              googleURL:  infogoogle,
                              instalURL: infoinsta ,
                              perfectWeddingURL: perfectWeddingsite,
                            
                          
                          },{headers:headers});  

            updatebusinessinfo.subscribe((data) => console.log(data),(error)=>console.log(error));
     }
abc(event){
      console.log(event)
    }
     closeResult: string;

enable =  true;
enable1 =  true;
enable2 =  true;
enable3 =  true;
enable4 =  true;
  
}



