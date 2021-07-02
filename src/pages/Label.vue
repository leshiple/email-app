<template>
  <app-folder :parent="label" :branches="branches"/>
</template>

<script lang="ts">
import { defineComponent, inject, computed } from 'vue';
import { useRoute } from 'vue-router';
import AppFolder from 'src/components/AppFolder.vue';
import { IGetBranchesByLabel } from 'src/types/Branches.d';

export default defineComponent({
  name: 'PageLabel',
  components: {
    AppFolder,
  },
  setup() {
    const route = useRoute();
    const label = computed(() => route.params.label.toString());
    const branchesByLabel = inject('branchesByLabel') as IGetBranchesByLabel;
    const branches = computed(() => branchesByLabel(label.value));

    return {
      label,
      branches,
    };
  },
});
</script>
