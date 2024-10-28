import {Component, inject, Input} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {User} from "../../data/interfaces/userApiService";
import {UserApiService} from "../../data/services/userApiService";

import {JsonPipe} from "@angular/common";
import {MatCard, MatCardContent, MatCardSubtitle, MatCardTitle} from "@angular/material/card";

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [
    RouterOutlet,
    JsonPipe,
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
  users: User[] = [];

  @Input() user!: User


  constructor() {
    this.profileUserService.getApiUser()
      .subscribe(outputUser => {
        this.users = outputUser
      })
  }

  addUser(user: User) {
    this.users.push(user)
  }


  deleteUser(id: number) {
    this.users = this.users.filter(user => user.id !== id)
  }
}
