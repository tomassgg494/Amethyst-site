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
        body: '<code>int</code>, <code>bool</code>, <code>float</code> and <code>string</code> never mix — there are no implicit conversions. Type, arity and <code>return</code> path errors fail at compile time — with optional inference on <code>var</code>.',
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
<li><span class="step">4</span><strong>Sema</strong><span>types, DA, slots</span></li>
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
    callout: `<strong>The language today:</strong> <code>int</code>, <code>bool</code>,
      <code>float</code> and <code>string</code>, fixed arrays
      <code>T[N]</code> and slices <code>T[]</code> (both bounds-checked),
      <strong>structs</strong> on the heap with <code>new P { … }</code> and
      <code>null</code>, dynamic arrays <code>new T[n]</code> with
      <code>free</code>, compound assignment, <code>len()</code>, functions,
      <code>if</code>, <code>while</code>, <code>for</code> ranges,
      <code>break</code>/<code>continue</code>, variables with inference and
      definite-assignment analysis, and <code>print</code>. Compiler in
      C++17, GAS x86-64 backend.`,
    hello: 'Hello, Amethyst',
    features: 'Features',
    features_list: `<li><strong>Compiled</strong> — pipeline <code>.amt → .s → .o → binary</code></li>
      <li><strong>Static</strong> — type, return-path and definite-assignment errors at compile time</li>
      <li><strong>Fast</strong> — native code, no interpretation layer</li>
      <li><strong>Readable</strong> — minimalist but familiar syntax</li>
      <li><strong>No heavy dependencies</strong> — just <code>g++</code>, <code>as</code> and <code>ld</code></li>`,
    next: 'Next steps',
    next_beginners: 'if you are just starting out, go straight here',
    next_install: 'build in seconds',
    next_syntax: 'overview of the language',
    next_types: 'int, float, bool, strings, arrays, slices and structs',
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
    structure_p: `A file is a sequence of function and struct declarations
      (a struct may be used before it is declared). The entry point
      must be:`,
    structure_list: `<li>without parameters</li>
      <li>returns <code>int</code> (the process exit code)</li>`,
    h2_fn: 'Functions',
    fn_p: `Parameters use <code>name: type</code>. The <code>-&gt;</code> operator
      links the signature to the body. Up to 6 integer (or 8 <code>float</code>)
      parameters go in registers (SysV); an array parameter takes two integer
      registers, a struct takes one (it is a single reference), and whatever
      does not fit is passed on the stack.`,
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
        <tr><td><code>struct</code></td><td>struct declaration: <code>struct P { x: int, y: float }</code></td></tr>
        <tr><td><code>var</code></td><td>local variable; the type is optional when there is an initialiser</td></tr>
        <tr><td><code>return</code></td><td>return a value (or exit)</td></tr>
        <tr><td><code>if</code> / <code>else</code></td><td>condition (<code>bool</code>)</td></tr>
        <tr><td><code>while</code></td><td>loop (<code>bool</code>)</td></tr>
        <tr><td><code>for</code> … <code>in</code></td><td>range loop: <code>for i in 0..10</code></td></tr>
        <tr><td><code>break</code></td><td>exit the current loop</td></tr>
        <tr><td><code>continue</code></td><td>next iteration of the current loop</td></tr>
        <tr><td><code>print</code></td><td>print an <code>int</code>, <code>bool</code>, <code>float</code> or <code>string</code></td></tr>
        <tr><td><code>new</code></td><td>heap allocation: <code>new P { … }</code> or <code>new T[n]</code></td></tr>
        <tr><td><code>free</code></td><td>release a heap object or a <code>new</code> array</td></tr>
        <tr><td><code>int</code> / <code>bool</code> / <code>float</code> / <code>string</code> / <code>void</code></td><td>scalar types</td></tr>
        <tr><td><code>Point</code> / <code>Point[]</code> / <code>Point[N]</code></td><td>a struct type, and its slice / fixed array forms</td></tr>
        <tr><td><code>true</code> / <code>false</code></td><td>bool literals</td></tr>
        <tr><td><code>null</code></td><td>the reference to no object (only in struct-typed slots)</td></tr>
      </tbody>
    </table>`,
    h2_comments: 'Comments',
    callout: `<strong>No semantic indentation:</strong> spaces and tabs only align.
      The layout is always <code>{ }</code>.`,
  },

  types: {
    title: 'Types',
    intro: `Amethyst is small on purpose: four scalar types, structs living on
      the heap, and arrays that are either fixed on the stack or created with
      <code>new</code>. <strong>There are no implicit conversions</strong>
      between <code>int</code>, <code>bool</code>, <code>float</code> and
      <code>string</code> — write <code>float(n)</code> or <code>int(x)</code>
      to move between the two numeric types.`,
    h2_int: 'int',
    int_p: `64-bit signed integer (<code>i64</code>), held in the
      <code>rax</code> register and 8 bytes on the stack.`,
    int_arith: 'Supports signed <code>+ - * / %</code> arithmetic (truncating division).',
    h2_float: 'float',
    float_p: `64-bit IEEE 754 <code>binary64</code>, computed in the
      <code>xmm</code> registers and 8 bytes on the stack. Literals are
      <code>1.5</code>, <code>0.0</code> and <code>2e-3</code> —
      <code>0..10</code> is still a range, not a float.`,
    float_arith: `Supports <code>+ - * /</code> on two <code>float</code>s. There is
      no <code>%</code> for floats. Division by zero follows IEEE-754 and yields
      <code>inf</code> / <code>NaN</code> instead of trapping, and every
      comparison with <code>NaN</code> is false except <code>!=</code>.`,
    float_conv: `Converts explicitly with <code>float(n)</code> (<code>int</code> →
      <code>float</code>) and <code>int(x)</code> (<code>float</code> →
      <code>int</code>, truncating toward zero). <code>print</code> shows the
      shortest round-tripping form (<code>%.15g</code>).`,
    h2_bool: 'bool',
    bool_p: `<code>true</code> or <code>false</code>. On the stack it is stored as 8 bytes
      (<code>0</code>/<code>1</code>); <code>print</code> shows <code>1</code>
      or <code>0</code>.`,
    h2_void: 'void',
    void_p: `Only as the return type of valueless functions. It cannot be used in
      <code>var</code>, nor in expressions.`,
    h2_arrays: 'Fixed arrays — T[N]',
    arrays_p: `Fixed-size arrays, allocated on the stack. The size <code>N</code> is
      an integer literal (<code>1</code> to <code>10,000,000</code>). The
      element type <code>T</code> may be <code>int</code>, <code>bool</code>,
      <code>float</code>, <code>string</code> or a struct. The
      initialiser is an array literal with exactly <code>N</code>
      elements of the element type.`,
    arrays_list: `<li>Read with <code>a[i]</code>, write with <code>a[i] = expr;</code></li>
      <li>
        <strong>Runtime bounds check:</strong> an index outside
        <code>[0, N)</code> prints an error message and exits with code 1
      </li>
      <li>You cannot assign to the whole array or compare arrays — but you can pass them to a function as a slice</li>
      <li>Nothing to <code>free</code>: the block is part of the frame (only heap objects <em>inside</em> it need <code>free</code>)</li>`,
    h2_slices: 'Slices and dynamic arrays — T[]',
    slices_p: `A variable or parameter declared <code>T[]</code> carries a
      <strong>pointer + length</strong> — the length is known at run time, so
      there is no size in the type. As a <em>parameter</em> it aliases the
      caller's array (the callee can write through it and <code>len()</code>
      works); as a <em>local</em> it comes from <code>new T[n]</code>.`,
    slices_list: `<li><code>fn total(a: int[]) -&gt; int</code> — no size in the signature</li>
      <li><code>var a: int[] = new int[n];</code> — <code>n</code> is any <code>int</code> expression, read once</li>
      <li>Elements start at zero (<code>calloc</code>), so <code>print(a[3]);</code> prints <code>0</code></li>
      <li><code>free(a);</code> releases the block, sets the length to 0 and nulls the pointer — a second <code>free</code> is a no-op</li>
      <li><code>T[]</code> works for every element type: <code>int[]</code>, <code>float[]</code>, <code>string[]</code>, <code>Point[]</code></li>`,
    h2_struct: 'Structs — heap objects',
    struct_p: `A <strong>struct</strong> declares a named list of fields.
      Objects live on the heap and a variable holds a <em>reference</em> to
      them — one machine word — so assigning or passing a struct shares the
      object instead of copying it: a write through the reference is seen by
      everyone who holds it.`,
    struct_list: `<li><code>struct P { x: int, y: float }</code> — comma-separated <code>name: type</code> fields</li>
      <li><code>var p = new P { x: 10, y: 2.5 };</code> — every field exactly once, in <strong>any order</strong></li>
      <li>Read with <code>p.x</code>, write with <code>p.x = expr;</code> (also <code>p.x += 1;</code>)</li>
      <li>Field types: <code>int</code>, <code>bool</code>, <code>float</code>, <code>string</code> or another struct — so <code>struct Node { next: Node }</code> builds a list</li>
      <li>A struct may be used before it is declared, and works anywhere a type is expected: variables, parameters, returns and arrays</li>`,
    null_callout: `<strong>Null and freeing:</strong> a struct variable may be
      <code>null</code> (no object); reading a field of <code>null</code>
      stops the program with
      <code>Amethyst runtime error: null reference (…)</code>, and
      <code>p == null</code> / <code>p != null</code> is the only comparison
      between structs. <code>free(p);</code> releases the object and makes
      <code>p</code> null, so a second <code>free</code> is a no-op. Every
      object needs exactly one <code>free</code> — there is no collector yet,
      and other variables still pointing at a freed object are dangling.`,
    h2_strings: 'Strings',
    strings_p: `Literals in double quotes with escapes <code>\\n</code>,
      <code>\\t</code>, <code>&quot;</code> and <code>\\\\</code>. A
      <code>string</code> is a pointer to NUL-terminated text in
      <code>.rodata</code>: store it in variables, assign it, pass it to and
      return it from functions, and compare with <code>==</code> /
      <code>!=</code> — which compares <em>contents</em>, not pointers.
      <code>len(s)</code> is the byte length. There is still no concatenation,
      indexing or ordering.`,
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
          <td><code>+ - * /</code></td>
          <td><code>float</code>, <code>float</code></td>
          <td><code>float</code></td>
        </tr>
        <tr>
          <td><code>&lt; &lt;= &gt; &gt;=</code></td>
          <td>two <code>int</code>s or two <code>float</code>s</td>
          <td><code>bool</code></td>
        </tr>
        <tr>
          <td><code>== !=</code></td>
          <td>two values of the same scalar type (<code>int</code>/<code>bool</code>/<code>float</code>) or two <code>string</code>s; a struct only against <code>null</code></td>
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
          <td><code>int</code> or <code>float</code></td>
          <td>same type</td>
        </tr>
        <tr>
          <td><code>float(n)</code> / <code>int(x)</code></td>
          <td><code>int</code> / <code>float</code></td>
          <td><code>float</code> / <code>int</code></td>
        </tr>
      </tbody>
    </table>`,
    err_callout: `<strong>Error examples:</strong>
      <code>var x: int = true;</code> fails with
      <code>cannot initialize 'int x' with value of type 'bool'</code>,
      <code>var s: string = null;</code> with
      <code>cannot initialize 'string s' with value of type 'null'</code>
      and <code>new P { … }</code> without every field with
      <code>missing field 'y' in the initializer of 'P'</code>.`,
    h2_decl: 'Variable declaration',
    decl_p: `The type is <strong>optional</strong>: with an initialiser it is
      inferred from it. Without an initialiser you must write the type
      (<code>var x: int;</code>), and then every path that reads
      <code>x</code> must assign it first — <em>definite-assignment analysis</em>.
      Arrays always need an initialiser: a literal for
      <code>T[N]</code>, or <code>new</code> for <code>T[]</code>.`,
    decl_assign: `Later assignment uses <code>=</code> and the type must match
      the declaration. Compound assignment — <code>+= -= *= /= %=</code> —
      reads and writes in one statement. The target of an assignment is any
      <em>lvalue</em>: a variable, an element <code>a[i]</code> or a field
      <code>p.x</code>.`,
    infer_callout: `<strong>Cannot be inferred:</strong> <code>var x;</code> — an
      initialiser is required when the type is omitted, and
      <code>var a: int[3];</code> needs a literal while
      <code>var a: int[];</code> needs <code>new</code>.`,
  },

  stmt: {
    title: 'Statements',
    intro: `Statements end with <code>;</code> (blocks and control statements
      wrapped in <code>{ }</code> get no extra <code>;</code> at the end).`,
    h2_var: 'Variable declaration',
    var_p: `Declare with <code>var name: type = expr;</code>, or let
      <code>var name = expr;</code> infer the type. Omitting the initialiser
      leaves the variable unassigned until the first <code>=</code>.`,
    h2_assign: 'Assignment',
    assign_p: `The target must be an existing variable in scope and the type
      of the RHS must be identical. Compound assignment
      (<code>+=</code> <code>-=</code> <code>*=</code> <code>/=</code>
      <code>%=</code>) is the short form of <code>x = x op expr;</code>.`,
    assign_arr: `Array elements are assigned by index and struct fields by
      name (you cannot assign to the whole array):`,
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
      <code>bool</code>, <code>float</code> or <code>string</code> followed by
      a newline. Integers/bools use <code>printf("%ld\\\\n", …)</code>,
      floats <code>printf("%.15g\\\\n", …)</code> and strings
      <code>puts</code>.`,
    print_escapes: 'String escapes: <code>\\n</code>, <code>\\t</code>, <code>\\"</code>, <code>\\\\</code>.',
    h2_free: 'free',
    free_p: `<code>free(x);</code> releases what <code>new</code> allocated and
      makes the lvalue <code>null</code>; an array also has its length reset
      to <code>0</code>, so a second <code>free</code> does nothing. It takes
      an lvalue — a variable, a field <code>p.next</code> or an element
      <code>pts[i]</code> — never a temporary.`,
    free_list: `<li><code>free(p);</code> — a struct reference from <code>new P { … }</code></li>
      <li><code>free(a);</code> — a local array from <code>new T[n]</code>; the length slot is reset to <code>0</code>, so <code>len(a)</code> prints <code>0</code> and any later read fails the bounds check</li>
      <li>A fixed-size array and an array <em>parameter</em> cannot be freed — the first lives in the frame, the second may point into the caller's stack</li>
      <li>Only structs and <code>new</code> arrays: <code>free(42);</code> is a compile error</li>`,
    h2_expr: 'Expression as a statement',
    expr_p: `Function calls can be used as a statement (the return value
      is discarded):`,
    scope_callout: `<strong>Scope:</strong> redeclaring the same name in the same scope is
      an error; shadowing across different scopes is allowed.
      <strong>Warnings</strong> (not errors): <code>unused variable</code> and
      <code>unreachable code</code>, printed on stderr without stopping the
      build.`,
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
        <tr><td>5</td><td><code>+ -</code></td><td><code>int</code> or <code>float</code> (never mixed)</td></tr>
        <tr><td>6</td><td><code>* / %</code></td><td><code>* /</code> on <code>int</code> or <code>float</code>; <code>%</code> is <code>int</code>-only</td></tr>
        <tr><td>7</td><td>unary <code>- !</code></td><td>right-to-left</td></tr>
        <tr><td>8</td><td><code>a[i]</code> (index), <code>p.x</code> (field)</td><td>after the primary</td></tr>
        <tr><td>9</td><td>literals, ident, call, <code>[…]</code>, <code>new P { … }</code>, <code>new T[n]</code>, <code>(…)</code></td><td>primaries</td></tr>
      </tbody>
    </table>`,
    h2_lit: 'Literals',
    lit_p: `Non-negative decimal integers (<code>42</code>) — the minus sign is
      a unary operator. Floats are <code>1.5</code>, <code>0.0</code>,
      <code>2e-3</code> (a <code>.</code> followed by a digit makes a float;
      <code>0..10</code> stays a range). Also <code>true</code>/<code>false</code>
      and <code>"strings"</code>.`,
    h2_arith: 'Arithmetic operators',
    h2_cmp: 'Comparisons',
    cmp_p: `<code>==</code> / <code>!=</code> only between identical types (never
      <code>void</code>): two <code>int</code>s, two <code>bool</code>s, two
      <code>float</code>s or two <code>string</code>s (contents, not pointers).
      A struct is comparable only against <code>null</code> — two objects are
      not comparable.`,
    h2_logic: 'Short-circuit logic',
    h2_unary: 'Unary operators',
    h2_calls: 'Calls',
    calls_list: `<li>Arity and argument types are checked during semantic analysis</li>
      <li>Recursion is supported (the classic <code>fib</code> works)</li>
      <li>Calling <code>print</code> as a function is an error — it is a statement</li>`,
    h2_index: 'Array index',
    index_p: `The index must be an <code>int</code>. <strong>Runtime bounds
      check:</strong> outside <code>[0, N)</code> → error message and
      exit code 1. The bound comes from memory, so a dynamic array or a
      slice parameter is checked against its runtime length.`,
    index_callout: `<strong>Note:</strong> <code>nums[0] = 5;</code> is an indexed assignment
      <em>statement</em>, not an evaluated expression.`,
    h2_field: 'Field access — p.x',
    field_p: `Reads a named field of a struct reference. The result is an
      ordinary value of the field's type, so it fits anywhere that type
      fits; writing to it is an assignment <em>statement</em> (see
      Statements). Both forms stop the program with a runtime error when
      the reference is <code>null</code>.`,
    h2_strings: 'Strings',
    strings_p: `Literals in double quotes are ordinary <code>string</code>
      values: store them, compare them, pass them around, take
      <code>len()</code>.`,
    strings_esc: `Escapes: <code>\\n</code> (newline), <code>\\t</code> (tab),
      <code>\\"</code> (quote), <code>\\\\</code> (backslash). There is no
      concatenation, indexing or ordering yet.`,
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
        <tr><td><code>src/sema.*</code></td><td>symbol table, types, definite assignment, frame slots</td></tr>
        <tr><td><code>src/codegen.*</code></td><td>AST → assembly</td></tr>
        <tr><td><code>src/main.cpp</code></td><td>driver + <code>as</code>/<code>gcc</code> invocation</td></tr>
      </tbody>
    </table>`,
    h2_conv: 'Calling convention (System V AMD64)',
    conv_list: `<li>Integer arguments: <code>rdi rsi rdx rcx r8 r9</code>, then the stack</li>
      <li>Float arguments: <code>xmm0</code>–<code>xmm7</code>, then the stack; a float returns in <code>xmm0</code></li>
      <li>Return value in <code>rax</code> (<code>xmm0</code> for <code>float</code>)</li>
      <li>A struct is one reference: one integer register and one stack slot, so adding structs changed nothing in the ABI</li>
      <li>Frame pointer <code>rbp</code>; locals at <code>-8(%rbp)</code>, <code>-16(%rbp)</code>, …</li>
      <li>Parameters are “spilled” in the prologue for uniform addressing</li>
      <li>Stack 16-byte aligned before <code>call</code> (including with nesting)</li>
      <li>Heap blocks come from <code>malloc</code> (objects) and <code>calloc(n, 8)</code> (arrays); <code>free</code> calls <code>free</code></li>`,
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
      <li>
        Definite-assignment analysis: a variable declared without an
        initialiser must be assigned on every path that reads it
      </li>
      <li>Warnings (not errors): <code>unused variable</code>, <code>unreachable code</code></li>
      <li>Assigns a <code>frame slot</code> to each <code>var</code>/parameter — codegen never re-looks-up</li>
      <li>Collects every struct first (a type may be used before it is declared), then checks field lists: each field exactly once, unknown names get a did-you-mean suggestion</li>
      <li><code>null</code> only fits struct-typed slots; a struct is comparable only against <code>null</code> and has no arithmetic</li>
      <li><code>free(x)</code> only on a struct reference or on an array variable that this frame built with <code>new</code></li>`,
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
      <li><strong>It is</strong> typed — <code>int</code>, <code>bool</code>, <code>float</code> and <code>string</code> never mix.</li>
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
        text: 'examples/ has fib, slices, strings, floats, structs and heap arrays — read, change, recompile.',
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
        text: 'int, float, bool, strings, arrays and the strict rules.',
      },
      {
        to: '/docs/statements',
        label: 'Practice',
        title: 'Statements',
        text: 'if, while, for, assignment and print in everyday use.',
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
      'You are the official AI assistant of the Amethyst website, a compiled programming language (C++17, x86-64 GAS, no LLVM) with static types (int=64-bit, bool, float=64-bit IEEE-754, string, void), C/JS/Python-style syntax (fn, var, braces, semicolons) and a .amt → Lexer → Parser → Sema → Codegen → as/ld pipeline. Answer shortly, in a friendly way, in English. Help with questions about the language, installation, syntax and Amethyst code examples.',
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
struct Counter {
    hits: int,
    tag: string
}

fn add(a: int, b: int) -> int {
    return a + b;
}

fn main() -> int {
    var nums = [10, 20, 30];  // type inferred: int[3]
    var ok: bool = nums[0] > 5;
    var c = new Counter { hits: 0, tag: "a" };  // heap object

    for i in 0..3 {
        if nums[i] % 2 != 0 {
            continue;
        }
        c.hits += nums[i];
        print(nums[i]);
    }

    if ok {
        print(add(nums[0], 32));
    } else {
        print(0);
    }

    print(c.hits);   // 60
    print(c.tag);    // a
    free(c);

    print("done");
    return 0;
}`,

    syntax_fn: `fn name(p1: type, p2: type) -> returnType {
    // body
    return value;
}`,

    syntax_comment: '// to the end of the line',

    install_deb: `make deb
# creates dist/amethyst-devkit_1.2.0_amd64.deb (~100 KB)

sudo apt install ./dist/amethyst-devkit_1.2.0_amd64.deb`,

    install_build: `make          # creates ./amethystc
make test     # examples + test suite`,

    types_arrays: `var nums: int[5] = [10, 20, 30, 40, 50];
var flags: bool[3] = [true, false, true];
var vals: float[2] = [1.5, 2.5];

print(nums[0]);   // 10
nums[2] = 99;     // write by index`,

    types_struct: `struct Point {
    x: int,
    y: float,
    label: string
}

fn main() -> int {
    var p = new Point { x: 10, y: 2.5, label: "origem" };
    p.x += 5;
    print(p.x);            // 15
    print(p.label);        // origem

    var q: Point = null;
    print(q == null);      // 1

    free(p);
    free(q);
    return 0;
}`,

    types_heap: `var n = 8;
var a: int[] = new int[n];   // 8 zeroed elements
print(len(a));               // 8
print(a[7]);                 // 0

a[0] = 42;
a[7] = a[0] + 1;             // 43

free(a);                     // length back to 0
print(len(a));               // 0`,

    stmt_free: `var p = new Point { x: 1, y: 2 };
var buf: float[] = new float[4];

p.x += 10;
buf[0] = float(p.x);
print(buf[0]);          // 11

free(p);                // object released, p is null
free(buf);              // block released, len(buf) == 0
print(p == null);       // 1
print(len(buf));        // 0`,

    types_decl: `var age: int = 30;
var active: bool = age >= 18;
var ratio: float = 1.5;
var name: string = "ada";

// type inference
var n = 42;             // int
var ok = n > 40;        // bool
var arr = [1, 2, 3];    // int[3]

// heap: the length is an expression, read once
var size = 16;
var buf: int[] = new int[size];

// no initialiser: assign before reading
var total: int;
total = age;
total += 1;`,

    stmt_var: `var x: int = 1;
var flag: bool = false;
var n = 42;          // inferred type
var a: int[3] = [1, 2, 3];
var b = [true, false]; // bool[2] inferred

// declared without a value: every path that reads it assigns it first
var out: string;
if n > 0 {
    out = "positive";
} else {
    out = "non-positive";
}`,

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
sudo apt install ./dist/amethyst-devkit_1.2.0_amd64.deb

# first program
amethyst-new hello
amethystc hello.amt -o hello
./hello   # 42`,

    expr_literals: `42          // int
1.5         // float
2e-3        // float (0.002)
true        // bool
false       // bool
"hello"     // string
[1, 2, 3]   // int[3]
[true, !false] // bool[2]`,

    expr_arith: `var a: int = 7 + 3 * 2;   // 13
var b: int = (7 + 3) * 2; // 20
var c: int = 7 % 3;       // 1
var d: int = -7 / 2;      // -3 (truncates toward zero)
var e: float = 1.5 * 4.0;  // 6
var f: int = int(2.7);    // 2 (truncates toward zero)`,

    expr_logic: `// if lhs is false, rhs is NOT evaluated
var a: bool = false && sideEffect();

// if lhs is true, rhs is NOT evaluated
var b: bool = true || sideEffect();`,

    expr_index: `var nums = [10, 20, 30];
var x: int = nums[1];  // 20
nums[0] = 5;           // write as a statement`,

    expr_field: `struct Point { x: int, y: int }

fn main() -> int {
    var p = new Point { x: 1, y: 2 };
    var d: int = p.x + p.y;   // an ordinary int expression
    p.x = p.y * 10;           // write as a statement
    print(p.x);               // 20
    print(d);                 // 3
    free(p);
    return 0;
}`,

    expr_strings: `var greeting: string = "hello";
print(greeting);              // hello

fn same(a: string, b: string) -> bool {
    return a == b;            // compares contents
}

print(same("hi", "hi"));      // 1
print(len(greeting));         // 5`,

    comp_pipeline: `file.amt
  │  Lexer      → tokens
  │  Parser     → AST
  │  Sema       → types, scopes, frame slots
  │  Codegen    → file.s  (GAS, System V AMD64)
  │  as --64    → file.o
  └  gcc -no-pie→ executable  (ld + crt + libc)`,
  },
}
