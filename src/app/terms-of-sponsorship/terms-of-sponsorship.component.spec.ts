import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsOfSponsorshipComponent } from './terms-of-sponsorship.component';

describe('TermsOfSponsorshipComponent', () => {
  let component: TermsOfSponsorshipComponent;
  let fixture: ComponentFixture<TermsOfSponsorshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermsOfSponsorshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsOfSponsorshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
