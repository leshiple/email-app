<template>
  <app-toolbar
    :folders="folders"
    :labels="labels"
    :show-tools="Boolean(selected.length)"
    @change-folder="onChangeFolder"
    @change-label="onChangeLabel"
    @toggle-starred="onToggleStarred"
    @delete="onDelete"
  >
    <app-toolbar-check
      :status="checkStatus"
      @change="setCheckedStatus"
      @toggle="toggleSelected"
    />
  </app-toolbar>
  <q-separator inset class="q-mb-md" />
  <app-branch-list
    v-model:selected="selected"
    :current-folder="folder"
    :branches="branches"
    @toggle-check-item="onToggleCheckBranch"
  />
</template>

<script lang="ts">
import {
  defineComponent, inject, computed, PropType,
} from 'vue';
import AppToolbar from 'src/components/AppToolbar.vue';
import AppToolbarCheck from 'src/components/AppToolbarCheck.vue';
import AppBranchList from 'src/components/AppBranchList.vue';
import useBranches from 'src/composables/useBranches';
import {
  IBranchWithLabels, IPayloadSetFolder, IPayloadToggleStarred, IPayloadToggleLabelFromBranches,
} from 'src/types/Branches.d';

type F = (payload: IPayloadSetFolder) => void //eslint-disable-line
type K = (payload: IPayloadToggleStarred) => void //eslint-disable-line
type M = (payload: string[]) => void //eslint-disable-line
type N = (payload: IPayloadToggleLabelFromBranches) => void //eslint-disable-line

const TRASH_FOLDER = 'trash';

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
      type: Array as PropType<IBranchWithLabels[]>,
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
    const deleteBranches = inject('deleteBranches') as M;
    const addLabelToBranches = inject('addLabelToBranches') as N;
    const deleteLabelFromBranches = inject('deleteLabelFromBranches') as N;
    const selectedBranches = computed(() => props.branches.filter((branch) => (
      selected.value.includes(branch.id))));

    const onChangeFolder = (folderName: string) => {
      if (selected.value.length) {
        setFolderBranches({
          branchesIds: selected.value,
          folderName,
        });
        toggleSelected();
      }
    };

    const onChangeLabel = (labelName: string) => {
      const allHasLabel = selectedBranches.value.every((branch) => (
        branch.labels.find((label) => label.name === labelName)));

      if (allHasLabel) {
        deleteLabelFromBranches({
          branchesIds: selected.value,
          label: labelName,
        });
      } else {
        addLabelToBranches({
          branchesIds: selected.value,
          label: labelName,
        });
      }
      toggleSelected();
    };

    const onToggleStarred = () => {
      const allStarred = selectedBranches.value.every((branch) => branch.starred);
      const status = !allStarred;
      toggleStarredBranches({
        branchesIds: selected.value,
        status,
      });
      toggleSelected();
    };

    const onToggleCheckBranch = ({ id, status }: {id: string, status: boolean}) => {
      toggleStarredBranches({
        branchesIds: [id],
        status,
      });
    };

    const onDelete = () => {
      if (props.folder === TRASH_FOLDER) {
        deleteBranches(selected.value);
      } else {
        setFolderBranches({
          branchesIds: selected.value,
          folderName: TRASH_FOLDER,
        });
      }
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
      onChangeLabel,
      onToggleStarred,
      onToggleCheckBranch,
      onDelete,
    };
  },
});
</script>
