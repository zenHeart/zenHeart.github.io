<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'
import { getThemeI18n } from '../config.js'

const { site } = useData()

const projects = computed(() => site.value?.themeConfig?.projects || [])
const i18n = computed(() => getThemeI18n(site.value))
const KANBAN_COLS = computed(() => i18n.value.projectsPage.kanbanColumns)
</script>

<template>
  <section class="projects-page">
    <div class="page-head">
      <h1 class="page-title"><span class="cn">{{ i18n.projectsPage.title }}</span><span class="en">/ {{ i18n.projectsPage.titleEn }}</span></h1>
      <span class="page-meta">{{ projects.length }} projects · open source</span>
    </div>
    <div class="projects-kanban">
      <div v-for="col in KANBAN_COLS" :key="col.key" class="kanban-col">
        <div class="kanban-col-head">
          <div>
            <span class="kanban-col-title">{{ col.key }}</span>
            <span class="kanban-col-title-en">/ {{ col.en }}</span>
          </div>
          <span class="kanban-col-count" :class="col.tone">{{ (projects.filter(p => p.status === col.key) || []).length }}</span>
        </div>
        <div class="kanban-cards">
          <template v-if="projects.filter(p => p.status === col.key).length === 0">
            <div class="kanban-empty">{{ i18n.projectsPage.emptyState }}</div>
          </template>
          <a v-for="project in projects.filter(p => p.status === col.key)" :key="project.title" :href="project.url" target="_blank" rel="noopener" class="kanban-card">
            <div class="kanban-card-meta">
              <span class="kanban-card-dot" :style="{ background: project.category === i18n.projectsPage.categoryGuides ? 'var(--seal)' : 'var(--ink-soft)' }"></span>
              <span class="kanban-card-cat">{{ project.category }}</span>
            </div>
            <h3>{{ project.title }}</h3>
            <p>{{ project.desc }}</p>
            <div class="kanban-card-footer">
              <span>#{{ project.title.toLowerCase().replace(/[^a-z0-9]/g, '-').slice(0, 12) }}</span>
              <span>↗ {{ i18n.projectsPage.openLabel }}</span>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="kanban-legend">
      <span class="kanban-legend-item"><span class="kanban-legend-dot" style="background: var(--seal)"></span> {{ i18n.projectsPage.categoryGuides }} / {{ i18n.projectsPage.categoryGuidesEn }}</span>
      <span class="kanban-legend-item"><span class="kanban-legend-dot" style="background: var(--ink-soft)"></span> {{ i18n.projectsPage.categoryTools }} / {{ i18n.projectsPage.categoryToolsEn }}</span>
    </div>
  </section>
</template>
