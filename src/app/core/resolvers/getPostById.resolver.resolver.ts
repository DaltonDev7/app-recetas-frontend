import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { PostService } from 'src/app/profile/usuario/services/post.service';


@Injectable()
export class GetPostByIdResolver implements Resolve<any> {


  constructor(private postService: PostService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.postService.getPostById(route.params['idPost'])
  }
}
