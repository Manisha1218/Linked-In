import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JobAlertsPage } from './job-alerts.page';

describe('JobAlertsPage', () => {
  let component: JobAlertsPage;
  let fixture: ComponentFixture<JobAlertsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JobAlertsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
