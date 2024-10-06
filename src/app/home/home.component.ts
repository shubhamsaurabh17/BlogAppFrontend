import { Component, ViewChild } from '@angular/core';
import { Blog } from '../_Model/Blog';
import { BlogService } from '../_Services/blog.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  
  paginatedBlogs:any = [];
  pageSize = 5;  // Number of blogs per page
  totalLength = 0;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private blogService:BlogService){
  }

  blogs: any[]=[]

  ngOnInit(){
    this.blogService.getAllBlog().subscribe(
      (res:any)=>{
        console.log(res)
        this.blogs=res;
        this.totalLength = this.blogs.length; // Set the total length
        this.paginateBlogs(0, this.pageSize);  // Initial pagination
      },
      (error)=>{
        console.log(error)
      }
    )
  }

  paginateBlogs(pageIndex: number, pageSize: number) {
    const start = pageIndex * pageSize;
    const end = start + pageSize;
    this.paginatedBlogs = this.blogs.slice(start, end);
  }

  onPageChange(event:any) {
    this.paginateBlogs(event.pageIndex, event.pageSize);
  }

}
