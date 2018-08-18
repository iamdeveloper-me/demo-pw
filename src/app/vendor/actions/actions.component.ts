import { Component, OnInit } from '@angular/core';
import {  lineChartMulti ,linemonthlyChartMulti,lineweeklyChartMulti} from '../../shared/data/ngxChart';
import * as chartsData from '../../shared/configs/ngx-charts.config';


@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {


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

    //Line Charts
    lineChartMulti = lineChartMulti;
    linemonthlyChartMulti = linemonthlyChartMulti;
    lineweeklyChartMulti = lineweeklyChartMulti;

    lineChartView: any[] = chartsData.lineChartView;

    // options
    lineChartShowXAxis = chartsData.lineChartShowXAxis;
    lineChartShowYAxis = chartsData.lineChartShowYAxis;
    lineChartGradient = chartsData.lineChartGradient;
    lineChartShowLegend = chartsData.lineChartShowLegend;
    lineChartShowXAxisLabel = chartsData.lineChartShowXAxisLabel;
    lineChartXAxisLabel = chartsData.lineChartXAxisLabel;
    lineChartShowYAxisLabel = chartsData.lineChartShowYAxisLabel;
    lineChartYAxisLabel = chartsData.lineChartYAxisLabel;

    lineChartColorScheme = chartsData.lineChartColorScheme;

    // line, area
    lineChartAutoScale = chartsData.lineChartAutoScale;
    lineChartLineInterpolation = chartsData.lineChartLineInterpolation;

    constructor() {
      Object.assign(this, {   lineChartMulti ,linemonthlyChartMulti, lineweeklyChartMulti })
  }

  onSelect(event) {
     //your code here
  }
//weekly
lineweeklyChartView: any[] = chartsData.lineweeklyChartView;

// options
lineweeklyChartShowXAxis = chartsData.lineweeklyChartShowXAxis;
lineweeklyChartShowYAxis = chartsData.lineweeklyChartShowYAxis;
lineweeklyChartGradient = chartsData.lineweeklyChartGradient;
lineweeklyChartShowLegend = chartsData.lineweeklyChartShowLegend;
lineweeklyChartShowXAxisLabel = chartsData.lineweeklyChartShowXAxisLabel;
lineweeklyChartXAxisLabel = chartsData.lineweeklyChartXAxisLabel;
lineweeklyChartShowYAxisLabel = chartsData.lineweeklyChartShowYAxisLabel;
lineweeklyChartYAxisLabel = chartsData.lineweeklyChartYAxisLabel;

lineweeklyChartColorScheme = chartsData.lineweeklyChartColorScheme;

// line, area
lineweeklyChartAutoScale = chartsData.lineweeklyChartAutoScale;
lineweeklyChartLineInterpolation = chartsData.lineweeklyChartLineInterpolation;



onSelectweekly(event) {
 //your code here
}
//monthly
monthlyChartView: any[] = chartsData.linemonthlyChartView;

// options
linemonthlyChartShowXAxis = chartsData.linemonthlyChartShowXAxis;
linemonthlyChartShowYAxis = chartsData.linemonthlyChartShowYAxis;
linemonthlyChartGradient = chartsData.linemonthlyChartGradient;
linemonthlyChartShowLegend = chartsData.linemonthlyChartShowLegend;
linemonthlyChartShowXAxisLabel = chartsData.linemonthlyChartShowXAxisLabel;
linemonthlyChartXAxisLabel = chartsData.linemonthlyChartXAxisLabel;
linemonthlyChartShowYAxisLabel = chartsData.linemonthlyChartShowYAxisLabel;
linemonthlyChartYAxisLabel = chartsData.linemonthlyChartYAxisLabel;

linemonthlyChartColorScheme = chartsData.linemonthlyChartColorScheme;

// line, area
linemonthlyChartAutoScale = chartsData.linemonthlyChartAutoScale;
linemonthlyChartLineInterpolation = chartsData.linemonthlyChartLineInterpolation;

onSelectmonthly(event) {
 //your code here
}
}
