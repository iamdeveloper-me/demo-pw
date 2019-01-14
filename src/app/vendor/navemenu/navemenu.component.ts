import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { Http,Headers } from '@angular/http';
import { LoginServiceService } from '../../shared/service/login-service.service';
import { MessageService } from '../../shared/service/vendor/message.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


export class NgbdModalContent {
  @Input() name;
  constructor(public activeModal: NgbActiveModal) { }
}


@Component({
  selector: 'app-navemenu',
  templateUrl: './navemenu.component.html',
  styleUrls: ['./navemenu.component.scss']
})
export class NavemenuComponent implements OnChanges,OnInit   {
    currentLang = 'en';
    toggleClass = 'ft-maximize';
    private url: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/myprofile'
    vendor: any = {};
    @Input() userImg: any;
    find_name:string;
    deletIcon = false;
    alltab = true;
    unreadtab = false;
    filter_id:number = 1;
    historyArray = [];
    uiLoading:boolean = true;
   arrayLength:number;
   unread_msg:number;
   startedtab = false;
   session_token;
   image_by_default:'..'
   // @Output() userImg = new EventEmitter<string>();
   // @Output('userImg') img:string;
    public data = '' ;
    constructor( private hservice: MessageService,public translate: TranslateService ,public http: Http,private cservice: LoginServiceService, private router: Router ) { const browserLang: string = translate.getBrowserLang();
    translate.use(browserLang.match(/en|es|pt|de/) ? browserLang : 'en'); }
  
