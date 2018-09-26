import { Component   } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
    constructor(private Auth: AuthService,private router: Router) { }

  ngOnInit() {
  }

  loginUser(event) {
      event.preventDefault();
      const target = event.target;
      const username = target.querySelector("#username").value;
      const password = target.querySelector("#password").value;


      this.Auth.getUserDetails(username, password)
         .subscribe(data => {
         if(data.status === true) {
                this.router.navigate(['dashboard']);
                this.Auth.setLoggedIn(true)
         } else {
             window.alert("Invalid credentials");
         }
      })
  }

}

