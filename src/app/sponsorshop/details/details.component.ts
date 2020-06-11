import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  title = 'Sponsorshop Details - Mukoko';
  public detailId = this.route.snapshot.paramMap.get('id');
  constructor(
    private route: ActivatedRoute,
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
