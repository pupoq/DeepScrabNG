import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { SettingsComponent } from './Components/settings/settings.component';
import { FriendsListComponent } from './Components/friends-list/friends-list.component';
import { EventsComponent } from './Components/events/events.component';
import { NewsComponent } from './Components/news/news.component';
import { FriendsProfileComponent } from './Components/friends-profile/friends-profile.component';
import { ErrorPageComponent } from './Components/error-page/error-page.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'settings', component: SettingsComponent},
    {path: 'friends', component: FriendsListComponent},
    {path: 'friends/:id', component: FriendsProfileComponent},
    {path: 'events', component: EventsComponent},
    {path: 'news', component: NewsComponent},
    {path: '**', component: ErrorPageComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule] 
})

export class AppRoutingModule{}