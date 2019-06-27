import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { appRoutes } from "./app-router";
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EventService } from './services/event.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventCreateComponent } from './events/event-create/event-create.component';
import { ErrorsComponent } from './errors/errors.component';
import { EventRouteActivatorService } from './services/event-route-activator.service';
import { AuthService } from "./services/auth.service";

@NgModule({
    declarations: [
        AppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavbarComponent,
        EventDetailsComponent,
        EventCreateComponent,
        ErrorsComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [
        EventService,
        EventRouteActivatorService,
        AuthService,
        { provide: 'eventRouteDeactivateFunction', useValue: checkDirtyState }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component: EventCreateComponent) {
    if (component.isDirty) {
        window.confirm('You have not saved this event, do you really want to cancel?');
    }
    return true;
}
