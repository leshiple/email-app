import { computed, ComputedRef } from 'vue';
import { useI18n } from 'vue-i18n';

export default () => {
  const { locale } = useI18n({ useScope: 'global' });
  const formatDate = (date: number): ComputedRef<string> => computed(
    () => new Intl.DateTimeFormat(locale.value).format(date),
  );

  return {
    formatDate,
  };
};
