import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./shared-ui/header/header.component";
import {FooterComponent} from "./shared-ui/footer/footer.component";
import {HomeComponent} from "./shared-ui/home/home.component";
import {UsersListComponent} from "./shared-ui/users-list/users-list.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, HomeComponent, UsersListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mentoring-first-project';
}
