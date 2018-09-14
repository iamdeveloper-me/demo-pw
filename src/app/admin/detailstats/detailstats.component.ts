import { Component, OnInit } from '@angular/core';
import * as chartsData from '../../shared/data/chartjs';
@Component({
  selector: 'app-detailstats',
  templateUrl: './detailstats.component.html',
  styleUrls: ['./detailstats.component.scss']
})
export class DetailstatsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/jquery/jquery.min.js');
  $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/bootstrap/js/bootstrap.bundle.min.js');
  $.getScript('./assets/js/vendorsidebar.js');
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
    
}


}