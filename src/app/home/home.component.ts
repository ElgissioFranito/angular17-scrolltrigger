import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Word, words } from '../services/api';

gsap.registerPlugin(ScrollTrigger);


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements OnInit {
  words: Word[] = words;
  word: Word = { id: 0, word: '', description: '', points: 0 };
  displayedWord: string[] = [];
  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  guessedLetters: string[] = [];
  incorrectGuesses = 0;
  gameStatus: 'playing' | 'won' | 'lost' = 'playing';

  ngOnInit(): void {
    this.chooseWord();
    this.displayedWord = Array(this.word.word.length).fill('_');
    gsap.from('.hangman-container', { opacity: 0, duration: 1, delay: 0.5 });
    gsap.from('.hangman-word span', { opacity: 0, y: -20, stagger: 0.1, duration: 0.5, delay: 1 });
  }

  chooseWord(): void {
    this.word = this.words[Math.floor(Math.random() * this.words.length)];
  }

  guessLetter(letter: string): void {
    this.guessedLetters.push(letter);
    if (this.word.word.includes(letter)) {
      this.updateDisplayedWord(letter);
      if (!this.displayedWord.includes('_')) {
        this.gameStatus = 'won';
      }
      gsap.from(`.hangman-word span[data-letter="${letter}"]`, { opacity: 0, y: -20, duration: 0.5 });
    } else {
      this.incorrectGuesses++;
      if (this.incorrectGuesses === 6) {
        this.gameStatus = 'lost';
      }
      this.updateFigure();
      gsap.from('.figure-part', { opacity: 0, duration: 0.5 });
    }
  }

  updateDisplayedWord(letter: string): void {
    for (let i = 0; i < this.word.word.length; i++) {
      if (this.word.word[i] === letter) {
        this.displayedWord[i] = letter;
      }
    }
  }

  updateFigure(): void {
    const figureParts = document.querySelectorAll('.figure-part');
    figureParts[this.incorrectGuesses - 1].setAttribute('style', 'display: block;');
  }
}