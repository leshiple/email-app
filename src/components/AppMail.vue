<template>
  <q-card :class="CSSClass" class="q-mb-lg" style="width: 60%">
    <q-item>
      <q-item-section avatar>
        <q-avatar>
          <img src="https://cdn.quasar.dev/img/avatar2.jpg">
        </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label>{{authorName}}</q-item-label>
        <q-item-label caption>{{formatedDate}}</q-item-label>
      </q-item-section>
    </q-item>
    <q-separator inset />
    <q-card-section>
      {{text}}
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import useAuthorName from 'src/composables/useAuthorName';
import useDate from 'src/composables/useDate';

export default defineComponent({
  name: 'AppMail',
  props: {
    author: {
      type: String,
      required: true,
    },
    date: {
      type: Number,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const authorName = useAuthorName(props.author);
    const CSSClass = computed(() => (props.author === 'me' ? 'bg-grey-2 q-ml-auto' : 'bg-blue-grey-2'));
    const { formatDate } = useDate();
    const formatedDate = formatDate(props.date);

    return {
      authorName,
      CSSClass,
      formatedDate,
    };
  },
});
</script>
