import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuroductDetailComponent } from './puroduct-detail.component';

describe('PuroductDetailComponent', () => {
  let component: PuroductDetailComponent;
  let fixture: ComponentFixture<PuroductDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuroductDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuroductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
