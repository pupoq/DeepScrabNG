import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { SettingsComponent } from './Components/settings/settings.component';
import { FriendsListComponent } from './Components/friends-list/friends-list.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'settings', component: SettingsComponent},
    {path: 'friends', component: FriendsListComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule] 
})

export class AppRoutingModule{}