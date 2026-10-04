<script setup>
import CodeBlock from '../../components/CodeBlock.vue'
import { t } from '../../i18n'

const sample = `fn main() -> int {
    var message: int = 42;
    print(message);
    return 0;
}`
</script>

<template>
  <div>
    <h1>{{ t('docsHome.title') }}</h1>
    <p v-html="t('docsHome.intro')"></p>

    <div class="callout" v-html="t('docsHome.callout')"></div>

    <h2>{{ t('docsHome.hello') }}</h2>
    <CodeBlock :code="sample" filename="hello.amt" />

    <h2>{{ t('docsHome.features') }}</h2>
    <ul v-html="t('docsHome.features_list')"></ul>

    <h2>{{ t('docsHome.next') }}</h2>
    <ol>
      <li>
        <router-link to="/docs/beginners">{{ t('docs.nav.beginners') }}</router-link> —
        {{ t('docsHome.next_beginners') }}
      </li>
      <li>
        <router-link to="/docs/install">{{ t('docs.nav.install') }}</router-link> —
        {{ t('docsHome.next_install') }}
      </li>
      <li>
        <router-link to="/docs/syntax">{{ t('docs.nav.syntax') }}</router-link> —
        {{ t('docsHome.next_syntax') }}
      </li>
      <li>
        <router-link to="/docs/types">{{ t('docs.nav.types') }}</router-link> —
        {{ t('docsHome.next_types') }}
      </li>
      <li>
        <router-link to="/docs/statements">{{ t('docs.nav.statements') }}</router-link>
        {{ t('docs.and') }}
        <router-link to="/docs/expressions">{{ t('docs.nav.expressions') }}</router-link>
      </li>
      <li>
        <router-link to="/docs/compiler">{{ t('docs.nav.compiler') }}</router-link> —
        {{ t('docsHome.next_compiler') }}
      </li>
    </ol>
  </div>
</template>
