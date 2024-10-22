import {Component, inject, Input} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {User} from "../../data/interfaces/userApiService";
import {UserApiService} from "../../data/services/userApiService";

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [
    RouterOutlet,
    MatCardHeader,
    MatCard,
    MatCardContent,
    MatCardTitle,
    MatCardSubtitle
  ],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {

  profileUserService = inject(UserApiService)
  users: User[] = []

  @Input() user!: User

  constructor() {
    this.profileUserService.getApiUser()
      .subscribe(value => {
        this.users = value
      })
  }
}
