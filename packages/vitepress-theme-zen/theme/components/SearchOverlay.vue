<script setup>
import { computed, onMounted, onUnmounted } from 'vue'
import { useData } from 'vitepress'
import { usePosts } from '../composables/usePosts.js'
import { getThemeI18n } from '../config.js'

const props = defineProps({
  searchOpen: Boolean,
  searchQuery: String,
  searchFocused: Number
})

const emit = defineEmits(['update:searchOpen', 'update:searchQuery', 'update:searchFocused'])

const { site } = useData()
const { POSTS } = usePosts()
const i18n = computed(() => getThemeI18n(site.value))

const filteredPosts = computed(() => {
  if (!props.searchQuery) return []
  const q = props.searchQuery.toLowerCase()
  const posts = POSTS.value || []
  return posts.filter(p =>
    p.title.toLowerCase().includes(q) ||
    p.excerpt.toLowerCase().includes(q) ||
    p.tags.some(t => t.toLowerCase().includes(q))
  ).slice(0, 8)
})

function closeSearch() {
  emit('update:searchOpen', false)
  emit('update:searchQuery', '')
}

function handleKeydown(e) {
  if (e.key === 'Escape') closeSearch()
  if (props.searchOpen) {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      emit('update:searchFocused', Math.min(props.searchFocused + 1, filteredPosts.value.length - 1))
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      emit('update:searchFocused', Math.max(props.searchFocused - 1, 0))
    }
    if (e.key === 'Enter' && filteredPosts.value[props.searchFocused]) {
      window.location.href = filteredPosts.value[props.searchFocused].url
    }
  }
}

onMounted(() => document.addEventListener('keydown', handleKeydown))
onUnmounted(() => document.removeEventListener('keydown', handleKeydown))
</script>

<template>
  <div v-if="searchOpen" class="search-overlay open" @click.self="closeSearch">
    <div class="search-panel">
      <div class="search-input-row">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
        <input :value="searchQuery" @input="emit('update:searchQuery', $event.target.value)" :placeholder="i18n.search.placeholder" autofocus />
        <span class="hint">{{ i18n.search.closeHint }}</span>
      </div>
      <div class="search-results">
        <div v-if="filteredPosts.length === 0 && searchQuery" class="search-empty">
          {{ i18n.search.noResults }}
        </div>
        <a v-for="(post, i) in filteredPosts" :key="post.slug"
           :href="post.url"
           class="search-result"
           :class="{ focused: i === searchFocused }">
          <span class="date">{{ post.date }}</span>
          <span class="title">{{ post.title }}</span>
        </a>
      </div>
      <div class="search-footer">
        <span><kbd>↑</kbd><kbd>↓</kbd> {{ i18n.search.navHint }}</span>
        <span><kbd>↵</kbd> {{ i18n.search.openHint }}</span>
        <span><kbd>esc</kbd> {{ i18n.search.exitHint }}</span>
      </div>
    </div>
  </div>
</template>
