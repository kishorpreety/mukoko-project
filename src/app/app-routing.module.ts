import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'about-us', loadChildren: () => import('./about-us/about-us.module').then(m => m.AboutUsModule) },
  { path: 'faq', loadChildren: () => import('./faq/faq.module').then(m => m.FaqModule) },
  { path: 'contact-us', loadChildren: () => import('./contact-us/contact-us.module').then(m => m.ContactUsModule) },
  { path: 'partner', loadChildren: () => import('./partner/partner.module').then(m => m.PartnerModule) },
  { path: 'story', loadChildren: () => import('./story/story.module').then(m => m.StoryModule) },
  { path: 'page-not-found', loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule) },
  { path: 'privacy-policy', loadChildren: () => import('./privacy-policy/privacy-policy.module').then(m => m.PrivacyPolicyModule) },
  { path: 'disclaimer', loadChildren: () => import('./disclaimer/disclaimer.module').then(m => m.DisclaimerModule) },
  { path: 'terms-of-use', loadChildren: () => import('./terms-of-use/terms-of-use.module').then(m => m.TermsOfUseModule) },
  // tslint:disable-next-line: max-line-length
  { path: 'terms-of-sponsorship', loadChildren: () => import('./terms-of-sponsorship/terms-of-sponsorship.module').then(m => m.TermsOfSponsorshipModule) },
  { path: 'sponsorshop', loadChildren: () => import('./sponsorshop/sponsorshop.module').then(m => m.SponsorshopModule) },
  { path: 'farmshop', loadChildren: () => import('./farmshop/farmshop.module').then(m => m.FarmshopModule) },
   /*{ path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)},*/
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
    })],
    exports: [RouterModule]
    })
    export class AppRoutingModule { }


