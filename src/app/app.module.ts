import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EventService } from './services/event.service';

@NgModule({
    declarations: [
        AppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavbarComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [EventService],
    bootstrap: [AppComponent]
})
export class AppModule { }
