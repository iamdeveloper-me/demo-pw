import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-foot',
  templateUrl: './foot.component.html',
  styleUrls: ['./foot.component.scss']
})
export class FootComponent implements OnInit {

  constructor(private meta : Meta,private title : Title) { }
  ngOnInit() {
    // this.title.setTitle('Tools to plan your wedding | couples');    
    // this.meta.addTag({name:'description',content:'Tools to plan your wedding | couples'});    

                $(".footer_bg button.btn.btn-info").click(function(){
                  $(this).toggleClass("hide_menus");
                });

                $(".wedding-icon1").click(function() {
                  $('html,body').animate({ scrollTop: $("#venders1").offset().top},'slow');
                });

                $(".wedding-icon3").click(function() {
                  $('html,body').animate({scrollTop: $("#checklist1").offset().top},'slow');
                });

                $(".wedding-icon2").click(function() {
                  $('html,body').animate({ scrollTop: $("#guestlist1").offset().top},'slow');
                });

                $(".wedding-icon4").click(function() {
                  $('html,body').animate({ scrollTop: $("#control1").offset().top},'slow');
                });    
  }

}
