import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavcomponentComponent } from './navcomponent/navcomponent.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavcomponentComponent,HomeComponent,AboutComponent,ContactComponent,SignupComponent,LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project6';
}
