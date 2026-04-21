export const defaultI18n = {
  zh: {
    brand: {
      seal: '禅',
      taglineCn: '编码即是修行',
      taglineEn: 'ZENHEART'
    },
    header: {
      searchTooltip: '搜索 (⌘K)',
      themeTooltip: '切换主题',
      rssTooltip: 'RSS 订阅',
      settingsTooltip: '设置',
      feedUrl: '/feed.xml'
    },
    footer: {
      blogLabel: '博客',
      aboutLabel: '关于'
    },
    home: {
      recentPostsLabel: '近期笔记',
      recentPostsLabelEn: 'Recent Notes',
      viewAllLabel: '查看全部 →',
      articlesLabel: '文章',
      yearSpanLabel: '年度跨度',
      tagsLabel: '标签分类',
      tagsTitle: '标签',
      tagsTitleEn: 'Tags',
      timelineLabel: '时间线',
      timelineLabelEn: 'Timeline',
      defaultTitle: '编码即是修行',
      defaultTagline: 'Coding as Spiritual Practice'
    },
    search: {
      placeholder: '搜索文章...',
      closeHint: 'ESC 关闭',
      noResults: '未找到匹配的文章',
      navHint: '↑↓ 导航',
      openHint: '↵ 打开',
      exitHint: 'esc 关闭'
    },
    tweaks: {
      title: '设置',
      inkLabel: '墨色',
      inkOptions: ['淡', '中', '浓']
    },
    tagsPage: {
      title: '标签',
      titleEn: 'topics',
      description: '十年写作的沉淀，大多落在工具、方法论与计算机基础三处。下面是所有主题的分布 —— 字号代表篇数。点击任一标签查看归档。',
      distributionTitle: '分布',
      distributionTitleEn: 'distribution'
    },
    archivePage: {
      title: '全部笔记',
      titleEn: 'archive',
      searchPlaceholder: '在标题、摘要、标签中搜索…',
      noResults: '无匹配结果 · no matches',
      filterLabel: '按标签过滤',
      filterLabelEn: 'filter',
      byYearLabel: '按年份',
      byYearLabelEn: 'by year'
    },
    projectsPage: {
      title: '项目看板',
      titleEn: 'kanban',
      kanbanColumns: [
        { key: '待完善', en: 'backlog', tone: 'draft' },
        { key: '进行中', en: 'in-progress', tone: 'wip' },
        { key: '已完成', en: 'shipped', tone: 'done' }
      ],
      emptyState: '— empty —',
      openLabel: '↗ open',
      categoryGuides: '指南',
      categoryGuidesEn: 'guides',
      categoryTools: '工具',
      categoryToolsEn: 'tools'
    },
    aboutPage: {
      profileLabel: '档案',
      profileLabelEn: 'Profile',
      experienceLabel: '经历',
      experienceLabelEn: 'Experience',
      contactLabel: '联系',
      contactLabelEn: 'Contact',
      postsLabel: '篇笔记',
      projectsLabel: 'open-source projects'
    }
  }
}

export function getThemeI18n(siteData, lang = 'zh') {
  const customI18n = siteData?.themeConfig?.i18n?.[lang]
  return {
    ...defaultI18n[lang],
    ...customI18n
  }
}
