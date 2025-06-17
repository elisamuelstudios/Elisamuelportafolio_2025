import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterOutlet, RouterLink, RouterLinkActive  } from '@angular/router';
import {MatButtonToggleModule} from '@angular/material/button-toggle'

import { TranslateService } from './translate.service';
import { TranslatePipe } from './translate.pipe';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,      // Para el <router-outlet>
    RouterLink,        // Para la directiva routerLink
    RouterLinkActive,
    TranslatePipe,
    MatButtonToggleModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  title = 'frontend-app';
  isMobileMenuOpen = false;
   showScrollTopButton: boolean = false;
  showPreloader: boolean = true;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  ngOnInit() {
    window.addEventListener('load', () => {
      this.showPreloader = false;
    });
  }

  // Listen for the 'window:scroll' event
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Determine when to show the button (e.g., after scrolling 100px down)
    if (window.scrollY > 100) {
      this.showScrollTopButton = true;
    } else {
      this.showScrollTopButton = false;
    }
  }

  // Method to scroll to the top of the page
  scrollToTop(event: Event) {
    event.preventDefault(); // Prevent the default anchor link behavior
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scroll effect
    });
  }

  constructor(private translateService: TranslateService) {}
  changeLang(lang: string) {
    this.translateService.setLang(lang);
  }
}