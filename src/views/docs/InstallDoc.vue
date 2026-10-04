<script setup>
import CodeBlock from '../../components/CodeBlock.vue'
import { t } from '../../i18n'
</script>

<template>
  <div>
    <h1>{{ t('install.title') }}</h1>
    <p v-html="t('install.intro')"></p>

    <h2>{{ t('install.h2_devkit') }}</h2>
    <p>{{ t('install.repo_root') }}</p>
    <CodeBlock
      :code="t('code.install_deb')"
      filename="terminal"
    />

    <p>{{ t('install.first_prog') }}</p>
    <CodeBlock
      :code="`amethyst-new hello\namethystc hello.amt -o hello\n./hello   # 42`"
      filename="terminal"
    />

    <div v-html="t('install.table_files')"></div>

    <div class="callout" v-html="t('install.depends')"></div>

    <h2>{{ t('install.h2_reqs') }}</h2>
    <div v-html="t('install.table_reqs')"></div>

    <h2>{{ t('install.h2_build') }}</h2>
    <CodeBlock
      :code="t('code.install_build')"
      filename="terminal"
    />
    <p>{{ t('install.clean') }}</p>
    <CodeBlock :code="`make clean`" filename="terminal" />

    <h2>{{ t('install.h2_first') }}</h2>
    <CodeBlock
      :code="`fn main() -> int {\n    print(42);\n    return 0;\n}`"
      filename="hello.amt"
    />
    <CodeBlock
      :code="`./amethystc hello.amt -o hello\n./hello\n# 42`"
      filename="terminal"
    />

    <h2>{{ t('install.h2_cli') }}</h2>
    <div v-html="t('install.table_cli')"></div>

    <div class="callout" v-html="t('install.note')"></div>
  </div>
</template>
