import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-farmshop',
  templateUrl: './farmshop.component.html',
  styleUrls: ['./farmshop.component.css']
})
export class FarmshopComponent implements OnInit {

  title = 'Farmshop - Mukoko';
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
