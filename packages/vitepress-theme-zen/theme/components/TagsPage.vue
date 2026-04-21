<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'
import { usePosts } from '../composables/usePosts.js'
import { getThemeI18n } from '../config.js'

const { site } = useData()
const { POSTS, TAGS } = usePosts()
const i18n = computed(() => getThemeI18n(site.value))

const maxTagCount = computed(() => Math.max(...(TAGS.value || []).map(t => t.count)))
</script>

<template>
  <section class="tags-page">
    <div class="page-head">
      <h1 class="page-title"><span class="cn">{{ i18n.tagsPage.title }}</span><span class="en">/ {{ i18n.tagsPage.titleEn }}</span></h1>
      <span class="page-meta">{{ TAGS.length }} topics · {{ POSTS.length }} entries</span>
    </div>
    <div class="tag-cloud-wrap">
      <p class="tag-cloud-desc">{{ i18n.tagsPage.description }}</p>
      <div class="tag-cloud">
        <a v-for="tag in TAGS" :key="tag.name" :href="`/posts?tag=${tag.name}`" class="tag"
           :class="{ big: tag.count >= maxTagCount * 0.5, mid: tag.count >= maxTagCount * 0.2 && tag.count < maxTagCount * 0.5 }">
          {{ tag.name }}<span class="count">{{ tag.count }}</span>
        </a>
      </div>
      <div class="section-head" style="margin-top: 48px;">
        <h2>{{ i18n.tagsPage.distributionTitle }}<span class="en">/ {{ i18n.tagsPage.distributionTitleEn }}</span></h2>
      </div>
      <div class="tag-distribution">
        <a v-for="tag in TAGS" :key="tag.name" :href="`/posts?tag=${tag.name}`" class="tag-dist-row">
          <span class="tag-dist-name">{{ tag.name }}</span>
          <div class="tag-dist-bar">
            <div class="tag-dist-fill" :style="{ width: (tag.count / maxTagCount * 100) + '%' }"></div>
          </div>
          <span class="tag-dist-count">{{ tag.count }}</span>
        </a>
      </div>
    </div>
  </section>
</template>
