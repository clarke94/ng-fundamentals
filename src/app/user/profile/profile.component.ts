import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    profileForm: FormGroup;

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    ngOnInit() {
        this.profileForm = new FormGroup({
            firstName: new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]),
            lastName: new FormControl(this.authService.currentUser.lastName, Validators.required)
        });
    }

    cancel() {
        this.router.navigate(['events']);
    }

    validateFirstName() {
        return this.profileForm.controls.firstName.invalid && this.profileForm.controls.firstName.touched;
    }

    validateLastName() {
        return this.profileForm.controls.lastName.invalid && this.profileForm.controls.lastName.touched;
    }

    saveProfile(formValues) {
        if (this.profileForm.valid) {
            this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
            this.router.navigate(['events']);
        }
    }

}
