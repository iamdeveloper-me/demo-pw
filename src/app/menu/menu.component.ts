
import { Component,  OnInit , Input } from '@angular/core';
import { LoginServiceService } from '../shared/service/login-service.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { SignupVendorService } from '../shared/service/signup-vendor.service';
import 'rxjs/Rx';
 
export class NgbdModalContent {
  @Input() name;
  constructor(public activeModal: NgbActiveModal) { }
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {
    error = {} ;
    supArray:string[];
    constructor( private router: Router ,private cservice: LoginServiceService , private modalService: NgbModal, private uservice: SignupVendorService,) {}
    user = {username:' ',password:' '}
    usercouple = {username:' ',password:' '}
    onSubmit(){ 
     // headers.append('Content-Type', 'application/json');
      
     this.cservice.login(this.usercouple).subscribe(
          (data)=> {
              console.log(data.json());

          if (data.statusText == "OK" && data.json().role =="Vendors" ) {
            this.typeSuccess();
            localStorage.setItem('userId',data.json().id);
            localStorage.setItem('userToken',data.json().auth_token);
         
            this.router.navigate(['../vendor/dashboard'])
            $("body").removeClass( "modal-open");
            $("div").removeClass( "modal-backdrop"); 
          }
        
        },(ERROR)=>{     
            if (ERROR.statusText == "Bad Request" ) {
                this.error  = ERROR.json().login_failure[0];
            
              this.typeWarning();
            }});
       
    }
    
    typeSuccess() {
        this.cservice.typeSuccess();
    }
    typeWarning() {
        this.cservice.typeWarning();
    }
    typeLogout() {
        this.cservice.typeLogout();
    }

    //--------------------------------user login 

 userlogin(){ 
     // headers.append('Content-Type', 'application/json');
      
     this.cservice.login(this.user).subscribe(
          (data)=> {
              console.log(data.json());
          if (data.statusText == "OK"  && data.json().role =="Users") {
            this.typeSuccess();
            this.router.navigate(['../User/vendor'])
            $("div").removeClass( "modal-backdrop fade show");
            $("body").removeClass( "modal-open");
            localStorage.setItem('userId',data.json().id);
            localStorage.setItem('userToken',data.json().auth_token);
            this.router.navigate(['../User/vendor'])
            $("body").removeClass( "modal-open");
            $("div").removeClass( "modal-backdrop"); 
          }
        
        },(ERROR)=>{     
            if (ERROR.statusText == "Bad Request" ) {
                this.error  = ERROR.json().login_failure[0];
            
              this.typeWarning();
            }});
       
    }




    userSingUp = {email:' ',password:' ',confirmpass:'', firstName:'',lastName:''}
    
    userSubmit(){
      this.uservice.usignup(this.userSingUp).subscribe(( data )  =>  {
            console.log(data);
            // console.log(data.password)
    });
    
    }

 //----------------userpanellogout
 
 
  
 logout(){

    localStorage.clear();
    this.router.navigate(['../home']);
    $(".user").hide(); 
    $(".loginclick").show();
    this.typeLogout();
    
   }

    ngOnInit() { 
        $(".tikright").hide();
        var authToken = localStorage.getItem('userToken');
        if(authToken)
        {  
            if(window.location.href.indexOf("home"))
            {   
                $(".loginclick").hide();
                $(".user").show(); 
                
            }
        }
        else 
        {
        if(window.location.href.indexOf("home") > -1) {
          $(".user").hide();    
          $(".tikright").hide(); 
         } 
        }
    

        //  if(window.location.pathname == '/home/photo') {
        // $(".user").hide();    
        // $(".tikright").hide(); 
        // } 
        //  if(window.location.pathname == '/home/tips') {
        // $(".user").hide();    
        // $(".tikright").hide(); 
        // } 
        //  if(window.location.pathname == '/home/events') {
        // $(".user").hide();    
        // $(".tikright").hide(); 
        // } 
        //  if(window.location.pathname == '/home/Careers') {
        // $(".user").hide();    
        // $(".tikright").hide(); 
        // } 
        //   if(window.location.pathname == '/home/FAQ') {
        // $(".user").hide();    
        // $(".tikright").hide(); 
        // } 
        //   if(window.location.pathname == '/home/contact') {
        // $(".user").hide();    
        // $(".tikright").hide(); 
        // } 
        // if(window.location.pathname == '/home/searchresult') {
        // $(".user").hide();    
        // $(".tikright").hide(); 
        // } 
        // if(window.location.pathname == '/home/category') {
        // $(".user").hide();    
        // $(".tikright").hide(); 
        // } 
        // if(window.location.pathname == '/home/searchresult') {
        // $(".user").hide();    
        // $(".tikright").hide(); 
        // } 

        // if(window.location.pathname == '/home/detailprofile') {
        // $(".user").hide();    
        // $(".tikright").hide(); 
        // } 

        // if(window.location.pathname == '/home/event_list') {
        //     $(".user").hide();    
        //     $(".tikright").hide(); 
        //     } 
        // if(window.location.pathname == '/home/tips_list') {
        //     $(".user").hide();    
        //     $(".tikright").hide(); 
        //     }
        

     //loginpage
     $("#id9").hide();
     $("#id19").hide();
     $(".signup_click").click(function(){
       $("#panel8").addClass( "in");
       $("#panel8").addClass( "active");
       $("#panel7").removeClass( "active");
       $("#panel7").removeClass( "show");
       $("#panel7").removeClass( "in"); 
       $(".logintab").removeClass( "active");
       $(".registertab").addClass( "active");
     });
 
     $(".signin_click").click(function(){
       $("#panel8").removeClass( "in");
       $("#panel8").removeClass( "active");
       $("#panel8").removeClass( "show");
       $("#panel7").addClass( "active");
       $("#panel7").addClass( "show");
       $("#panel7").addClass( "in");
       $(".logintab").addClass( "active");
       $(".registertab").removeClass( "active");
     });


    
    //end
    $(".tik").click(function(){
        $(".navbar-collapse").addClass("in");
        //$(".navbar-toggler").hide();
        $(".navbar-toggler").addClass("cross")

        $(".navbtntik").show(); 
        $(".navbar-toggler").removeClass("tik");
        $(".slidemenu").removeClass("outslide");
        $(".slidemenu").addClass("inslide"); 
        $(".blackoverlaymain").addClass( "blockmobile"); 
        $(".fixedtik").addClass( "positionfixed"); 
        $(".dark_footer").hide(); 

    });

    $(".navbtntik").click(function(){
        $(".navbar-toggler").show(); 
        $(".navbtntik").hide(); 
        $(".navbar-collapse").removeClass("in");
        $(".navbar-toggler").removeClass("cross")
        $(".navbar-toggler").addClass("tik");

        $(".slidemenu").addClass("rtslide111");  
        setTimeout(function() { $(".slidemenu").removeClass("rtslide111") }, 1000);
        $(".slidemenu").removeClass("inslide"); 
        $(".blackoverlaymain").removeClass( "blockmobile"); 
        setTimeout(function() { $(".fixedtik").removeClass("positionfixed") }, 1000);
        $(".dark_footer").show();
    });
 
       $(".blackoverlaymain").click(function(){
       //alert("ramjane");
        $(".navbar-toggler").show(); 
        $(".navbtntik").hide(); 
        $(".navbar-toggler").removeClass("cross")
        $(".navbar-collapse").removeClass("in");
        $(".slidemenu").addClass("outslide");  
        $(".slidemenu").addClass("rtslide111");
        setTimeout(function() { $(".slidemenu").removeClass("rtslide111") }, 1000);
        $(".slidemenu").removeClass("inslide");
        $(".blackoverlaymain").removeClass( "blockmobile"); 
        $(".tool_icons").removeClass("in"); 
        setTimeout(function() { $(".fixedtik").removeClass("positionfixed") }, 1000);
        //$(".tikright").show(); 
        //$(".slidemenu").removeClass("rtslide");
        //$(".tikrightclose").hide();
         $(".dark_footer").show();
    });

$(".homemenu").click(function(){
       //alert("ramjane");
        $(".navbar-toggler").show(); 
        $(".navbtntik").hide(); 
        $(".navbar-toggler").removeClass("cross")
        $(".navbar-collapse").removeClass("in");

        setTimeout(function() { $(".fixedtik").removeClass("positionfixed") }, 1000);
       // $(".slidemenu").addClass("outslide");  
        //$(".slidemenu").addClass("rtslide111");
       // setTimeout(function() { $(".slidemenu").removeClass("rtslide111") }, 1000);
        $(".slidemenu").removeClass("inslide");
        $(".blackoverlaymain").removeClass( "blockmobile"); 
        $(".tool_icons").removeClass("in"); 
        //$(".tikright").show(); 
        //$(".slidemenu").removeClass("rtslide");
        //$(".tikrightclose").hide();
         $(".dark_footer").show();
    });



     $(".mobileslidewednav").click(function(){
       // alert("hi");
       //$("mobileshowwebnav").addClass("lefttik");
         //$("mobileshowwebnav").css('left', '-20px!important');

    });
     $(".backsilde").click(function(){
       // alert("bye");
      
         //$("mobileshowwebnav").css('left', '-20px!important');

    });




    $(".signuplink").click(function(){
        
        $("body").removeClass("modal-open"); 
    });
$(".tikright").click(function(){
        $(".tool_icons").addClass("in");
        $(".tikright").hide(); 
        $(".tikrightclose").show();
        $(".slidemenu").addClass("rtslide");
         $(".slidemenu").removeClass("outslide");
        $(".blackoverlaymain").addClass( "blockmobile"); 
    });
    $(".tikrightclose").click(function(){    
        $(".tool_icons").removeClass("in");
        $(".tikright").show(); 
        $(".tikrightclose").hide();
        $(".slidemenu").addClass("outslide");
        $(".slidemenu").removeClass("rtslide");
        $(".blackoverlaymain").removeClass( "blockmobile"); 
    });

 


  
    }

    
//loginpage
loadScript(){ 
    $("#panel9").removeClass( "in");
    $("#panel9").removeClass( "active");
    $("#panel9").removeClass( "show");
    $("#panel7").removeClass( "active");
    $("#panel7").removeClass( "show");
    $("#panel7").removeClass( "in");
    $("#panel8").addClass( "in");
    $("#panel8").addClass( "active");
    $("#panel8").addClass( "show");
   }
   userin(){
   $("#panel9").removeClass( "in");
   $("#panel9").removeClass( "active");
   $("#panel9").removeClass( "show");
   $("#panel7").addClass( "active");
   $("#panel7").addClass( "show");
   $("#panel7").addClass( "in");
   $("#panel8").removeClass( "in");
   $("#panel8").removeClass( "active");
   $("#panel8").removeClass( "show");
   }
//end
    
remove(){
    if(window.location.pathname == '/home' )
    {     
        $("body").removeClass( "modal-open");
        $("body").css({ 'padding-right' : '' }); 
   }
}
   

}

