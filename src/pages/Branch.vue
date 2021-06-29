<template>
  <app-toolbar :folders="folders" :labels="labels">
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
import { defineComponent, inject } from 'vue';
import AppToolbar from 'src/components/AppToolbar.vue';
import AppGoBack from 'src/components/AppGoBack.vue';
import AppBranchMeta from 'src/components/AppBranchMeta.vue';
import AppMail from 'src/components/AppMail.vue';

export default defineComponent({
  name: 'PageBranch',
  components: {
    AppToolbar,
    AppGoBack,
    AppBranchMeta,
    AppMail,
  },
  setup() {
    const folders = inject('folders');
    const labels = inject('labels');
    const subject = 'Sale car';

    const mails = [
      {
        id: 'asdf',
        author: 'Peter',
        date: 'Mar 3',
        text: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        id: 'aadf',
        author: 'me',
        date: 'Mar 2',
        text: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
    ];

    return {
      folders,
      labels,
      subject,
      mails,
    };
  },
});
</script>
