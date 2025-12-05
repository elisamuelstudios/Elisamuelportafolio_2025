import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';
import { TranslatePipe } from '../../translate.pipe';
import { TranslateService } from '../../translate.service';
import { CommonModule } from '@angular/common';
import GLightbox from 'glightbox';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    ScrollAnimationDirective,
    TranslatePipe,
    CommonModule, 
    RouterLink
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements AfterViewInit, OnInit {
  constructor(private translateService: TranslateService) {}
  changeLang(lang: string) {
      this.translateService.setLang(lang);
  }

  currentFilter: string = '*';

  ngAfterViewInit(): void {
    GLightbox({
      selector: '.glightbox',
      touchNavigation: true,
      loop: true,
    });
  }

  setFilter(filter: string) {
    this.currentFilter = filter;
  }

  isItemVisible(filter: string): boolean {
    return this.currentFilter === '*' || this.currentFilter === filter;
  }

    ngOnInit() {
    document.title = 'Elisamuel - Portfolio';
  }
}
