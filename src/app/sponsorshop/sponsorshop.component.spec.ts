import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorshopComponent } from './sponsorshop.component';

describe('SponsorshopComponent', () => {
  let component: SponsorshopComponent;
  let fixture: ComponentFixture<SponsorshopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsorshopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
