import { Component, OnInit } from '@angular/core';
import {  areaChartMulti,weeklyChartMulti ,monthlyChartMulti } from '../../shared/data/ngxChart';
import * as chart from './ngx-charts.config';

@Component({
  selector: 'app-storefront',
  templateUrl: './storefront.component.html',
  styleUrls: ['./storefront.component.scss']
})
export class StorefrontComponent implements OnInit {


  ngOnInit() {
    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/jquery/jquery.min.js');
    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/bootstrap/js/bootstrap.bundle.min.js');
    $.getScript('./assets/js/vendorsidebar.js');
    
   $(".weekly").click(function(){
      $(".weeklyreport").show();
      $(".weeklyreport").css({'position':'relative'});
      $(".weeklyreport").css({'z-index':'999'});
      $(".monthlyreport").hide();
      $(".dailyreport").hide();
    });
     $(".monthly").click(function(){
      $(".monthlyreport").show();
       $(".monthlyreport").css({'position':'relative'});
      $(".monthlyreport").css({'z-index':'999'});
      $(".weeklyreport").hide();
      $(".dailyreport").hide();
    });
       $(".daily").click(function(){
      $(".dailyreport").show();
      $(".weeklyreport").hide();
      $(".monthlyreport").hide();
    });
  }
  constructor() {
    Object.assign(this, { areaChartMulti ,weeklyChartMulti , monthlyChartMulti} )
    

}


  // //second area chart 
  //     //Chart Data
   
      areaChartMulti = areaChartMulti;
      weeklyChartMulti = weeklyChartMulti;
      monthlyChartMulti = monthlyChartMulti;
      //Area Charts
  
      areaChartView = chart.areaChartView;
  
      // options
      areaChartShowXAxis = chart.areaChartShowXAxis;
      areaChartShowYAxis = chart.areaChartShowYAxis;
      areaChartGradient = chart.areaChartGradient;
      areaChartShowLegend = chart.areaChartShowLegend;
      areaChartShowXAxisLabel = chart.areaChartShowXAxisLabel;
      areaChartXAxisLabel = chart.areaChartXAxisLabel;
      areaChartShowYAxisLabel = chart.areaChartShowYAxisLabel;
      areaChartYAxisLabel = chart.areaChartYAxisLabel;
  
      areaChartColorScheme = chart.areaChartColorScheme;
  
      // line, area
      areaChartAutoScale = chart.areaChartAutoScale;
      areaChartLineInterpolation = chart.areaChartLineInterpolation;
  
   
      onSelect(event) {
         //your code here
      }
  
//weekly
      //Area Charts
  
      weeklyChartView = chart.weeklyChartView;
  
      // options
      weeklyChartShowXAxis = chart.weeklyChartShowXAxis;
      weeklyChartShowYAxis = chart.weeklyChartShowYAxis;
      weeklyChartGradient = chart.weeklyChartGradient;
      weeklyChartShowLegend = chart.weeklyChartShowLegend;
      weeklyChartShowXAxisLabel = chart.weeklyChartShowXAxisLabel;
      weeklyChartXAxisLabel = chart.weeklyChartXAxisLabel;
      weeklyChartShowYAxisLabel = chart.weeklyChartShowYAxisLabel;
      weeklyChartYAxisLabel = chart.weeklyChartYAxisLabel;
  
      weeklyChartColorScheme = chart.weeklyChartColorScheme;
  
      // line, area
      weeklyChartAutoScale = chart.weeklyChartAutoScale;
      weeklyChartLineInterpolation = chart.weeklyChartLineInterpolation;
  

  
      onSelectweekly(event) {
         //your code here
      }
      //monthly
      //Area Charts
  
      monthlyChartView = chart.monthlyChartView;
  
      // options
      monthlyChartShowXAxis = chart.monthlyChartShowXAxis;
      monthlyChartShowYAxis = chart.monthlyChartShowYAxis;
      monthlyChartGradient = chart.monthlyChartGradient;
      monthlyChartShowLegend = chart.monthlyChartShowLegend;
      monthlyChartShowXAxisLabel = chart.monthlyChartShowXAxisLabel;
      monthlyChartXAxisLabel = chart.monthlyChartXAxisLabel;
      monthlyChartShowYAxisLabel = chart.monthlyChartShowYAxisLabel;
      monthlyChartYAxisLabel = chart.monthlyChartYAxisLabel;
  
      monthlyChartColorScheme = chart.monthlyChartColorScheme;
  
      // line, area
      monthlyChartAutoScale = chart.monthlyChartAutoScale;
      monthlyChartLineInterpolation = chart.monthlyChartLineInterpolation;
  

  
      onSelectmonthly(event) {
         //your code here
      }

    }
