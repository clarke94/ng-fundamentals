import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';

@Component({
    selector: 'app-event-create',
    templateUrl: './event-create.component.html',
    styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent implements OnInit {
    isDirty: boolean = true;
    newEvent;

    constructor(
        private router: Router,
        private eventService: EventService
    ) { }

    ngOnInit() {
    }

    saveEvent(formValues) {
        this.eventService.saveEvent(formValues);
        this.isDirty = false;
        this.router.navigate(['/events']);
    }

    cancel() {
        this.router.navigate(['/events']);
    }
}
