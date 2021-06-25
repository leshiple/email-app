import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';
import { storeKey } from 'src/store';

export default () => {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { t } = useI18n();
  const store = useStore(storeKey);
  const emptyString = (val: string) => (val && val.length > 0) || t('fieldRequired');
  const existFolder = (val: string) => (store.state.folders.folders.every((f) => f.slug !== val)) || t('folderExist');

  return {
    emptyString,
    existFolder,
  };
};
