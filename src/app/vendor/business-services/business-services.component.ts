import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
@Component({
  selector: 'app-business-services',
  templateUrl: './business-services.component.html',
  styleUrls: ['./business-services.component.scss'],

})
export class BusinessServicesComponent implements OnInit {

  

  ngOnInit() {
  $.getScript('./assets/js/vertical-timeline.js');
  // $.getScript('./assets/js/profile.js'); 
  $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/jquery/jquery.min.js');
  $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/bootstrap/js/bootstrap.bundle.min.js');
  $.getScript('./assets/js/vendorsidebar.js');
  }


  Photos(){
    swal.setDefaults({
      input: 'text',
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      //progressSteps: ['1']
    })
    
    var steps = [
      {
        title: 'Add your Photos link',
        //text: 'Chaining swal2 modals is easy'
      }
    ]
    
    swal.queue(steps).then((result) => {
      swal.resetDefaults()
    
      if (result.value) {
        swal({
          title: 'All done!',
          html:
            'Your Photos: <pre>' +
              JSON.stringify(result.value) +
            '</pre>',
          confirmButtonText: 'Lovely!'
        })
      }
    })
  }
 
  Photosandvedio(){
    swal.setDefaults({
      input: 'text',
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      //progressSteps: ['1']
    })
    
    var steps = [
      {
        title: 'Add your Photos and vedio link',
        //text: 'Chaining swal2 modals is easy'
      }
    ]
    
    swal.queue(steps).then((result) => {
      swal.resetDefaults()
    
      if (result.value) {
        swal({
          title: 'All done!',
          html:
            'Your Photos and vedio: <pre>' +
              JSON.stringify(result.value) +
            '</pre>',
          confirmButtonText: 'Lovely!'
        })
      }
    })
  }

 
  Candid(){
    swal.setDefaults({
      input: 'text',
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      //progressSteps: ['1']
    })
    
    var steps = [
      {
        title: 'Add your Candid Photography',
        //text: 'Chaining swal2 modals is easy'
      }
    ]
    
    swal.queue(steps).then((result) => {
      swal.resetDefaults()
    
      if (result.value) {
        swal({
          title: 'All done!',
          html:
            'Your Candid Photography: <pre>' +
              JSON.stringify(result.value) +
            '</pre>',
          confirmButtonText: 'Lovely!'
        })
      }
    })
  }
  Cinematography(){
    swal.setDefaults({
      input: 'text',
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      //progressSteps: ['1']
    })
    
    var steps = [
      {
        title: 'Add your Cinematography',
        //text: 'Chaining swal2 modals is easy'
      }
    ]
    
    swal.queue(steps).then((result) => {
      swal.resetDefaults()
    
      if (result.value) {
        swal({
          title: 'All done!',
          html:
            'Your Cinematography: <pre>' +
              JSON.stringify(result.value) +
            '</pre>',
          confirmButtonText: 'Lovely!'
        })
      }
    })
  }
  Studio(){
    swal.setDefaults({
      input: 'text',
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      //progressSteps: ['1']
    })
    
    var steps = [
      {
        title: 'Add your Studio Shoots',
        //text: 'Chaining swal2 modals is easy'
      }
    ]
    
    swal.queue(steps).then((result) => {
      swal.resetDefaults()
    
      if (result.value) {
        swal({
          title: 'All done!',
          html:
            'Your Studio Shoots: <pre>' +
              JSON.stringify(result.value) +
            '</pre>',
          confirmButtonText: 'Lovely!'
        })
      }
    })
  }
  PreWedding(){
    swal.setDefaults({
      input: 'text',
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      //progressSteps: ['1']
    })
    
    var steps = [
      {
        title: 'Add your Pre-Wedding Shoots',
        //text: 'Chaining swal2 modals is easy'
      }
    ]
    
    swal.queue(steps).then((result) => {
      swal.resetDefaults()
    
      if (result.value) {
        swal({
          title: 'All done!',
          html:
            'Your Pre-Wedding Shoots: <pre>' +
              JSON.stringify(result.value) +
            '</pre>',
          confirmButtonText: 'Lovely!'
        })
      }
    })
  }
  PhotosDelivered(){
    swal.setDefaults({
      input: 'text',
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      //progressSteps: ['1']
    })
    
    var steps = [
      {
        title: 'Add your Photos Delivered',
        //text: 'Chaining swal2 modals is easy'
      }
    ]
    
    swal.queue(steps).then((result) => {
      swal.resetDefaults()
    
      if (result.value) {
        swal({
          title: 'All done!',
          html:
            'Your Photos Delivered: <pre>' +
              JSON.stringify(result.value) +
            '</pre>',
          confirmButtonText: 'Lovely!'
        })
      }
    })
  }
  Experience(){
    swal.setDefaults({
      input: 'text',
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      //progressSteps: ['1']
    })
    
    var steps = [
      {
        title: 'Add your Experience',
        //text: 'Chaining swal2 modals is easy'
      }
    ]
    
    swal.queue(steps).then((result) => {
      swal.resetDefaults()
    
      if (result.value) {
        swal({
          title: 'All done!',
          html:
            'Your  Experience: <pre>' +
              JSON.stringify(result.value) +
            '</pre>',
          confirmButtonText: 'Lovely!'
        })
      }
    })
  }
  Payments(){
    swal.setDefaults({
      input: 'text',
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      //progressSteps: ['1']
    })
    
    var steps = [
      {
        title: 'Add your Payments Terms',
        //text: 'Chaining swal2 modals is easy'
      }
    ]
    
    swal.queue(steps).then((result) => {
      swal.resetDefaults()
    
      if (result.value) {
        swal({
          title: 'All done!',
          html:
            'Your  Payments Terms: <pre>' +
              JSON.stringify(result.value) +
            '</pre>',
          confirmButtonText: 'Lovely!'
        })
      }
    })
  }

  Travel(){
    swal.setDefaults({
      input: 'text',
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      //progressSteps: ['1']
    })
    
    var steps = [
      {
        title: 'Add your Travel Costs',
        //text: 'Chaining swal2 modals is easy'
      }
    ]
    
    swal.queue(steps).then((result) => {
      swal.resetDefaults()
    
      if (result.value) {
        swal({
          title: 'All done!',
          html:
            'Your Travel Costs: <pre>' +
              JSON.stringify(result.value) +
            '</pre>',
          confirmButtonText: 'Lovely!'
        })
      }
    })
  }
}

