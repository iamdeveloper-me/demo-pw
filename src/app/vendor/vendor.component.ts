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

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
  $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/jquery/jquery.min.js');
  $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/bootstrap/js/bootstrap.bundle.min.js');
  $.getScript('./assets/js/vendorsidebar.js');
    // //sidebar toggle event listner
    // this.elementRef.nativeElement.querySelector('#sidebarToggle')
    //     .addEventListener('click', this.onClick.bind(this));
    // // //customizer events
    // this.elementRef.nativeElement.querySelector('#cz-compact-menu')
    //     .addEventListener('click', this.onClick.bind(this));
    // this.elementRef.nativeElement.querySelector('#cz-sidebar-width')
    //     .addEventListener('click', this.onClick.bind(this));
}


  onClick(event) {

    
    //initialize window resizer event on sidebar toggle click event
    setTimeout(() => { fireRefreshEventOnWindow() }, 300);
}

}
