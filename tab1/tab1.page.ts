

// import { Component } from '@angular/core';

// interface Comment {
//   username: string;
//   content: string;
// }

// interface Post {
//   id: any;
//   showlikeOptions: boolean;
//   likeCount: number;
//   comments: Comment[];
//   liked: boolean;
//   showShareOptions: boolean;
//   showCommentInput: boolean;
//   name: string;
//   avatar: string;
//   content: string;
//   image: string;
//   time: string;
// }

// @Component({
//   selector: 'app-tab1',
//   templateUrl: 'tab1.page.html',
//   styleUrls: ['tab1.page.scss']
// })
// export class Tab1Page {
//   posts: Post[] = [ 
//     {
//       id: 1,
//       name: 'John Doe',
//       avatar: 'https://tse4.mm.bing.net/th?id=OIP.cnjDHo5kR07KF4fvchOCnAHaE7&pid=Api&P=0&h=180',
//       content: 'Excited to share my new project!',
//       image: 'https://images.squarespace-cdn.com/content/v1/6187eb4031a15621edee1438/aa97ed54-1797-4284-865a-37ba7836dd8e/Ana+Perez+LinkedIn+Post.jpg',
//       time: '2 hours ago',
//       liked: false,
//       showCommentInput: false,
//       showShareOptions: false,
//       comments: [],
//       likeCount: 0,
//       showlikeOptions: false
//     },
//     {
//       id: 2,
//       name: 'Jane Smith',
//       avatar: 'https://tse4.mm.bing.net/th?id=OIP.cnjDHo5kR07KF4fvchOCnAHaE7&pid=Api&P=0&h=180',
//       content: 'Loving this new platform!',
//       image: 'https://images.squarespace-cdn.com/content/v1/6187eb4031a15621edee1438/aa97ed54-1797-4284-865a-37ba7836dd8e/Ana+Perez+LinkedIn+Post.jpg',
//       time: '3 hours ago',
//       liked: false,
//       showCommentInput: false,
//       showShareOptions: false,
//       comments: [],
//       likeCount: 0,
//       showlikeOptions: false
//     },
//     {
//       id: 2,
//       name: 'Jane Smith',
//       avatar: 'https://tse4.mm.bing.net/th?id=OIP.cnjDHo5kR07KF4fvchOCnAHaE7&pid=Api&P=0&h=180',
//       content: 'Loving this new platform!',
//       image: 'https://images.squarespace-cdn.com/content/v1/6187eb4031a15621edee1438/aa97ed54-1797-4284-865a-37ba7836dd8e/Ana+Perez+LinkedIn+Post.jpg',
//       time: '3 hours ago',
//       liked: false,
//       showCommentInput: false,
//       showShareOptions: false,
//       comments: [],
//       likeCount: 0,
//       showlikeOptions: false
//     },
//     {
//       id: 2,
      
//       name: 'Jane Smith',
//       avatar: 'https://tse4.mm.bing.net/th?id=OIP.cnjDHo5kR07KF4fvchOCnAHaE7&pid=Api&P=0&h=180',
//       content: 'Loving this new platform!',
//       image: 'https://images.squarespace-cdn.com/content/v1/6187eb4031a15621edee1438/aa97ed54-1797-4284-865a-37ba7836dd8e/Ana+Perez+LinkedIn+Post.jpg',
//       time: '3 hours ago',
//       liked: false,
//       showCommentInput: false,
//       showShareOptions: false,
//       comments: [],
//       likeCount: 0,
//       showlikeOptions: false
//     },
    
//   ];
  
//   commentContent: string = '';

//   toggleLike(post: Post) {
//     post.liked = !post.liked;
//     post.likeCount = post.liked ? post.likeCount + 1 : post.likeCount - 1;
//   }

//   toggleComment(post: Post) {
//     post.showCommentInput = !post.showCommentInput;
//     post.showShareOptions = false;
//   }

