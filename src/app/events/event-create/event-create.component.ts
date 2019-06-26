import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-event-create',
    templateUrl: './event-create.component.html',
    styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent implements OnInit {
    isDirty: boolean = true;

    constructor(
        private router: Router
    ) { }

    ngOnInit() {
    }

    cancel() {
        this.router.navigate(['/events']);
    }

}
