export default {
  nav: {
    home: 'Home',
    docs: 'Docs',
    github: 'GitHub',
  },

  lang: {
    label: 'Language',
  },

  footer: {
    tagline: 'Amethyst — compiled, fast, minimally readable.',
    meta: 'C++ · x86-64 · GAS · MIT',
  },

  landing: {
    eyebrow: 'compiled language · native x86-64',
    title: `Fast as <span class="grad">C</span>.<br />
Readable as <span class="grad">Python</span>.<br />
<span class="grad">Amethyst</span>.`,
    lead: `A compiled language with syntax halfway between
high-level and low-level. Static types, braces and semicolons,
zero interpretation — GAS assembly, <code>as</code> and
<code>ld</code>.`,
    read_docs: 'Read the documentation →',
    view_code: 'View the code',
    meta_no_llvm: 'no LLVM',
    why_title: 'Why Amethyst?',
    why_sub: 'Solid foundation, deliberately simple scope, zero magic.',
    features: [
      {
        icon: '⚡',
        title: 'Truly compiled',
        body: 'Emits x86-64 GAS assembly, assembles with <code>as</code> and links with the system linker. Native binary, no VM, no interpreter.',
      },
      {
        icon: '◆',
        title: 'Balanced syntax',
        body: '<code>fn</code>, <code>var</code>, braces and <code>;</code> — familiar if you come from C/JS/Python, with no unnecessary noise.',
      },
      {
        icon: '⎇',
        title: 'Strict static types',
        body: '<code>int</code>, <code>bool</code> and arrays never mix. Type, arity and <code>return</code> path errors fail at compile time — with optional inference on <code>var</code>.',
      },
      {
        icon: '⧉',
        title: 'Compiler in C++',
        body: 'Lexer, parser, semantics and codegen — all written in C++17, readable and easy to extend.',
      },
      {
        icon: '⇄',
        title: 'Real short-circuiting',
        body: '<code>&&</code> and <code>||</code> evaluate left to right and skip the right operand once the outcome is decided.',
      },
      {
        icon: '◎',
        title: 'Errors with position',
        body: 'Every message in the form <code>file.amt:line:column: error: …</code> — ready for editors and CI.',
      },
    ],
    pipeline_title: 'Compilation pipeline',
    pipeline_sub: 'Six steps to the executable.',
    pipeline_list: `<li><span class="step">1</span><strong>.amt</strong><span>Amethyst source</span></li>
<li><span class="step">2</span><strong>Lexer</strong><span>tokens</span></li>
<li><span class="step">3</span><strong>Parser</strong><span>AST</span></li>
<li><span class="step">4</span><strong>Sema</strong><span>types &amp; slots</span></li>
<li><span class="step">5</span><strong>Codegen</strong><span>GAS x86-64</span></li>
<li><span class="step">6</span><strong>as · ld</strong><span>native binary</span></li>`,
    cta_title: 'Get started',
    cta_sub: 'Compile, run and test in under a minute.',
    cta_install: 'Installation',
    cta_docs: 'Documentation',
  },

  bench: {
    title: 'Benchmarks',
    sub: '4 basic tests · the same logic in 4 languages · best of 3',
    fastest: 'fastest',
    faster: 'Amethyst <strong>{n}×</strong> faster',
    slower: 'Amethyst <strong>{n}×</strong> slower',
    tie: 'tie',
    reference: 'reference for this column',
    note_tail:
      'Outputs are verified equal across the 4 implementations before measuring.',
    note: 'C with gcc -O0 (fair: the Amethyst codegen has no optimiser). Best of N.',
    vs_python: 'vs Python',
    vs_c: 'vs C (-O0)',
    faster_plain: '{n}× faster',
    slower_plain: '{n}× slower',
    workload: {
      fib: 'fib(35)',
      loop: '3×10⁸ iterations · % * +',
      nested: '4500 × 4500 iterations',
      prime: 'trial division ≤ 50,000',
    },
  },

  docs: {
    sidebar_title: 'Documentation',
    and: 'and',
    nav: {
      introduction: 'Introduction',
      beginners: 'For Beginners',
      install: 'Installation',
      syntax: 'Syntax',
      types: 'Types',
      statements: 'Statements',
      expressions: 'Expressions',
      compiler: 'Compiler',
    },
  },

  docsHome: {
    title: 'Introduction',
    intro: `<strong>Amethyst</strong> is a <em>compiled</em> language focused on
      speed and predictability. The syntax sits halfway between
      high-level languages (Python, JavaScript) and low-level ones (C, C++):
      braces, semicolons, explicit types, no magic.`,
    callout: `<strong>Current v1.1:</strong> <code>int</code>, <code>bool</code>,
      arrays <code>int[N]</code>/<code>bool[N]</code> (with bounds checks),
      strings in <code>print</code>, functions, <code>if</code>,
      <code>while</code>, <code>for</code> ranges, <code>break</code>/<code>continue</code>,
      variables with inference and <code>print</code>. Compiler in C++17,
      GAS x86-64 backend.`,
    hello: 'Hello, Amethyst',
    features: 'Features',
    features_list: `<li><strong>Compiled</strong> — pipeline <code>.amt → .s → .o → binary</code></li>
      <li><strong>Static</strong> — type and return-path errors at compile time</li>
      <li><strong>Fast</strong> — native code, no interpretation layer</li>
      <li><strong>Readable</strong> — minimalist but familiar syntax</li>
      <li><strong>No heavy dependencies</strong> — just <code>g++</code>, <code>as</code> and <code>ld</code></li>`,
    next: 'Next steps',
    next_beginners: 'if you are just starting out, go straight here',
    next_install: 'build in seconds',
    next_syntax: 'overview of the language',
    next_types: 'arrays, strings',
    next_statements: 'statements',
    next_compiler: 'how it works under the hood',
  },

  install: {
    title: 'Installation',
    intro: `For beginners the shortest path is the <strong>Dev Kit</strong>:
      a <code>.deb</code> with the compiler already built, templates, examples and
      man pages — <strong>without compiling anything by hand</strong>.`,
    h2_devkit: 'Dev Kit (.deb) — recommended',
    repo_root: 'From the repository root:',
    first_prog: 'After installing, your first program in 3 commands:',
    table_files: `<table>
      <thead>
        <tr><th>What the package installs</th><th>Path</th></tr>
      </thead>
      <tbody>
        <tr><td>Compiler</td><td><code>/usr/bin/amethystc</code></td></tr>
        <tr><td>Project helper</td><td><code>/usr/bin/amethyst-new</code></td></tr>
        <tr><td>Examples</td><td><code>/usr/share/amethyst/examples/</code></td></tr>
        <tr><td>Templates</td><td><code>/usr/share/amethyst/templates/</code></td></tr>
        <tr><td>Docs</td><td><code>/usr/share/doc/amethyst/README.md</code></td></tr>
        <tr><td>Man pages</td><td><code>man amethystc</code></td></tr>
      </tbody>
    </table>`,
    depends: `<strong>Depends:</strong> <code>gcc</code> and <code>binutils</code> —
      <code>amethystc</code> calls <code>as</code>/<code>ld</code> when it
      compiles <em>your</em> programs. The apt takes care of that.`,
    h2_reqs: 'Requirements (build from source)',
    table_reqs: `<table>
      <thead>
        <tr>
          <th>Tool</th>
          <th>What for</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>g++</code> (C++17)</td>
          <td>compile the compiler itself</td>
        </tr>
        <tr>
          <td><code>as</code> / <code>ld</code></td>
          <td>assemble and link the generated <code>.s</code></td>
        </tr>
        <tr>
          <td><code>gcc</code></td>
          <td>link against crt + libc (<code>printf</code>)</td>
        </tr>
      </tbody>
    </table>`,
    h2_build: 'Build from source',
    clean: 'Cleanup:',
    h2_first: 'First program',
    h2_cli: 'CLI options',
    table_cli: `<table>
      <thead>
        <tr>
          <th>Option</th>
          <th>Effect</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>-o &lt;path&gt;</code></td>
          <td>output file (default <code>a.out</code>)</td>
        </tr>
        <tr>
          <td><code>-S</code></td>
          <td>emit assembly only (<code>.s</code>), no assemble or link</td>
        </tr>
        <tr>
          <td><code>--emit-asm</code></td>
          <td>keep the intermediate <code>.s</code>/<code>.o</code> for debugging</td>
        </tr>
      </tbody>
    </table>`,
    note: `<strong>Note:</strong> the final executable is linked with
      <code>gcc -no-pie</code>, which invokes the system <code>ld</code> with
      crt and libc — required for the <code>printf</code> used by
      <code>print</code>.`,
  },

  syntax: {
    title: 'Syntax',
    intro: `Amethyst uses <strong>braces</strong> for blocks and
      <strong>semicolons</strong> to end statements — the same
      skeleton as C/JS/Java, with short keywords and explicit types.`,
    h2_structure: 'Structure of a program',
    structure_p: `A file is a sequence of function declarations. The entry point
      must be:`,
    structure_list: `<li>without parameters</li>
      <li>returns <code>int</code> (the process exit code)</li>`,
    h2_fn: 'Functions',
    fn_p: `Parameters use <code>name: type</code>. The <code>-&gt;</code> operator
      links the signature to the body. Up to 6 parameters go in registers (SysV);
      beyond that, on the stack.`,
    h2_ident: 'Identifiers',
    ident_list: `<li>Start with a letter or <code>_</code></li>
      <li>Followed by letters, digits or <code>_</code></li>
      <li>Case sensitive</li>`,
    h2_kw: 'Keywords',
    table_kw: `<table>
      <thead>
        <tr><th>Keyword</th><th>Use</th></tr>
      </thead>
      <tbody>
        <tr><td><code>fn</code></td><td>function declaration</td></tr>
        <tr><td><code>var</code></td><td>local variable with an initialiser (type optional)</td></tr>
        <tr><td><code>return</code></td><td>return a value (or exit)</td></tr>
        <tr><td><code>if</code> / <code>else</code></td><td>condition (<code>bool</code>)</td></tr>
        <tr><td><code>while</code></td><td>loop (<code>bool</code>)</td></tr>
        <tr><td><code>for</code> … <code>in</code></td><td>range loop: <code>for i in 0..10</code></td></tr>
        <tr><td><code>break</code></td><td>exit the current loop</td></tr>
        <tr><td><code>continue</code></td><td>next iteration of the current loop</td></tr>
        <tr><td><code>print</code></td><td>print an <code>int</code>, <code>bool</code> or string</td></tr>
        <tr><td><code>int</code> / <code>bool</code> / <code>void</code></td><td>types</td></tr>
        <tr><td><code>true</code> / <code>false</code></td><td>bool literals</td></tr>
      </tbody>
    </table>`,
    h2_comments: 'Comments',
    callout: `<strong>No semantic indentation:</strong> spaces and tabs only align.
      The layout is always <code>{ }</code>.`,
  },

  types: {
    title: 'Types',
    intro: `v1.1 is small on purpose: two scalar types, fixed-size arrays and
      string literals. <strong>There are no implicit conversions</strong>
      between <code>int</code> and <code>bool</code>.`,
    h2_int: 'int',
    int_p: `64-bit signed integer (<code>i64</code>), held in the
      <code>rax</code> register and 8 bytes on the stack.`,
    int_arith: 'Supports signed <code>+ - * / %</code> arithmetic (truncating division).',
    h2_bool: 'bool',
    bool_p: `<code>true</code> or <code>false</code>. On the stack it is stored as 8 bytes
      (<code>0</code>/<code>1</code>); <code>print</code> shows <code>1</code>
      or <code>0</code>.`,
    h2_void: 'void',
    void_p: `Only as the return type of valueless functions. It cannot be used in
      <code>var</code>, nor in expressions.`,
    h2_arrays: 'Arrays — int[N] / bool[N]',
    arrays_p: `Fixed-size arrays, allocated on the stack. The size <code>N</code> is
      an integer literal (<code>1</code> to <code>10,000,000</code>). The
      initialiser is an array literal with exactly <code>N</code>
      elements of the element type.`,
    arrays_list: `<li>Read with <code>a[i]</code>, write with <code>a[i] = expr;</code></li>
      <li>
        <strong>Runtime bounds check:</strong> an index outside
        <code>[0, N)</code> prints an error message and exits with code 1
      </li>
      <li>You cannot assign to the whole array, compare arrays or pass them to functions (yet)</li>`,
    h2_strings: 'Strings (literals)',
    strings_p: `Literals in double quotes with escapes <code>\\n</code>,
      <code>\\t</code>, <code>&quot;</code> and <code>\\\\</code>. In v1.1 they can only
      be used directly with <code>print</code> — there are no string
      variables and no string comparisons.`,
    h2_rules: 'Typing rules',
    table_rules: `<table>
      <thead>
        <tr><th>Operation</th><th>Operands</th><th>Result</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><code>+ - * / %</code></td>
          <td><code>int</code>, <code>int</code></td>
          <td><code>int</code></td>
        </tr>
        <tr>
          <td><code>&lt; &lt;= &gt; &gt;=</code></td>
          <td><code>int</code>, <code>int</code></td>
          <td><code>bool</code></td>
        </tr>
        <tr>
          <td><code>== !=</code></td>
          <td>same scalar type (<code>int</code>/<code>bool</code>)</td>
          <td><code>bool</code></td>
        </tr>
        <tr>
          <td><code>&& ||</code></td>
          <td><code>bool</code>, <code>bool</code></td>
          <td><code>bool</code></td>
        </tr>
        <tr>
          <td><code>!</code></td>
          <td><code>bool</code></td>
          <td><code>bool</code></td>
        </tr>
        <tr>
          <td>unary <code>-</code></td>
          <td><code>int</code></td>
          <td><code>int</code></td>
        </tr>
      </tbody>
    </table>`,
    err_callout: `<strong>Error example:</strong>
      <code>var x: int = true;</code> fails with
      <code>cannot initialize 'int x' with value of type 'bool'</code>.`,
    h2_decl: 'Variable declaration',
    decl_p: `<code>var</code> requires an initialiser — there are no default values and no
      <em>definite assignment</em>. The type is <strong>optional</strong>:
      when omitted it is inferred from the initialiser.`,
    decl_assign: `Later assignment uses <code>=</code> and the type must match
      the declaration.`,
    infer_callout: `<strong>Cannot be inferred:</strong> <code>var x = "hi";</code> —
      strings cannot be stored in variables (v1.1).`,
  },

  stmt: {
    title: 'Statements',
    intro: `Statements end with <code>;</code> (blocks and control statements
      wrapped in <code>{ }</code> get no extra <code>;</code> at the end).`,
    h2_var: 'Variable declaration',
    h2_assign: 'Assignment',
    assign_p: `The variable must exist in the current scope (or an enclosing one) and the
      type of the RHS must be identical.`,
    assign_arr: `Array elements are assigned by index (you cannot assign to the
      whole array):`,
    h2_block: 'Block',
    block_p: `<code>{ … }</code> opens a new scope. Variables declared inside
      are not visible outside.`,
    h2_if: 'if / else',
    if_p: `The condition must be <code>bool</code> (no integer
      <em>truthiness</em>). <code>else</code> takes a block or another <code>if</code>
      (<code>else if</code>).`,
    h2_while: 'while',
    while_p: 'Re-evaluates the <code>bool</code> condition on every iteration.',
    h2_for: 'for (range)',
    for_p: `Iterates over a half-open range <code>[start, end)</code> with a
      <code>+1</code> step. The loop variable is an <code>int</code> with its
      own scope (visible only in the body). The end value is evaluated
      <strong>once</strong>, before the loop.`,
    h2_break: 'break / continue',
    break_p: `Valid <strong>only inside a loop</strong> (<code>while</code> or
      <code>for</code>). <code>break</code> exits the innermost loop;
      <code>continue</code> jumps to the next iteration.`,
    break_nested: `With nesting, each <code>break</code>/<code>continue</code> affects
      only the innermost loop.`,
    h2_return: 'return',
    return_list: `<li><code>void</code> function: <code>return;</code> or the natural end of the block</li>
      <li>
        Non-<code>void</code> function: <code>return expr;</code> with the right
        type, and <strong>every</strong> control path must
        return (the sema checks <code>return</code>, blocks and
        <code>if</code>/<code>else</code>; a lone <code>while</code> does not count)
      </li>`,
    h2_print: 'print',
    print_p: `Built-in statement (not a function): prints an <code>int</code>,
      <code>bool</code> or <strong>string literal</code> followed by a newline.
      Integers/bools use <code>printf("%ld\\\\n", …)</code>; strings use
      <code>puts</code>.`,
    print_escapes: 'String escapes: <code>\\n</code>, <code>\\t</code>, <code>\\"</code>, <code>\\\\</code>.',
    h2_expr: 'Expression as a statement',
    expr_p: `Function calls can be used as a statement (the return value
      is discarded):`,
    scope_callout: `<strong>Scope:</strong> redeclaring the same name in the same scope is
      an error; shadowing across different scopes is not explicitly
      forbidden in v1.1 beyond scope checking.`,
  },

  expr: {
    title: 'Expressions',
    intro: `Every expression has a type and can appear wherever the context expects that
      type (initialiser, condition, argument, <code>return</code>, …).`,
    h2_prec: 'Precedence (lowest to highest)',
    table_prec: `<table>
      <thead>
        <tr><th>#</th><th>Operators</th><th>Notes</th></tr>
      </thead>
      <tbody>
        <tr><td>1</td><td><code>||</code></td><td>short-circuit</td></tr>
        <tr><td>2</td><td><code>&&</code></td><td>short-circuit</td></tr>
        <tr><td>3</td><td><code>== !=</code></td><td>left-associative</td></tr>
        <tr><td>4</td><td><code>&lt; &lt;= &gt; &gt;=</code></td><td>→ <code>bool</code></td></tr>
        <tr><td>5</td><td><code>+ -</code></td><td><code>int</code></td></tr>
        <tr><td>6</td><td><code>* / %</code></td><td><code>int</code></td></tr>
        <tr><td>7</td><td>unary <code>- !</code></td><td>right-to-left</td></tr>
        <tr><td>8</td><td><code>a[i]</code> (index)</td><td>after the primary</td></tr>
        <tr><td>9</td><td>literals, ident, call, <code>[…]</code>, <code>(…)</code></td><td>primaries</td></tr>
      </tbody>
    </table>`,
    h2_lit: 'Literals',
    lit_p: 'Non-negative decimal integers; the minus sign is a unary operator.',
    h2_arith: 'Arithmetic operators',
    h2_cmp: 'Comparisons',
    cmp_p: `<code>==</code> / <code>!=</code> only between identical types (never
      <code>void</code>).`,
    h2_logic: 'Short-circuit logic',
    h2_unary: 'Unary operators',
    h2_calls: 'Calls',
    calls_list: `<li>Arity and argument types are checked during semantic analysis</li>
      <li>Recursion is supported (the classic <code>fib</code> works)</li>
      <li>Calling <code>print</code> as a function is an error — it is a statement</li>`,
    h2_index: 'Array index',
    index_p: `The index must be an <code>int</code>. <strong>Runtime bounds
      check:</strong> outside <code>[0, N)</code> → error message and
      exit code 1.`,
    index_callout: `<strong>Note:</strong> <code>nums[0] = 5;</code> is an indexed assignment
      <em>statement</em>, not an evaluated expression.`,
    h2_strings: 'Strings',
    strings_p: `Literals in double quotes, valid <strong>only</strong> as a
      <code>print</code> argument in v1.1:`,
    strings_esc: `Escapes: <code>\\n</code> (newline), <code>\\t</code> (tab),
      <code>\\"</code> (quote), <code>\\\\</code> (backslash). They cannot be
      stored in a variable or compared.`,
    h2_paren: 'Parentheses',
    paren_p: `Use <code>(…)</code> freely to group; precedence alone already
      resolves the common cases.`,
  },

  comp: {
    title: 'Compiler',
    intro: `<code>amethystc</code> is a C++17 program with no LLVM: it parses the source,
      emits GAS x86-64 assembly and uses the system toolchain to assemble and
      link.`,
    h2_pipeline: 'Pipeline',
    h2_src: 'Sources',
    table_src: `<table>
      <thead>
        <tr><th>File</th><th>Responsibility</th></tr>
      </thead>
      <tbody>
        <tr><td><code>src/token.hpp</code></td><td>token types</td></tr>
        <tr><td><code>src/lexer.*</code></td><td>source → tokens, line:column errors</td></tr>
        <tr><td><code>src/ast.hpp</code></td><td>expression / statement / function nodes</td></tr>
        <tr><td><code>src/parser.*</code></td><td>recursive descent + precedence</td></tr>
        <tr><td><code>src/sema.*</code></td><td>symbol table, types, frame slots</td></tr>
        <tr><td><code>src/codegen.*</code></td><td>AST → assembly</td></tr>
        <tr><td><code>src/main.cpp</code></td><td>driver + <code>as</code>/<code>gcc</code> invocation</td></tr>
      </tbody>
    </table>`,
    h2_conv: 'Calling convention (System V AMD64)',
    conv_list: `<li>Integer arguments: <code>rdi rsi rdx rcx r8 r9</code>, then the stack</li>
      <li>Return value in <code>rax</code></li>
      <li>Frame pointer <code>rbp</code>; locals at <code>-8(%rbp)</code>, <code>-16(%rbp)</code>, …</li>
      <li>Parameters are “spilled” in the prologue for uniform addressing</li>
      <li>Stack 16-byte aligned before <code>call</code> (including with nesting)</li>`,
    h2_asm: 'Example of generated assembly',
    h2_sema: 'Semantic analysis',
    sema_list: `<li>Collects every function signature first (allows mutual recursion)</li>
      <li>Requires a parameterless <code>main() -&gt; int</code></li>
      <li>Type checking on every expression / assignment / condition</li>
      <li>Call arity and redeclarations</li>
      <li>
        Non-<code>void</code> functions must return on every path
        (<code>return</code>, blocks, <code>if</code>/<code>else</code>)
      </li>
      <li>Assigns a <code>frame slot</code> to each <code>var</code>/parameter — codegen never re-looks-up</li>`,
    h2_errors: 'Errors',
    errors_p: 'Always in the standard Unix tool pattern:',
    ext_callout: `<strong>Extensibility:</strong> adding a statement or type
      usually touches <code>parser</code> → <code>sema</code> →
      <code>codegen</code> in that order, plus an example in
      <code>examples/</code> and a test.`,
  },

  beg: {
    title: 'For Beginners',
    intro: `A guide for anyone who has never compiled their own language — or never
      programmed in anything like C. No free jargon: just what you need to get going,
      <strong>feel progress</strong> and <strong>stick with the curve</strong>
      until Amethyst feels like yours.`,
    golden: `<strong>Golden rule:</strong> the goal of every session is
      <em>one program that runs</em>, not “finishing the docs”. Docs are the map;
      the code is the journey.`,
    h2_before: 'Before you start',
    h3_what: 'What Amethyst is (and is not)',
    what_list: `<li><strong>It is</strong> compiled — your .amt becomes a native binary, no interpreter.</li>
      <li><strong>It is</strong> typed — <code>int</code> and <code>bool</code> never mix.</li>
      <li><strong>It is</strong> small on purpose — the base stays solid before it grows.</li>
      <li><strong>It is not</strong> for shipping a production app tomorrow.</li>
      <li><strong>It is not</strong> a reason to fear mistakes — mistakes are how you learn.</li>`,
    h3_prereq: 'Minimum prerequisites',
    prereq_list: `<li>Comfortable in a terminal: <code>cd</code>, <code>ls</code>, running a binary.</li>
      <li>A vague idea of variables and <code>if</code> (any language will do).</li>
      <li>You do not need to know C, assembly or how <code>ld</code> links.</li>`,
    h2_firstday: 'Your first day (step-by-step roadmap)',
    path: [
      {
        step: '1',
        title: 'Install the toolchain',
        text: 'You need g++, as and ld (binutils + gcc). On Ubuntu/Debian: build-essential.',
      },
      {
        step: '2',
        title: 'Compile the compiler',
        text: 'From the repository root: make. In seconds you have ./amethystc.',
      },
      {
        step: '3',
        title: 'Write your .amt',
        text: 'Create a hello.amt file with a minimal main() and a print.',
      },
      {
        step: '4',
        title: 'Compile and run',
        text: './amethystc hello.amt -o hello && ./hello',
      },
      {
        step: '5',
        title: 'Explore the examples',
        text: 'examples/ has fib, control, params — read, change, recompile.',
      },
      {
        step: '6',
        title: 'Do your first exercise',
        text: 'Replace the example code with something of your own. Break it on purpose.',
      },
    ],
    h3_install3: 'Install in 3 commands (Dev Kit — no compiling the compiler)',
    install_note_a: `The <code>.deb</code> ships the binary, templates, examples and
      <code>man</code>. If you would rather build from source:`,
    h3_hello: 'The “hello world” program',
    sanity: `<strong>Sanity check:</strong> if <code>make test</code> failed, it is not
      your code’s fault — fix the environment first. Errors in your .amt appear
      as <code>file:line:column: error: …</code>.`,
    h2_days: 'A 7-day plan (a suggestion)',
    days_p: 'A little every day is enough. Each day ends with something running.',
    table_days: `<table>
      <thead>
        <tr><th>Day</th><th>Focus</th><th>Mini project</th></tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Install, <code>main</code>, <code>print</code>, <code>return</code></td>
          <td>Print your favourite number + <code>true</code>/<code>false</code></td>
        </tr>
        <tr>
          <td>2</td>
          <td><code>var</code>, <code>int</code>, arithmetic, assignment</td>
          <td>Compute the area of a rectangle and print it</td>
        </tr>
        <tr>
          <td>3</td>
          <td><code>bool</code>, comparisons, <code>&&</code>/<code>||</code>/<code>!</code></td>
          <td>Classify an age: adult yes/no</td>
        </tr>
        <tr>
          <td>4</td>
          <td><code>if</code> / <code>else if</code> / <code>else</code></td>
          <td>Greater, smaller or equal — print the sign</td>
        </tr>
        <tr>
          <td>5</td>
          <td><code>while</code> + counters</td>
          <td>Count from 1 to 10; then only the evens</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Functions, parameters, <code>return</code></td>
          <td><code>abs</code>, <code>max</code>, <code>double</code></td>
        </tr>
        <tr>
          <td>7</td>
          <td>Put it all together + recursion</td>
          <td>A <code>fib</code> table or a guessing game (vs a fixed value)</td>
        </tr>
      </tbody>
    </table>`,
    h2_exercises: 'Exercises to build confidence',
    exercises_p: 'Start with the “easy” ones — if you get stuck, go back to the relevant doc and try again without copying.',
    exercises_list: `<li>Print <code>1 + 2 * 3</code> and then <code>(1 + 2) * 3</code> — see the difference.</li>
      <li>Compare two ints and print the comparison result (<code>10 > 3</code>).</li>
      <li>Write <code>fn double(n: int) -> int</code> and use it.</li>
      <li>FizzBuzz using only <code>while</code> + <code>if</code>s (no helper functions).</li>
      <li>Sum the multiples of 3 or 5 below 1000 (Project Euler #1).</li>
      <li>Iterative factorial; then the recursive version — compare them mentally.</li>`,
    h2_engage: 'How to stay engaged from start to finish',
    engage_p: `Motivation is not magic: it is habit engineering. Use what works with
      your real life, ignore the rest.`,
    engagement: [
      {
        icon: '⏱',
        title: 'Short sessions',
        text: '20–30 minutes beats 3 exhausted hours. End the session knowing exactly what you will try next time.',
      },
      {
        icon: '✎',
        title: 'Hands on, always',
        text: 'Read a concept → write a tiny version → break it → fix it. Never just read.',
      },
      {
        icon: '🐞',
        title: 'Read the errors',
        text: 'file:line:column is your map. Every Amethyst error is a free lesson in how the compiler thinks.',
      },
      {
        icon: '🔁',
        title: 'Rewrite, do not copy',
        text: 'After looking at an example, close it and rewrite it from memory. If you miss a detail, that detail was your gap.',
      },
      {
        icon: '🏁',
        title: 'Micro projects',
        text: 'Calculator, guess-the-number, word counter… something that runs and you can show off in a day.',
      },
      {
        icon: '📈',
        title: 'A 3-line diary',
        text: 'At the end of each session: what I learned / what confused me / what I will try tomorrow.',
      },
    ],
    h3_stuck: 'When you get stuck (and you will)',
    stuck_list: `<li><strong>Read the whole error line</strong> — line and column point at the cause.</li>
      <li><strong>Shrink it</strong> — comment out half the program until the error disappears.</li>
      <li><strong>Print debugging</strong> — a <code>print</code> in the middle is legitimate (and teaches).</li>
      <li><strong>Breathe and sleep on it</strong> — some bugs only show up in the morning.</li>
      <li><strong>Ask / open an issue</strong> — if the compiler misled you, it is an Amethyst bug, not yours.</li>`,
    h3_study: 'Study club (alone or not)',
    study_list: `<li>Learn with someone — explaining out loud consolidates 2× more.</li>
      <li>Compare your solution with <code>examples/</code> only <em>after</em> you have one.</li>
      <li>Your own “amethyst-exercises” repository, with a commit a day.</li>
      <li>Celebrate micro-wins: “today my while stopped in the right place” counts.</li>`,
    h2_where: 'Where to go from here',
    next: [
      {
        to: '/docs/install',
        label: 'Next',
        title: 'Installation',
        text: 'CLI and toolchain details.',
      },
      {
        to: '/docs/syntax',
        label: 'Then',
        title: 'Syntax',
        text: 'The whole skeleton of the language.',
      },
      {
        to: '/docs/types',
        label: 'Basics',
        title: 'Types',
        text: 'int, bool, arrays and the strict rules.',
      },
      {
        to: '/docs/statements',
        label: 'Practice',
        title: 'Statements',
        text: 'if, while, for, arrays in everyday use.',
      },
    ],
    checklist: `<strong>Checklist “am I improving?”</strong>
      <ul style="margin: 0.5rem 0 0; padding-left: 1.1rem">
        <li>I can turn a problem into <code>var</code> + <code>while</code> + <code>print</code></li>
        <li>I read an error without panicking</li>
        <li>I write a function with parameters without looking at the cheat sheet</li>
        <li>I debug with <code>print</code> in an organised way</li>
        <li>I have 1 micro project of “my own”, not just from the examples</li>
      </ul>`,
  },

  ai: {
    fab_label: 'AI',
    fab_open: 'Open assistant',
    fab_close: 'Close assistant',
    dialog: 'AI assistant',
    title: 'Amethyst Assistant',
    close: 'Close',
    placeholder: 'Type your question…',
    send: 'Send',
    greeting:
      'Hi! I am the Amethyst assistant. Ask me about the language, installation or syntax, or request a code example.',
    error: 'Oops, something went wrong contacting Gemini. Try again in a moment.',
    no_response: '(no response)',
    system:
      'You are the official AI assistant of the Amethyst website, a compiled programming language (C++17, x86-64 GAS, no LLVM) with static types (int=64-bit, bool, void), C/JS/Python-style syntax (fn, var, braces, semicolons) and a .amt → Lexer → Parser → Sema → Codegen → as/ld pipeline. Answer shortly, in a friendly way, in English. Help with questions about the language, installation, syntax and Amethyst code examples.',
  },

  code: {
    landing_sample: `fn fib(n: int) -> int {
    if n < 2 {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
}

fn main() -> int {
    var fibs = [0, 0, 0, 0, 0, 0];  // type inferred: int[6]

    for i in 0..6 {
        fibs[i] = fib(i);
    }
    for i in 0..6 {
        print(fibs[i]);
    }

    print("done");
    return 0;
}`,

    syntax_overview: `// Line comment
fn add(a: int, b: int) -> int {
    return a + b;
}

fn main() -> int {
    var nums = [10, 20, 30];  // type inferred: int[3]
    var ok: bool = nums[0] > 5;

    for i in 0..3 {
        if nums[i] % 2 != 0 {
            continue;
        }
        print(nums[i]);
    }

    if ok {
        print(add(nums[0], 32));
    } else {
        print(0);
    }

    print("done");
    return 0;
}`,

    syntax_fn: `fn name(p1: type, p2: type) -> returnType {
    // body
    return value;
}`,

    syntax_comment: '// to the end of the line',

    install_deb: `make deb
# creates dist/amethyst-devkit_1.0.0_amd64.deb (~60 KB)

sudo apt install ./dist/amethyst-devkit_1.0.0_amd64.deb`,

    install_build: `make          # creates ./amethystc
make test     # examples + test suite`,

    types_arrays: `var nums: int[5] = [10, 20, 30, 40, 50];
var flags: bool[3] = [true, false, true];

print(nums[0]);   // 10
nums[2] = 99;     // write by index`,

    types_decl: `var age: int = 30;
var active: bool = age >= 18;

// type inference
var n = 42;             // int
var ok = n > 40;        // bool
var arr = [1, 2, 3];    // int[3]`,

    stmt_var: `var x: int = 1;
var flag: bool = false;
var n = 42;          // inferred type
var a: int[3] = [1, 2, 3];
var b = [true, false]; // bool[2] inferred`,

    stmt_for_dynamic: `// dynamic ranges
for i in 0..n {
    ...
}`,

    stmt_break: `for i in 0..10 {
    if i == 3 {
        continue;  // skips 3
    }
    if i == 7 {
        break;      // stops at 7
    }
    print(i);
}`,

    stmt_expr: 'helper();  // discards the returned int',

    beg_terminal: `# from the repo root
make deb
sudo apt install ./dist/amethyst-devkit_1.0.0_amd64.deb

# first program
amethyst-new hello
amethystc hello.amt -o hello
./hello   # 42`,

    expr_literals: `42          // int
true        // bool
false       // bool
"hello"     // string (print only)
[1, 2, 3]   // int[3]
[true, !false] // bool[2]`,

    expr_arith: `var a: int = 7 + 3 * 2;   // 13
var b: int = (7 + 3) * 2; // 20
var c: int = 7 % 3;       // 1
var d: int = -7 / 2;      // -3 (truncates toward zero)`,

    expr_logic: `// if lhs is false, rhs is NOT evaluated
var a: bool = false && sideEffect();

// if lhs is true, rhs is NOT evaluated
var b: bool = true || sideEffect();`,

    expr_index: `var nums = [10, 20, 30];
var x: int = nums[1];  // 20
nums[0] = 5;           // write as a statement`,

    expr_strings: `print("hello");
print("a\\tb\\n");`,

    comp_pipeline: `file.amt
  │  Lexer      → tokens
  │  Parser     → AST
  │  Sema       → types, scopes, frame slots
  │  Codegen    → file.s  (GAS, System V AMD64)
  │  as --64    → file.o
  └  gcc -no-pie→ executable  (ld + crt + libc)`,
  },
}
