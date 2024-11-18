// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-camera',
//   templateUrl: './camera.page.html',
//   styleUrls: ['./camera.page.scss'],
// })
// export class CameraPage implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {
  userName: string = ''; // User name
  userEmail: string = ''; // User email
  favoriteGenres: string[] = []; // Selected favorite genres
  profilePicture: File | null = null; // Profile picture

  constructor(private router: Router) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.profilePicture = file; // Save the file for upload
    }
  }

  onSubmit() {
    // Logic to save the updated profile
    const updatedProfile = {
      userName: this.userName,
      userEmail: this.userEmail,
      favoriteGenres: this.favoriteGenres,
      profilePicture: this.profilePicture
    };

    console.log('Profile updated:', updatedProfile);
    this.router.navigate(['/settings']);
  }
}