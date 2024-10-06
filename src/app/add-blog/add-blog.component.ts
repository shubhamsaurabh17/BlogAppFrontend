import { Component } from '@angular/core';
import { Blog } from '../_Model/Blog';
import { BlogService } from '../_Services/blog.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrl: './add-blog.component.css'
})
export class AddBlogComponent {

  constructor(private blogService: BlogService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  blog: Blog = {
    id: '',
    title: '',
    content: '',
    category: '',
    createdDates: '',
  }

  imageName!: Blob;

  category: any[] = ["General", "World Affairs", "Technology", "Health", "Life Science"];


  formSubmit() {
    console.log(this.blog)
    this.blogService.addNewBlog(this.blog, this.imageName).subscribe(
      (res) => {
        console.log(res)
        this.snackBar.open('Blog Added!', 'OK', {
          duration: 1000
        });
        this.router.navigate(["/view"])
      },
      (error) => {
        console.log(error)
        this.snackBar.open('Server Side Error!', 'OK', {
          duration: 1000
        });
      }
    )
  }

  onChangeField(event: any) {
    this.imageName = event.target.files[0]
  }
}
