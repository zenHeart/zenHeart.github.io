import { ref, onMounted } from 'vue'

// Module-level state - shared across all useUIState() calls
const searchOpen = ref(false)
const searchQuery = ref('')
const searchFocused = ref(0)
const tweaksOpen = ref(false)
const ink = ref('normal')
const isDark = ref(false)

function applyTheme(dark) {
  const root = document.documentElement
  root.setAttribute('data-theme', dark ? 'dark' : 'light')
  root.classList.toggle('dark', dark)
}

// Initialize theme from localStorage on first import
onMounted(() => {
  isDark.value = localStorage.getItem('theme') === 'dark'
  applyTheme(isDark.value)
})

export function useUIState() {
  function toggleDarkMode() {
    isDark.value = !isDark.value
    applyTheme(isDark.value)
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  }

  function openSearch() { searchOpen.value = true }
  function closeSearch() { searchOpen.value = false; searchQuery.value = '' }

  return {
    searchOpen,
    searchQuery,
    searchFocused,
    tweaksOpen,
    ink,
    isDark,
    toggleDarkMode,
    openSearch,
    closeSearch
  }
}
