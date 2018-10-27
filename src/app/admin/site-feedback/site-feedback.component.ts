import { Component, OnInit } from '@angular/core';
import * as chartsData from '../../shared/data/chartjs';
@Component({
  selector: 'app-site-feedback',
  templateUrl: './site-feedback.component.html',
  styleUrls: ['./site-feedback.component.scss']
})
export class SiteFeedbackComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //Crm
  public CrmdoughnutChartLabels = chartsData.CrmdoughnutChartLabels;
  public CrmdoughnutChartData = chartsData.CrmdoughnutChartData;
  public CrmdoughnutChartType = chartsData.CrmdoughnutChartType;
  public CrmdoughnutChartColors = chartsData.CrmdoughnutChartColors;
  public CrmdoughnutChartOptions = chartsData.CrmdoughnutChartOptions;

  //visitor
  public visitordoughnutChartLabels = chartsData.visitordoughnutChartLabels;
  public visitordoughnutChartData = chartsData.visitordoughnutChartData;
  public visitordoughnutChartType = chartsData.visitordoughnutChartType;
  public visitordoughnutChartColors = chartsData.visitordoughnutChartColors;
  public visitordoughnutChartOptions = chartsData.visitordoughnutChartOptions;
  
  
  public chartClicked(e: any): void {
    //your code here
  }

  public chartHovered(e: any): void {
    //your code here
  }
}
