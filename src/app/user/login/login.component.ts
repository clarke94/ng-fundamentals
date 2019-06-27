import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    userName;
    password;
    mouseoverLogin;

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    ngOnInit() {
    }

    login(values) {
        this.authService.loginUser(values.userName, values.password);
        this.router.navigate(['events']);
    }

    cancel() {
        this.router.navigate(['events']);
    }

}
