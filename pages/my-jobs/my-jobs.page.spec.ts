import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyJobsPage } from './my-jobs.page';

describe('MyJobsPage', () => {
  let component: MyJobsPage;
  let fixture: ComponentFixture<MyJobsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MyJobsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
