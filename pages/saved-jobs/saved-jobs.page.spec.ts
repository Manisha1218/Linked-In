import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SavedJobsPage } from './saved-jobs.page';

describe('SavedJobsPage', () => {
  let component: SavedJobsPage;
  let fixture: ComponentFixture<SavedJobsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedJobsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
