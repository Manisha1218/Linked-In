import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage{
  user = {
    name: 'John Doe',
    headline: 'Software Developer',
    location: 'New York, USA',
    about: 'Passionate about coding and building amazing things.',
    contact: {
      email: 'johndoe@example.com',
      phone: '+1 234 567 890'
    }
  };

  posts = [
    {
      name: 'John Doe',
      content: 'Had a great time at the developer conference this weekend.',
      date: new Date(),
      avatar: 'assets/avatar1.jpg',
      image: 'assets/post-image.jpg'
    },
    {
      name: 'Jane Smith',
      content: 'Just finished a new project! Check it out.',
      date: new Date(),
      avatar: 'assets/avatar2.jpg',
      image: null
    }
  ];

  constructor() {}

}
