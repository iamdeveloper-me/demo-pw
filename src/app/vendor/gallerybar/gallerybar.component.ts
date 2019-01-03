import { Component, OnInit } from '@angular/core';
import * as chartsData from '../../shared/data/chartjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-gallerybar',
  templateUrl: './gallerybar.component.html',
  styleUrls: ['./gallerybar.component.scss']
})
export class GallerybarComponent implements OnInit {

  constructor(  private router: Router) { }

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
        $(".weeklyreport").css({'position': 'relative'});
        $(".weeklyreport").css({'z-index': '999'});
        $(".monthlyreport").hide();
        $(".dailyreport").hide();
      });


     $(".monthly").click(function(){
        $(".weeklyreport").hide();
        $(".monthlyreport").css({'position': 'relative'});
        $(".monthlyreport").css({'z-index': '999'});
        $(".monthlyreport").show();
        $(".dailyreport").hide();
    });
       $(".daily").click(function(){
        $(".weeklyreport").hide();
        $(".monthlyreport").hide();
        $(".dailyreport").show();
    });
  }

 // barChart
  public GallerymonthlybarChartOptions = chartsData.GallerymonthlybarChartOptions;
  public GallerymonthlybarChartLabels = chartsData.GallerymonthlybarChartLabels;
  public GallerymonthlybarChartType = chartsData.GallerymonthlybarChartType;
  public GallerymonthlybarChartLegend = chartsData.GallerymonthlybarChartLegend;
  public GallerymonthlybarChartData = chartsData.GallerymonthlybarChartData;
  public GallerymonthlybarChartColors = chartsData.GallerymonthlybarChartColors;


  public GallerymonthlybarClicked(e: any): void {
    //your code here
  }

  public GallerymonthlybarHovered(e: any): void {
    //your code here
  
  }
  
//daily barchart
  // barChart
  public GallerydailybarData = chartsData.GallerydailybarData;
  public GallerydailybarLabels = chartsData.GallerydailybarLabels;
  public GallerydailybarOptions = chartsData.GallerydailybarOptions;
  public GallerydailybarColors = chartsData.GallerydailybarColors;
  public GallerydailybarLegend = chartsData.GallerydailybarLegend;
  public GallerydailybarType = chartsData.GallerydailybarType;

  public GallerydailybarClicked(e: any): void {
    //your code here
  }

  public GallerydailybarHovered(e: any): void {
    //your code here
  
  }

  
  //weekly barchart
  public GalleryweeklybarData = chartsData.GalleryweeklybarData;
  public GalleryweeklybarLabels = chartsData.GalleryweeklybarLabels;
  public GalleryweeklybarOptions = chartsData.GalleryweeklybarOptions;
  public GalleryweeklybarColors = chartsData.GalleryweeklybarColors;
  public GalleryweeklybarLegend = chartsData.GalleryweeklybarLegend;
  public GalleryweeklybarType = chartsData.GalleryweeklybarType;

  public GalleryweeklybarClicked(e: any): void {
    //your code here
  }

  public GalleryweeklybarHovered(e: any): void {
    //your code here
  
  }

}
