import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Store } from '@ngrx/store';

import { PostService } from '../../profile/usuario/services/post.service';
import * as fromApp from 'src/app/state/app.state';
import { getCurrentUser, getIdCurrentUser } from '../../authentication/store/index';
import { Usuario } from '../models/usuario.model';
import { take } from 'rxjs/operators';

@Injectable()
export class GetPostByUserResolver implements Resolve<any> {

  constructor(
    private postService: PostService,
    private store: Store<fromApp.State>
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

      return this.postService.getPostByIdUser(5).pipe((take(1)))
  }
}
