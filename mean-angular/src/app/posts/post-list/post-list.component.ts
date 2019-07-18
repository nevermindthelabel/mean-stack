import { Component } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent {
  posts = [
    { title: 'The first post', content: 'Things and stuff' },
    { title: 'The second post', content: 'Stuff and things' },
    { title: 'The third post', content: 'Other things and more stuff' },
    { title: 'The fourth post', content: 'More things and other stuff' }
  ];
}
