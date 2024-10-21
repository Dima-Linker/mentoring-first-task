import { Routes } from '@angular/router';
import {UsersListComponent} from "./shared-ui/users-list/users-list.component";
import {AppComponent} from "./app.component";

export const routes: Routes = [
  {path: '', redirectTo: 'user-list', pathMatch: "full"},
  {path: 'user-list', component: UsersListComponent}
];
