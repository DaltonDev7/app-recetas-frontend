import { Component, Input, OnInit } from '@angular/core';
import { PostUserDetailDTO } from 'src/app/core/models/dto/post-user-detail.dto';
import { Post } from 'src/app/core/models/post.model';

@Component({
  selector: 'post-receta',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: PostUserDetailDTO

  constructor() { }

  ngOnInit(): void {
    console.log(this.post);

  }

}
