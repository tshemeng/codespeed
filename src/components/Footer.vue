<template>
  <div class="mt-6 text-xl">footer</div>
</template>

<script setup lang='ts'>
import { useI18n } from 'vue-i18n'
import { locales } from '/~/messages'
import { isDark } from '/~/logics'

const i18n = useI18n()

const toggleLocales = () => {
  // change to some real logic
  i18n.locale.value =
    locales[(locales.indexOf(i18n.locale.value) + 1) % locales.length]
}
</script>
