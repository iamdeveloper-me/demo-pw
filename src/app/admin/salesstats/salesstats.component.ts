import { Component, OnInit } from '@angular/core';
import * as chartsData from '../../shared/data/chartjs';
import * as Chartist from 'chartist';
import { ChartType, ChartEvent } from "ng-chartist/dist/chartist.component";

declare var require: any;

const data: any = require('../../shared/data/chartist.json');

export interface Chart {
    type: ChartType;
    data: Chartist.IChartistData;
    options?: any;
    responsiveOptions?: any;
    events?: ChartEvent;
}
@Component({
  selector: 'app-salesstats',
  templateUrl: './salesstats.component.html',
  styleUrls: ['./salesstats.component.scss']
})
export class SalesstatsComponent implements OnInit {

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

        // line chart configuration Starts
        WidgetlineChart: Chart = {
          type: 'Line', data: data['WidgetlineChart'],
          options: {
              axisX: {
                  showGrid: true,
                  showLabel: false,
                  offset: 0,
              },
              axisY: {
                  showGrid: false,
                  low: 40,
                  showLabel: false,
                  offset: 0,
              },
              lineSmooth: Chartist.Interpolation.cardinal({
                  tension: 0
              }),
              fullWidth: true,
          },
      };
      // Line chart configuration Ends
}
