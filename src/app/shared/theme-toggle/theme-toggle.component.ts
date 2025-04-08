import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  templateUrl: './theme-toggle.component.html',
})
export class ThemeToggleComponent implements OnInit {
  isDark = false;
  ngOnInit() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      this.isDark = true;
      document.documentElement.classList.add('dark');
    } else {
      this.isDark = false;
      document.documentElement.classList.remove('dark');
    }
  }

  toggleTheme() {
    this.isDark = !this.isDark;
    if (this.isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }

    // Force layout reflow (this helps sometimes)
    void document.documentElement.offsetHeight;
    console.log('isDark?', this.isDark);
    console.log('html.classList:', document.documentElement.classList.toString());

  }
}
