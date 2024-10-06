import { Component } from '@angular/core';
import { BlogService } from '../_Services/blog.service';

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrl: './view-blog.component.css'
})
export class ViewBlogComponent {
  constructor(private blogService:BlogService){
  }

  blogs: any[]=[]

  ngOnInit(){
    this.blogService.getAllBlogByUser().subscribe(
      (res:any)=>{
        console.log(res)
        this.blogs=res;
      },
      (error)=>{
        console.log(error)
      }
    )
  }
}
