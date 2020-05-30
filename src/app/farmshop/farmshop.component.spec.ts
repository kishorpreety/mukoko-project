import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmshopComponent } from './farmshop.component';

describe('FarmshopComponent', () => {
  let component: FarmshopComponent;
  let fixture: ComponentFixture<FarmshopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmshopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
