import { Component, OnInit } from '@angular/core';
import * as chartsData from '../../shared/data/chartjs';
import { barChartmulti, lineChartMulti, areaChartMulti ,reachlineChartMulti,gallerybarChartmulti} from '../../shared/data/ngxChart';
import * as chart from './ngx-charts.config';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  free_user;
  ngOnInit() {
    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/jquery/jquery.min.js');
    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/bootstrap/js/bootstrap.bundle.min.js');
    $.getScript('./assets/js/vendorsidebar.js');

    this.free_user = localStorage.getItem('basic-plan');
        

  }

  // lineChart
  public lineChartData = chartsData.lineChartData;
  public lineChartLabels = chartsData.lineChartLabels;
  public lineChartOptions = chartsData.lineChartOptions;
  public lineChartColors = chartsData.lineChartColors;
  public lineChartLegend = chartsData.lineChartLegend;
  public lineChartType = chartsData.lineChartType;
 
   // reachlineChart
   public reachlineChartData = chartsData.reachlineChartData;
   public reachlineChartLabels = chartsData.reachlineChartLabels;
   public reachlineChartOptions = chartsData.reachlineChartOptions;
   public reachlineChartColors = chartsData.reachlineChartColors;
   public reachlineChartLegend = chartsData.reachlineChartLegend;
   public reachlineChartType = chartsData.reachlineChartType;
  



  // barChart
  public barChartOptions = chartsData.barChartOptions;
  public barChartLabels = chartsData.barChartLabels;
  public barChartType = chartsData.barChartType;
  public barChartLegend = chartsData.barChartLegend;
  public barChartData = chartsData.barChartData;
  public barChartColors = chartsData.barChartColors;


  // GallerybarChart
  public gallerybarChartOptions = chartsData.gallerybarChartOptions;
  public gallerybarChartLabels = chartsData.gallerybarChartLabels;
  public gallerybarChartType = chartsData.gallerybarChartType;
  public gallerybarChartLegend = chartsData.gallerybarChartLegend;
  public gallerybarChartData = chartsData.gallerybarChartData;
  public gallerybarChartColors = chartsData.gallerybarChartColors;

  // events
  public chartClicked(e: any): void {
    //your code here
  }

  public chartHovered(e: any): void {
    //your code here
  }

  //second area chart 
      //Chart Data
      lineChartMulti = lineChartMulti;
      reachlineChartMulti = reachlineChartMulti;
      areaChartMulti = areaChartMulti;
      barChartmulti = barChartmulti;
      gallerybarChartmulti = gallerybarChartmulti;
  
      //Bar Charts
      barChartView: any[] = chart.barChartView;
      gallerybarChartView: any[] = chart.gallerybarChartView;
      // options
      barChartShowYAxis = chart.barChartShowYAxis;
      barChartShowXAxis = chart.barChartShowXAxis;
      barChartGradient = chart.barChartGradient;
      barChartShowLegend = chart.barChartShowLegend;
      barChartShowXAxisLabel = chart.barChartShowXAxisLabel;
      barChartXAxisLabel = chart.barChartXAxisLabel;
      barChartShowYAxisLabel = chart.barChartShowYAxisLabel;
      barChartYAxisLabel = chart.barChartYAxisLabel;
      barChartColorScheme = chart.barChartColorScheme;
  
  
  
      //Line Charts
  
      lineChartView: any[] = chart.lineChartView;
  
      // options
      lineChartShowXAxis = chart.lineChartShowXAxis;
      lineChartShowYAxis = chart.lineChartShowYAxis;
      lineChartGradient = chart.lineChartGradient;
      lineChartShowLegend = chart.lineChartShowLegend;
      lineChartShowXAxisLabel = chart.lineChartShowXAxisLabel;
      lineChartXAxisLabel = chart.lineChartXAxisLabel;
      lineChartShowYAxisLabel = chart.lineChartShowYAxisLabel;
      lineChartYAxisLabel = chart.lineChartYAxisLabel;
  
      lineChartColorScheme = chart.lineChartColorScheme;
  
      // line, area
      lineChartAutoScale = chart.lineChartAutoScale;
      lineChartLineInterpolation = chart.lineChartLineInterpolation;
  
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
  
      constructor() {
          Object.assign(this, { barChartmulti, lineChartMulti,  areaChartMulti ,gallerybarChartmulti,reachlineChartMulti})
      }
  
      onSelect(event) {
         //your code here
      }
  

}


 