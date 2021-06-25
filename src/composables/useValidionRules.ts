import { useI18n } from 'vue-i18n';

export default () => {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { t } = useI18n();

  const emptyString = (val: string) => (val && val.length > 0) || t('fieldRequired');
  return {
    emptyString,
  };
};
