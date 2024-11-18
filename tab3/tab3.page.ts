import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
popularProfiles: any;
mentionUser() {
  this.postContent += '@';
}
addHashtag() {
  console.log('Add hashtag');
  
}
posts: any;
postContent: any;

  constructor() {}
  createPost() {
    if (this.postContent.trim() !== '') {
      const newPost = {
        name: 'Your Name', // Replace with dynamic user name
        avatar: 'https://via.placeholder.com/40', // Replace with dynamic avatar
        content: this.postContent,
        date: new Date(),
      };
      this.posts.unshift(newPost); // Add new post to the top of the list
      this.postContent = ''; // Clear the textarea
    }
  }
  showPopularLinkedInProfiles() {
    this.popularProfiles = [
      { name: 'Simranpreet Kaur', profileUrl: 'https://www.linkedin.com/in/simranpreet-kaur-26a3561a6/' },
      { name: 'Elon Musk', profileUrl: 'https://www.linkedin.com/in/elonmusk/' },
      { name: 'Nitish Kumar', profileUrl: 'https://www.linkedin.com/in/nitish-kumar-b94b13293/' },
      { name: 'Manisha Verma', profileUrl: 'https://www.linkedin.com/in/manisha-verma5a6b3c/' },
      { name: 'Nikita Kumari', profileUrl: 'https://www.linkedin.com/in/nikita-kumari-677079294/' },
      { name: 'Maya Kumari', profileUrl: 'https://www.linkedin.com/in/maya-kumari-817072294/' },
      { name: 'Sundar Pichai', profileUrl: 'https://www.linkedin.com/in/sundarpichai/' },
      { name: 'Mukesh Ambani', profileUrl: 'https://www.linkedin.com/company/mukesh-ambani/' },
      { name: 'Satya Nadella', profileUrl: 'https://www.linkedin.com/in/satyanadella/' },
      
      
    ];
  }
}
