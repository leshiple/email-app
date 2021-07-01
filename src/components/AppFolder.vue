<template>
  <app-toolbar
    :folders="folders"
    :labels="labels"
    @change-folder="onChangeFolder"
    @toggle-starred="onToggleStarred"
  >
    <app-toolbar-check
      :status="checkStatus"
      @change="setCheckedStatus"
      @toggle="toggleSelected"
    />
  </app-toolbar>
  <q-separator inset class="q-mb-md" />
  <app-branch-list v-model:selected="selected" :current-folder="folder" :branches="branches" />
</template>

<script lang="ts">
import {
  defineComponent, inject, computed, PropType,
} from 'vue';
import AppToolbar from 'src/components/AppToolbar.vue';
import AppToolbarCheck from 'src/components/AppToolbarCheck.vue';
import AppBranchList from 'src/components/AppBranchList.vue';
import useBranches from 'src/composables/useBranches';
import { IBranch, IPayloadSetFolder, IPayloadToggleStarred } from 'src/types/Branches.d';

type F = (payload: IPayloadSetFolder) => void //eslint-disable-line
type K = (payload: IPayloadToggleStarred) => void //eslint-disable-line

export default defineComponent({
  name: 'AppFolder',
  components: {
    AppToolbar,
    AppToolbarCheck,
    AppBranchList,
  },
  props: {
    folder: {
      type: String,
      required: true,
    },
    branches: {
      type: Array as PropType<IBranch[]>,
      default: () => [],
    },
  },
  setup(props) {
    const currentBranches = computed(() => props.branches);
    const {
      selected, checkStatus, toggleSelected, setCheckedStatus,
    } = useBranches(currentBranches);
    const folders = inject('folders');
    const labels = inject('labels');
    const setFolderBranches = inject('setFolderBranches') as F;
    const toggleStarredBranches = inject('toggleStarredBranches') as K;

    const onChangeFolder = (folderName: string) => {
      setFolderBranches({
        branchesIds: selected.value,
        folderName,
      });
      toggleSelected();
    };

    const onToggleStarred = () => {
      const selectedBranches = props.branches.filter((branch) => (
        selected.value.includes(branch.id)));
      const allStarred = selectedBranches.every((branch) => branch.starred);
      const status = !allStarred;
      toggleStarredBranches({
        branchesIds: selected.value,
        status,
      });
      toggleSelected();
    };

    return {
      folders,
      labels,
      selected,
      checkStatus,
      setCheckedStatus,
      toggleSelected,
      onChangeFolder,
      onToggleStarred,
    };
  },
});
</script>
