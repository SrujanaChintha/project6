import { Component } from '@angular/core';
import { NavcomponentComponent } from '../navcomponent/navcomponent.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NavcomponentComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
