import { Component, OnInit } from '@angular/core';
import { map, tap, Observable } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  vm$: Observable<any> | undefined;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.vm$ = this.userService.getUserList();
  }

}
