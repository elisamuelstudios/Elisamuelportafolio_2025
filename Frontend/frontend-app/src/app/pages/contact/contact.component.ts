import { Component, OnInit } from '@angular/core';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http'; // <--- Import HttpClientModule
import { TranslatePipe } from '../../translate.pipe';
import { TranslateService } from '../../translate.service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ScrollAnimationDirective,
    CommonModule,
    ReactiveFormsModule,
    TranslatePipe,
    HttpClientModule,
    RouterLink
],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  sending = false;
  successMessage = '';
  errorMessage = ''; // <--- Add an errorMessage property for client-side display

  constructor(private fb: FormBuilder, private http: HttpClient, private translateService: TranslateService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      asunto: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  changeLang(lang: string) {
    this.translateService.setLang(lang);
  }

  onSubmit() {
    // Mark all fields as touched to display validation errors if the form is invalid
    this.markAllAsTouched();

    if (this.contactForm.invalid) {
      console.log('Formulario inválido. No se puede enviar.');
      this.errorMessage = this.translateService.translate('VALIDATION_FORM_INVALID'); // Or a direct string
      this.successMessage = ''; // Clear success message
      return; // Stop if the form is invalid
    }

    this.sending = true;
    this.successMessage = '';
    this.errorMessage = ''; // Clear previous error messages

    this.http.post('http://127.0.0.1:8000/contact/', this.contactForm.value).subscribe({
      next: () => {
        this.successMessage = this.translateService.translate('CONTACT_FORM_SUCCESS_MESSAGE'); // Use translation
        this.contactForm.reset();
        this.sending = false;
      },
      error: (err) => {
        console.error('Hubo un error al enviar el mensaje.', err);
        // Check for specific error messages from Django if possible
        if (err.error && err.error.message) {
             this.errorMessage = this.translateService.translate('CONTACT_FORM_ERROR_PREFIX') + err.error.message;
        } else {
            this.errorMessage = this.translateService.translate('CONTACT_FORM_GENERIC_ERROR'); // Use translation for generic error
        }
        this.sending = false;
      }
    });
  }

  // Helper method to mark all controls as touched
  markAllAsTouched() {
    Object.values(this.contactForm.controls).forEach(control => {
      control.markAsTouched();
      control.updateValueAndValidity(); // Ensure validation state is updated
    });
  }

  ngOnInit() {
    document.title = 'Elisamuel - Contact';
  }
}