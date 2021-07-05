<template>
  <q-btn unelevated round>
    <div style="width:30px;height:30px">
      <img :src="currentFlag">
    </div>
    <q-menu>
      <q-list style="min-width: 100px">
        <q-item
          v-for="language in languages"
          :key="language.name"
          clickable
          v-close-popup
          @click="changeLanguage(language.code)"
        >
          <div class="flex items-center">
            <div class="q-mr-md" style="width:30px;height:30px">
              <img :src="language.img">
            </div>
            <span>{{language.name}}</span>
          </div>
        </q-item>
      </q-list>
    </q-menu>
  </q-btn>
</template>

<script lang="ts">
import {
  defineComponent, ref,
} from 'vue';
import { useI18n } from 'vue-i18n';

interface ILanguage {
  name: string,
  code: string,
  img: string
}

export default defineComponent({
  name: 'AppLanguageSwitcher',
  setup() {
    const { locale } = useI18n({ useScope: 'global' });
    const languages: ILanguage[] = [
      {
        name: 'English',
        code: 'en-US',
        img: require('src/assets/flags/usa.svg'), //eslint-disable-line
      },
      {
        name: 'Русский',
        code: 'ru',
        img: require('src/assets/flags/russia.svg'), //eslint-disable-line
      },
    ];
    const currentFlag = ref('');

    const changeLanguage = (code: string) => {
      const language = languages.find((l) => l.code === code);

      if (language) {
        locale.value = language.code;
        currentFlag.value = language.img;
      }
    };

    changeLanguage(locale.value);

    return {
      currentFlag,
      languages,
      changeLanguage,
    };
  },

});
</script>
