<script setup>
import CodeBlock from '../../components/CodeBlock.vue'
import { t } from '../../i18n'

</script>

<template>
  <div>
    <h1>{{ t('syntax.title') }}</h1>
    <p v-html="t('syntax.intro')"></p>

    <CodeBlock :code="t('code.syntax_overview')" filename="overview.amt" />

    <h2>{{ t('syntax.h2_structure') }}</h2>
    <p v-html="t('syntax.structure_p')"></p>
    <CodeBlock :code="`fn main() -> int { ... }`" filename="entry" />
    <ul v-html="t('syntax.structure_list')"></ul>

    <h2>{{ t('syntax.h2_fn') }}</h2>
    <CodeBlock
      :code="t('code.syntax_fn')"
      filename="fn"
    />
    <p v-html="t('syntax.fn_p')"></p>

    <h2>{{ t('syntax.h2_ident') }}</h2>
    <ul v-html="t('syntax.ident_list')"></ul>

    <h2>{{ t('syntax.h2_kw') }}</h2>
    <div v-html="t('syntax.table_kw')"></div>

    <h2>{{ t('syntax.h2_comments') }}</h2>
    <CodeBlock :code="t('code.syntax_comment')" filename="comment" />

    <div class="callout" v-html="t('syntax.callout')"></div>
  </div>
</template>
