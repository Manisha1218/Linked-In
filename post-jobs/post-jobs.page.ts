import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-jobs',
  templateUrl: './post-jobs.page.html',
  styleUrls: ['./post-jobs.page.scss'],
})
export class PostJobsPage implements OnInit {
jobTitle: any;
jobDescription: any;
postJob() {
throw new Error('Method not implemented.');
}

  constructor() { }

  ngOnInit() {
  }

}
