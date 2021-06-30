<template>
  <app-toolbar :folders="folders" :labels="allLabels">
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
  defineComponent, inject, computed,
} from 'vue';
import { useRoute } from 'vue-router';
import AppToolbar from 'src/components/AppToolbar.vue';
import AppGoBack from 'src/components/AppGoBack.vue';
import AppBranchMeta from 'src/components/AppBranchMeta.vue';
import AppMail from 'src/components/AppMail.vue';
import { IBranchExtended } from 'src/types/Branches.d';

type F = (folderName: string) => IBranchExtended //eslint-disable-line

export default defineComponent({
  name: 'PageBranch',
  components: {
    AppToolbar,
    AppGoBack,
    AppBranchMeta,
    AppMail,
  },
  setup() {
    const route = useRoute();
    const folders = inject('folders');
    const allLabels = inject('labels');
    const branchById = inject('branchById') as F;

    const branch = computed(() => {
      const branchId = route.params.branch.toString();
      return branchById(branchId);
    });

    return {
      folders,
      allLabels,
      labels: branch.value.labels,
      subject: branch.value.subject,
      mails: branch.value.mails,
    };
  },
});
</script>
