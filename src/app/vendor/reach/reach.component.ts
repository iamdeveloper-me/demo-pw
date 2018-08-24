import { Component, OnInit } from '@angular/core';
import { lineChartMulti , weeklylineChartMulti,monthlylineChartMulti} from '../../shared/data/ngxChart';
import * as chartsData from '../../shared/configs/ngx-charts.config';

@Component({
  selector: 'app-reach',
  templateUrl: './reach.component.html',
  styleUrls: ['./reach.component.scss']
})
export class ReachComponent implements OnInit {

  constructor() {   Object.assign(this, { lineChartMulti }) }

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
  lineChartMulti = lineChartMulti;
  //Line Charts

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


//weekly
weeklylineChartMulti = weeklylineChartMulti;
//Line Charts

weeklylineChartView: any[] = chartsData.weeklylineChartView;

// options
weeklylineChartShowXAxis = chartsData.weeklylineChartShowXAxis;
weeklylineChartShowYAxis = chartsData.weeklylineChartShowYAxis;
weeklylineChartGradient = chartsData.weeklylineChartGradient;
weeklylineChartShowLegend = chartsData.weeklylineChartShowLegend;
weeklylineChartShowXAxisLabel = chartsData.weeklylineChartShowXAxisLabel;
weeklylineChartXAxisLabel = chartsData.weeklylineChartXAxisLabel;
weeklylineChartShowYAxisLabel = chartsData.weeklylineChartShowYAxisLabel;
weeklylineChartYAxisLabel = chartsData.weeklylineChartYAxisLabel;

weeklylineChartColorScheme = chartsData.weeklylineChartColorScheme;

// line, area
weeklylineChartAutoScale = chartsData.weeklylineChartAutoScale;
weeklylineChartLineInterpolation = chartsData.weeklylineChartLineInterpolation;
//monthly
monthlylineChartMulti = monthlylineChartMulti;
//Line Charts

monthlylineChartView: any[] = chartsData.monthlylineChartView;

// options
monthlylineChartShowXAxis = chartsData.monthlylineChartShowXAxis;
monthlylineChartShowYAxis = chartsData.monthlylineChartShowYAxis;
monthlylineChartGradient = chartsData.monthlylineChartGradient;
monthlylineChartShowLegend = chartsData.monthlylineChartShowLegend;
monthlylineChartShowXAxisLabel = chartsData.monthlylineChartShowXAxisLabel;
monthlylineChartXAxisLabel = chartsData.monthlylineChartXAxisLabel;
monthlylineChartShowYAxisLabel = chartsData.monthlylineChartShowYAxisLabel;
monthlylineChartYAxisLabel = chartsData.monthlylineChartYAxisLabel;

monthlylineChartColorScheme = chartsData.monthlylineChartColorScheme;

// line, area
monthlylineChartAutoScale = chartsData.monthlylineChartAutoScale;
monthlylineChartLineInterpolation = chartsData.monthlylineChartLineInterpolation;


onSelect(event) {
   //your code here
}
}
