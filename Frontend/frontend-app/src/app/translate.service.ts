import { Injectable, signal } from '@angular/core';

import { computed } from '@angular/core';




interface Translations {
  [key: string]: {
    [lang: string]: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class TranslateService {
  private translations: Translations = {
    
    'TYPING_1': {
        en: 'Video Game Developer',
        es: 'Desarrollador de videojuegos'
    },
    'TYPING_2': {
        en: 'Web Developer',
        es: 'Desarrollador web'
    },
    'TYPING_3': {
        en: 'Bachelor in Music',
        es: 'Lic. en Música'
    },
    'TYPING_4': {
        en: 'Electronic Engineer',
        es: 'Ingeniero Electrónico'
    },

    'HOME': { en: 'Home', es: 'Inicio' },
    'ABOUT': { en: 'About', es: 'Sobre mí' },
    'RESUME': { en: 'Resume', es: 'Experiencia' },
    'PORTFOLIO': { en: 'Portfolio', es: 'Portafolio' },
    'CONTACT': { en: 'Contact', es: 'Contacto' },
    'SUBSCRIBE': { en: 'Subscribe or contact me on social media', es: 'Subscríbete o contáctame en las redes sociales' },
    'SOCIAL': { en: 'Social Networks', es: 'Redes' },
    'COPYRIGHT': { en: 'Copyright', es: 'Derechos reservados' },

    'ABOUT_ME_TITLE': { en: 'About Me', es: 'Sobre mí' },
    'ABOUT_ME_DESC': { en: 'Hi, I\'am Elisamuel Valera. I love video game development, web development, and composing music.', es: 'Hola soy Elisamuel Valera me encanta el desarrollo de videojuegos, el desarrollo web, me encanta hacer y componer piezas musicales' },
    'BIRTHDAY': { en: 'Birthday', es: 'Cumpleaños' },
    'AGE': { en: 'Age', es: 'Edad' },
    'CITY': { en: 'City', es: 'Ciudad' },
    'DEGREE': { en: 'Degree', es: 'Grado' },
    'DEGREE_VALUE': { en: 'Professional', es: 'Profesional' },
    'ABOUT_TEXT': { en: 'Some personal information.', es: 'Algo de información personal.' },
    'ABOUT_PARAGRAPH': { en: 'From a young age, I\'ve had a deep passion for music and technology. My love for learning is innate, and since completing school, I\'ve continued to expand my knowledge.', es: 'Desde una edad temprana, he sentido una pasión profunda por la música y la tecnología. Mi amor por el aprendizaje es innato, y desde que completé la escuela, no he dejado de enriquecer mis conocimientos.' },
    'SKILLS': { en: 'Skills', es: 'Habilidades' },
    'MY_REPORT': { en: 'My Report', es: 'Mi reporte' },
    'INTERESTS': { en: 'Features', es: 'Características' },
    'MY_INTERESTS': { en: 'My Interests', es: 'Mis Intereses' },
    'TEACHING': { en: 'Teaching', es: 'Enseñanza' },
    'BIRTHDAY_VALUE': { en: 'March 4, 1995', es: '4 de Marzo de 1995' },
    'TITLES': { en: 'Game Developer & Web Developer.', es: 'Desarrollador de videojuegos & Desarrollador web.' },
    'ABOUT_PERSONAL': { en: 'Some personal information.', es: 'Algo de información personal.' },

    'GITHUB_CONTRIBUTIONS': {
    en: 'GitHub Contributions 2024',
    es: 'Contribuciones en Github 2024',
    },
    'PROJECTS': {
        en: 'Projects',
        es: 'Proyectos',
    },
    'SUPPORT_HOURS': {
        en: 'Support Hours',
        es: 'Horas de Soporte',
    },
    'CLIENTS': {
        en: 'Clients',
        es: 'Clientes',
    },
    

    'EXPERIENCE': {
    en: 'Experience',
    es: 'Experiencia'
    },
    'EXPERIENCE_INTRO': {
        en: 'My current focus is on game development and web development',
        es: 'Mi enfoque actual se encuentra en el desarrollo de videojuegos y el desarrollo web'
    },
    'SUMMARY': {
        en: 'Summary',
        es: 'Resúmen'
    },
    'SUMMARY_DESC': {
        en: 'Game developer, orchestral creations and web development',
        es: 'Desarrollador de videojuegos, creaciones orquestales y desarrollo web'
    },
    'LOCATION': {
        en: 'Barranquilla - Colombia',
        es: 'Barranquilla - Colombia'
    },
    'EDUCATION': {
        en: 'Main Education',
        es: 'Educación principal'
    },
    'DEGREE_ELECTRONICS': {
        en: 'Electronic Engineering',
        es: 'Ingeniería Electrónica'
    },
    'DEGREE_MUSIC': {
        en: 'Bachelor in Music',
        es: 'Licenciatura en Música'
    },
    'DEGREE_TECHNICIAN': {
        en: 'Software Programming Technician',
        es: 'Técnico en Programación de Software'
    },
    'UNIVERSITY_CUC': {
        en: 'Universidad de la Costa, Barranquilla',
        es: 'Universidad de la Costa, Barranquilla'
    },
    'UNIVERSITY_UA': {
        en: 'Universidad del Atlántico, Barranquilla',
        es: 'Universidad del Atlántico, Barranquilla'
    },
    'UNIVERSITY_SENA': {
        en: 'SENA',
        es: 'SENA'
    },
    'EXPERIENCE_LATEST': {
        en: 'Latest Experience',
        es: 'Últimas experiencias'
    },
    'JOB_GAMING_DEV': {
        en: 'Game Developer',
        es: 'Desarrollador de videojuegos'
    },
    'TASK_MECHANICS': {
        en: 'Game mechanics implementation',
        es: 'Implementación de mecánicas de Juegos'
    },
    'TASK_PROGRAMMING': {
        en: 'Programming in C#',
        es: 'Programación en C#'
    },
    'TASK_AUDIO': {
        en: 'Sound integration and creation using FMOD and Ableton Live 11',
        es: 'Integración y creación de Sonidos con FMOD y Ableton 11 live'
    },
    'TASK_GITHUB': {
        en: 'Github - Repositories',
        es: 'Github - Repositorios'
    },
    'JOB_TEACHER': {
        en: 'Teacher',
        es: 'Docente'
    },
    'TASK_2D_PROGRAMMING': {
        en: '2D Game Programming',
        es: 'Programación de videojuegos 2D'
    },
    'TASK_GAME_DESIGN': {
        en: 'Game Design I',
        es: 'Diseño de videojuegos I'
    },
    'JOB_WEB_DEV': {
        en: 'Web Developer',
        es: 'Desarrollador web'
    },
    'TASK_WEB_FUCAESP': {
        en: 'Web Developer for FUCAESP',
        es: 'Desarrollador web FUCAESP'
    },
    'TASK_WEB_SUPPORT': {
        en: 'Web support',
        es: 'Soporte Web'
    },
    'PRESENT': {
        en: 'Present',
        es: 'Presente'
    },

    'PORTFOLIO_TITLE': {
        en: 'Portfolio',
        es: 'Portafolio',
    },
    'PORTFOLIO_SUBTITLE': {
        en: 'A sample of what I have done and contributed to projects',
        es: 'Una muestra de lo que he hecho y he aportado en proyectos',
    },

   'FILTER_ALL': {
    en: 'All',
    es: 'Todo',
    },
    'FILTER_GAMES': {
        en: 'Games',
        es: 'Juegos',
    },
    'FILTER_WEB': {
        en: 'Web',
        es: 'Web',
    },
    'FILTER_MUSIC': {
        en: 'Music',
        es: 'Música',
    },
    'GAME_HENDERS_TITLE': {
        en: "Adventure in Hender's Castle",
        es: "Aventuras en el Castillo de Hender",
    },
    'GAME_HENDERS_DESC': {
        en: 'Collaboration for Aventuras Bonitas S.A.S',
        es: 'Participación para Aventuras Bonitas S.A.S',
    },
    'WEB_TITLE': {
        en: 'Web Page',
        es: 'Página web',
    },
    'WEB_DESC': {
        en: 'Website developed in Python-Django',
        es: 'Desarrollo de página web en Python-Django',
    },
    'WEB_TOOLTIP': {
        en: 'Web backend developed in Python-Django and deployed on AWS EC2',
        es: 'Web Backend desarrollado en Python-Django y desplegado en AWS EC2',
    },
    'MORE_DETAILS': {
        en: 'More details',
        es: 'Más detalles',
    },
    'MUSIC_ABLETON_DESC': {
        en: 'Composition in Ableton Live',
        es: 'Composición en Ableton Live',
    },
    'MUSIC_TOOLTIP': {
        en: 'Opening and ending composition for video games',
        es: 'Composición de opening y ending para videojuegos',
    },

    'GAME_3D_DESC': {
        en: '3D project for classes - Barranquilla',
        es: 'Proyecto 3D para clases - Barranquilla',
    },
    'GAME_3D_TOOLTIP': {
        en: '3D game developed with students',
        es: 'Juego 3D desarrollado con estudiantes',
    },

    'WEB_CPANEL_DESC': {
        en: 'Website management with CPanel',
        es: 'Administración de página con CPanel',
    },
    'WEB_AWS_DESC': {
        en: 'EC2 Instance',
        es: 'Instancia EC2',
    },

    'GAME_2D_DESC': {
        en: '2D project for classes - Barranquilla',
        es: 'Proyecto 2D para clases - Barranquilla',
    },

    'GAME_2D_TOOLTIP': {
        en: '2D RPG game for educational purposes',
        es: 'Juego RPG 2D con fines educativos',
    },

    'FMOD_DESC': {
        en: 'Sound effects integration with Unity',
        es: 'Integración de efectos de sonido con Unity',
    },
    'FMOD_TOOLTIP': {
        en: 'FMOD engine integrated in Unity Engine',
        es: 'Motor FMOD integrado en Unity Engine',
    },

    'WEB_PORTFOLIO_DESC': {
        en: 'Web portfolio development',
        es: 'Desarrollo de portafolio web',
    },
    'WEB_PORTFOLIO_TOOLTIP': {
        en: 'Angular, Django based developer portfolio',
        es: 'Portafolio de desarrollador con Angular and Django',
    },
        // Página de contacto
    'CONTACT_TITLE': {
        en: 'Contact',
        es: 'Contacto',
    },
    'CONTACT_SUBTITLE': {
        en: 'Get in touch',
        es: 'Contáctame',
    },
    'CONTACT_BREADCRUMB_HOME': {
        en: 'Home',
        es: 'Inicio',
    },
    'CONTACT_BREADCRUMB_CURRENT': {
        en: 'Contact',
        es: 'Contacto',
    },
    'CONTACT_EMAIL': {
        en: 'Email',
        es: 'Correo',
    },
    'CONTACT_SOCIAL': {
        en: 'Social Media',
        es: 'Redes Sociales',
    },
    'CONTACT_FORM_NAME': {
        en: 'Name',
        es: 'Nombre',
    },
    'CONTACT_FORM_EMAIL': {
        en: 'Email',
        es: 'Correo',
    },
    'CONTACT_FORM_SUBJECT': {
        en: 'Subject',
        es: 'Asunto',
    },
    'CONTACT_FORM_MESSAGE': {
        en: 'Message',
        es: 'Mensaje',
    },
    'CONTACT_FORM_SEND': {
        en: 'Send message',
        es: 'Enviar mensaje',
    },
    'CONTACT_FORM_SENDING': {
        en: 'Sending...',
        es: 'Enviando...',
    },
    'CONTACT_FORM_SUCCESS': {
        en: 'Your message has been sent successfully!',
        es: '¡Tu mensaje ha sido enviado exitosamente!',
    },
    
    'I_AM': {
    en: 'I\'m',
    es: 'Soy',
    },

    TITLE_HOME: {
    en: 'Elisamuel - Home',
    es: 'Elisamuel - Inicio',
    },

    VALIDATION_NAME_REQUIRED: {
    "en": "Name is required.",
    "es": "El nombre es obligatorio."
    },
    VALIDATION_EMAIL_REQUIRED: {
        "en": "Email is required.",
        "es": "El correo electrónico es obligatorio."
    },
    VALIDATION_EMAIL_INVALID: {
        "en": "Please enter a valid email address.",
        "es": "Por favor, ingresa un correo electrónico válido."
    },
    VALIDATION_SUBJECT_REQUIRED: {
        "en": "Subject is required.",
        "es": "El asunto es obligatorio."
    },
    VALIDATION_MESSAGE_REQUIRED: {
        "en": "Message is required.",
        "es": "El mensaje es obligatorio."
    },
    VALIDATION_FORM_INVALID: {
        "en": "Please correct the form errors before submitting.",
        "es": "Por favor, corrige los errores del formulario antes de enviar."
    },
    CONTACT_FORM_SUCCESS_MESSAGE: {
        "en": "Your message has been sent successfully!",
        "es": "¡Tu mensaje ha sido enviado con éxito!"
    },
    CONTACT_FORM_GENERIC_ERROR: {
        "en": "There was an error sending your message. Please try again.",
        "es": "Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo."
    },
    CONTACT_FORM_ERROR_PREFIX: {
        "en": "Error: ",
        "es": "Error: "
    },
};

  currentLang = signal('es');

  setLang(lang: string) {
    this.currentLang.set(lang);
  }

  translate(key: string): string {
    const lang = this.currentLang();
    return this.translations[key]?.[lang] || key;
  }

  translateSignal(key: string) {
  return computed(() => {
    const lang = this.currentLang();
    return this.translations[key]?.[lang] || key;
  });
}
}
