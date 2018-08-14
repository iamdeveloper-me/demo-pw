import { Component, OnInit } from '@angular/core';
import * as chartsData from '../../shared/data/chartjs';
import { barChartSingle, barChartmulti, pieChartSingle, pieChartmulti, lineChartSingle, lineChartMulti, areaChartSingle, areaChartMulti } from '../../shared/data/ngxChart';
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
  }

  // lineChart
  public lineChartData = chartsData.lineChartData;
  public lineChartLabels = chartsData.lineChartLabels;
  public lineChartOptions = chartsData.lineChartOptions;
  public lineChartColors = chartsData.lineChartColors;
  public lineChartLegend = chartsData.lineChartLegend;
  public lineChartType = chartsData.lineChartType;

  // areaChart
  public areaChartData = chartsData.areaChartData;
  public areaChartLabels = chartsData.areaChartLabels;
  public areaChartOptions = chartsData.areaChartOptions;
  public areaChartColors = chartsData.areaChartColors;
  public areaChartLegend = chartsData.areaChartLegend;
  public areaChartType = chartsData.areaChartType;

  // scatterChart
  public scatterChartData = chartsData.scatterChartData;
  public scatterChartLabels = chartsData.scatterChartLabels;
  public scatterChartOptions = chartsData.scatterChartOptions;
  public scatterChartColors = chartsData.scatterChartColors;
  public scatterChartLegend = chartsData.scatterChartLegend;
  public scatterChartType = chartsData.scatterChartType;

  // barChart
  public barChartOptions = chartsData.barChartOptions;
  public barChartLabels = chartsData.barChartLabels;
  public barChartType = chartsData.barChartType;
  public barChartLegend = chartsData.barChartLegend;
  public barChartData = chartsData.barChartData;
  public barChartColors = chartsData.barChartColors;

  // Doughnut
  public doughnutChartLabels = chartsData.doughnutChartLabels;
  public doughnutChartData = chartsData.doughnutChartData;
  public doughnutChartType = chartsData.doughnutChartType;
  public doughnutChartColors = chartsData.doughnutChartColors;
  public doughnutChartOptions = chartsData.doughnutChartOptions;

  // Radar
  public radarChartLabels = chartsData.radarChartLabels;

  public radarChartData = chartsData.radarChartData;
  public radarChartType = chartsData.radarChartType;
  public radarChartColors = chartsData.radarChartColors;
  public radarChartOptions = chartsData.radarChartOptions;


  // Pie
  public pieChartLabels = chartsData.pieChartLabels;
  public pieChartData = chartsData.pieChartData;
  public pieChartType = chartsData.pieChartType;
  public pieChartColors = chartsData.pieChartColors;
  public pieChartOptions = chartsData.pieChartOptions;

  // PolarArea
  public polarAreaChartLabels = chartsData.polarAreaChartLabels;
  public polarAreaChartData = chartsData.polarAreaChartData;
  public polarAreaLegend = chartsData.polarAreaLegend;
  public ploarChartColors = chartsData.ploarChartColors;
  public polarAreaChartType = chartsData.polarAreaChartType;
  public polarChartOptions = chartsData.polarChartOptions;

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
      areaChartMulti = areaChartMulti;
      barChartmulti = barChartmulti;
      pieChartSingle = pieChartSingle;
  
      //Bar Charts
      barChartView: any[] = chart.barChartView;
  
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
  
      //Pie Charts
  
      pieChartView: any[] = chart.pieChartView;
  
      // options
      pieChartShowLegend = chart.pieChartShowLegend;
  
      pieChartColorScheme = chart.pieChartColorScheme;
  
      // pie
      pieChartShowLabels = chart.pieChartShowLabels;
      pieChartExplodeSlices = chart.pieChartExplodeSlices;
      pieChartDoughnut = chart.pieChartDoughnut;
      pieChartGradient = chart.pieChartGradient;
  
      pieChart1ExplodeSlices = chart.pieChart1ExplodeSlices;
      pieChart1Doughnut = chart.pieChart1Doughnut;
  
  
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
          Object.assign(this, { barChartmulti, pieChartSingle,  lineChartMulti,  areaChartMulti })
      }
  
      onSelect(event) {
         //your code here
      }
  

}
