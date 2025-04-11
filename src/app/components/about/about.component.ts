import { Component } from '@angular/core';
import { FlipWordsComponent } from '../../shared/flip-words/flip-words.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AsyncPipe, CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FlipWordsComponent, CommonModule, TranslateModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  roles: string[] = [];
  skills: string[] = [];

  constructor(private translate: TranslateService) {
    this.loadTranslations();
    this.translate.onLangChange.subscribe(() => this.loadTranslations());
  }

  private loadTranslations() {
    this.translate.get(['about.roles', 'about.skills']).subscribe((res) => {
      this.roles = res['about.roles'];
      this.skills = res['about.skills'];
    });
  }
}
