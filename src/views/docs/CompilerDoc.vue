<script setup>
import CodeBlock from '../../components/CodeBlock.vue'
import { t } from '../../i18n'
</script>

<template>
  <div>
    <h1>{{ t('comp.title') }}</h1>
    <p v-html="t('comp.intro')"></p>

    <h2>{{ t('comp.h2_pipeline') }}</h2>
    <CodeBlock
      :code="t('code.comp_pipeline')"
      filename="pipeline"
    />

    <h2>{{ t('comp.h2_src') }}</h2>
    <div v-html="t('comp.table_src')"></div>

    <h2>{{ t('comp.h2_conv') }}</h2>
    <ul v-html="t('comp.conv_list')"></ul>

    <h2>{{ t('comp.h2_asm') }}</h2>
    <CodeBlock
      :code="`.globl main
main:
    pushq %rbp
    movq %rsp, %rbp
    movq $42, %rax
    leaq .fmt_int(%rip), %rdi
    movq %rax, %rsi
    xorl %eax, %eax
    call printf@PLT
    movq $0, %rax
    leave
    ret`"
      filename="main.s (excerpt)"
    />

    <h2>{{ t('comp.h2_sema') }}</h2>
    <ul v-html="t('comp.sema_list')"></ul>

    <h2>{{ t('comp.h2_errors') }}</h2>
    <p v-html="t('comp.errors_p')"></p>
    <CodeBlock
      :code="`prog.amt:4:12: error: cannot initialize 'int x' with value of type 'bool'`"
      filename="stderr"
    />

    <div class="callout" v-html="t('comp.ext_callout')"></div>
  </div>
</template>