//   // openShareOptions(post: Post) {
//   //   post.showShareOptions = !post.showShareOptions;
//   //   post.showCommentInput = false;
//   // }

//   submitComment(post: Post) {
//     if (this.commentContent) {
//       const newComment = {
//         username: 'You',
//         university: 'Lovely Professional University',
//         content: this.commentContent
//       };
    
//       post.comments.push(newComment);
    
//       this.commentContent = ''; // Clear input after submitting
//       post.showCommentInput = false; // Hide comment input if needed
//     }
//   }

  
//   openShareOptions(post: Post) { // Specify the type for post
//     post.showShareOptions = !post.showShareOptions;
//     post.showCommentInput = false;
//   }

//   share(platform: string, post: Post) { // Specify the type for post
//     // Add share functionality based on the platform
//     console.log(`Sharing on ${platform}`);
//   }

//   copyLink(post: Post) { // Specify the type for post
//     navigator.clipboard.writeText(window.location.href).then(() => {
//       alert('Link copied to clipboard!');
//     }).catch(err => {
//       console.error('Could not copy text: ', err);
//     });
//   }
// }

import { Component } from '@angular/core';

interface Comment {
  username: string;
  content: string;
}

interface Post {
  userAvatar: string;
  userName: string;
  userJobTitle: string;
  timestamp: Date;
  content: string;
  image?: string; // Optional image property
  liked?: boolean;
  likeCount?: number;
  showCommentInput?: boolean;
  showShareOptions?: boolean;
  comments?: Comment[];
}

