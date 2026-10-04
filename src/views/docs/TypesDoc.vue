<script setup>
import CodeBlock from '../../components/CodeBlock.vue'
import { t } from '../../i18n'
</script>

<template>
  <div>
    <h1>{{ t('types.title') }}</h1>
    <p v-html="t('types.intro')"></p>

    <h2>int</h2>
    <p v-html="t('types.int_p')"></p>
    <CodeBlock
      :code="`var n: int = 42;\nvar m: int = -7;\nvar k: int = n + m * 2;`"
      filename="ints.amt"
    />
    <p v-html="t('types.int_arith')"></p>

    <h2>bool</h2>
    <p v-html="t('types.bool_p')"></p>
    <CodeBlock
      :code="`var ok: bool = true;\nvar big: bool = 10 > 3;\nvar both: bool = ok && big;`"
      filename="bools.amt"
    />

    <h2>void</h2>
    <p v-html="t('types.void_p')"></p>
    <CodeBlock
      :code="`fn log() -> void {\n    print(1);\n}`"
      filename="void.amt"
    />

    <h2>{{ t('types.h2_arrays') }}</h2>
    <p v-html="t('types.arrays_p')"></p>
    <CodeBlock
      :code="t('code.types_arrays')"
      filename="arrays.amt"
    />
    <ul v-html="t('types.arrays_list')"></ul>

    <h2>{{ t('types.h2_strings') }}</h2>
    <p v-html="t('types.strings_p')"></p>
    <CodeBlock
      :code='`print("Hello!");\nprint("line1\\nline2");`'
      filename="strings.amt"
    />

    <h2>{{ t('types.h2_rules') }}</h2>
    <div v-html="t('types.table_rules')"></div>

    <div class="callout" v-html="t('types.err_callout')"></div>

    <h2>{{ t('types.h2_decl') }}</h2>
    <p v-html="t('types.decl_p')"></p>
    <CodeBlock
      :code="t('code.types_decl')"
      filename="decl.amt"
    />
    <p v-html="t('types.decl_assign')"></p>
    <div class="callout" v-html="t('types.infer_callout')"></div>
  </div>
</template>
