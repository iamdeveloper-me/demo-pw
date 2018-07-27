


import { TemplateRef } from '@angular/core';
import { Component,  OnInit , Input } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
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

   
    ngOnInit() { 
      
        if(window.location.pathname == '/home'||'home/events'||'home/tips'||'home/photo' ) {
           $(".user").hide();    
        } 
    

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
    $("#panel9").addClass( "in");
    $("#panel9").addClass( "active");
    $("#panel9").addClass( "show");
    $("#panel7").removeClass( "active");
    $("#panel7").removeClass( "show");
    $("#panel7").removeClass( "in");
    $("#panel8").removeClass( "in");
    $("#panel8").removeClass( "active");
    $("#panel8").removeClass( "show");
   $(".vendorlogin").show();
   $(".customerlogin").hide();
   
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
   $(".vendorlogin").hide();
   $(".customerlogin").show();
   }
//end
    
remove(){
    if(window.location.pathname == '/home' )
    {     
        $("body").removeClass( "modal-open");
        $("body").css({ 'padding-right' : '' }); 
   }

}

constructor( public _router:Router, private modalService: NgbModal) {}
    save() {
        //Do stuff
        this._router.navigateByUrl('home/photo');
        location.reload();      
    }
 

}
