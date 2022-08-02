import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Observable, map } from 'rxjs';

@Injectable()
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUserList(): Observable<any> {
    return this.httpClient.get<any>(`https://jsonplaceholder.typicode.com/users`);
  }

  getUserById(userId: number): Observable<any> {
    return this.httpClient.get<any>(`https://jsonplaceholder.typicode.com/users/${userId}`);
  }

  getUserPosts(userId: number): Observable<any> {
    return this.httpClient.get<any>(`https://jsonplaceholder.typicode.com/posts`).pipe(map(posts => posts.filter((post: any) => post.userId === userId)));
  }
}
