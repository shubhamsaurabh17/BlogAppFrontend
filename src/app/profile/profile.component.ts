import { Component } from '@angular/core';
import { UserService } from '../_Services/user.service';
import { BlogService } from '../_Services/blog.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  constructor(private blogService:BlogService){}

  data : any={

  }

  ngOnInit(){
    this.blogService.getUser().subscribe(
      (res:any)=>{
        console.log(res)
        this.data=res
      },
      (error)=>{
        console.log(error)
      }
    )
  }

}
