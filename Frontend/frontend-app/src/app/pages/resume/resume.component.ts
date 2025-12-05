import { Component, OnInit } from '@angular/core';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';
import { TranslatePipe } from '../../translate.pipe';
import { TranslateService } from '../../translate.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [
    ScrollAnimationDirective,
    TranslatePipe,
    RouterLink
  ],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent implements OnInit {
    constructor(private translateService: TranslateService) {}
    changeLang(lang: string) {
        this.translateService.setLang(lang);
    }

    ngOnInit() {
    document.title = 'Elisamuel - Resume';
  }
}
