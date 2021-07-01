<template>
  <q-btn-dropdown
    unelevated
    color="secondary"
    split
    :icon="icon"
    class="q-mr-sm"
    @click="$emit('toggle')"
  >
    <q-list dense style="min-width: 130px">
      <q-item
        v-for="item in items"
        :key="item.slug"
        clickable
        v-ripple
        v-close-popup
        @click="$emit('change', item.slug)"
      >
        <q-item-section>
          {{$t(item.slug)}}
        </q-item-section>
      </q-item>
    </q-list>
  </q-btn-dropdown>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

const BLANK_ICON = 'check_box_outline_blank';
const CHECKED_ICON = 'check_box';
const PARTIAL_ICON = 'indeterminate_check_box';

export default defineComponent({
  name: 'AppToolbar',

  props: {
    status: {
      type: String,
      default: 'noOne',
    },
  },

  emits: {
    change: null,
    toggle: null,
  },

  setup(props) {
    const icon = computed(() => {
      switch (props.status) {
        case 'all':
          return CHECKED_ICON;
        case 'noOne':
          return BLANK_ICON;
        default:
          return PARTIAL_ICON;
      }
    });

    const items = [
      {
        slug: 'all',
      },
      {
        slug: 'noOne',
      },
      {
        slug: 'read',
      },
      {
        slug: 'unread',
      },
      {
        slug: 'starred',
      },
      {
        slug: 'unstarred',
      },
    ];

    return {
      icon,
      items,
    };
  },
});
</script>
