import { Component, OnInit } from '@angular/core';
import * as chartsData from '../../shared/data/chartjs';

@Component({
  selector: 'app-sitestatsandreports',
  templateUrl: './sitestatsandreports.component.html',
  styleUrls: ['./sitestatsandreports.component.scss']
})
export class SitestatsandreportsComponent implements OnInit {
 
  public salesdoughnutChartLabels = chartsData.salesdoughnutChartLabels;
  public salesdoughnutChartData = chartsData.salesdoughnutChartData;
  public salesdoughnutChartType = chartsData.salesdoughnutChartType;
  public salesdoughnutChartColors = chartsData.salesdoughnutChartColors;
  public salesdoughnutChartOptions = chartsData.salesdoughnutChartOptions;

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

  //network
  public networkdoughnutChartLabels = chartsData.networkdoughnutChartLabels;
  public networkdoughnutChartData = chartsData.networkdoughnutChartData;
  public networkdoughnutChartType = chartsData.networkdoughnutChartType;
  public networkdoughnutChartColors = chartsData.networkdoughnutChartColors;
  public networkdoughnutChartOptions = chartsData.networkdoughnutChartOptions;

  //category
  public categorydoughnutChartLabels = chartsData.categorydoughnutChartLabels;
  public categorydoughnutChartData = chartsData.categorydoughnutChartData;
  public categorydoughnutChartType = chartsData.categorydoughnutChartType;
  public categorydoughnutChartColors = chartsData.categorydoughnutChartColors;
  public categorydoughnutChartOptions = chartsData.categorydoughnutChartOptions;

  //vendor
  public vendordoughnutChartLabels = chartsData.vendordoughnutChartLabels;
  public vendordoughnutChartData = chartsData.vendordoughnutChartData;
  public vendordoughnutChartType = chartsData.vendordoughnutChartType;
  public vendordoughnutChartColors = chartsData.vendordoughnutChartColors;
  public vendordoughnutChartOptions = chartsData.vendordoughnutChartOptions;
  public chartClicked(e: any): void {
    //your code here
  }
  public chartHovered(e: any): void {
    //your code here
  }
  constructor() { }
  ngOnInit() {   
    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/jquery/jquery.min.js');
    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/bootstrap/js/bootstrap.bundle.min.js');
    $.getScript('./assets/js/vendorsidebar.js');
    }

}
