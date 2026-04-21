<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'
import { getThemeI18n } from '../config.js'

const { site } = useData()

const profile = computed(() => site.value?.themeConfig?.profile || {})
const contact = computed(() => site.value?.themeConfig?.contact || {})
const i18n = computed(() => getThemeI18n(site.value))
const copyrightYear = computed(() => {
  const since = profile.value.since
  return since ? `${since}—${new Date().getFullYear()}` : new Date().getFullYear()
})
</script>

<template>
  <footer class="foot">
    <span>© {{ copyrightYear }} {{ profile.name }}</span>
    <div>
      <a :href="contact.github">GitHub</a>
      <a href="/posts">{{ i18n.footer.blogLabel }}</a>
      <a href="/about">{{ i18n.footer.aboutLabel }}</a>
    </div>
  </footer>
</template>
