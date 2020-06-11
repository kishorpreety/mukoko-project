import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-terms-of-sponsorship',
  templateUrl: './terms-of-sponsorship.component.html',
  styleUrls: ['./terms-of-sponsorship.component.css']
})
export class TermsOfSponsorshipComponent implements OnInit {
   title = 'Terms Of Sponsorship - Mukoko';
  constructor(
    private titleService: Title,
    private metaTagService: Meta
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag(
      { name: 'description', content: 'Add song template' }
    );
  }

}
