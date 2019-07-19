import { Component, EventEmitter, Output } from '@angular/core';

import { Post } from '../post.model';
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.compnent.css']
})

export class PostCreateComponent {
  userTitleInput = '';
  userTextInput = '';
  @Output() newPostCreated = new EventEmitter<Post>();


  onAddPost() {
    const post: Post = { title: this.userTitleInput, content: this.userTextInput };
    this.newPostCreated.emit(post);
  }
}
