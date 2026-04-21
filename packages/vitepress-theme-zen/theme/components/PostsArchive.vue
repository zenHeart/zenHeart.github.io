<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useData } from 'vitepress'
import { usePosts } from '../composables/usePosts.js'
import { getThemeI18n } from '../config.js'

const route = useRoute()
const { site } = useData()
const { POSTS, TAGS, postsByYear } = usePosts()
const i18n = computed(() => getThemeI18n(site.value))

const archiveQuery = ref('')
const activeTag = ref(null)
const activeYear = ref(null)

// Initialize filters from URL params
onMounted(() => {
  const params = new URLSearchParams(window.location.search)
  activeTag.value = params.get('tag') || ''
  activeYear.value = params.get('year') || ''
})

// Input value: show activeTag when set, otherwise archiveQuery
const searchInputValue = computed({
  get: () => activeTag.value || archiveQuery.value,
  set: (val) => {
    archiveQuery.value = val
    if (activeTag.value && !val) {
      const params = new URLSearchParams(window.location.search)
      params.delete('tag')
      window.history.pushState({}, '', params.toString() ? `/posts?${params}` : '/posts')
    }
  }
})

// Filtered posts based on tag, year, and query
const filteredPostsForArchive = computed(() => {
  const tagFilter = (route.query && route.query.tag) || activeTag.value
  const yearFilter = (route.query && route.query.year) || activeYear.value
  const posts = POSTS.value || []
  return posts.filter(p => {
    if (tagFilter && !p.tags.includes(tagFilter)) return false
    if (yearFilter && !p.date.startsWith(yearFilter)) return false
    if (archiveQuery.value) {
      const q = archiveQuery.value.toLowerCase()
      return p.title.toLowerCase().includes(q) ||
             p.excerpt.toLowerCase().includes(q) ||
             p.tags.some(t => t.toLowerCase().includes(q))
    }
    return true
  })
})

// Group filtered posts by year
const filteredPostsByYear = computed(() => {
  const groups = {}
  filteredPostsForArchive.value.forEach(post => {
    const year = post.date.split('-')[0]
    if (!groups[year]) groups[year] = []
    groups[year].push(post)
  })
  return Object.entries(groups).sort((a, b) => b[0] - a[0])
})

function filterByTag(tagName) {
  const params = new URLSearchParams(window.location.search)
  if (activeTag.value === tagName) {
    params.delete('tag')
  } else {
    params.set('tag', tagName)
  }
  const queryString = params.toString()
  window.location.href = queryString ? `/posts?${queryString}` : '/posts'
}

function filterByYear(year) {
  const params = new URLSearchParams(window.location.search)
  if (activeYear.value === year) {
    params.delete('year')
  } else {
    params.set('year', year)
  }
  const queryString = params.toString()
  window.location.href = queryString ? `/posts?${queryString}` : '/posts'
}
</script>

<template>
  <section class="posts-archive">
    <div class="page-head">
      <h1 class="page-title"><span class="cn">{{ i18n.archivePage.title }}</span><span class="en">/ {{ i18n.archivePage.titleEn }} · {{ filteredPostsForArchive.length }} of {{ POSTS.length }}</span></h1>
      <span class="page-meta">{{ POSTS[POSTS.length-1]?.date?.slice(0,4) }} — {{ POSTS[0]?.date?.slice(0,4) }}</span>
    </div>

    <div class="archive-grid">
      <div class="archive-main">
        <!-- Search & Filter Bar -->
        <div class="archive-search-row">
          <input
            v-model="searchInputValue"
            type="text"
            :placeholder="i18n.archivePage.searchPlaceholder"
            class="archive-search-input"
          />
          <button v-if="activeTag" @click="filterByTag(activeTag)" class="archive-tag-filter-btn">
            {{ activeTag }} ×
          </button>
        </div>

        <!-- No results -->
        <div v-if="filteredPostsByYear.length === 0" class="archive-no-results">
          {{ i18n.archivePage.noResults }}
        </div>

        <!-- Year Groups -->
        <div v-for="[year, yearPosts] in filteredPostsByYear" :key="year" class="year-group">
          <div class="year-label">
            <span class="year-num">{{ year }}</span>
            <span class="year-count">{{ yearPosts.length }} entries</span>
          </div>
          <a v-for="post in yearPosts" :key="post.slug" :href="post.url" class="entry">
            <span class="date">{{ post.date }}</span>
            <div>
              <h3 class="title">{{ post.title }}</h3>
              <p class="excerpt">{{ post.excerpt }}</p>
            </div>
            <div class="tag-row">
              <span v-for="tag in post.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </a>
        </div>
      </div>

      <!-- Sidebar -->
      <aside class="archive-sidebar">
        <div class="aside-block">
          <h3>{{ i18n.archivePage.filterLabel }}<span class="en">{{ i18n.archivePage.filterLabelEn }}</span></h3>
          <div class="aside-tags">
            <a v-for="tag in TAGS" :key="tag.name"
               href="/posts"
               class="tag"
               :class="{ active: activeTag === tag.name }"
               @click.prevent="filterByTag(tag.name)">
              {{ tag.name }}<span class="count">{{ tag.count }}</span>
            </a>
          </div>
        </div>
        <div class="aside-block">
          <h3>{{ i18n.archivePage.byYearLabel }}<span class="en">{{ i18n.archivePage.byYearLabelEn }}</span></h3>
          <div class="aside-years">
            <a v-for="[year, yearPosts] in postsByYear" :key="year"
               href="/posts"
               class="year-item"
               :class="{ active: activeYear === year }"
               @click.prevent="filterByYear(year)">
              <span class="year-name">{{ year }}</span>
              <span class="year-count">{{ yearPosts.length }}</span>
            </a>
          </div>
        </div>
      </aside>
    </div>
  </section>
</template>
