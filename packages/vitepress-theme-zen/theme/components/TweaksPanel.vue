<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'
import { getThemeI18n } from '../config.js'

const props = defineProps({
  tweaksOpen: Boolean,
  ink: String
})

const emit = defineEmits(['update:tweaksOpen', 'update:ink'])

const { site } = useData()
const i18n = computed(() => getThemeI18n(site.value))

const inkValues = ['light', 'normal', 'heavy']
</script>

<template>
  <div class="tweaks-panel" :class="{ open: tweaksOpen }">
    <h4>{{ i18n.tweaks.title }}</h4>
    <div class="tweaks-row">
      <label>{{ i18n.tweaks.inkLabel }}</label>
      <div class="options">
        <button v-for="(value, idx) in inkValues" :key="value"
                :class="{ active: ink === value }"
                @click="emit('update:ink', value)">
          {{ i18n.tweaks.inkOptions[idx] }}
        </button>
      </div>
    </div>
  </div>
</template>
