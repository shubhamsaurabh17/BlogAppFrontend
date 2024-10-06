import { Component } from '@angular/core';
import { BlogService } from '../_Services/blog.service';
import { ActivatedRoute } from '@angular/router';
import { Blog } from '../_Model/Blog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-single-gl',
  templateUrl: './single-gl.component.html',
  styleUrl: './single-gl.component.css'
})
export class SingleGLComponent {

  comment={
    commentDescription:''
  }



  id:any;

  constructor(private blogService:BlogService,
    private routes:ActivatedRoute,
    private snackBar:MatSnackBar
  ){}

  blogs :any={}

  imageSrc="";

  ngOnInit(){
    this.getSingleGL();
  }

  getSingleGL(){
    this.id=this.routes.snapshot.paramMap.get("id")
    console.log(this.id)
    this.blogService.getBlogByID(this.id).subscribe(
      (res:any)=>{
        this.blogs=res;
        console.log(this.blogs)
        this.imageSrc = this.blogService.getImage(res.imageName);
      },
      (error)=>{
        console.log(error)
      }
    )
  }



  commentSubmit(){
    console.log(this.comment)
    this.blogService.addComment(this.comment, this.id).subscribe(
      (res)=>{
        console.log(res)
        this.getSingleGL();
        this.comment.commentDescription=""
        this.snackBar.open('Comment Added!', 'OK', {
          duration: 1000
        });
      },
      (error)=>{
        console.log(error)
        this.snackBar.open('Not Authorized to Comment! Please Login!', 'OK', {
          duration: 1000
        });
      }
    )
  }
}
