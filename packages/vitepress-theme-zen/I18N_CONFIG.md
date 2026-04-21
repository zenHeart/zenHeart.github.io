# VitePress Theme Zen - I18N 配置指南

## 概述

主题已重构，所有硬编码的文本都已移至配置系统，避免主题与具体内容的耦合。

## 快速开始

配置文件中的 `themeConfig` 对象支持 `i18n` 字段，用于自定义主题文本。

### 基础配置示例

```javascript
// .vitepress/config.js
export default {
  themeConfig: {
    // 默认使用内置的 i18n 配置
    // 如需自定义，可以在这里提供 i18n 对象
    i18n: {
      zh: {
        brand: {
          seal: '禅',
          taglineCn: '编码即是修行',
          taglineEn: 'ZENHEART'
        },
        // ... 其他配置
      }
    }
  }
}
```

## 配置结构

### 1. Brand (品牌)

```javascript
brand: {
  seal: '禅',                    // 品牌字符
  taglineCn: '编码即是修行',     // 品牌中文标语
  taglineEn: 'ZENHEART'         // 品牌英文标语
}
```

### 2. Header (页头)

```javascript
header: {
  searchTooltip: '搜索 (⌘K)',    // 搜索按钮提示
  themeTooltip: '切换主题',      // 主题切换按钮提示
  rssTooltip: 'RSS 订阅',        // RSS 链接提示
  settingsTooltip: '设置',       // 设置按钮提示
  feedUrl: '/feed.xml'           // RSS Feed 链接
}
```

### 3. Footer (页脚)

```javascript
footer: {
  blogLabel: '博客',             // 博客链接文本
  aboutLabel: '关于'             // 关于链接文本
}
```

### 4. Home (主页)

```javascript
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
}
```

### 5. Search (搜索)

```javascript
search: {
  placeholder: '搜索文章...',
  closeHint: 'ESC 关闭',
  noResults: '未找到匹配的文章',
  navHint: '↑↓ 导航',
  openHint: '↵ 打开',
  exitHint: 'esc 关闭'
}
```

### 6. Tweaks (设置面板)

```javascript
tweaks: {
  title: '设置',
  inkLabel: '墨色',
  inkOptions: ['淡', '中', '浓']
}
```

### 7. Tags Page (标签页)

```javascript
tagsPage: {
  title: '标签',
  titleEn: 'topics',
  description: '十年写作的沉淀，大多落在工具、方法论与计算机基础三处。下面是所有主题的分布 —— 字号代表篇数。点击任一标签查看归档。',
  distributionTitle: '分布',
  distributionTitleEn: 'distribution'
}
```

### 8. Archive Page (笔记归档)

```javascript
archivePage: {
  title: '全部笔记',
  titleEn: 'archive',
  searchPlaceholder: '在标题、摘要、标签中搜索…',
  noResults: '无匹配结果 · no matches',
  filterLabel: '按标签过滤',
  filterLabelEn: 'filter',
  byYearLabel: '按年份',
  byYearLabelEn: 'by year'
}
```

### 9. Projects Page (项目看板)

```javascript
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
}
```

### 10. About Page (关于页面)

```javascript
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
```

## 使用方式

### 完全使用默认配置

无需任何配置，主题会自动使用内置默认值。

### 部分自定义

只需要在 `i18n.zh` 中提供要覆盖的字段即可，其他字段会使用默认值：

```javascript
themeConfig: {
  i18n: {
    zh: {
      brand: {
        seal: '🧘',  // 自定义品牌字符
        // 其他字段使用默认值
      }
    }
  }
}
```

### 完全自定义

提供完整的 i18n 配置对象来覆盖所有默认值。

## 扩展支持

未来可以轻松添加多语言支持：

```javascript
themeConfig: {
  i18n: {
    zh: { /* 中文配置 */ },
    en: { /* 英文配置 */ }
  }
}
```

## 技术细节

- 配置通过 `getThemeI18n(site.value)` 函数从 `config.js` 中获取
- 默认值定义在 `defaultI18n` 对象中
- 用户配置会与默认值合并，用户值优先
- 所有组件都通过 computed property `i18n` 访问配置

## 迁移指南

如果你正在升级现有的站点：

1. 现有站点无需改动，继续使用默认配置
2. 如需自定义，在 `.vitepress/config.js` 中添加 `themeConfig.i18n` 配置
3. 只需配置需要改动的部分，其他使用默认值