@Component({
  selector: 'app-home',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page {
  posts: Post[] = [
    {
      userAvatar: 'https://tse1.mm.bing.net/th?id=OIP.L9B1n8lj7aocldq2QeKEtgHaHa&pid=Api&P=0&h=180',
      userName: 'Shalini Chaudhary',
      userJobTitle: 'Software Engineer at Tech Corp',
      timestamp: new Date(),
      content: 'Just finished an exciting project!',
      image: 'https://www.socialmediaexaminer.com/wp-content/uploads/2022/10/what-are-linkedin-post-templates-and-links-stickers-post-composer-mobile-app-sonnenbergmedia-example-1.jpg',
      liked: false,
      likeCount: 0,
      comments: []
    },
    {
      userAvatar: 'https://tse1.mm.bing.net/th?id=OIP.0YIjfTqVstpkUF7yTjHZ_AHaHa&pid=Api&P=0&h=180',
      userName: 'Nitish Kumar',
      userJobTitle: 'Product Manager at StartUp Inc.',
      timestamp: new Date(),
      content: 'Great insights from today’s conference.',
      liked: false,
      likeCount: 0,
      comments: []
    },
    {
      userAvatar: 'https://tse4.mm.bing.net/th?id=OIP.njPvW-sCoiyKuXScuvmU2gHaLG&pid=Api&P=0&h=180',
      userName: 'Nikita Kumari',
      userJobTitle: 'Software Engineer at Tech Corp',
      timestamp: new Date(),
      content: 'Just finished an exciting project!',
      image: 'https://blog.hootsuite.com/wp-content/uploads/2023/02/Best-time-to-post-on-LinkedIn.png',
      liked: false,
      likeCount: 0,
      comments: []
    },
    {
      userAvatar: 'https://tse2.mm.bing.net/th?id=OIF.LGtkmXMhpop37TJ%2ftQ005g&pid=Api&P=0&h=180',
      userName: 'Manisha Verma',
      userJobTitle: 'Product Manager at StartUp Inc.',
      timestamp: new Date(),
      content: 'Great insights from today’s conference.',
      liked: false,
      likeCount: 0,
      comments: []
    },
    {
      userAvatar: 'https://tse3.mm.bing.net/th?id=OIP.ZnUrHp4KQC1v5-9FXJ1EgwHaHa&pid=Api&P=0&h=180',
      userName: 'Maya Kumari',
      userJobTitle: 'Software Engineer at Tech Corp',
      timestamp: new Date(),
      content: 'Just finished an exciting project!',
      image: 'https://i.pinimg.com/originals/bc/fa/34/bcfa347cd6141b260fe80c5a18e25057.png',
      liked: false,
      likeCount: 0,
      comments: []
    },
    {
      userAvatar: 'https://tse2.mm.bing.net/th?id=OIP._2z7ToTLJdymjQzHSB6WugHaGU&pid=Api&P=0&h=180',
      userName: 'Jane Smith',
      userJobTitle: 'Product Manager at StartUp Inc.',
      timestamp: new Date(),
      content: 'Great insights from today’s conference.',
      liked: false,
      likeCount: 0,
      comments: []
    },
    {
      userAvatar: 'https://tse1.mm.bing.net/th?id=OIP.oOsn9Eo70kZ8sYiCXum6OQHaHa&pid=Api&P=0&h=180',
      userName: 'Jogesh',
      userJobTitle: 'Software Engineer at Tech Corp',
      timestamp: new Date(),
      content: 'Just finished an exciting project!',
      image: 'https://www.socialchamp.io/wp-content/uploads/2023/06/Global-Best-Times-to-Post-on-LinkedIn.jpg',
      liked: false,
      likeCount: 0,
      comments: []
    },
    {
      userAvatar: 'https://tse4.mm.bing.net/th?id=OIP.Ps67T0PSTQZwV1yP73J9fQHaHa&pid=Api&P=0&h=180',
      userName: 'Janey Smith',
      userJobTitle: 'Product Manager at StartUp Inc.',
      timestamp: new Date(),
      content: 'Great insights from today’s conference.',
      liked: false,
      likeCount: 0,
      comments: []
    },
    {
      userAvatar: 'https://tse2.mm.bing.net/th?id=OIP.LmnOQpSNzGat3ORi-Mb34gHaE8&pid=Api&P=0&h=180',
      userName: 'John Dubey',
      userJobTitle: 'Software Engineer at Tech Corp',
      timestamp: new Date(),
      content: 'Just finished an exciting project!',
      image: 'https://www.seobasics.net/wp-content/uploads/2020/01/use-linkedin-sponsored-post.jpg',
      liked: false,
      likeCount: 0,
      comments: []
    },
    {
      userAvatar: 'https://tse2.mm.bing.net/th?id=OIP.-oLDolTs3NwyJGomcC5uJwHaHa&pid=Api&P=0&h=180',
      userName: 'Jasmine',
      userJobTitle: 'Product Manager at StartUp Inc.',
      timestamp: new Date(),
      content: 'Great insights from today’s conference.',
      liked: false,
      likeCount: 0,
      comments: []
    },
    // Add more posts as needed
  ];
  
  commentContent: string = '';

  toggleLike(post: Post) {
    post.liked = !post.liked;
    post.likeCount = post.liked ? (post.likeCount || 0) + 1 : (post.likeCount || 0) - 1;
  }

  toggleComment(post: Post) {
    post.showCommentInput = !post.showCommentInput;
    post.showShareOptions = false;
  }

  openShareOptions(post: Post) {
    post.showShareOptions = !post.showShareOptions;
    post.showCommentInput = false;
  }

  submitComment(post: Post) {
    if (this.commentContent) {
      const newComment: Comment = {
        username: 'You',
        content: this.commentContent
      };
      post.comments = post.comments || [];
      post.comments.push(newComment);
      this.commentContent = ''; // Clear input after submitting
      post.showCommentInput = false; // Hide comment input if needed
    }
  }

  share(platform: string, post: Post) {
    console.log(`Sharing on ${platform}`);
  }

  copyLink(post: Post) {
    navigator.clipboard.writeText(window.location.href).then(() => {
      alert('Link copied to clipboard!');
    }).catch(err => {
      console.error('Could not copy text: ', err);
    });
  }
}
