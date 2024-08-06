import { Component } from '@angular/core';
import { NavcomponentComponent } from '../navcomponent/navcomponent.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NavcomponentComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}