import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive],//por esto fallaba el navbar, no se importaban los modulos necesarios
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {}
