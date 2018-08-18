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

    $(".weekly").click(function(){
        $(".weeklyreport").show();
        $(".weeklyreport").css({'position': 'relative'});
        $(".weeklyreport").css({'z-index': '999'});
        $(".monthlyreport").hide();
        $(".dailyreport").hide();
      });


     $(".monthly").click(function(){
        $(".weeklyreport").hide();
        $(".monthlyreport").css({'position': 'relative'});
        $(".monthlyreport").css({'z-index': '999'});
        $(".monthlyreport").show();
        $(".dailyreport").hide();
    });
       $(".daily").click(function(){
        $(".weeklyreport").hide();
        $(".monthlyreport").hide();
        $(".dailyreport").show();
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
