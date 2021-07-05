import { computed, ComputedRef } from 'vue';
import { useI18n } from 'vue-i18n';

export default () => {
  const { locale } = useI18n({ useScope: 'global' });
  const formatDate = (date: number): ComputedRef<string> => computed(
    () => new Intl.DateTimeFormat(locale.value, {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
    }).format(date),
  );

  return {
    formatDate,
  };
};
