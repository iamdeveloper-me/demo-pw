import { Component, OnInit } from '@angular/core';
import * as chartsData from '../../shared/data/chartjs';
@Component({
  selector: 'app-networkstats',
  templateUrl: './networkstats.component.html',
  styleUrls: ['./networkstats.component.scss']
})
export class NetworkstatsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
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
