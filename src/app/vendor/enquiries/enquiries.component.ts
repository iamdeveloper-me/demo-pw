import { Component, OnInit } from '@angular/core';
import * as chartsData from '../../shared/data/chartjs';

@Component({
  selector: 'app-enquiries',
  templateUrl: './enquiries.component.html',
  styleUrls: ['./enquiries.component.scss']
})
export class EnquiriesComponent implements OnInit {

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

  // barChart
  public barChartOptions = chartsData.barChartOptions;
  public barChartLabels = chartsData.barChartLabels;
  public barChartType = chartsData.barChartType;
  public barChartLegend = chartsData.barChartLegend;
  public barChartData = chartsData.barChartData;
  public barChartColors = chartsData.barChartColors;


  public chartClicked(e: any): void {
    //your code here
  }

  public chartHovered(e: any): void {
    //your code here
  
  }

}
