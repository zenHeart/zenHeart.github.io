<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick, watch } from 'vue'
import { useData, useRoute } from 'vitepress'
import { usePosts } from '../composables/usePosts.js'
import Comments from './Comments.vue'

const { frontmatter, page } = useData()
const route = useRoute()
const { POSTS } = usePosts()

const readingProgress = ref(0)
const activeHeading = ref(null)
const headings = ref([])

// Prev / next in the archive (POSTS is sorted newest → oldest)
const currentIndex = computed(() =>
  POSTS.value.findIndex(p => p.url === route.path.replace(/\/$/, ''))
)
const next = computed(() => currentIndex.value > 0 ? POSTS.value[currentIndex.value - 1] : null)
const prev = computed(() => currentIndex.value >= 0 && currentIndex.value < POSTS.value.length - 1 ? POSTS.value[currentIndex.value + 1] : null)

// Title fallback: frontmatter.title → page.title → derived from filename
const pageTitle = computed(() => frontmatter.value?.title || page.value?.title || '')
const pageDate = computed(() => {
  const fm = frontmatter.value?.date
  if (fm) return fm
  const m = route.path.match(/(\d{4}-\d{2}-\d{2})/)
  return m ? m[1] : ''
})
const pageRead = computed(() => frontmatter.value?.read)
const pageDesc = computed(() => frontmatter.value?.description || '')
const pageTags = computed(() => frontmatter.value?.tags || [])

function updateProgress() {
  const el = document.querySelector('.post-body')
  if (!el) return
  const rect = el.getBoundingClientRect()
  const total = Math.max(1, el.offsetHeight - window.innerHeight + 200)
  const scrolled = Math.max(0, -rect.top)
  readingProgress.value = Math.min(100, Math.max(0, (scrolled / total) * 100))

  const hs = el.querySelectorAll('h2, h3')
  let active = null
  for (const h of hs) {
    if (h.getBoundingClientRect().top < 120) active = h.id
    else break
  }
  activeHeading.value = active
}

function scrollToHeading(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function extractHeadings() {
  const el = document.querySelector('.post-body')
  if (!el) return
  const items = []
  el.querySelectorAll('h2, h3').forEach(h => {
    if (!h.id) return
    // VitePress appends a hidden ​ (zero-width) anchor text — strip it
    const text = (h.textContent || '').replace(/\u200b/g, '').replace(/^#\s*/, '').trim()
    items.push({ id: h.id, text, level: h.tagName === 'H2' ? 2 : 3 })
  })
  headings.value = items
}

onMounted(() => {
  window.addEventListener('scroll', updateProgress, { passive: true })
  updateProgress()
  nextTick(() => setTimeout(extractHeadings, 50))
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateProgress)
})

watch(() => route.path, () => {
  readingProgress.value = 0
  headings.value = []
  nextTick(() => setTimeout(extractHeadings, 50))
})
</script>

<template>
  <div class="reading-progress" :style="{ width: readingProgress + '%' }"></div>

  <nav class="post-toc" v-if="headings.length > 0">
    <div class="toc-label">目次 / toc</div>
    <ul>
      <li v-for="h in headings" :key="h.id" :class="{ indent: h.level === 3 }">
        <a :class="{ active: activeHeading === h.id }" @click="scrollToHeading(h.id)">{{ h.text }}</a>
      </li>
    </ul>
  </nav>

  <article class="post-wrap">
    <a href="/posts" class="back-link">← 返回博客 / back</a>

    <header class="post-head">
      <div class="kicker">
        <span v-if="pageDate">{{ pageDate }}</span>
        <template v-if="pageRead">
          <span>·</span>
          <span>约 {{ pageRead }} 分钟</span>
        </template>
        <span>·</span>
        <span>by zenheart</span>
      </div>
      <h1>{{ pageTitle }}</h1>
      <p class="dek" v-if="pageDesc">{{ pageDesc }}</p>
      <div class="post-tags" v-if="pageTags.length">
        <a v-for="tag in pageTags" :key="tag" href="/posts" class="tag">{{ tag }}</a>
      </div>
    </header>

    <div class="post-body">
      <Content />
    </div>

    <nav class="post-foot">
      <a v-if="prev" :href="prev.url" class="nav-card prev">
        <div class="dir">← 上一篇 / prev</div>
        <h4>{{ prev.title }}</h4>
      </a>
      <div v-else></div>

      <a v-if="next" :href="next.url" class="nav-card next">
        <div class="dir">下一篇 / next →</div>
        <h4>{{ next.title }}</h4>
      </a>
      <div v-else></div>
    </nav>

    <Comments />
  </article>
</template>
