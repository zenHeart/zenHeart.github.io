<script setup>
import { computed } from 'vue'
import { useData, useRoute } from 'vitepress'
import { getThemeI18n } from '../config.js'

const props = defineProps({
  isDark: Boolean,
  searchOpen: Boolean,
  tweaksOpen: Boolean
})

const emit = defineEmits(['update:isDark', 'update:searchOpen', 'update:tweaksOpen', 'toggleTweaks'])

const { site } = useData()
const route = useRoute()

const nav = computed(() => site.value?.themeConfig?.nav || [])
const i18n = computed(() => getThemeI18n(site.value))

function toggleDarkMode() {
  emit('update:isDark', !props.isDark)
  document.documentElement.setAttribute('data-theme', !props.isDark ? 'dark' : 'light')
  localStorage.setItem('theme', !props.isDark ? 'dark' : 'light')
}

function openSearch() {
  emit('update:searchOpen', true)
}

function toggleTweaks() {
  emit('update:tweaksOpen', !props.tweaksOpen)
}
</script>

<template>
  <header class="chrome">
    <div class="chrome-inner">
      <a class="brand" href="/">
        <span class="seal">{{ i18n.brand.seal }}</span>
        <span class="brand-text"><span class="brand-cn">{{ i18n.brand.taglineCn }}</span><span class="brand-en">{{ i18n.brand.taglineEn }}</span></span>
      </a>

      <nav class="nav">
        <a v-for="item in nav" :key="item.path || item.link"
           :href="item.path || item.link"
           :class="{ active: route.path === (item.path || item.link) || (item.path && route.path.startsWith(item.path)) }">
          {{ item.text }}<span v-if="item.en" class="en">{{ item.en }}</span>
        </a>
      </nav>

      <div class="chrome-right">
        <button class="icon-btn" @click="openSearch" :title="i18n.header.searchTooltip">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
        </button>
        <button class="icon-btn" @click="toggleDarkMode" :title="i18n.header.themeTooltip">
          <svg v-if="!isDark" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
          <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
        </button>
        <a class="icon-btn" :href="i18n.header.feedUrl" :title="i18n.header.rssTooltip">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 11a9 9 0 0 1 9 9"/><path d="M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1"/>
          </svg>
        </a>
        <button class="icon-btn" @click="toggleTweaks" :title="i18n.header.settingsTooltip">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>
