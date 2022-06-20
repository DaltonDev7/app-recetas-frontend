import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import * as moment from 'moment';
import { getIdCurrentUser } from 'src/app/authentication/store';
import { SaveCalificacion } from 'src/app/core/models/calificacion-save.model';
import { PostDetailDTO } from 'src/app/core/models/dto/post-detail.dto';
import { ImagenesPost } from 'src/app/core/models/imagenes-post.model';
import { Nutricion } from 'src/app/core/models/Nutricion.model';
import { CalificacionService } from 'src/app/core/services/calificacion.service';
import * as fromApp from '../../state/app.state';
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
  val2: number = 1.5;
  IdUsuario: number;

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


  constructor(
    private calificacionService: CalificacionService,
    private activedRouted: ActivatedRoute,
    private store: Store<fromApp.State>) { }

  ngOnInit(): void {

    this.activedRouted.data.subscribe((data: any) => {
      console.log(data);
      this.imagenesPost = data.post.ImagenesPost
      this.post = data.post
      if (this.post.Nutricion != null) this.nutricion = this.post.Nutricion
      this.FechaCreacionFormated = moment(this.post.FechaCreacion).fromNow();
    })

    this.store.select((getIdCurrentUser)).subscribe((idUsuario) => {
      this.IdUsuario = idUsuario
    })


  }


  async onRateValue(data: any) {

    let payload: SaveCalificacion = {
      IdPost: this.post.Id,
      Calificacion: data.value,
      IdUsuario: this.IdUsuario
    }

    await this.calificacionService.save(payload).subscribe((data) => {
      console.log(data);
    })

  }

}
