import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navcomponent',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navcomponent.component.html',
  styleUrl: './navcomponent.component.css'
})
export class NavcomponentComponent {

}
