import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-sponsorshop',
  templateUrl: './sponsorshop.component.html',
  styleUrls: ['./sponsorshop.component.css']
})
export class SponsorshopComponent implements OnInit {
  title = 'Sponsorshop - Mukoko';
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
