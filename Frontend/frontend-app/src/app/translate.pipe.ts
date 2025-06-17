import { Pipe, PipeTransform, inject } from '@angular/core';
import { TranslateService } from './translate.service';

@Pipe({
  name: 'translate',
  standalone: true,
  pure: false // para que se refresque al cambiar idioma
})
export class TranslatePipe implements PipeTransform {
  private translateService = inject(TranslateService);

  transform(value: string): string {
    this.translateService.currentLang(); // escuchar signal para refrescar pipe
    return this.translateService.translate(value);
  }
}
