import { computed, ComputedRef } from 'vue';
import { useI18n } from 'vue-i18n';

export default (author: string): ComputedRef<string> => {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { t } = useI18n();

  return computed(() => (author === 'me' ? t('me') : author));
};
