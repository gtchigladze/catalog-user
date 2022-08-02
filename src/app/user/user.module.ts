import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { UserListComponent } from './user-list.component';
import { UserService } from './user.service';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserPostsComponent } from './user-posts/user-posts.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [UserListComponent, UserDetailsComponent, UserPostsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ], exports: [UserListComponent], providers: [UserService]
})
export class UserModule { }
