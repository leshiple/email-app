<template>
  <app-toolbar
    :folders="folders"
    :labels="allLabels"
    @change-folder="onChangeFolder"
    @change-label="onChangeLabel"
    @toggle-starred="onToggleStarred"
    @toggle-read="onToggleRead"
    @delete="onDelete"
  >
    <app-go-back />
  </app-toolbar>
  <q-separator inset class="q-mb-md" />
  <app-branch-meta class="q-mb-sm" :subject="subject" :labels="labels" />
  <q-separator inset class="q-mb-md" />
  <div class="q-pa-md">
    <app-mail
      v-for="mail in mails"
      :key="mail.id"
      :author="mail.author"
      :date="mail.date"
      :text="mail.text"
    />
  </div>
</template>

<script lang="ts">
import {
  defineComponent, inject, computed, onBeforeMount, onUnmounted,
} from 'vue';
import { useStore } from 'vuex';
import { storeKey } from 'src/store';
import { useRouter, useRoute } from 'vue-router';
import AppToolbar from 'src/components/AppToolbar.vue';
import AppGoBack from 'src/components/AppGoBack.vue';
import AppBranchMeta from 'src/components/AppBranchMeta.vue';
import AppMail from 'src/components/AppMail.vue';
import { IGetBranchById, IToggleReadBranches } from 'src/types/Branches.d';
import { TRASH_FOLDER } from 'src/constants';

export default defineComponent({
  name: 'PageBranch',
  components: {
    AppToolbar,
    AppGoBack,
    AppBranchMeta,
    AppMail,
  },
  setup() {
    const store = useStore(storeKey);
    const router = useRouter();
    const route = useRoute();
    const folders = inject('folders');
    const allLabels = inject('labels');
    const branchById = inject('branchById') as IGetBranchById;

    const branchId = route.params.branch.toString();

    const branch = computed(() => branchById(branchId));

    const labels = computed(() => branch.value?.labels);

    const mails = computed(() => branch.value?.mails);

    const toggleReadBranches = inject('toggleReadBranches') as IToggleReadBranches;

    onBeforeMount(async () => {
      await store.dispatch('branches/setCurrentBranchId', branchId);
    });

    onUnmounted(async () => {
      await store.dispatch('branches/setCurrentBranchId', '');
    });

    if (!branch.value.read) {
      toggleReadBranches({
        branchesIds: [branch.value.id],
        read: true,
      });
    }

    const onChangeFolder = async (folderName: string) => {
      await store.dispatch('branches/setFolder', {
        branchesIds: [branch.value.id],
        folderName,
      });
    };

    const onChangeLabel = async (labelName: string) => {
      const existLabel = branch.value.labels.find((label) => label.name === labelName);

      if (existLabel) {
        await store.dispatch('branches/deleteLabel', {
          branchesIds: [branch.value.id],
          label: labelName,
        });
      } else {
        await store.dispatch('branches/addLabel', {
          branchesIds: [branch.value.id],
          label: labelName,
        });
      }
    };

    const onToggleStarred = async () => {
      await store.dispatch('branches/toggleStarred', {
        branchesIds: [branch.value.id],
        status: !branch.value.starred,
      });
    };

    const onToggleRead = async (read: boolean) => {
      await store.dispatch('branches/toggleRead', {
        branchesIds: [branch.value.id],
        read,
      });
    };

    const onDelete = async () => {
      router.back();

      if (branch.value.folder === TRASH_FOLDER) {
        await store.dispatch('branches/delete', [branch.value.id]);
      } else {
        await store.dispatch('branches/setFolder', {
          branchesIds: [branch.value.id],
          folderName: TRASH_FOLDER,
        });
      }
    };

    return {
      folders,
      allLabels,
      labels,
      subject: branch.value.subject,
      mails,
      onChangeFolder,
      onChangeLabel,
      onToggleStarred,
      onToggleRead,
      onDelete,
    };
  },
});
</script>
