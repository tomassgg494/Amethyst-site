import { computed, reactive } from 'vue'
import pt from './pt.js'
import en from './en.js'

const messages = { pt, en }
const STORAGE_KEY = 'amethyst-lang'

function detect() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved && messages[saved]) return saved
  } catch {
    /* storage unavailable */
  }
  const nav = typeof navigator !== 'undefined' ? navigator.language : 'pt'
  return /^pt\b/i.test(nav) ? 'pt' : 'en'
}

const state = reactive({ locale: detect() })

export const locale = computed(() => state.locale)

export const LOCALES = [
  { code: 'pt', short: 'PT', label: 'Português' },
  { code: 'en', short: 'EN', label: 'English' },
]

export function setLocale(code) {
  if (!messages[code] || code === state.locale) return
  state.locale = code
  try {
    localStorage.setItem(STORAGE_KEY, code)
  } catch {
    /* storage unavailable */
  }
  document.documentElement.lang = code
}

export function toggleLocale() {
  setLocale(state.locale === 'pt' ? 'en' : 'pt')
}

function pick(dict, key) {
  return key.split('.').reduce((acc, part) => (acc == null ? undefined : acc[part]), dict)
}

function fill(str, params) {
  if (!params) return str
  return str.replace(/\{(\w+)\}/g, (m, name) => (name in params ? String(params[name]) : m))
}

export function t(key, params) {
  let value = pick(messages[state.locale], key)
  if (value === undefined) value = pick(messages.pt, key)
  if (value === undefined) {
    console.warn(`[i18n] missing key: ${key}`)
    return key
  }
  return typeof value === 'string' ? fill(value, params) : value
}

document.documentElement.lang = state.locale
