import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { ChartType, ChartEvent } from "ng-chartist/dist/chartist.component";

//Declarations
declare var require: any;
const data: any = require('../../shared/data/chartist.json');


//Interface
export interface Chart {
  type: ChartType;
  data: Chartist.IChartistData;
  options?: any;
  responsiveOptions?: any;
  events?: ChartEvent;
}

@Component({
  selector: 'app-gallerybar',
  templateUrl: './gallerybar.component.html',
  styleUrls: ['./gallerybar.component.scss']
})
export class GallerybarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/jquery/jquery.min.js');
    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/bootstrap/js/bootstrap.bundle.min.js');
    $.getScript('./assets/js/vendorsidebar.js');
    $("#weekly").hide();
    $("#monthly").hide();
   $(".weekly").click(function(){
      $("#weekly").show();
      $("#monthly").hide();
      $("#daily").hide();
    });
     $(".monthly").click(function(){
      $("#monthly").show();
      $("#weekly").hide();
      $("#daily").hide();
    });
       $(".daily").click(function(){
      $("#daily").show();
      $("#weekly").hide();
      $("#monthly").hide();
    });
  }



  // Bar Chart Starts
  barChart: Chart = {
      type: 'Bar',
      data: data['Bar'],
      options: {
          seriesBarDistance: 21,
          axisX: {
              showGrid: false, offset: 100
          },
          axisY: {
              scaleMinSpace: 30,
          }
      },
  };
  // Bar Chart Ends

  weeklybarChart: Chart = {
    type: 'Bar',
    data: data['weeklyBar'],
    options: {
        seriesBarDistance: 21,
        axisX: {
            showGrid: false, offset: 100
        },
        axisY: {
            scaleMinSpace: 10,
        }
    },
};
monthlybarChart: Chart = {
  type: 'Bar',
  data: data['monthlyBar'],
  options: {
      seriesBarDistance: 21,
      axisX: {
          showGrid: false, offset: 100
      },
      axisY: {
          scaleMinSpace: 10,
      }
  },
};
}
