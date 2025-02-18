import { useTranslation } from 'react-i18next';
import { Content } from './types';
import i18n from '@/i18n';

export const useContent = () => {
  const { t } = useTranslation();

  return {
    NAME: t('name'),
    BLOCK_TITLE: t('blockTitle', {
      returnObjects: true,
    }) as Content['BLOCK_TITLE'],
    HERO_CONTENT: t('heroContent'),
    ABOUT_CONTENT: t('aboutContent'),
    EXPERIENCES: t('experiences', {
      returnObjects: true,
    }) as Content['EXPERIENCES'],
    PROJECTS: t('projects', {
      returnObjects: true,
    }) as Content['PROJECTS'],
    CONTACT: t('contact', {
      returnObjects: true,
    }) as Content['CONTACT'],
    selectedLang: i18n.language || 'en',
    changeLanguage: (lang: string) => i18n.changeLanguage(lang),
  };
};
