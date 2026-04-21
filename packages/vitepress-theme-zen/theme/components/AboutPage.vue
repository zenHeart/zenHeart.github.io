<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'
import { usePosts } from '../composables/usePosts.js'
import { getThemeI18n } from '../config.js'

const { site } = useData()
const { POSTS } = usePosts()
const i18n = computed(() => getThemeI18n(site.value))

const profile = computed(() => site.value?.themeConfig?.profile || {})
const experience = computed(() => site.value?.themeConfig?.experience || [])
const aboutSections = computed(() => site.value?.themeConfig?.about || [])
const contact = computed(() => site.value?.themeConfig?.contact || {})
const projects = computed(() => site.value?.themeConfig?.projects || [])
</script>

<template>
  <section class="about-page">
    <div class="about-head">
      <div class="about-photo">{{ profile.avatar }}</div>
      <div>
        <h1>{{ profile.name }}</h1>
        <div class="role">{{ profile.role }}</div>
        <p class="bio">{{ profile.bio }}</p>
      </div>
    </div>

    <div class="about-section">
      <h2>{{ i18n.aboutPage.profileLabel }} <span class="en">· {{ i18n.aboutPage.profileLabelEn }}</span></h2>
      <dl>
        <div v-if="profile.location" class="about-row">
          <dt>location</dt>
          <dd>{{ profile.location }}</dd>
        </div>
        <div v-if="profile.focus" class="about-row">
          <dt>focus</dt>
          <dd>{{ profile.focus }}</dd>
        </div>
        <div v-if="profile.stack" class="about-row">
          <dt>stack</dt>
          <dd>{{ profile.stack }}</dd>
        </div>
        <div class="about-row">
          <dt>writing</dt>
          <dd>{{ POSTS.length }} {{ i18n.aboutPage.postsLabel }}<span class="when">since {{ profile.since }}</span></dd>
        </div>
        <div class="about-row">
          <dt>works</dt>
          <dd>{{ projects.length }} {{ i18n.aboutPage.projectsLabel }}</dd>
        </div>
      </dl>
    </div>

    <div v-if="experience.length" class="about-section">
      <h2>{{ i18n.aboutPage.experienceLabel }} <span class="en">· {{ i18n.aboutPage.experienceLabelEn }}</span></h2>
      <dl>
        <div v-for="exp in experience" :key="exp.period" class="about-row">
          <dt>{{ exp.period }}</dt>
          <dd>{{ exp.title }}<span v-if="exp.note" class="when">{{ exp.note }}</span></dd>
        </div>
      </dl>
    </div>

    <div v-for="section in aboutSections" :key="section.title" class="about-section">
      <h2>{{ section.title }} <span class="en">· {{ section.titleEn }}</span></h2>
      <p class="about-prose">{{ section.content }}</p>
    </div>

    <div v-if="contact.github || contact.rss || contact.email" class="about-section">
      <h2>{{ i18n.aboutPage.contactLabel }} <span class="en">· {{ i18n.aboutPage.contactLabelEn }}</span></h2>
      <dl>
        <div v-if="contact.github" class="about-row">
          <dt>github</dt>
          <dd><a :href="contact.github" target="_blank" rel="noopener">{{ contact.githubUsername || '@zenHeart' }}</a></dd>
        </div>
        <div v-if="contact.rss" class="about-row">
          <dt>rss</dt>
          <dd><a :href="contact.rss">{{ i18n.header.feedUrl }}</a></dd>
        </div>
        <div v-if="contact.email" class="about-row">
          <dt>email</dt>
          <dd style="font-family: var(--mono); font-size: 13px;">{{ contact.email }}</dd>
        </div>
      </dl>
    </div>
  </section>
</template>
