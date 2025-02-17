import { useTranslation } from 'react-i18next';

export const useContent = () => {
  const { t } = useTranslation();

  return {
    HERO_CONTENT: t('heroContent'),
    ABOUT_CONTENT: t('aboutContent'),
    EXPERIENCES: t('experiences', { returnObjects: true }),
    PROJECTS: t('projects', { returnObjects: true }),
    CONTACT: t('contact'),
  };
};
