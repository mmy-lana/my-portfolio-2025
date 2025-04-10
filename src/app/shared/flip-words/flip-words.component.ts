import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-flip-words',
  templateUrl: './flip-words.component.html',
  standalone: true, // <-- standalone component
  imports: [CommonModule], // <-- Important!
  styleUrls: ['./flip-words.component.css']
})
export class FlipWordsComponent implements OnInit {
  @Input() words: string[] = [];
  @Input() duration: number = 3000;

  currentWord: string = '';
  private wordIndex = 0;

  ngOnInit(): void {
    this.currentWord = this.words[0];
    setInterval(() => {
      this.wordIndex = (this.wordIndex + 1) % this.words.length;
      this.currentWord = this.words[this.wordIndex];
    }, this.duration);
  }
}
