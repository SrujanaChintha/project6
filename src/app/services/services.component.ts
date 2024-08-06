import { Component } from '@angular/core';
import { NavcomponentComponent } from '../navcomponent/navcomponent.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NavcomponentComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

}
