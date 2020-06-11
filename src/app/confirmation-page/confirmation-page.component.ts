import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-confirmation-page',
  templateUrl: './confirmation-page.component.html',
  styleUrls: ['./confirmation-page.component.css']
})
export class ConfirmationPageComponent implements OnInit {

  title = 'Sponsorshop Confirmation - Mukoko';
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
