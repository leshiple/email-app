import {
  ref, watchEffect, Ref, ComputedRef,
} from 'vue';
import { IBranch } from 'src/types/Branches.d';

export default (branches: ComputedRef<IBranch[]>) => {
  const selected: Ref<string[]> = ref([]);
  const checkStatus = ref('noOne');

  watchEffect(() => {
    const allSelected = selected.value.length === branches.value.length;
    const noOneSelected = selected.value.length === 0;
    if (allSelected) {
      checkStatus.value = 'all';
    } else if (noOneSelected) {
      checkStatus.value = 'noOne';
    } else {
      checkStatus.value = 'partial';
    }
  });

  const toggleSelected = () => {
    if (selected.value.length) {
      selected.value = [];
    } else {
      selected.value = branches.value.map((branch) => branch.id);
    }
  };

  const setCheckedStatus = (status: string) => {
    switch (status) {
      case 'all':
        selected.value = branches.value.map((branch: IBranch) => branch.id);
        break;
      case 'noOne':
        selected.value = [];
        break;
      case 'starred':
        selected.value = branches.value.reduce((acc: string[], item) => {
          if (item.starred) {
            acc.push(item.id);
          }
          return acc;
        }, []);
        break;
      case 'unstarred':
        selected.value = branches.value.reduce((acc: string[], item) => {
          if (!item.starred) {
            acc.push(item.id);
          }
          return acc;
        }, []);
        break;
      case 'read':
        selected.value = branches.value.reduce((acc: string[], item) => {
          if (item.read) {
            acc.push(item.id);
          }
          return acc;
        }, []);
        break;
      case 'unread':
        selected.value = branches.value.reduce((acc: string[], item) => {
          if (!item.read) {
            acc.push(item.id);
          }
          return acc;
        }, []);
        break;
      default:
        break;
    }
  };

  return {
    selected,
    checkStatus,
    setCheckedStatus,
    toggleSelected,
  };
};
