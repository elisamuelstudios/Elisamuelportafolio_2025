import { Component, AfterViewInit, effect, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '../../translate.service';
import { TranslatePipe } from '../../translate.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  private phraseIndex = 0;
  private charIndex = 0;
  private typingTimeout: any;
  private eraseTimeout: any;
  phrases: string[] = [];

  constructor(private translateService: TranslateService) {
    // Reactivo: cuando cambia el idioma, reinicia la animación
    effect(() => {
      this.restartTyping();
    });
  }

  ngOnInit() {
    document.title = 'Elisamuel - Home';
  }

  ngAfterViewInit() {
    this.restartTyping();
  }

  ngOnDestroy() {
    clearTimeout(this.typingTimeout);
    clearTimeout(this.eraseTimeout);
  }

  changeLang(lang: 'en' | 'es') {
    this.translateService.setLang(lang);
  }

  restartTyping() {
    clearTimeout(this.typingTimeout);
    clearTimeout(this.eraseTimeout);
    this.loadPhrases();

    const el = document.getElementById('typing-text');
    if (el) el.textContent = '';

    this.phraseIndex = 0;
    this.charIndex = 0;
    this.typeCharacter();
  }

  loadPhrases() {
    this.phrases = [
      this.translateService.translate('TYPING_1'),
      this.translateService.translate('TYPING_2'),
      this.translateService.translate('TYPING_3'),
      this.translateService.translate('TYPING_4'),
    ];
  }

  typeCharacter() {
    const el = document.getElementById('typing-text');
    if (!el) return;

    const currentPhrase = this.phrases[this.phraseIndex];
    if (this.charIndex < currentPhrase.length) {
      el.textContent += currentPhrase.charAt(this.charIndex);
      this.charIndex++;
      this.typingTimeout = setTimeout(() => this.typeCharacter(), 100);
    } else {
      this.eraseTimeout = setTimeout(() => this.eraseText(), 2000);
    }
  }

  eraseText() {
    const el = document.getElementById('typing-text');
    if (!el) return;

    if (this.charIndex > 0) {
      el.textContent = el.textContent!.slice(0, -1);
      this.charIndex--;
      this.eraseTimeout = setTimeout(() => this.eraseText(), 50);
    } else {
      this.phraseIndex = (this.phraseIndex + 1) % this.phrases.length;
      this.typingTimeout = setTimeout(() => this.typeCharacter(), 300);
    }
  }
}
