import { useStorage } from '@vueuse/core'
import { Ref } from 'vue'

export const colorSchema = useStorage('color-schema', 'auto') as Ref<'auto' | 'dark' | 'light'>
