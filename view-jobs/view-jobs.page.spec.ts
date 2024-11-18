import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewJobsPage } from './view-jobs.page';

describe('ViewJobsPage', () => {
  let component: ViewJobsPage;
  let fixture: ComponentFixture<ViewJobsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewJobsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
