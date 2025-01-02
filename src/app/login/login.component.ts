// import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css'],
// })
// export class LoginComponent {
//   email = '';
//   password = '';
//   Headinglogin ='Client Login'
//   base_heading_login = 'Please fill in this form to login a client.'

//   constructor(private http: HttpClient, private router: Router) {}

//   onLogin() {
//     this.http
//       .post('http://localhost:5000/login', { email: this.email, password: this.password })
//       .subscribe((response: any) => {
//         if (response.message === 'Login successful!') {
//           alert(response.message);
//           localStorage.setItem('user', JSON.stringify(response.user));
//           this.router.navigate(['/schedule-meeting']);
//         } else {
//         alert(response.message);
//         }
//       });
//   }
  
// }
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email = '';
  password = '';
  successMessage: string = '';
  errorMessage: string = '';
  Headinglogin ='Client Login'
  base_heading_login = 'Please fill in this form to login a client.'

  constructor(private http: HttpClient, private router: Router) {}

  onLogin() {
    this.http
      .post('http://localhost:5000/login', { email: this.email, password: this.password })
      .subscribe((response: any) => {
        if (response.message === 'Login successful!') {
          this.successMessage = response.message; // Set success message
          localStorage.setItem('user', JSON.stringify(response.user));
          this.router.navigate(['/schedule-meeting']);
        } else {
          this.errorMessage = response.message; // Set error message
        }
      });
  }
}
