
<template>
  <div>
    <p>
      {{ t('intro.hi', { name }) }}
    </p>
    <p class="text-sm opacity-50">
      <em>{{ t('intro.dynamic-route') }}</em>
    </p>

    <div>
      <button class="m-3 mt-8 text-sm btn" @click="router.back()">
        {{ t('button.back') }}
      </button>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { defineProps } from 'vue'

const props = defineProps({
  name: {
    type: String,
    require: true,
  },
})

const router = useRouter()
const { t } = useI18n()
</script>
