import { Component } from '@angular/core';
import { FlipWordsComponent } from '../../shared/flip-words/flip-words.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FlipWordsComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  roles: string[] = [
    'Software Engineer',
    'Frontend Developer',
    'Web Engineer',
    'Angular Enthusiast'
  ];

  skills: string[] = [
    'Angular',
    'React',
    'TypeScript'
  ];
}
