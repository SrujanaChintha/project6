import { Component } from '@angular/core';
import { NavcomponentComponent } from '../navcomponent/navcomponent.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NavcomponentComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
