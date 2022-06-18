import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { PostDetailDTO } from 'src/app/core/models/dto/post-detail.dto';
import { ImagenesPost } from 'src/app/core/models/imagenes-post.model';
import { Nutricion } from 'src/app/core/models/Nutricion.model';
moment.locale('es');


@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {


  imagenesPost: ImagenesPost[];
  nutricion: Nutricion
  post: PostDetailDTO;
  FechaCreacionFormated: string;

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];


  constructor(private activedRouted: ActivatedRoute) { }

  ngOnInit(): void {
    this.activedRouted.data.subscribe((data: any) => {
      console.log(data);
      this.imagenesPost = data.post.ImagenesPost
      this.post = data.post
      if (this.post.Nutricion != null) this.nutricion = this.post.Nutricion
      this.FechaCreacionFormated = moment(this.post.FechaCreacion).fromNow();
    })
  }

}
