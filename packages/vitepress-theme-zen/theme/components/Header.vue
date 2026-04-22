<script setup>
import { computed, ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { useData, useRoute } from 'vitepress'
import { getThemeI18n } from '../config.js'

const props = defineProps({
  isDark: Boolean,
  searchOpen: Boolean
})

const emit = defineEmits(['update:isDark', 'update:searchOpen'])

const { site } = useData()
const route = useRoute()

const nav = computed(() => site.value?.themeConfig?.nav || [])
const i18n = computed(() => getThemeI18n(site.value))

const menuOpen = ref(false)

function toggleDarkMode() {
  emit('update:isDark', !props.isDark)
  document.documentElement.setAttribute('data-theme', !props.isDark ? 'dark' : 'light')
  localStorage.setItem('theme', !props.isDark ? 'dark' : 'light')
}

function openSearch() {
  emit('update:searchOpen', true)
  menuOpen.value = false
}

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function closeMenu() {
  menuOpen.value = false
}

// Close drawer on route change so nav clicks always dismiss it
watch(() => route.path, closeMenu)

// Lock body scroll when drawer is open
watch(menuOpen, (open) => {
  if (typeof document === 'undefined') return
  document.body.style.overflow = open ? 'hidden' : ''
})

function onKeydown(e) {
  if (e.key === 'Escape' && menuOpen.value) closeMenu()
}

onMounted(() => document.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKeydown)
  if (typeof document !== 'undefined') document.body.style.overflow = ''
})
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
        <a class="icon-btn rss-link" :href="i18n.header.feedUrl" :title="i18n.header.rssTooltip">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 11a9 9 0 0 1 9 9"/><path d="M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1"/>
          </svg>
        </a>
        <button class="icon-btn menu-btn" :class="{ active: menuOpen }" @click="toggleMenu" :title="i18n.header.menuTooltip" :aria-expanded="menuOpen" aria-label="菜单">
          <svg v-if="!menuOpen" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/>
          </svg>
          <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <line x1="6" y1="6" x2="18" y2="18"/><line x1="6" y1="18" x2="18" y2="6"/>
          </svg>
        </button>
      </div>
    </div>

  </header>

  <!-- Mobile drawer — teleported out of sticky+backdrop-filter parent -->
  <Teleport to="body">
    <div class="mobile-drawer" :class="{ open: menuOpen }" @click.self="closeMenu" aria-hidden="true">
      <nav class="mobile-nav" @click="closeMenu">
        <a v-for="item in nav" :key="item.path || item.link"
           :href="item.path || item.link"
           :class="{ active: route.path === (item.path || item.link) || (item.path && route.path.startsWith(item.path)) }">
          <span class="mobile-nav-text">{{ item.text }}</span>
          <span v-if="item.en" class="mobile-nav-en">{{ item.en }}</span>
        </a>
        <a :href="i18n.header.feedUrl" class="mobile-nav-rss">
          <span class="mobile-nav-text">RSS</span>
          <span class="mobile-nav-en">feed.xml</span>
        </a>
      </nav>
    </div>
  </Teleport>
</template>
