<template>
  <q-card-section>
    <q-btn
      unelevated
      color="primary"
      style="width: 100%"
      @click="showDialog"
    >
      {{$t('compose')}}
    </q-btn>
  </q-card-section>
  <app-dialog-compose
    v-if="visibleDialog"
    v-model="visibleDialog"
    :subject="subject"
    @submit="onSubmit"
  />
</template>

<script lang="ts">
import {
  defineComponent, inject, computed, ref, PropType,
} from 'vue';
import AppDialogCompose from 'src/components/AppDialogCompose.vue';
import { IBranch } from 'src/types/Branches.d';
import { IPayloadAddMail, IAddMail } from 'src/types/Mails.d';

export default defineComponent({
  name: 'AppCompose',
  props: {
    currentBranch: {
      type: Object as PropType<IBranch>,
    },
  },
  components: {
    AppDialogCompose,
  },
  setup(props) {
    const addMail = inject('addMail') as IAddMail;

    const subject = computed(() => (props.currentBranch?.subject ?? ''));

    const visibleDialog = ref(false);
    const showDialog = () => {
      visibleDialog.value = true;
    };

    const onSubmit = (mail: IPayloadAddMail) => {
      addMail({
        ...mail,
        branch: props.currentBranch?.id,
      });
    };

    return {
      visibleDialog,
      showDialog,
      subject,
      onSubmit,
    };
  },
});
</script>
