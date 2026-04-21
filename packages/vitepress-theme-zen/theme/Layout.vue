<script setup>
import { computed, onMounted } from 'vue'
import { useData, useRoute } from 'vitepress'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import HomePage from './components/HomePage.vue'
import PostsArchive from './components/PostsArchive.vue'
import TagsPage from './components/TagsPage.vue'
import ProjectsPage from './components/ProjectsPage.vue'
import AboutPage from './components/AboutPage.vue'
import PostContent from './components/PostContent.vue'
import SearchOverlay from './components/SearchOverlay.vue'
import TweaksPanel from './components/TweaksPanel.vue'
import { useUIState } from './composables/useUIState.js'
import './styles/main.css'

const { site } = useData()
const route = useRoute()

// UI state (theme, search, tweaks)
const { isDark, searchOpen, searchQuery, searchFocused, tweaksOpen, ink, openSearch, toggleDarkMode } = useUIState()

// Page type detection
const isHome = computed(() => route.path === '/' || route.path === '/index')
const isPosts = computed(() => route.path === '/posts' || route.path === '/posts/')
const isTags = computed(() => route.path === '/tags' || route.path === '/tags/')
const isProjects = computed(() => route.path === '/projects' || route.path === '/projects/')
const isAbout = computed(() => route.path === '/about' || route.path === '/about/')
const isPost = computed(() => route.path.startsWith('/posts/') && route.path.length > '/posts/'.length)

// Handle keyboard shortcut for search (⌘K / Ctrl+K)
onMounted(() => {
  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault()
      openSearch()
    }
  })
})
</script>

<template>
  <div class="zen-app" :data-ink="ink">
    <!-- Header -->
    <Header
      v-model:isDark="isDark"
      v-model:searchOpen="searchOpen"
      v-model:tweaksOpen="tweaksOpen"
    />

    <!-- Main Content -->
    <main class="page">
      <HomePage v-if="isHome" />
      <PostsArchive v-else-if="isPosts" />
      <TagsPage v-else-if="isTags" />
      <ProjectsPage v-else-if="isProjects" />
      <AboutPage v-else-if="isAbout" />
      <PostContent v-else-if="isPost" />
    </main>

    <!-- Footer -->
    <Footer />

    <!-- Search Overlay -->
    <SearchOverlay
      v-model:searchOpen="searchOpen"
      v-model:searchQuery="searchQuery"
      v-model:searchFocused="searchFocused"
    />

    <!-- Tweaks Panel -->
    <TweaksPanel
      v-model:tweaksOpen="tweaksOpen"
      v-model:ink="ink"
    />
  </div>
</template>
