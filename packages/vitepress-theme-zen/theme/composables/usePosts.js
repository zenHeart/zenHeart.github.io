import { computed } from 'vue'

// Use Vite's import.meta.glob to load all posts at build time
const postFiles = import.meta.glob('/posts/*.md', { query: '?raw', import: 'default', eager: true })

function calculateReadTime(content = '') {
  const words = content.replace(/[#*`\[\]]/g, '').length
  return Math.ceil(words / 200)
}

function extractExcerpt(content = '', maxLength = 150) {
  const withoutFrontmatter = content.replace(/^---[\s\S]*?---/, '')
  const withoutHeaders = withoutFrontmatter.replace(/^#+ .*/gm, '')
  const paragraphs = withoutHeaders.split(/\n\n+/).filter(p => p.trim().length > 0)
  const firstPara = paragraphs[0] || ''
  const clean = firstPara.replace(/[*_`#>\[\]]/g, '').replace(/\n+/g, ' ').trim()
  if (clean.length <= maxLength) return clean
  return clean.slice(0, maxLength) + '…'
}

function slugToTitle(slug) {
  return slug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase())
}

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/)
  if (!match) return {}

  const fm = {}
  const lines = match[1].split('\n')
  let currentKey = null
  let currentArray = []

  lines.forEach(line => {
    // Check for array item (starts with hyphen)
    if (line.match(/^\s+-\s+/)) {
      const value = line.replace(/^\s+-\s+/, '').trim()
      if (currentKey) {
        currentArray.push(value)
      }
    } else {
      // Save previous array if exists
      if (currentKey && currentArray.length > 0) {
        fm[currentKey] = currentArray
        currentArray = []
      }
      // Parse key: value
      const colonIndex = line.indexOf(':')
      if (colonIndex > 0) {
        currentKey = line.slice(0, colonIndex).trim()
        const value = line.slice(colonIndex + 1).trim()
        if (value) {
          fm[currentKey] = value
          currentArray = []
        }
      }
    }
  })

  // Save last array
  if (currentKey && currentArray.length > 0) {
    fm[currentKey] = currentArray
  }

  return fm
}

export function usePosts() {
  const POSTS = computed(() => {
    return Object.entries(postFiles).map(([path, content]) => {
      // path is like /posts/2020-04-02-letter-to-myself.md
      const pathWithoutExt = path.replace('.md', '')
      // URL is the full path with date: /posts/2020-04-02-letter-to-myself
      const url = pathWithoutExt

      const fm = parseFrontmatter(content)

      // Date from filename (extracted from path)
      const dateMatch = path.match(/(\d{4}-\d{2}-\d{2})/)
      const date = dateMatch ? dateMatch[1] : ''

      // slug is the clean slug without date for display
      const filename = pathWithoutExt.replace('/posts/', '')
      const slugWithoutDate = filename.replace(/^\d{4}-\d{2}-\d{2}-/, '')
      const slug = fm.slug || slugWithoutDate

      const title = fm.title || (slug ? slugToTitle(slug) : '')
      const tags = Array.isArray(fm.tags) ? fm.tags : []
      const excerpt = fm.description || fm.excerpt || extractExcerpt(content)
      const read = parseInt(fm.read) || calculateReadTime(content)

      return { date, slug, url, title, excerpt, tags, read }
    }).filter(p => p.date).sort((a, b) => b.date.localeCompare(a.date))
  })

  const TAGS = computed(() => {
    const posts = POSTS.value || []
    const tagCounts = {}
    posts.forEach(post => {
      if (Array.isArray(post.tags)) {
        post.tags.forEach(tag => {
          tagCounts[tag] = (tagCounts[tag] || 0) + 1
        })
      }
    })
    return Object.entries(tagCounts)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
  })

  const postsByYear = computed(() => {
    const groups = {}
    const posts = POSTS.value || []
    posts.forEach(post => {
      const year = post.date?.split('-')[0]
      if (year) {
        if (!groups[year]) groups[year] = []
        groups[year].push(post)
      }
    })
    return Object.entries(groups).sort((a, b) => b[0] - a[0])
  })

  return {
    POSTS,
    TAGS,
    postsByYear
  }
}
