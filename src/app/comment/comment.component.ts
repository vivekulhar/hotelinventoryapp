import { Component, OnInit } from '@angular/core';
import { CommentService } from './comment.service';
import { ActivatedRoute } from '@angular/router';
import { map, pluck } from 'rxjs/operators';
import { Comments } from './comment';

@Component({
  selector: 'hinv-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  comments$ = this.commentService.getComments();

  comment$ = this.activatedRoute.data.pipe(pluck('comments'));

  // comments : Comments[]= [];

  constructor(private commentService:CommentService,
    private activatedRoute: ActivatedRoute){}
  ngOnInit(): void {
    // this.activatedRoute.data.subscribe(data=>{
    //   // console.log(data);
    //   console.log(data['comments']);
    // });

    // or
    // 
    // this.activatedRoute.data.subscribe(data=>{
    //   this.comments = data['comments'];
    // });
  }
}
