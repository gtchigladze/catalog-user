import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent implements OnInit {

  vm$: Observable<any> | undefined;
  
 @Input() userId: number | undefined

  constructor(private userService: UserService) { }

  ngOnInit(): void {    
    const userId = this.userId;    
    this.vm$ = this.userService.getUserPosts(userId!);
  }

}
