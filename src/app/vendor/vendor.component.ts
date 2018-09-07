import { Http ,Headers} from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Component, OnInit , ElementRef } from '@angular/core';

var fireRefreshEventOnWindow = function () {
  var evt = document.createEvent("HTMLEvents");
  evt.initEvent('resize', true, false);
  window.dispatchEvent(evt);
};

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss']
})
export class VendorComponent implements OnInit {
  totalImage = [];
  private albumget: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Albums/myalbums'
  private url: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/'

  constructor(private http: Http ,private elementRef: ElementRef,  private route: ActivatedRoute  ) { }

  ngOnInit() {
    this.route.params.subscribe( params => 
      console.log(params) 
    );
  $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/jquery/jquery.min.js');
  $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/bootstrap/js/bootstrap.bundle.min.js');
  $.getScript('./assets/js/vendorsidebar.js');
  $("div").removeClass( "modal-backdrop"); 

    // //sidebar toggle event listner
    // this.elementRef.nativeElement.querySelector('#sidebarToggle')
    //     .addEventListener('click', this.onClick.bind(this));
    // // //customizer events
    // this.elementRef.nativeElement.querySelector('#cz-compact-menu')
    //     .addEventListener('click', this.onClick.bind(this));
    // this.elementRef.nativeElement.querySelector('#cz-sidebar-width')
    //     .addEventListener('click', this.onClick.bind(this));
    let headers = new Headers();
      var authToken = localStorage.getItem('userToken');
      headers.append('Accept', 'application/json')
      headers.append('Content-Type', 'application/json');
      headers.append("Authorization",'Bearer '+authToken);
      this.http.get(this.albumget,{headers:headers})
      .subscribe(data =>{console.log(data.json());  });

      //Album Get
      this.http.get(this.url+'api/Albums/myalbums',{headers:headers})
      .subscribe(data =>{
       this.totalImage =  data.json()[0].albumImages; 
      });
}


  onClick(event) {

    
    //initialize window resizer event on sidebar toggle click event
    setTimeout(() => { fireRefreshEventOnWindow() }, 300);
}

}
