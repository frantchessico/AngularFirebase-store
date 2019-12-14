import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email = "";
  password = "";
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  addUser() {
    this.authService.register(this.email, this.password)
        .then((res) => this.router.navigate(['/']))
        .catch((err) => console.log(err))
  }

}
