import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  footer = {
    topImg: 'home-footer.png',
    logo: 'footer-logo.png',
    company: 'Company',
    about: 'About Us',
    aboutLink: '/about-us',
    stories: 'Stories',
    storiesLink: '/story',
    onlineShop: 'Online Shop',
    onlineshopLink: 'farmshop',
    sponser: 'Sponser Now',
    sponserLink: '/sponsorshop',
    partner: ' Partner Us',
    partnerLink: '/partner',
    faqs: 'FAQs',
    faqsLink: '/faq',
    blog: 'Blog',
    blogLink: '/',
    contact: 'Contact Us',
    contactLink:'/contact-us',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    privacyLink: '/privacy-policy',
    disclaimer: 'Disclaimer',
    disclaimerLink: '/disclaimer',
    termsUse: 'Terms of use',
    termsUseLink: '/terms-of-use',
    termssponsorship: 'Terms of Sponsorship',
    termssponsorshipLink: '/terms-of-sponsorship',
    cotactHead: 'Contact',
    adress: 'info@pamukoko.com',
    tel: '+234 (0) 706 000 0000',
    copyrighttext: 'Secured with SSL  | Copyright &copy; 2020 Mukoko Platfom. All rights reserved.',
}

  constructor() { }

  ngOnInit(): void {
  }

}
