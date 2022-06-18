import { Component, OnInit } from '@angular/core';
import { FormService } from 'src/app/core/services/form.service';
import { AddRecetasManagerService } from './add-recetas-manager.service';
import { Store } from '@ngrx/store';
import * as postRecetasReducer from 'src/app/profile/usuario/store/post-recetas.reducer';
import * as postRecetasActions from 'src/app/profile/usuario/store/post-recetas.actions'
import { getPostSaved, getPostRecetasCamposRequerido, getIdPostReceta } from '../store/index';
import { Router } from '@angular/router';
import { DataFormatService } from 'src/app/core/services/data-format.service';
import { PostService } from '../services/post.service';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';

@Component({
  selector: 'app-add-recetas',
  templateUrl: './add-recetas.component.html',
  styleUrls: ['./add-recetas.component.scss']
})
export class AddRecetasComponent implements OnInit {

  displayModalRequeridos: boolean = false
  displayModalSavedPost: boolean = false
  showPostForm: boolean = true

  constructor(
    private toast: ToastrService,
    private dataFormatService: DataFormatService,
    private postService: PostService,
    private router: Router,
    public formService: FormService,
    public addRecetasManagerServices: AddRecetasManagerService,
    private storePostRecetas: Store<postRecetasReducer.PostRecetasState>
  ) { }

  ngOnInit(): void {
    this.addRecetasManagerServices.setForms();


    this.storePostRecetas.select((getPostSaved)).subscribe((data) => {

      if (data) {
        this.storePostRecetas.dispatch(postRecetasActions.SetPostRecetaSaved({ payload: false }))
        this.displayModalSavedPost = data
      }
    })

    this.storePostRecetas.select((getPostRecetasCamposRequerido)).subscribe((data) => {
      this.displayModalRequeridos = data
    })
  }

  onSave() {
    this.addRecetasManagerServices.save()
  }


  private saveImagenesPost() {
    this.storePostRecetas.dispatch(postRecetasActions.SetPostRecetaSaved({ payload: false }))
    this.storePostRecetas.select((getIdPostReceta)).pipe(take(1)).subscribe((idCurrentPost) => {

      console.log(idCurrentPost);

      let imagenesPost = this.dataFormatService.getImagenesPostFormat(idCurrentPost)
      console.log(imagenesPost);

      this.postService.saveImagenesPost(imagenesPost).subscribe({
        next: ((data) => {
          this.displayModalSavedPost = data
          this.router.navigate(['/me'])
        }),
        error: ((error) => {
          this.toast.error("Ocurrio un error al momento de guardar")
          console.log(error);
        })
      })


    })
  }


  cerrarModalRequeridos() {
    this.storePostRecetas.dispatch(postRecetasActions.SetPostRecetaCamposRequeridos({ payload: false }))
  }

  saveImagenes(cerrar: boolean) {
    cerrar == true ? this.showPostForm = false : this.router.navigate(['/me'])
  }

}
