import { TemplateRef } from '@angular/core';
import { Component,  OnInit , Input } from '@angular/core';
import {LoginServiceService} from '../shared/service/login-service.service';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
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
    supArray:string[];  
    constructor( private cservice: LoginServiceService ,public _router:Router, private modalService: NgbModal, private http: HttpClient) {}

    ngOnInit() { 
        if(window.location.pathname == '/home'||'home/events'||'home/tips'||'home/photo' ) {
        $(".user").hide();    
        } 
    
        let obs = this.http.get("http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Categories");

        obs.subscribe(data => {
       this.supArray =data as string[]; console.log(data) 
        })

      
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
        $(".navbar-toggler").hide();
        $(".navbtntik").show(); 
        $(".navbar-toggler").removeClass("tik");
        $(".slidemenu").removeClass("outslide");
        $(".slidemenu").addClass("inslide"); 
        $(".blackoverlaymain").addClass( "blockmobile"); 
    });

    $(".navbtntik").click(function(){
        $(".navbar-toggler").show(); 
        $(".navbtntik").hide(); 
        $(".navbar-collapse").removeClass("in");
        // $(".slidemenu").addClass("outslide");  
        // setTimeout(function() { $(".slidemenu").removeClass("outslide") }, 500);
        $(".slidemenu").removeClass("inslide"); 
        $(".blackoverlaymain").removeClass( "blockmobile"); 
    });
       $(".nav-item, .blackoverlaymain").click(function(){
       //alert("hi");
        $(".navbar-toggler").show(); 
        $(".navbtntik").hide(); 
        $(".navbar-collapse").removeClass("in");
        $(".slidemenu").addClass("outslide");  
        setTimeout(function() { $(".slidemenu").removeClass("outslide") }, 500);
        $(".slidemenu").removeClass("inslide");
        $(".blackoverlaymain").removeClass( "blockmobile"); 
        $(".tool_icons").removeClass("in"); 
        $(".tikright").show(); 
        $(".slidemenu").removeClass("rtslide");
        $(".tikrightclose").hide();
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

    $(window).scroll(function () {
    var sc = $(window).scrollTop()
    if (sc > 100) {
        $(".headernav").addClass("head_small")
    } else {
        $(".headernav").removeClass("head_small")
    }
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
//    $(".vendorlogin").show();
//    $(".customerlogin").hide();
   
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
//    $(".vendorlogin").hide();
//    $(".customerlogin").show();
   }
//end
    
remove(){
    if(window.location.pathname == '/home' )
    {     
        $("body").removeClass( "modal-open");
        $("body").css({ 'padding-right' : '' }); 
   }
}
   
        



user = {username:' ',password:' '}
onSubmit(){ 
 // headers.append('Content-Type', 'application/json');
  
 this.cservice.login(this.user).subscribe(
      (data)=> {console.log(data);   
      console.log(data.status);
      console.log(data.statusText);
      if (data.statusText == "OK" ) {


        console.log('Success','Login Successfully')

      }
      else
      { console.log('Login Fail')}
    });
   
}
typeSuccess() {
    this.cservice.typeSuccess();
}
}
