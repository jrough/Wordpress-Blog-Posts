import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators'

@Component({
  selector: 'posts',
 
   template: ` <header><h1>Hello {{name}}!</h1></header>
   <ng-container  *ngIf="data$|async as data" >
     
     <ul> 
       <li *ngFor="let post of data.posts">
       {{ post.title }}
       {{ post.date | date }}
       {{ post.excerpt }}
       </li> 
     </ul>
   
  </ng-container> 
    
  `,
  styles: [`h1 { font-family: 'Lato', sans-serif; font-size: 18px; line-height:24px;font-style:bold; color:white;  display:flex; justify-content:center; word-spacing:.5em; } 
  header { background-color: #88888a;  width:100%; height:50px;   column-span: all; margin-bottom:.5em;} 
  li{ margin-bottom:1em;} `]
})

export class PostsComponent  {
  data$ =   this.http.get('https://public-api.wordpress.com/rest/v1.1/sites/idcdistro.wordpress.com/posts/?author=ajpRspthis&number=20')

  @Input() name: string;
  constructor(private http:HttpClient){}
}
