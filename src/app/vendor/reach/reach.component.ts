import { Component, OnInit } from '@angular/core';
import { reachlineChartMulti , reachweeklylineChartMulti, reachmonthlylineChartMulti} from '../../shared/data/ngxChart';
import * as chartsData from '../../shared/configs/ngx-charts.config';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reach',
  templateUrl: './reach.component.html',
  styleUrls: ['./reach.component.scss']
})
export class ReachComponent implements OnInit {

  constructor(private router: Router) {   Object.assign(this, {  reachlineChartMulti , reachweeklylineChartMulti, reachmonthlylineChartMulti }) }
  basicplane;
  ngOnInit() {
    this.basicplane = parseInt(localStorage.getItem('basic-plan')) 
    if(this.basicplane == '1' )
    { this.router.navigate(['../vendor/dashboard'])}
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
  reachlineChartMulti = reachlineChartMulti;
  //Line Charts
  reachlineChartView: any[] = chartsData. reachlineChartView;
  // options
  reachlineChartShowXAxis = chartsData.reachlineChartShowXAxis;
  reachlineChartShowYAxis = chartsData.reachlineChartShowYAxis;
  reachlineChartGradient = chartsData.reachlineChartGradient;
  reachlineChartShowLegend = chartsData.reachlineChartShowLegend;
  reachlineChartShowXAxisLabel = chartsData.reachlineChartShowXAxisLabel;
  reachlineChartXAxisLabel = chartsData.reachlineChartXAxisLabel;
  reachlineChartShowYAxisLabel = chartsData.reachlineChartShowYAxisLabel;
  reachlineChartYAxisLabel = chartsData.reachlineChartYAxisLabel;
  reachlineChartColorScheme = chartsData.reachlineChartColorScheme;
  // line, area
  reachlineChartAutoScale = chartsData.reachlineChartAutoScale;
  reachlineChartLineInterpolation = chartsData.reachlineChartLineInterpolation;


////////////////////////////////////////////////////////////////////////weekly
reachweeklylineChartMulti = reachweeklylineChartMulti;
//Line Charts

reachweeklylineChartView: any[] = chartsData.reachweeklylineChartView;

// options
reachweeklylineChartShowXAxis = chartsData.reachweeklylineChartShowXAxis;
reachweeklylineChartShowYAxis = chartsData.reachweeklylineChartShowYAxis;
reachweeklylineChartGradient = chartsData.reachweeklylineChartGradient;
reachweeklylineChartShowLegend = chartsData.reachweeklylineChartShowLegend;
reachweeklylineChartShowXAxisLabel = chartsData.reachweeklylineChartShowXAxisLabel;
reachweeklylineChartXAxisLabel = chartsData.reachweeklylineChartXAxisLabel;
reachweeklylineChartShowYAxisLabel = chartsData.reachweeklylineChartShowYAxisLabel;
reachweeklylineChartYAxisLabel = chartsData.reachweeklylineChartYAxisLabel;

reachweeklylineChartColorScheme = chartsData.reachweeklylineChartColorScheme;

// line, area
reachweeklylineChartAutoScale = chartsData.reachweeklylineChartAutoScale;
reachweeklylineChartLineInterpolation = chartsData.reachweeklylineChartLineInterpolation;




////////////////////////////////////////////////////////////////////monthly
reachmonthlylineChartMulti = reachmonthlylineChartMulti;
//Line Charts

reachmonthlylineChartView: any[] = chartsData.reachmonthlylineChartView;

// options
reachmonthlylineChartShowXAxis = chartsData.reachmonthlylineChartShowXAxis;
reachmonthlylineChartShowYAxis = chartsData.reachmonthlylineChartShowYAxis;
reachmonthlylineChartGradient = chartsData.reachmonthlylineChartGradient;
reachmonthlylineChartShowLegend = chartsData.reachmonthlylineChartShowLegend;
reachmonthlylineChartShowXAxisLabel = chartsData.reachmonthlylineChartShowXAxisLabel;
reachmonthlylineChartXAxisLabel = chartsData.reachmonthlylineChartXAxisLabel;
reachmonthlylineChartShowYAxisLabel = chartsData.reachmonthlylineChartShowYAxisLabel;
reachmonthlylineChartYAxisLabel = chartsData.reachmonthlylineChartYAxisLabel;

reachmonthlylineChartColorScheme = chartsData.reachmonthlylineChartColorScheme;

// line, area
reachmonthlylineChartAutoScale = chartsData.reachmonthlylineChartAutoScale;
reachmonthlylineChartLineInterpolation = chartsData.reachmonthlylineChartLineInterpolation;


onSelect(event) {
   //your code here
}
}
