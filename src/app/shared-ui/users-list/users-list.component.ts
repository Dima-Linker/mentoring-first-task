import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {User} from "../../data/interfaces/userApiService";
import {UserApiService} from "../../data/services/userApiService";

import {JsonPipe} from "@angular/common";
import {MatCard, MatCardContent, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {UserCardComponent} from "./user-card/user-card.component";

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [
    RouterOutlet,
    JsonPipe,
    MatCard,
    MatCardContent,
    MatCardTitle,
    MatCardSubtitle,
    UserCardComponent
  ],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {

  userService = inject(UserApiService); // Instanz des UserApiService
  usersList: User[] = []; // Liste der Benutzer

  constructor() {
    // Holt die Benutzerdaten von der API
    this.userService.getApiUser().subscribe(receivedUsers => {
      this.usersList = receivedUsers; // Weist die empfangenen Benutzer der usersList zu
    });
  }

  addUser(user: User) {
    this.usersList.push(user); // Fügt den Benutzer zur Liste hinzu
  }

  // Entfernt den Benutzer anhand der ID
  removeUser(userId: number) {
    this.usersList = this.usersList.filter(user => user.id !== userId);
  }
}
