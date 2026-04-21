import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import './styles/main.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app, router, siteData }) {
    // Theme-level enhancements can be added here
  }
}
