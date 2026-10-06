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

    <h2>{{ t('types.h2_float') }}</h2>
    <p v-html="t('types.float_p')"></p>
    <CodeBlock
      :code="`var pi: float = 3.5;\nvar q = 2.5;          // inferred\n\nprint(pi * q);        // 8.75\nprint(int(2.7));      // 2\nprint(float(7) / 2.0); // 3.5`"
      filename="floats.amt"
    />
    <p v-html="t('types.float_arith')"></p>
    <p v-html="t('types.float_conv')"></p>

    <h2>void</h2>
    <p v-html="t('types.void_p')"></p>
    <CodeBlock
      :code="`fn log() -> void {\n    print(1);\n}`"
      filename="void.amt"
    />

    <h2>{{ t('types.h2_struct') }}</h2>
    <p v-html="t('types.struct_p')"></p>
    <CodeBlock
      :code="t('code.types_struct')"
      filename="structs.amt"
    />
    <ul v-html="t('types.struct_list')"></ul>
    <div class="callout" v-html="t('types.null_callout')"></div>

    <h2>{{ t('types.h2_methods') }}</h2>
    <p v-html="t('types.methods_p')"></p>
    <CodeBlock
      :code="t('code.types_methods')"
      filename="methods.amt"
    />
    <ul v-html="t('types.methods_list')"></ul>

    <h2>{{ t('types.h2_arrays') }}</h2>
    <p v-html="t('types.arrays_p')"></p>
    <CodeBlock
      :code="t('code.types_arrays')"
      filename="arrays.amt"
    />
    <ul v-html="t('types.arrays_list')"></ul>

    <h2>{{ t('types.h2_slices') }}</h2>
    <p v-html="t('types.slices_p')"></p>
    <CodeBlock
      :code="`fn total(a: int[]) -> int {\n    var t = 0;\n    for i in 0..len(a) {\n        t += a[i];\n    }\n    return t;\n}`"
      filename="slices.amt"
    />
    <ul v-html="t('types.slices_list')"></ul>
    <CodeBlock
      :code="t('code.types_heap')"
      filename="heap.amt"
    />
    <CodeBlock
      :code="t('code.types_dynarray')"
      filename="grow.amt"
    />
    <ul v-html="t('types.dynarray_list')"></ul>

    <h2>{{ t('types.h2_strings') }}</h2>
    <p v-html="t('types.strings_p')"></p>
    <CodeBlock
      :code="t('code.types_strings')"
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
