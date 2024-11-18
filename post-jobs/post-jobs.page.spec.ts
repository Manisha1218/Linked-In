import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostJobsPage } from './post-jobs.page';

describe('PostJobsPage', () => {
  let component: PostJobsPage;
  let fixture: ComponentFixture<PostJobsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PostJobsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
