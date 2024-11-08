import { Component } from '@angular/core';
import {Button, ButtonDirective} from "primeng/button";
import {Ripple} from "primeng/ripple";
import {MatButtonToggle} from "@angular/material/button-toggle";
import {PanelModule} from "primeng/panel";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Button,
    ButtonDirective,
    Ripple,
    MatButtonToggle,
    PanelModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {



}
