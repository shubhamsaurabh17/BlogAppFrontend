import { Component } from '@angular/core';
import { UserService } from '../_Services/user.service';
import { UserAuthService } from '../_Services/user-auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private userService: UserService, 
    private userAuth: UserAuthService,
    private router: Router,
    private snackBar : MatSnackBar
  ) { }

  data = {
    userName: "",
    userPassword: ""
  }

  submit() {
    console.log(this.data)
    this.userService.login(this.data).subscribe(
      (res: any) => {
        console.log(res)
        const role = res.user.role[0].roleName;
        this.userAuth.setToken(res.jwtToken)
        localStorage.setItem("name",res.user.userName)
        this.userAuth.setRoles(role)

        if (role == "Admin") {
          this.router.navigate(["/admin"])
        } else {
          this.router.navigate(["/user"])
        }
      },
      (error) => {
        console.log(error)
        this.snackBar.open('Unknown Credentials!', 'OK', {
          duration: 2000
        });
      }
    )
  }

}
