export const languages = {
  en: 'English',
  es: 'Español',
} as const;

export type Language = keyof typeof languages;

export const translations = {
  en: {
    navigation: {
      about: 'About',
      work: 'Work',
      shelf: 'Shelf',
      experience: 'Experience',
      talk: 'Talk',
    },
  },

  es: {
    navigation: {
      about: 'Sobre mí',
      work: 'Proyectos',
      shelf: 'Biblioteca',
      experience: 'Experiencia',
      talk: 'Hablemos',
    },
  },
} as const;
