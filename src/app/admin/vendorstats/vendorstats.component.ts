import { Component, OnInit } from '@angular/core';
import * as chartsData from '../../shared/data/chartjs';
@Component({
  selector: 'app-vendorstats',
  templateUrl: './vendorstats.component.html',
  styleUrls: ['./vendorstats.component.scss']
})
export class VendorstatsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
