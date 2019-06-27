
import { Routes } from "@angular/router";
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventCreateComponent } from './events/event-create/event-create.component';
import { ErrorsComponent } from './errors/errors.component';
import { EventRouteActivatorService } from './services/event-route-activator.service';
import { EventListResolverService } from './services/event-list-resolver.service';
import { SessionCreateComponent } from './events/session-create/session-create.component';

export const appRoutes: Routes = [
    { path: 'events', component: EventsListComponent, resolve: { events: EventListResolverService } },
    { path: 'events/new', component: EventCreateComponent, canDeactivate: ['eventRouteDeactivateFunction'] },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService] },
    { path: 'events/session/new', component: SessionCreateComponent },
    { path: '404', component: ErrorsComponent },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', loadChildren: './user/user.module#UserModule' }
]