import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import * as jquery from 'jquery';
declare var jQuery: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
    (function ($) {
      $(document).ready(function(){
            //Canvas Menu
            $(".canvas__open").on('click', function () {
              $(".offcanvas__menu__wrapper").addClass("show__offcanvas__menu");
              $(".offcanvas__menu__overlay").addClass("active");
          });

          $(".canvas__close, .offcanvas__menu__overlay").on('click', function () {
              $(".offcanvas__menu__wrapper").removeClass("show__offcanvas__menu");
              $(".offcanvas__menu__overlay").removeClass("active");
          });
          $(".mobile-menu").slicknav({
            prependTo: '#mobile-menu-wrap',
            allowParentLinks: true
        });
      });
    })(jQuery);
  }
  hasRoute(route: string) {
    return this.router.url.includes(route);
  }

}
