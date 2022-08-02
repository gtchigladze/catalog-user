import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  vm$: Observable<any> | undefined;
  
  private _togglePostsView = false;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) { }

  get viewPosts() {
    return this._togglePostsView;
  }

  ngOnInit(): void {
    const userId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.vm$ = this.userService.getUserById(userId);
  }

  togglePostsView() {
    this._togglePostsView = !this._togglePostsView;
  }

}
