import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';
import { TranslatePipe } from '../../translate.pipe';
import { TranslateService } from '../../translate.service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    ScrollAnimationDirective,
    TranslatePipe,
    RouterLink
],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
stats = [
  { icon: 'bi-emoji-smile', labelKey: 'GITHUB_CONTRIBUTIONS', end: 1231, current: 0, duration: 1000 },
  { icon: 'bi-journal-richtext', labelKey: 'PROJECTS', end: 8, current: 0, duration: 1000 },
  { icon: 'bi-headset', labelKey: 'SUPPORT_HOURS', end: 1463, current: 0, duration: 1000 },
  { icon: 'bi bi-people', labelKey: 'CLIENTS', end: 3, current: 0, duration: 1000 },
  // Puedes agregar más ítems si lo deseas
];

  ngOnInit(): void {
    this.stats.forEach(stat => this.animateCounter(stat));
    document.title = 'Elisamuel - About';
  }

  animateCounter(stat: { current: number, end: number, duration: number }) {
    const stepTime = 10;
    const steps = stat.duration / stepTime;
    const increment = stat.end / steps;

    const interval = setInterval(() => {
      stat.current += increment;
      if (stat.current >= stat.end) {
        stat.current = stat.end;
        clearInterval(interval);
      }
    }, stepTime);
  }

  constructor(private translateService: TranslateService) {}
  changeLang(lang: string) {
      this.translateService.setLang(lang);
  }
}
