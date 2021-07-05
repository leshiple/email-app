<template>
  <q-dialog v-model="visible" :persistent="false">
    <q-card class="card">
      <q-form
        @submit="onSubmit"
      >
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h5">{{$t('newMessage')}}</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>
        <q-card-section class="q-pb-none">
          <q-input
            outlined
            v-model="subjectText"
            :label="$t('subject')"
            :disable="Boolean(subject)"
            lazy-rules
            :rules="[emptyString]"
          />
        </q-card-section>
        <q-card-section>
          <q-editor
            v-model="text"
            min-height="10rem"
          />
        </q-card-section>
        <q-card-section class="text-right">
          <q-btn
            color='primary'
            type="submit"
            unelevated
            size="md"
            style="min-width:200px"
          >
            {{$t('send')}}
          </q-btn>
        </q-card-section>
      </q-form>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import useValidations from 'src/composables/useValidionRules';

export default defineComponent({
  name: 'AppDialogCompose',
  props: {
    modelValue: {
      type: Boolean,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
  },
  emits: {
    'update:modelValue': null,
    submit: null,
  },
  setup(props, { emit }) {
    const subjectText = ref(props.subject);
    const text = ref('');
    const { emptyString } = useValidations();
    const visible = computed({
      get():boolean {
        return props.modelValue;
      },
      set(newValue: boolean): void {
        emit('update:modelValue', newValue);
      },
    });

    const onSubmit = () => {
      visible.value = false;

      emit('submit', {
        subject: subjectText.value,
        text: text.value,
      });
    };

    return {
      visible,
      subjectText,
      emptyString,
      text,
      onSubmit,
    };
  },
});
</script>

<style scoped>
  .card {
    width: 100%;
    max-width: 600px;
  }
</style>
