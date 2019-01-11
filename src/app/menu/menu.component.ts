import { Component,  OnInit , Input } from '@angular/core';
import { LoginServiceService } from '../shared/service/login-service.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Http,Headers } from '@angular/http';
import { SignupVendorService } from '../shared/service/signup-vendor.service';
import 'rxjs/Rx';
import { MasterserviceService } from '../ngservices/masterservice.service';
import { apiService } from '../shared/service/api.service';
import{filterParam} from '../vendorcard/vendorcard.component'
import { ToastrService } from 'ngx-toastr';
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
    session_token
    private url: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/myprofile'
    vendor: any = {};
    objFilterParam: filterParam;
    constructor(private router: Router ,public toastr: ToastrService,private masterservice: MasterserviceService , private apiService: apiService,public http: Http,private cservice: LoginServiceService , private modalService: NgbModal, private uservice: SignupVendorService,) {
        this.objFilterParam = new filterParam();
    }
    user = {username:'',password:''}
    usercouple = {username:'',password:''}
    Categories = [];

    locations = [];
    locationId:number=0;
    Categorie(){ 
        this.masterservice.getAllCategories().subscribe(data => {
          this.Categories = data;
         },error => {  console.log(error) })
      }
      location(){ 
        this.masterservice.getAllLocation().subscribe(data => {
          this.locations = data;
         },error => {  console.log(error) })
      }
      search(e,isAllSupplier,isDreamLocation){
        if(e){
          this.objFilterParam.catId  = e.value.category?e.value.category.categoryId:0;
          this.objFilterParam.categoryName= e.value.category?e.value.category.categoryName: '' ;
        //   this.objFilterParam.isDreamLocation=isDreamLocation;
          this.objFilterParam.isAllSupplier=isAllSupplier;
          this.objFilterParam.page = 1;
          this.objFilterParam.pageSize = 25;
          this.objFilterParam.sortDir = "";
          this.objFilterParam.sortedBy ="";
          this.objFilterParam.searchQuery ="";
        //   this.objFilterParam.locationId = this.locationId;
         }
         sessionStorage.setItem('filterParam',JSON.stringify(this.objFilterParam));
           this.router.navigate(['home/searchresult',this.objFilterParam.categoryName.replace(/\s/g,'')]);
      }

      searchCat(e,isAllSupplier,isDreamLocation){      
          if(e){
            this.objFilterParam.catId  = e?e.categoryId:0;
            this.objFilterParam.categoryName= e?e.categoryName: '' ;
            this.objFilterParam.isDreamLocation=isDreamLocation;
            this.objFilterParam.isAllSupplier=isAllSupplier;
            this.objFilterParam.page = 1;
            this.objFilterParam.pageSize = 25;
            this.objFilterParam.sortDir = "";
            this.objFilterParam.sortedBy ="";
            this.objFilterParam.searchQuery ="";
            this.objFilterParam.locationId = this.locationId;
           }
           sessionStorage.setItem('filterParam',JSON.stringify(this.objFilterParam));
          //  window.location.reload();
             this.router.navigate(['home/searchresult',this.objFilterParam.categoryName.replace(/\s/g,'')]);
      
      
      }

    onSubmit(){ 
     // headers.append('Content-Type', 'application/json');
     this.cservice.login(this.usercouple).subscribe(
          (data)=> { 
          if (data.statusText == "OK" && data.json().role =="Vendors" ) {
            this.typeSuccess();
            localStorage.setItem('userId',data.json().id);
            localStorage.setItem('userToken',data.json().auth_token);
            sessionStorage.setItem('userToken',data.json().auth_token);
            this.router.navigate(['../vendor/dashboard'])
            $("body").removeClass( "modal-open");
            $("div").removeClass( "modal-backdrop"); 
          }
        
        },(ERROR)=>{  
            // alert("Login Vendor")  
            if (ERROR.statusText == "Bad Request" ) {
                this.error  = ERROR.json().login_failure[0];
                // this.toastr.warning(ERROR._body);
              this.typeWarning();
            }});
       
    }
    
    typeSuccess() {
        this.cservice.typeSuccess();
        // this.toastr.success('Login successfully', 'Success!');
    }
    typeWarning() {
        this.cservice.typeWarning();
        // this.toastr.warning('Invalid Username or Password');
    }
    typeLogout() {
        this.cservice.typeLogout();
        // this.toastr.success('Logout successfully', 'Success!');
    }


    //--------------------------------user login 

    userlogin(){ 
     // headers.append('Content-Type', 'application/json');
     this.cservice.login(this.user).subscribe(
          (data)=> {
           
              console.log(data.json());
          if (data.statusText == "OK"  && data.json().role =="Users") {
              
            sessionStorage.setItem('userToken',data.json().auth_token);

            this.typeSuccess();
            this.router.navigate(['../User/vendor'])
            $("div").removeClass( "modal-backdrop fade show");
            $("body").removeClass( "modal-open");
            localStorage.setItem('userId',data.json().id);
           // localStorage.setItem('userToken',data.json().auth_token);
            this.router.navigate(['../User/vendor'])
            $("body").removeClass( "modal-open");
            $("div").removeClass( "modal-backdrop"); 
          }
        
        },(ERROR)=>{     
            // alert("Login Couples");
            if (ERROR.statusText == "Bad Request" ) {
                this.error  = ERROR.json().login_failure[0];
                // this.toastr.warning(ERROR._body);
              this.typeWarning();
            }});
       
    }
    userSingUp = {email:' ',password:' ',confirmpass:'', firstName:'',lastName:''} 
    userSubmit(){
      this.uservice.usignup(this.userSingUp).subscribe(( data )  =>  {
            console.log(data);
              // this.toastr.warning(ERROR._body);
            // console.log(data.password)
    },(error)=>{
        this.toastr.warning(error._body);
        // this.typeWarning();
    });
    
    }
    //----------------userpanellogout
    logout(){
       
        sessionStorage.clear();
        localStorage.clear();
        this.router.navigate(['../home']);
        $(".loginclick").show();
        $("#sidebar-wrapper").hide();
        $(".userlogindisplay").hide();
        $(".vendorlogindisplay").hide();
    
    this.typeLogout();
    }
    ngOnInit() {
        
        this.Categorie();
        this.location();
        this.search;

     //   $('div').removeClass('modal-backdrop fade in show')
                $("#sidebar-wrapper").hide();
                $(".userlogindisplay").hide();
                $(".vendorlogindisplay").hide();

                var vendorid = localStorage.getItem('vendorid')
                this.session_token =   sessionStorage.getItem('userToken')
                if(this.session_token)
                {  
                    var firstName = localStorage.getItem('firstName');
                    let headers = new Headers();
                    var authToken = localStorage.getItem('userToken');
                    headers.append('Accept', 'application/json')
                    headers.append('Content-Type', 'application/json');
                    headers.append("Authorization",'Bearer '+authToken);
                    this.http.get(this.url,{headers:headers}).subscribe(
                        data =>{ this.vendor = data.json();
                                console.log(this.vendor);
                                 if(!this.vendor.profileImage )
                                {
                                console.log(this.vendor.profileImage);
                                this.vendor.profileImage = "https://cdn4.iconfinder.com/data/icons/gray-user-management/512/rounded-512.pngg"
                                }
                            });
                            if(window.location.href.indexOf("home") && vendorid)
                            {   
                                // alert("jjllll") 
                                $(".loginclick").hide();
                                $(".vendorlogindisplay").show();
                                $(".userlogindisplay").hide();
                            } else {   
                                $(".loginclick").hide(); 
                                $(".vendorlogindisplay").hide();
                                $(".userlogindisplay").show();
                            }
                } else {if(window.location.href.indexOf("home") > -1) {
                        $(".user").hide();    
                        $(".tikright").hide(); 
                        $(".tool_icons").hide();
                        } 
                }

                if(!this.session_token){
                 //   sessionStorage.clear();
                  //  this.router.navigate(['../home']);
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
                        //$(".navbar-toggler").hide();
                        $(".navbar-toggler").addClass("cross")

                        $(".navbtntik").show(); 
                        $(".navbar-toggler").removeClass("tik");
                        //$(".slidemenu").removeClass("outslide");
                        //$(".slidemenu").addClass("inslide"); 
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

                    // $(".slidemenu").addClass("rtslide111");  
                        //setTimeout(function() { $(".slidemenu").removeClass("rtslide111") }, 1000);
                        //$(".slidemenu").removeClass("inslide"); 
                        //$(".blackoverlaymain").removeClass( "blockmobile"); 
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
                        $(".tikright").show(); 
                        $(".slidemenu").removeClass("rtslide");
                        $(".tikrightclose").hide();
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
                    setTimeout(function() { $(".cross").hide() }, 300);
                    $(".navbtntik ").hide(); 
                    // alert("hi");
                    //$("mobileshowwebnav").addClass("lefttik");
                        //$("mobileshowwebnav").css('left', '-20px!important');

                    });
                    $(".backsilde").click(function(){
                    setTimeout(function() { $(".cross").show() }, 800);
                    //$(".cross").show(); 
                    $(".navbtntik ").show(); 
                    // alert("bye");
                    //$("mobileshowwebnav").css('left', '-20px!important');
                    });
                    $(".signuplink").click(function(){  
                        $("body").removeClass("modal-open"); 
                    });
    

                    $(".navuserlink").click(function(){
                                $(".blackoverlaymainuser").addClass( "blockmobile");
                                $(".blackoverlaymainuser").css( 'right' , '0px');
                                $(".blackoverlaymainuser").css( 'z-index' , '9999');
                            });

                    $(".navvendorlink").click(function(){
                                $(".blackoverlaymainuser").addClass( "blockmobile");
                                $(".blackoverlaymainuser").css( 'right' , '0px');
                                $(".blackoverlaymainuser").css( 'z-index' , '9999');
                            });

                    $(".blackoverlaymainuser").click(function(){
                        $(".blackoverlaymainuser").removeClass( "blockmobile");
                        $(".blackoverlaymainuser").css( 'right' , '-100%');
                        });
 
    
                    $(".tikrightclose").click(function(){ 
                        $(".tikrightclose").hide();
                        $(".slidemenu").addClass("outslide");
                        $(".slidemenu").addClass("rtslide111");
                        setTimeout(function() { $(".slidemenu").removeClass("rtslide111") }, 1000);
                        $(".slidemenu").removeClass("rtslide");
                        $(".blackoverlaymain").removeClass( "blockmobile"); 
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
                    //alert("hi")
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
        $("#panel10").removeClass( "in");
        $("#panel10").removeClass( "active");
        $("#panel10").removeClass( "show");
        $("#panel11").removeClass( "in");
        $("#panel11").removeClass( "active");
        $("#panel11").removeClass( "show");
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
        $("#panel10").removeClass( "in");
        $("#panel10").removeClass( "active");
        $("#panel10").removeClass( "show");
        $("#panel11").removeClass( "in");
        $("#panel11").removeClass( "active");
        $("#panel11").removeClass( "show");
    }
    forgotbox(){ 
        $("#panel9").removeClass( "in");
        $("#panel9").removeClass( "active");
        $("#panel9").removeClass( "show");
        $("#panel7").removeClass( "active");
        $("#panel7").removeClass( "show");
        $("#panel7").removeClass( "in");
        $("#panel8").removeClass( "in");
        $("#panel8").removeClass( "active");
        $("#panel8").removeClass( "show");
        $("#panel10").addClass( "in");
        $("#panel10").addClass( "active");
        $("#panel10").addClass( "show");
        $("#panel11").removeClass( "in");
        $("#panel11").removeClass( "active");
        $("#panel11").removeClass( "show");
    }
    forgotvendor(){ 
        $("#panel9").removeClass( "in");
        $("#panel9").removeClass( "active");
        $("#panel9").removeClass( "show");
        $("#panel7").removeClass( "active");
        $("#panel7").removeClass( "show");
        $("#panel7").removeClass( "in");
        $("#panel8").removeClass( "in");
        $("#panel8").removeClass( "active");
        $("#panel8").removeClass( "show");
        $("#panel10").removeClass( "in");
        $("#panel10").removeClass( "active");
        $("#panel10").removeClass( "show");
        $("#panel11").addClass( "in");
        $("#panel11").addClass( "active");
        $("#panel11").addClass( "show");
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

