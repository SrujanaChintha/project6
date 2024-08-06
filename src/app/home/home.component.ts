import { Component } from '@angular/core';
import { NavcomponentComponent } from '../navcomponent/navcomponent.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavcomponentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
