import { Component, EventEmitter, Output } from '@angular/core';

import { Post } from '../post.model';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.compnent.css']
})

export class PostCreateComponent {
  userTitleInput = '';
  userTextInput = '';
  @Output() newPostCreated = new EventEmitter<Post>();


  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const post: Post = { title: form.value.title, content: form.value.content };
    this.newPostCreated.emit(post);
  }
}
