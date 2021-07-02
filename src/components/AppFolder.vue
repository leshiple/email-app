<template>
  <app-toolbar
    :folders="folders"
    :labels="labels"
    :show-tools="Boolean(selected.length)"
    @change-folder="onChangeFolder"
    @change-label="onChangeLabel"
    @toggle-starred="onToggleStarred"
    @toggle-read="onToggleRead"
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
    v-if="branches.length"
    v-model:selected="selected"
    :parent="parent"
    :branches="branches"
    @toggle-check-item="onToggleCheckBranch"
  />
  <div v-else class="q-pa-md text-center text-h5 text-grey-6">{{$t('empty')}}</div>
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
  IBranchWithLabels,
  ISetFolderBranches,
  IToggleStarredBranches,
  IDeleteBranches,
  IToggleLabelToBranches,
  IToggleReadBranches,
} from 'src/types/Branches.d';
import { TRASH_FOLDER } from 'src/constants';

export default defineComponent({
  name: 'AppFolder',
  components: {
    AppToolbar,
    AppToolbarCheck,
    AppBranchList,
  },
  props: {
    parent: {
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
    const setFolderBranches = inject('setFolderBranches') as ISetFolderBranches;
    const toggleStarredBranches = inject('toggleStarredBranches') as IToggleStarredBranches;
    const deleteBranches = inject('deleteBranches') as IDeleteBranches;
    const addLabelToBranches = inject('addLabelToBranches') as IToggleLabelToBranches;
    const deleteLabelFromBranches = inject('deleteLabelFromBranches') as IToggleLabelToBranches;
    const toggleReadBranches = inject('toggleReadBranches') as IToggleReadBranches;
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
      if (props.parent === TRASH_FOLDER) {
        deleteBranches(selected.value);
      } else {
        setFolderBranches({
          branchesIds: selected.value,
          folderName: TRASH_FOLDER,
        });
      }
      toggleSelected();
    };

    const onToggleRead = (read: boolean) => {
      toggleReadBranches({
        branchesIds: selected.value,
        read,
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
      onChangeLabel,
      onToggleStarred,
      onToggleCheckBranch,
      onDelete,
      onToggleRead,
    };
  },
});
</script>
