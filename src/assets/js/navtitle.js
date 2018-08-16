$(document).ready(function(){
    
    if(window.location.pathname == '/vendor/dashboard' ) {
        $("p:first").replaceWith("<h4> Dashboard </h4>");    
        }else if(window.location.pathname == '/vendor/business') {
            $("p:first").replaceWith(" <h4> Business information  </h4>");  
          } else if(window.location.pathname == '/vendor/location') {
            $("p:first").replaceWith(" <h4> Location Trading  </h4>");  
          } else if(window.location.pathname == '/vendor/business-services') {
            $("p:first").replaceWith(" <h4> Business Services  </h4>");  
          } else if(window.location.pathname == '/vendor/Message') {
            $("p:first").replaceWith(" <h4> Messages  </h4>");  
          } else if(window.location.pathname == '/vendor/gallery') {
            $("p:first").replaceWith(" <h4> Portfolio & Albums  </h4>");  
          } else if(window.location.pathname == '/vendor/Videos') {
            $("p:first").replaceWith("<h4> Videos  </h4>");  
          } else if(window.location.pathname == '/vendor/mylisting') {
            $("p:first").replaceWith("<h4> Reviews  </h4>");  
          } else if(window.location.pathname == '/vendor/membership') {
            $("p:first").replaceWith("<h4> Membership  </h4>");  
          } else if(window.location.pathname == '/vendor/PromoteBusiness') {
            $("p:first").replaceWith("<h4> Promotions  </h4>");  
          } else if(window.location.pathname == '/vendor/statistics') {
            $("p:first").replaceWith("<h4> Statistics  </h4>");  
          } else if(window.location.pathname == '/vendor/editprofile') {
            $("p:first").replaceWith("<h4> Edit profile  </h4>");  
          } else if(window.location.pathname == '/vendor/calender') {
            $("p:first").replaceWith("<h4> Calender </h4>");  
          }else{}
          

});