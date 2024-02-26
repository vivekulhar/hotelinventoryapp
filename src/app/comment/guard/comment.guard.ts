import { ActivatedRouteSnapshot, CanActivateFn, ResolveFn, RouterState, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Comments } from '../comment';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';
import { CommentService } from '../comment.service';

export const commentGuard: ResolveFn<Comments[]> = (
  route : ActivatedRouteSnapshot, 
  state: RouterStateSnapshot):
  | Observable<Comments[]>
  | Promise<Comments[]>
  | Comments[] => {
  return inject(CommentService).getComments();
};
