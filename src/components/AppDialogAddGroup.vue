<template>
  <q-dialog v-model="visible" :persistent="false">
    <q-card class="card">
      <q-form
        @submit="onSubmit"
      >
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h5">{{title}}</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>
        <q-card-section class="q-pb-none">
          <q-input
            outlined
            v-model="nameGroup"
            :label="$t('name')"
            lazy-rules
            :rules="[emptyString, nameValidator]"
          />
        </q-card-section>
        <q-card-section v-if="options">
          <div class="text-subtitle1">{{optionsTitle}}</div>
          <div class="row items-center justify-start">
            <q-radio
              v-for="option in options"
              :key="option.value"
              keep-color
              :color="option.value"
              v-model="group"
              :val="option.value"
              :label="$t(option.name)"
              class="col-4 text-grey-8"
            ></q-radio>
          </div>
        </q-card-section>
        <q-card-section>
          <q-btn
            color='primary'
            class="full-width"
            type="submit"
          >
            {{$t(name ? 'edit': 'add')}}
          </q-btn>
        </q-card-section>
      </q-form>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import {
  defineComponent, computed, ref, PropType,
} from 'vue';
import useValidations from 'src/composables/useValidionRules';
import { IOptionGroup, IFieldValidator } from 'src/types/common';

export default defineComponent({
  name: 'AppDialogAddLabel',
  props: {
    modelValue: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      default: '',
    },
    nameValidator: {
      type: Function as PropType<IFieldValidator>,
    },
    optionsTitle: {
      type: String,
    },
    options: {
      type: Array as PropType<IOptionGroup[]>,
    },
  },
  emits: {
    'update:modelValue': null,
    add: null,
  },
  setup(props, { emit }) {
    const groupInitialValue = props.options ? props.options[0].value : '';
    const group = ref(groupInitialValue);
    const nameGroup = ref(props.name);
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

      emit('add', {
        oldName: props.name,
        newName: nameGroup.value,
        group: group.value,
      });

      nameGroup.value = '';
    };

    return {
      visible,
      opitons: props.options,
      group,
      nameGroup,
      emptyString,
      onSubmit,
    };
  },
});
</script>

<style scoped>
  .card {
    width: 100%;
    max-width: 400px;
  }
</style>