  ngOnInit() {

      var firstName = localStorage.getItem('firstName');
      let headers = new Headers();
      var authToken = localStorage.getItem('userToken');
   
   this.session_token =   sessionStorage.getItem('userToken')
  
      headers.append('Accept', 'application/json')
      headers.append('Content-Type', 'application/json');
      headers.append("Authorization",'Bearer '+authToken);
  


      this.http.get(this.url,{headers:headers}).subscribe(
        data =>{ this.vendor = data.json();
                
               this.userImg = data.json().profileImage;
                               });

      if(window.location.href.indexOf("/vendor/dashboard")>-1){
        this.data = 'Dashboard';
        setTimeout(()=>{
          $('#dashboard').addClass('colour');
        }, 300);
      } else if(window.location.href.indexOf('/vendor/business-services')>-1) {
       this.data = 'Business Services ';
        setTimeout(()=>{
          $('#Services').addClass('colour');
        }, 3000);
      } else if(window.location.href.indexOf('/vendor/business')>-1 ){
        this.data = 'Business information ';
        setTimeout(()=>{
          $('#business').addClass('colour');
        }, 300);
      } else if(window.location.href.indexOf('/vendor/location')>-1) {
        this.data = ' Location Trading ';
        setTimeout(()=>{
          $('#location_on').addClass('colour');
        }, 300);
      
      } else if(window.location.href.indexOf('/vendor/Message')>-1) {
        this.data = 'Messages ';
        setTimeout(()=>{
          $('#message').addClass('colour');
        }, 300);
      } else if(window.location.href.indexOf('/vendor/gallery')>-1) {
        this.data = 'Overview';
         setTimeout(()=>{
          $('#photo_album').addClass('colour');
        }, 300);
       } else if(window.location.href.indexOf('/vendor/portfolioview')>-1) {
        this.data = 'Portfolio';
         setTimeout(()=>{
          $('#photo_album').addClass('colour');
        }, 300);
      } else if(window.location.href.indexOf('/vendor/settingalbum')>-1) {
        this.data = 'PORTFOLIO PHOTO SETTINGS';
         setTimeout(()=>{
          $('#photo_album').addClass('colour');
        }, 300);
      } else if(window.location.href.indexOf('/vendor/albumview')>-1) {
       this.data = 'My Albums ';
        setTimeout(()=>{
          $('#photo_album').addClass('colour');
        }, 300);
      } else if(window.location.href.indexOf('/vendor/albumviewphoto')>-1) {
       this.data = 'My Albums ';
        setTimeout(()=>{
          $('#photo_album').addClass('colour');
        }, 300);
      } else if(window.location.href.indexOf('/vendor/albumdetailsetting')>-1) {
        this.data = 'PORTFOLIO PHOTO SETTINGS';
         setTimeout(()=>{
          $('#photo_album').addClass('colour');
        }, 300);
      } else if(window.location.href.indexOf('/vendor/Videos')>-1) {
        this.data = 'Videos';
        setTimeout(()=>{
          $('#play_circle_outline').addClass('colour');
        }, 300);
      } else if(window.location.href.indexOf('/vendor/vediosetting')>-1) {  
        this.data = 'Vedio Setting';
         setTimeout(()=>{
          $('#play_circle_outline').addClass('colour');
        }, 300);
      } else if(window.location.href.indexOf('/vendor/mylisting')>-1) {
        this.data = 'Reviews ';
        setTimeout(()=>{
          $('#stars').addClass('colour');
        }, 300);
      } else if(window.location.href.indexOf('/vendor/eventlist')>-1) {
        this.data = 'Events';
         setTimeout(()=>{
          $('#event_available').addClass('colour');
        }, 300);
      } else if(window.location.href.indexOf('/vendor/membership')>-1) {
        this.data = 'Membership ';
        setTimeout(()=>{
          $('#card_membership').addClass('colour');
        }, 300);
      } else if(window.location.href.indexOf('/vendor/calender')>-1) { 
        this.data = 'Planner';
         setTimeout(()=>{
          $('#Calender').addClass('colour');
        }, 300);


      } else if(window.location.href.indexOf('/vendor/PromoteBusiness')>-1) {
        this.data = 'Promote Business ';
         setTimeout(()=>{
          $('#Promotions').addClass('colour');
        }, 300);
      } else if(window.location.href.indexOf('/vendor/creatpromo')>-1) {
        this.data = 'Create Promotion';
         setTimeout(()=>{
          $('#Promotions').addClass('colour');
        }, 300);
      } else if(window.location.href.indexOf('/vendor/priority')>-1) {
        this.data = 'Priority Listings';
         setTimeout(()=>{
          $('#Promotions').addClass('colour');
        }, 300);
      } else if(window.location.href.indexOf('/vendor/homepage')>-1) {
        this.data = 'Home Page Banner';
         setTimeout(()=>{
          $('#Promotions').addClass('colour');
        }, 300);
      } else if(window.location.href.indexOf('/vendor/discountdeals')>-1) {
        this.data = 'Discount & Deals ';
         setTimeout(()=>{
          $('#DiscountDeals').addClass('colour');
        }, 300);
      } else if(window.location.href.indexOf('/vendor/statistics')>-1) {
        this.data = 'Statistics';
         setTimeout(()=>{
          $('#Statistics').addClass('colour');
        }, 300);
      } else if(window.location.href.indexOf('/vendor/actionfront')>-1) {
       this.data = 'Statistics ';
        setTimeout(()=>{
          $('#Statistics').addClass('colour');
        }, 300);
      } else if(window.location.href.indexOf('/vendor/enquiry')>-1) {
        this.data = 'Statistics ';
         setTimeout(()=>{
          $('#Statistics').addClass('colour');
        }, 300);
      } else if(window.location.href.indexOf('/vendor/gallerybar')>-1) {
        this.data = 'Statistics ';
         setTimeout(()=>{
          $('#Statistics').addClass('colour');
        }, 300);
      } else if(window.location.href.indexOf('/vendor/reachbar')>-1) {
       this.data = 'Statistics ';
        setTimeout(()=>{
          $('#Statistics').addClass('colour');
        }, 300);
      } else if(window.location.href.indexOf('/vendor/storefront')>-1) {
       this.data = 'Statistics ';
        setTimeout(()=>{
          $('#Statistics').addClass('colour');
        }, 300);
      } else if(window.location.href.indexOf('/vendor/editprofile')>-1) {
        this.data = 'My Account ';
      } else if(window.location.href.indexOf('/vendor/payment-selection')>-1) {
        this.data = 'Payment Methods'; 
      } else if(window.location.href.indexOf('/Admin/dashboard')>-1) {
        this.data = 'Dashboard'; 
      }
      else if(window.location.href.indexOf('/Admin/Customerbillings')>-1) {
        this.data = 'Invoicesfdfsdfsdfd'; 
      }
      else if(window.location.href.indexOf('/Admin/Taskboard')>-1) {
        this.data = 'Taskboard'; 
      }
      else{}
      
      
    
        $(document).ready(function(){
      $('.togglebtnmenu').on('click', function(){
          $(this).toggleClass('cross');
          $('.blackoverlaymobile').toggleClass('blockmobile');
          $('#page-content-wrapper').toggleClass('overhidden');
          $('#wrapper').toggleClass('toggled');
          });
      $(".navuserlink").click(function(){
            $(".blackoverlaymainuser").addClass( "blockmobile");
            $(".blackoverlaymainuser").css( 'right' , '0px');
            $(".blackoverlaymainuser").css( 'z-index' , '9999');
          });
      $(".blackoverlaymainuser").click(function(){
            $(".blackoverlaymainuser").removeClass( "blockmobile");
            $(".blackoverlaymainuser").css( 'right' , '-100%');
          });
      $('.blackoverlaymobile').on('click', function(){
        $('#wrapper').toggleClass('toggled');
        $('.togglebtnmenu').toggleClass('cross');
        $('.blackoverlaymobile').toggleClass('blockmobile');
        $('#page-content-wrapper').toggleClass('overhidden');
      });


      
                    $(".sendfeedback").hide();
                    $(".telluslike").hide();
                    $(".tellusunlike").hide();
                    $(".tellusidea").hide();

                    $(".sendfeedbackbtn").click(function(){ 
                            $(".feedbackrate").hide();
                            $(".telluslike").hide();
                            $(".tellusunlike").hide();
                            $(".tellusidea").hide();
                            $(".sendfeedback").show();
                        });

                    $(".likebtn").click(function(){ 
                   
                            $(".feedbackrate").hide();
                            $(".tellusunlike").hide();
                            $(".tellusidea").hide();
                            $(".sendfeedback").hide();
                            $(".telluslike").show();
                        });

                    $(".unlikebtn").click(function(){ 
                            $(".feedbackrate").hide();
                            $(".telluslike").hide();
                            $(".tellusunlike").show();
                            $(".tellusidea").hide();
                            $(".sendfeedback").hide();
                        });

                    $(".ideabtn").click(function(){ 
                            $(".feedbackrate").hide();
                            $(".telluslike").hide();
                            $(".tellusunlike").hide();
                            $(".tellusidea").show();
                            $(".sendfeedback").hide();
                        });

                    $(".backbtn1").click(function(){ 
                            $(".feedbackrate").show();
                            $(".telluslike").hide();
                            $(".tellusunlike").hide();
                            $(".tellusidea").hide();
                            $(".sendfeedback").hide();
                        });

                    $(".backbtn2").click(function(){ 
                            $(".feedbackrate").hide();
                            $(".telluslike").hide();
                            $(".tellusunlike").hide();
                            $(".tellusidea").hide();
                            $(".sendfeedback").show();
                        });
  
      //   $('.sidebar-nav .sidebar-brand').on('click', function(e){
      //     e.preventDefault();
      //     $(this).addClass('colour')
      //     // var id = $(this).attr('id')
      //   //  setTimeout(()=>{
      //   //    id.addClass('colour');
      //   // },4000);
      // });




           });
           this.unread(2)

  }
    
  

  
  
  
  typeLogout() {
    this.cservice.typeLogout();
}

ngOnChanges(){

};


  
search(newObj){

  const json ={
    "filter" : this.filter_id,
    "search" : this.find_name
  }
 
  this.hservice.vendorMessages(json).subscribe(( data )  =>  
            { 
              this.uiLoading = false;
              this.historyArray = data.json()  ;
              this.arrayLength =  this.historyArray.length
              this.unread_msg = this.historyArray.length;

            },error => 
            console.log(error) // error path
          )

}
unread(filter_id){
  this.deletIcon = false

  this.alltab = false;
  this.unreadtab = true;
  this.startedtab = false;

  this.filter_id = filter_id

  const json ={
    "filter" : filter_id
  }
  if(localStorage.getItem('userToken') != null){
    this.hservice.vendorMessages(json).subscribe(( data )  =>  
    { 
      this.uiLoading = false;
      this.historyArray = data.json()  ; 
      this.historyArray.forEach(element => {
        element['checked'] = false;
      });
      this.unread_msg = this.historyArray.length;
      this.arrayLength =  this.historyArray.length

    },error => 
    console.log(error) // error path
  )
  }  
        
}

  logout(){
           sessionStorage.clear();
         localStorage.clear();
         this.router.navigate(['../home']);
         this.typeLogout();
        }
      ChangeLanguage(language: string) {
        this.translate.use(language);
      }

      ToggleClass() {
          if (this.toggleClass === 'ft-maximize') {
              this.toggleClass = 'ft-minimize';
          }
          else
              this.toggleClass = 'ft-maximize'
      }
      
}

