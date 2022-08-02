import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { UserListComponent } from './user/user-list.component';
import { UserPostsComponent } from './user/user-posts/user-posts.component';

const routes: Routes = [
  {path: 'user/:id/posts', component: UserPostsComponent},
  {path: 'user/:id', component: UserDetailsComponent},
  {path: '', component: UserListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
