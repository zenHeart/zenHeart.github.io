<script setup>
import { computed } from 'vue'
import { useData, useRoute } from 'vitepress'
import Giscus from '@giscus/vue'
import { useUIState } from '../composables/useUIState.js'
import { getThemeI18n } from '../config.js'

const route = useRoute()
const { site, frontmatter } = useData()
const { isDark } = useUIState()

const i18n = computed(() => getThemeI18n(site.value))
const config = computed(() => site.value?.themeConfig?.comments || null)

const enabled = computed(() => {
  if (!config.value) return false
  if (frontmatter.value?.comments === false) return false
  return Boolean(config.value.repo && config.value.repoId && config.value.categoryId)
})

// posts/2022-10-10-vimium → vimium ; frontmatter.slug 优先覆盖
const term = computed(() => {
  if (frontmatter.value?.slug) return frontmatter.value.slug
  const last = (route.path.replace(/\/$/, '').split('/').pop() || '')
  return last.replace(/^\d{4}-\d{2}-\d{2}-/, '') || last || 'home'
})

const giscusTheme = computed(() => {
  const t = config.value?.theme || {}
  return isDark.value ? (t.dark || 'dark_dimmed') : (t.light || 'light')
})
</script>

<template>
  <section v-if="enabled" class="comments">
    <h2 class="comments-title">{{ i18n.comments?.title || '评论 / Comments' }}</h2>
    <ClientOnly>
      <Giscus
        :repo="config.repo"
        :repo-id="config.repoId"
        :category="config.category"
        :category-id="config.categoryId"
        mapping="specific"
        :term="term"
        :strict="String(config.strict ?? '0')"
        :reactions-enabled="String(config.reactionsEnabled ?? '1')"
        emit-metadata="0"
        :input-position="config.inputPosition || 'top'"
        :theme="giscusTheme"
        :lang="config.lang || 'zh-CN'"
        loading="lazy"
      />
    </ClientOnly>
  </section>
</template>
