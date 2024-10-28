import {Component, inject, Output} from '@angular/core';
import {CdkMenu, CdkMenuItem, CdkMenuTrigger} from "@angular/cdk/menu";
import {MatToolbar} from "@angular/material/toolbar";
import {RouterLink, RouterOutlet} from "@angular/router";
import {NgForOf} from "@angular/common";
import {routes} from "../../app.routes";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CdkMenuTrigger,
    CdkMenu,
    CdkMenuItem,
    MatToolbar,
    RouterLink,
    NgForOf,
    RouterOutlet
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  menuItem = [
    {
      label: 'Home',
      link: '/home'
    },
    {
      label: 'User',
      link: '/user'
    }
  ]
}
