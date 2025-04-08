import { Component } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [HomeComponent],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio-mmy-lana';
}
