<script setup>
import CodeBlock from '../../components/CodeBlock.vue'
import { t } from '../../i18n'
</script>

<template>
  <div>
    <h1>{{ t('expr.title') }}</h1>
    <p v-html="t('expr.intro')"></p>

    <h2>{{ t('expr.h2_prec') }}</h2>
    <div v-html="t('expr.table_prec')"></div>

    <h2>{{ t('expr.h2_lit') }}</h2>
    <CodeBlock
      :code="t('code.expr_literals')"
      filename="literals"
    />
    <p v-html="t('expr.lit_p')"></p>

    <h2>{{ t('expr.h2_arith') }}</h2>
    <CodeBlock
      :code="t('code.expr_arith')"
      filename="arith.amt"
    />

    <h2>{{ t('expr.h2_cmp') }}</h2>
    <CodeBlock
      :code='`var t: bool = 3 < 4;          // true\nvar f: bool = 3 != 4;         // true\nvar e: bool = (1 == 1);       // true\nvar g: bool = 1.5 < 2.0;      // true\nvar h: bool = "ab" == "ab";  // true`'
      filename="cmp.amt"
    />
    <p v-html="t('expr.cmp_p')"></p>

    <h2>{{ t('expr.h2_logic') }}</h2>
    <CodeBlock
      :code="t('code.expr_logic')"
      filename="logic.amt"
    />

    <h2>{{ t('expr.h2_unary') }}</h2>
    <CodeBlock
      :code="`var n: int = -5;\nvar flag: bool = !true;  // false`"
      filename="unary.amt"
    />

    <h2>{{ t('expr.h2_calls') }}</h2>
    <CodeBlock
      :code="`fn add(a: int, b: int) -> int {\n    return a + b;\n}\n\nfn main() -> int {\n    var s: int = add(2, add(3, 4));  // 9\n    print(s);\n    return 0;\n}`"
      filename="calls.amt"
    />
    <ul v-html="t('expr.calls_list')"></ul>

    <h2>{{ t('expr.h2_index') }}</h2>
    <CodeBlock
      :code="t('code.expr_index')"
      filename="index.amt"
    />
    <p v-html="t('expr.index_p')"></p>
    <div class="callout" v-html="t('expr.index_callout')"></div>

    <h2>{{ t('expr.h2_strings') }}</h2>
    <p v-html="t('expr.strings_p')"></p>
    <CodeBlock
      :code="t('code.expr_strings')"
      filename="strings.amt"
    />
    <p v-html="t('expr.strings_esc')"></p>

    <h2>{{ t('expr.h2_paren') }}</h2>
    <p v-html="t('expr.paren_p')"></p>
  </div>
</template>
