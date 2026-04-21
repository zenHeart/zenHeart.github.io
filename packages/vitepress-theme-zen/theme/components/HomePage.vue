<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'
import { usePosts } from '../composables/usePosts.js'
import { getThemeI18n } from '../config.js'

const { site } = useData()
const { POSTS, TAGS } = usePosts()
const i18n = computed(() => getThemeI18n(site.value))

const hero = computed(() => site.value?.themeConfig?.hero || {})
const heroTitle = computed(() => hero.value.title || i18n.value.home.defaultTitle)
const heroTagline = computed(() => hero.value.tagline || i18n.value.home.defaultTagline)
const heroIntro = computed(() => hero.value.intro || '')

// Logic: Take top 8 recent posts across all years, then group them by year
const recentPostsByYear = computed(() => {
  const recent = POSTS.value.slice(0, 8)
  const groups = {}
  recent.forEach(post => {
    const year = post.date?.split('-')[0]
    if (year) {
      if (!groups[year]) groups[year] = []
      groups[year].push(post)
    }
  })
  return Object.entries(groups).sort((a, b) => b[0] - a[0])
})

// Full timeline for sidebar
const fullTimeline = computed(() => {
  const groups = {}
  POSTS.value.forEach(post => {
    const year = post.date?.split('-')[0]
    if (year) {
      if (!groups[year]) groups[year] = []
      groups[year].push(post)
    }
  })
  return Object.entries(groups).sort((a, b) => b[0] - a[0])
})
</script>

<template>
  <section class="home">
    <div class="hero">
      <div class="wash"></div>
      <h1>{{ heroTitle }}</h1>
      <p class="tagline">{{ heroTagline }}</p>
      <p class="intro">{{ heroIntro }}</p>
      <div class="hero-meta">
        <span><strong>{{ POSTS.length }}</strong> {{ i18n.home.articlesLabel }}</span>
        <span><strong>{{ fullTimeline.length }}</strong> {{ i18n.home.yearSpanLabel }}</span>
        <span><strong>{{ TAGS.length }}</strong> {{ i18n.home.tagsLabel }}</span>
      </div>
    </div>

    <div class="home-grid">
      <div class="entries">
        <div class="section-head">
          <h2>{{ i18n.home.recentPostsLabel }}<span class="en">{{ i18n.home.recentPostsLabelEn }}</span></h2>
          <a href="/archive" class="more">{{ i18n.home.viewAllLabel }}</a>
        </div>
        <div v-for="[year, yearPosts] in recentPostsByYear" :key="year" class="year-group">
          <div class="year-label">
            <span class="year-num">{{ year }}</span>
            <span class="year-count">{{ yearPosts.length }} {{ yearPosts.length === 1 ? 'entry' : 'entries' }}</span>
          </div>
          <a v-for="post in yearPosts" :key="post.slug" :href="post.url" class="entry">
            <time class="date">{{ post.date.slice(5) }}</time>
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

      <aside class="sidebar">
        <div class="aside-block">
          <h3>{{ i18n.home.tagsTitle }}<span class="en">{{ i18n.home.tagsTitleEn }}</span></h3>
          <div class="aside-tags">
            <a v-for="tag in TAGS.slice(0, 15)" :key="tag.name" :href="`/archive?tag=${tag.name}`" class="tag">{{ tag.name }}<span class="count">{{ tag.count }}</span></a>
          </div>
        </div>
        <div class="aside-block">
          <h3>{{ i18n.home.timelineLabel }}<span class="en">{{ i18n.home.timelineLabelEn }}</span></h3>
          <div class="aside-years">
            <a v-for="[year, yearPosts] in fullTimeline" :key="year" :href="`/archive?year=${year}`" class="year-item">
              <span class="year-name">{{ year }}</span>
              <span class="year-count">{{ yearPosts.length }}</span>
            </a>
          </div>
        </div>
      </aside>
    </div>
  </section>
</template>
