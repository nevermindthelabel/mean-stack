import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html'
})

export class PostCreateComponent {
  userTextInput = '';
  newPost = '';

  onAddPost() {
    console.log(this.newPost);
    this.newPost = this.userTextInput;
  }
}
