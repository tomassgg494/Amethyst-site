<script setup>
import CodeBlock from '../../components/CodeBlock.vue'
import { t } from '../../i18n'
</script>

<template>
  <div>
    <h1>{{ t('stmt.title') }}</h1>
    <p v-html="t('stmt.intro')"></p>

    <h2>{{ t('stmt.h2_var') }}</h2>
    <p v-html="t('stmt.var_p')"></p>
    <CodeBlock
      :code="t('code.stmt_var')"
      filename="var.amt"
    />

    <h2>{{ t('stmt.h2_assign') }}</h2>
    <CodeBlock :code="`x = x + 1;\nx += 5;     // compound: x = x + 5`" filename="assign.amt" />
    <p v-html="t('stmt.assign_p')"></p>
    <p v-html="t('stmt.assign_arr')"></p>
    <CodeBlock :code="`nums[2] = 99;\nnums[2] += 1;`" filename="assign-index.amt" />

    <h2>{{ t('stmt.h2_block') }}</h2>
    <p v-html="t('stmt.block_p')"></p>
    <CodeBlock
      :code="`{\n    var tmp: int = 5;\n    print(tmp);\n}`"
      filename="block.amt"
    />

    <h2>if / else</h2>
    <p v-html="t('stmt.if_p')"></p>
    <CodeBlock
      :code="`if n < 0 {\n    print(-1);\n} else if n == 0 {\n    print(0);\n} else {\n    print(1);\n}`"
      filename="if.amt"
    />

    <h2>while</h2>
    <p v-html="t('stmt.while_p')"></p>
    <CodeBlock
      :code="`var i: int = 0;\nwhile i < 5 {\n    print(i);\n    i = i + 1;\n}`"
      filename="while.amt"
    />

    <h2>for (range)</h2>
    <p v-html="t('stmt.for_p')"></p>
    <CodeBlock
      :code="`for i in 0..5 {\n    print(i);   // 0 1 2 3 4\n}`"
      filename="for.amt"
    />
    <CodeBlock
      :code="t('code.stmt_for_dynamic')"
      filename="for-dynamic.amt"
    />

    <h2>break / continue</h2>
    <p v-html="t('stmt.break_p')"></p>
    <CodeBlock
      :code="t('code.stmt_break')"
      filename="break-continue.amt"
    />
    <p v-html="t('stmt.break_nested')"></p>

    <h2>return</h2>
    <ul v-html="t('stmt.return_list')"></ul>
    <CodeBlock
      :code="`fn abs(n: int) -> int {\n    if n < 0 {\n        return -n;\n    }\n    return n;\n}`"
      filename="abs.amt"
    />

    <h2>print</h2>
    <p v-html="t('stmt.print_p')"></p>
    <CodeBlock
      :code='`print(42);\nprint(true);\nprint(3.5);\nprint("Hello, Amethyst!");\nprint("tab:\\t quote:\\"");`'
      filename="print.amt"
    />
    <p v-html="t('stmt.print_escapes')"></p>

    <h2>{{ t('stmt.h2_expr') }}</h2>
    <p v-html="t('stmt.expr_p')"></p>
    <CodeBlock
      :code="t('code.stmt_expr')"
      filename="expr-stmt.amt"
    />

    <div class="callout" v-html="t('stmt.scope_callout')"></div>
  </div>
</template>
