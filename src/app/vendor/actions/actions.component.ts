import { Component, OnInit } from '@angular/core';
import * as chartsData from '../../shared/data/chartjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {

  basicplane
  ngOnInit() {
    this.basicplane = parseInt(localStorage.getItem('basic-plan')) 
    if(this.basicplane == '1' )
    { this.router.navigate(['../vendor/dashboard'])}
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
  constructor(  private router: Router) { }
  // lineChart
  public lineChartData = chartsData.lineChartData;
  public lineChartLabels = chartsData.lineChartLabels;
  public lineChartOptions = chartsData.lineChartOptions;
  public lineChartColors = chartsData.lineChartColors;
  public lineChartLegend = chartsData.lineChartLegend;
  public lineChartType = chartsData.lineChartType;
   // events
   public chartClicked(e: any): void {
    //your code here
  }

  public chartHovered(e: any): void {
    //your code here
  }

  //weekly
  public weeklylineChartData = chartsData.weeklylineChartData;
  public weeklylineChartLabels = chartsData.weeklylineChartLabels;
  public weeklylineChartOptions = chartsData.weeklylineChartOptions;
  public weeklylineChartColors = chartsData.weeklylineChartColors;
  public weeklylineChartLegend = chartsData.weeklylineChartLegend;
  public weeklylineChartType = chartsData.weeklylineChartType;
   // events
   public weeklychartClicked(e: any): void {
    //your code here
  }

  public weeklychartHovered(e: any): void {
    //your code here
  }
  /////daily
  public dailylineChartData = chartsData.dailylineChartData;
  public dailylineChartLabels = chartsData.dailylineChartLabels;
  public dailylineChartOptions = chartsData.dailylineChartOptions;
  public dailylineChartColors = chartsData.dailylineChartColors;
  public dailylineChartLegend = chartsData.dailylineChartLegend;
  public dailylineChartType = chartsData.dailylineChartType;
   // events
   public dailychartClicked(e: any): void {
    //your code here
  }

  public dailychartHovered(e: any): void {
    //your code here
  }
  
}
