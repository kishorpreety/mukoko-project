import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
// import 'owl.carousel';
import { Title, Meta } from '@angular/platform-browser';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Home - Mukoko';
  homebanner = {
    uptitle: 'We are innovators ',
    subtitle: 'in agriculture business',
    partext: 'Grow your money by increasing food production and earn upto 20% return on investment.',
    anchorText: 'Invest Today',
    anchorLink: '/home',
  };
  homebannerSec = {
    uptitle: 'We are innovators ',
    subtitle: 'in agriculture business',
    partext: 'Grow your money by increasing food production and earn upto 20% return on investment.',
    anchorText: 'Invest Today',
    anchorLink: '/home',
  };
  opportunities = {
    header: 'New Opportunities ',
    headerPara: 'Invest on your convenience. A new way to invest in agriculture.',
    features: [
      {featureimage:'new-opp-1.png', title:'Poultry Farm', locText:'Lagos State', price: '₦20,000', nowSell: 'Now Selling', return: '14% Returns in 6 months'},
    ]
  };
  HowItworks = {
    title : 'How it works',
    sections: [
      {icon: '', title: 'Join Mukoko', desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
      {icon: '', title: 'Start Investing', desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
      {icon: '', title: 'Track Updates', desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
      {icon: '', title: 'Get Returns', desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
    ],
    para: 'Get instant answers for the most common questions here.',
    freqTxt: 'Frequently Asked Questions',
    freqLink: '/',
  }
  peopleSay = {
    img: 'say-about.png',
    title: 'What people say about us',
    subTitle: 'Don’t just take our word for it',
    para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    btnText: ' See Farmers Stories',
    btnHref: '/story'
  }
  safeSection = {
    title: "Safe, Confidential and Insured",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    img: "safe.png",
  }
  constructor(
    private titleService: Title,
    private metaTagService: Meta,
    private config: ConfigService
  ) { }
  carouselOptions = {
    loop: true,
    margin: 0,
    items: 1,
    dots: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    smartSpeed: 1200,
    autoHeight: false,
    autoplay: true,
  };

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag(
      { name: 'description', content: 'Add song template' }
    );
   // this.home = this.getHeader();
  }
 /* getHeader(){
     return this.config.getConfig().home;
  }*/

}
