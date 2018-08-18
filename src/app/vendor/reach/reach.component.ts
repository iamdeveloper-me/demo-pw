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
  selector: 'app-reach',
  templateUrl: './reach.component.html',
  styleUrls: ['./reach.component.scss']
})
export class ReachComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/jquery/jquery.min.js');
    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/bootstrap/js/bootstrap.bundle.min.js');
    $.getScript('./assets/js/vendorsidebar.js');
    $("#weekly").hide();
    $("#monthly").hide();
   
    $(".weekly").click(function(){
      $(".weeklyreport").addClass("show");
      $(".monthlyreport").addClass("hide");
      $(".dailyreport").addClass("hide");
      $(".weeklyreport").removeClass("hide");
      $(".monthlyreport").removeClass("show");
      $(".dailyreport").removeClass("show");
    });

     $(".monthly").click(function(){
        $(".weeklyreport").addClass("hide");
        $(".monthlyreport").addClass("show");
        $(".dailyreport").addClass("hide");
        $(".weeklyreport").removeClass("show");
        $(".monthlyreport").removeClass("hide");
        $(".dailyreport").removeClass("show");
    });
       $(".daily").click(function(){
        $(".weeklyreport").addClass("hide");
        $(".monthlyreport").addClass("hide");
        $(".dailyreport").addClass("show");
        $(".weeklyreport").removeClass("show");
        $(".monthlyreport").removeClass("show");
        $(".dailyreport").removeClass("hide");
    });
  }
  lineChart2: Chart = {
    type: 'Line', data: data['line2'],
    options: {
        axisX: {
            showGrid: false,
        },
        axisY: {
            low: 0,
            scaleMinSpace: 50,
        },
        fullWidth: true,
        chartPadding: { top: 0, right: 25, bottom: 0, left: 0 },
    },
    responsiveOptions: [
        ['screen and (max-width: 640px) and (min-width: 381px)', {
            axisX: {
                labelInterpolationFnc: function (value, index) {
                    return index % 2 === 0 ? value : null;
                }
            }
        }],
        ['screen and (max-width: 380px)', {
            axisX: {
                labelInterpolationFnc: function (value, index) {
                    return index % 3 === 0 ? value : null;
                }
            }
        }]
    ],
    events: {
        draw(data: any): void {
            var circleRadius = 6;
            if (data.type === 'point') {
                var circle = new Chartist.Svg('circle', {
                    cx: data.x,
                    cy: data.y,
                    r: circleRadius,
                    class: 'ct-point-circle'
                });

                data.element.replace(circle);
            }
        }
    },

};
//weekly
weeklylineChart2: Chart = {
    type: 'Line', data: data['weeklyline2'],
    options: {
        axisX: {
            showGrid: false,
        },
        axisY: {
            low: 0,
            scaleMinSpace: 50,
        },
        fullWidth: true,
        chartPadding: { top: 0, right: 25, bottom: 0, left: 0 },
    },
    responsiveOptions: [
        ['screen and (max-width: 640px) and (min-width: 381px)', {
            axisX: {
                labelInterpolationFnc: function (value, index) {
                    return index % 2 === 0 ? value : null;
                }
            }
        }],
        ['screen and (max-width: 380px)', {
            axisX: {
                labelInterpolationFnc: function (value, index) {
                    return index % 3 === 0 ? value : null;
                }
            }
        }]
    ],
    events: {
        draw(data: any): void {
            var circleRadius = 6;
            if (data.type === 'point') {
                var circle = new Chartist.Svg('circle', {
                    cx: data.x,
                    cy: data.y,
                    r: circleRadius,
                    class: 'ct-point-circle'
                });

                data.element.replace(circle);
            }
        }
    },

};
//monthly
monthlylineChart2: Chart = {
    type: 'Line', data: data['monthlyline2'],
    options: {
        axisX: {
            showGrid: false,
        },
        axisY: {
            low: 0,
            scaleMinSpace: 50,
        },
        fullWidth: true,
        chartPadding: { top: 0, right: 25, bottom: 0, left: 0 },
    },
    responsiveOptions: [
        ['screen and (max-width: 640px) and (min-width: 381px)', {
            axisX: {
                labelInterpolationFnc: function (value, index) {
                    return index % 2 === 0 ? value : null;
                }
            }
        }],
        ['screen and (max-width: 380px)', {
            axisX: {
                labelInterpolationFnc: function (value, index) {
                    return index % 3 === 0 ? value : null;
                }
            }
        }]
    ],
    events: {
        draw(data: any): void {
            var circleRadius = 6;
            if (data.type === 'point') {
                var circle = new Chartist.Svg('circle', {
                    cx: data.x,
                    cy: data.y,
                    r: circleRadius,
                    class: 'ct-point-circle'
                });

                data.element.replace(circle);
            }
        }
    },

};
}
