import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrl: './register.component.css',
})
export class RegisterComponent {
    name = '';
    email = '';
    address = '';
    password = '';
    confirmPassword = '';
    Heading = 'Client Registration'
  base_heading = 'Please fill in this  form to create or register a client.'

    constructor(private router: Router,private http: HttpClient) {}

    onRegister() {
        if (this.password !== this.confirmPassword) {
          alert('Passwords do not match!');
          return;
        }
      
        this.http
          .post('http://localhost:5000/register', {
            name: this.name,
            email: this.email,
            address: this.address,
            password: this.password,
          })
          .subscribe((response: any) => {
            alert(response.message);
            if (response.message === 'User registered successfully!') { 
              this.router.navigate(['/login']);  // Redirect to login page after successful registration
            }
          });
      }
      
}
