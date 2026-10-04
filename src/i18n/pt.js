export default {
  nav: {
    home: 'Home',
    docs: 'Docs',
    github: 'GitHub',
  },

  lang: {
    label: 'Idioma',
  },

  footer: {
    tagline: 'Amethyst — compilada, rápida, minimamente legível.',
    meta: 'C++ · x86-64 · GAS · MIT',
  },

  landing: {
    eyebrow: 'linguagem compilada · x86-64 nativo',
    title: `Rápida como <span class="grad">C</span>.<br />
Legível como <span class="grad">Python</span>.<br />
<span class="grad">Amethyst</span>.`,
    lead: `Uma linguagem compilada com sintaxe a meio caminho entre
high-level e low-level. Tipos estáticos, chaves e ponto-e-vírgula,
zero de interpretação — assembly GAS, <code>as</code> e
<code>ld</code>.`,
    read_docs: 'Ler a documentação →',
    view_code: 'Ver código',
    meta_no_llvm: 'sem LLVM',
    why_title: 'Porquê Amethyst?',
    why_sub: 'Base sólida, escopo deliberadamente simples, zero magia.',
    features: [
      {
        icon: '⚡',
        title: 'Compilada de verdade',
        body: 'Emite assembly x86-64 GAS, monta com <code>as</code> e liga com o linker do sistema. Binário nativo, sem VM, sem intérprete.',
      },
      {
        icon: '◆',
        title: 'Sintaxe equilibrada',
        body: '<code>fn</code>, <code>var</code>, chaves e <code>;</code> — familiar para quem vem de C/JS/Python, sem ruído desnecessário.',
      },
      {
        icon: '⎇',
        title: 'Tipos estáticos rígidos',
        body: '<code>int</code>, <code>bool</code> e arrays nunca se misturam. Erros de tipo, arity e caminhos de <code>return</code> falham em compile-time — com inferência opcional em <code>var</code>.',
      },
      {
        icon: '⧉',
        title: 'Compilador em C++',
        body: 'Lexer, parser, semântica e codegen — tudo escrito em C++17, legível e fácil de estender.',
      },
      {
        icon: '⇄',
        title: 'Curto-circuito real',
        body: '<code>&&</code> e <code>||</code> avaliam à esquerda e saltam o operando direito quando já decidido.',
      },
      {
        icon: '◎',
        title: 'Erros com posição',
        body: 'Toda mensagem no formato <code>file.amt:linha:coluna: error: …</code> — pronta para editores e CI.',
      },
    ],
    pipeline_title: 'Pipeline de compilação',
    pipeline_sub: 'Seis passos até o executável.',
    pipeline_list: `<li><span class="step">1</span><strong>.amt</strong><span>fonte Amethyst</span></li>
<li><span class="step">2</span><strong>Lexer</strong><span>tokens</span></li>
<li><span class="step">3</span><strong>Parser</strong><span>AST</span></li>
<li><span class="step">4</span><strong>Sema</strong><span>tipos &amp; slots</span></li>
<li><span class="step">5</span><strong>Codegen</strong><span>GAS x86-64</span></li>
<li><span class="step">6</span><strong>as · ld</strong><span>binário nativo</span></li>`,
    cta_title: 'Começa agora',
    cta_sub: 'Compila, corre e testa em menos de um minuto.',
    cta_install: 'Instalação',
    cta_docs: 'Documentação',
  },

  bench: {
    title: 'Benchmarks',
    sub: '4 testes básicos · a mesma lógica em 4 linguagens · best of 3',
    fastest: 'mais rápido',
    faster: 'Amethyst <strong>{n}×</strong> mais rápido',
    slower: 'Amethyst <strong>{n}×</strong> mais lento',
    tie: 'empate',
    reference: 'referência desta coluna',
    note_tail:
      'Os outputs são verificados iguais entre as 4 implementações antes de medir.',
    note: 'C com gcc -O0 (justo: o codegen da Amethyst não tem otimizador). Best of N.',
    vs_python: 'vs Python',
    vs_c: 'vs C (-O0)',
    faster_plain: '{n}× mais rápido',
    slower_plain: '{n}× mais lento',
    workload: {
      fib: 'fib(35)',
      loop: '3×10⁸ iterações · % * +',
      nested: '4500 × 4500 iterações',
      prime: 'divisão trial ≤ 50 000',
    },
  },

  docs: {
    sidebar_title: 'Documentação',
    and: 'e',
    nav: {
      introduction: 'Introdução',
      beginners: 'For Beginners',
      install: 'Instalação',
      syntax: 'Sintaxe',
      types: 'Tipos',
      statements: 'Statements',
      expressions: 'Expressões',
      compiler: 'Compilador',
    },
  },

  docsHome: {
    title: 'Introdução',
    intro: `<strong>Amethyst</strong> é uma linguagem <em>compilada</em> com foco em
      velocidade e previsibilidade. A sintaxe fica a meio caminho entre
      linguagens high-level (Python, JavaScript) e low-level (C, C++):
      chaves, ponto-e-vírgula, tipos explícitos, sem magia.`,
    callout: `<strong>v1.1 atual:</strong> <code>int</code>, <code>bool</code>,
      arrays <code>int[N]</code>/<code>bool[N]</code> (com bounds check),
      strings em <code>print</code>, funções, <code>if</code>,
      <code>while</code>, <code>for</code> ranges, <code>break</code>/<code>continue</code>,
      variáveis com inferência e <code>print</code>. Compilador em C++17,
      backend GAS x86-64.`,
    hello: 'Olá, Amethyst',
    features: 'Caraterísticas',
    features_list: `<li><strong>Compilada</strong> — pipeline <code>.amt → .s → .o → binário</code></li>
      <li><strong>Estática</strong> — erros de tipo e de caminhos de retorno em compile-time</li>
      <li><strong>Rápida</strong> — código nativo, sem camada de interpretação</li>
      <li><strong>Legível</strong> — sintaxe minimalista mas familiar</li>
      <li><strong>Sem dependências pesadas</strong> — só <code>g++</code>, <code>as</code> e <code>ld</code></li>`,
    next: 'Próximos passos',
    next_beginners: 'se estás a começar, vai direto aqui',
    next_install: 'build em segundos',
    next_syntax: 'visão geral da linguagem',
    next_types: 'arrays, strings',
    next_statements: 'statements',
    next_compiler: 'como funciona por baixo',
  },

  install: {
    title: 'Instalação',
    intro: `Para iniciantes, o caminho mais curto é o <strong>Dev Kit</strong>:
      um <code>.deb</code> com o compilador já built, templates, exemplos e
      man pages — <strong>sem compilar nada à mão</strong>.`,
    h2_devkit: 'Dev Kit (.deb) — recomendado',
    repo_root: 'Na raiz do repositório:',
    first_prog: 'Depois de instalar, primeiro programa em 3 comandos:',
    table_files: `<table>
      <thead>
        <tr><th>O que o pacote instala</th><th>Path</th></tr>
      </thead>
      <tbody>
        <tr><td>Compilador</td><td><code>/usr/bin/amethystc</code></td></tr>
        <tr><td>Helper de projecto</td><td><code>/usr/bin/amethyst-new</code></td></tr>
        <tr><td>Exemplos</td><td><code>/usr/share/amethyst/examples/</code></td></tr>
        <tr><td>Templates</td><td><code>/usr/share/amethyst/templates/</code></td></tr>
        <tr><td>Docs</td><td><code>/usr/share/doc/amethyst/README.md</code></td></tr>
        <tr><td>Man pages</td><td><code>man amethystc</code></td></tr>
      </tbody>
    </table>`,
    depends: `<strong>Depends:</strong> <code>gcc</code> e <code>binutils</code> —
      o <code>amethystc</code> chama <code>as</code>/<code>ld</code> quando
      compila os <em>teus</em> programas. O apt trata disso.`,
    h2_reqs: 'Requisitos (build from source)',
    table_reqs: `<table>
      <thead>
        <tr>
          <th>Ferramenta</th>
          <th>Para quê</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>g++</code> (C++17)</td>
          <td>compilar o próprio compilador</td>
        </tr>
        <tr>
          <td><code>as</code> / <code>ld</code></td>
          <td>montar e ligar o <code>.s</code> gerado</td>
        </tr>
        <tr>
          <td><code>gcc</code></td>
          <td>linkar com crt + libc (<code>printf</code>)</td>
        </tr>
      </tbody>
    </table>`,
    h2_build: 'Build from source',
    clean: 'Limpeza:',
    h2_first: 'Primeiro programa',
    h2_cli: 'Opções do CLI',
    table_cli: `<table>
      <thead>
        <tr>
          <th>Opção</th>
          <th>Efeito</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>-o &lt;path&gt;</code></td>
          <td>ficheiro de saída (default <code>a.out</code>)</td>
        </tr>
        <tr>
          <td><code>-S</code></td>
          <td>só emite assembly (<code>.s</code>), não monta nem liga</td>
        </tr>
        <tr>
          <td><code>--emit-asm</code></td>
          <td>mantém os intermédios <code>.s</code>/<code>.o</code> para debug</td>
        </tr>
      </tbody>
    </table>`,
    note: `<strong>Nota:</strong> o executável final é ligado com
      <code>gcc -no-pie</code>, que invoca o <code>ld</code> do sistema com
      crt e libc — necessário para <code>printf</code> usado por
      <code>print</code>.`,
  },

  syntax: {
    title: 'Sintaxe',
    intro: `Amethyst usa <strong>chaves</strong> para blocos e
      <strong>ponto-e-vírgula</strong> para terminar statements — o mesmo
      esqueleto de C/JS/Java, com keywords curtas e tipos explícitos.`,
    h2_structure: 'Estrutura de um programa',
    structure_p: `Um ficheiro é uma sequência de declarações de função. O ponto de entrada
      é obrigatoriamente:`,
    structure_list: `<li>sem parâmetros</li>
      <li>retorna <code>int</code> (o exit code do processo)</li>`,
    h2_fn: 'Funções',
    fn_p: `Parâmetros usam <code>nome: tipo</code>. O operador <code>-&gt;</code>
      liga a assinatura ao corpo. Até 6 parâmetros vão por registo (SysV);
      acima disso, pela stack.`,
    h2_ident: 'Identificadores',
    ident_list: `<li>Começam por letra ou <code>_</code></li>
      <li>Seguidos de letras, dígitos ou <code>_</code></li>
      <li>Sensíveis a maiúsculas/minúsculas</li>`,
    h2_kw: 'Keywords',
    table_kw: `<table>
      <thead>
        <tr><th>Keyword</th><th>Uso</th></tr>
      </thead>
      <tbody>
        <tr><td><code>fn</code></td><td>declaração de função</td></tr>
        <tr><td><code>var</code></td><td>variável local com inicialização (tipo opcional)</td></tr>
        <tr><td><code>return</code></td><td>devolver valor (ou sair)</td></tr>
        <tr><td><code>if</code> / <code>else</code></td><td>condição (<code>bool</code>)</td></tr>
        <tr><td><code>while</code></td><td>loop (<code>bool</code>)</td></tr>
        <tr><td><code>for</code> … <code>in</code></td><td>loop em range: <code>for i in 0..10</code></td></tr>
        <tr><td><code>break</code></td><td>sair do loop atual</td></tr>
        <tr><td><code>continue</code></td><td>próxima iteração do loop atual</td></tr>
        <tr><td><code>print</code></td><td>imprimir <code>int</code>, <code>bool</code> ou string</td></tr>
        <tr><td><code>int</code> / <code>bool</code> / <code>void</code></td><td>tipos</td></tr>
        <tr><td><code>true</code> / <code>false</code></td><td>literais bool</td></tr>
      </tbody>
    </table>`,
    h2_comments: 'Comentários',
    callout: `<strong>Sem indentação semântica:</strong> espaços e tabs só alinham.
      O layout é sempre <code>{ }</code>.`,
  },

  types: {
    title: 'Tipos',
    intro: `A v1.1 é pequena de propósito: dois tipos escalares, arrays de tamanho
      fixo e strings literais. <strong>Não há conversões implícitas</strong>
      entre <code>int</code> e <code>bool</code>.`,
    h2_int: 'int',
    int_p: `Inteiro com sinal de 64 bits (<code>i64</code>), representado em
      registradores <code>rax</code> e na stack com 8 bytes.`,
    int_arith: 'Suporta aritmética <code>+ - * / %</code> com sinal (divisão truncada).',
    h2_bool: 'bool',
    bool_p: `<code>true</code> ou <code>false</code>. Na stack é guardado como 8 bytes
      (<code>0</code>/<code>1</code>); <code>print</code> mostra <code>1</code>
      ou <code>0</code>.`,
    h2_void: 'void',
    void_p: `Só como tipo de retorno de funções sem valor. Não pode ser usado em
      <code>var</code>, nem em expressões.`,
    h2_arrays: 'Arrays — int[N] / bool[N]',
    arrays_p: `Arrays de tamanho fixo, alocados na stack. O tamanho <code>N</code> é
      um literal inteiro (<code>1</code> a <code>10 000 000</code>). O
      inicializador é um literal de array com exactamente <code>N</code>
      elementos do tipo do elemento.`,
    arrays_list: `<li>Leitura <code>a[i]</code> e escrita <code>a[i] = expr;</code></li>
      <li>
        <strong>Bounds check em runtime:</strong> índice fora de
        <code>[0, N)</code> imprime mensagem de erro e sai com código 1
      </li>
      <li>Não se pode atribuir ao array inteiro, comparar arrays nem passá-los a funções (ainda)</li>`,
    h2_strings: 'Strings (literais)',
    strings_p: `Literais entre aspas duplas com escapes <code>\\n</code>,
      <code>\\t</code>, <code>&quot;</code> e <code>\\\\</code>. Na v1.1 só podem
      ser usados directamente com <code>print</code> — não há variáveis de
      tipo string nem comparações de strings.`,
    h2_rules: 'Regras de tipagem',
    table_rules: `<table>
      <thead>
        <tr><th>Operação</th><th>Operandos</th><th>Resultado</th></tr>
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
          <td>mesmo tipo escalar (<code>int</code>/<code>bool</code>)</td>
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
          <td>unário <code>-</code></td>
          <td><code>int</code></td>
          <td><code>int</code></td>
        </tr>
      </tbody>
    </table>`,
    err_callout: `<strong>Exemplo de erro:</strong>
      <code>var x: int = true;</code> falha com
      <code>cannot initialize 'int x' with value of type 'bool'</code>.`,
    h2_decl: 'Declaração de variáveis',
    decl_p: `<code>var</code> exige inicializador — não há valores por omissão nem
      <em>definite assignment</em>. O tipo é <strong>opcional</strong>:
      quando omitido, é inferido do inicializador.`,
    decl_assign: `Atribuição posterior usa <code>=</code> e o tipo tem de coincidir com
      o da declaração.`,
    infer_callout: `<strong>Não dá para inferir:</strong> <code>var x = "hi";</code> —
      strings não são armazenáveis em variáveis (v1.1).`,
  },

  stmt: {
    title: 'Statements',
    intro: `Statements terminam em <code>;</code> (blocos e statements de controlo
      com <code>{ }</code> não levam <code>;</code> extra no fim).`,
    h2_var: 'Declaração de variável',
    h2_assign: 'Atribuição',
    assign_p: `A variável tem de existir no escopo atual (ou num escopo exterior) e o
      tipo do RHS tem de ser idêntico.`,
    assign_arr: `Elementos de array atribuem-se por índice (não se pode atribuir ao
      array inteiro):`,
    h2_block: 'Bloco',
    block_p: `<code>{ … }</code> abre um escopo novo. Variáveis declaradas dentro
      não são visíveis fora.`,
    h2_if: 'if / else',
    if_p: `A condição tem de ser <code>bool</code> (sem <em>truthiness</em> de
      inteiros). <code>else</code> aceita bloco ou outro <code>if</code>
      (<code>else if</code>).`,
    h2_while: 'while',
    while_p: 'Reavalia a condição <code>bool</code> a cada iteração.',
    h2_for: 'for (range)',
    for_p: `Itera sobre um range meio-aberto <code>[início, fim)</code> com
      passo <code>+1</code>. A variável do loop é <code>int</code> com
      escopo próprio (visível só no corpo). O valor final é avaliado
      <strong>uma vez</strong>, antes do loop.`,
    h2_break: 'break / continue',
    break_p: `Válidos <strong>só dentro de um loop</strong> (<code>while</code> ou
      <code>for</code>). <code>break</code> sai do loop mais interior;
      <code>continue</code> salta para a próxima iteração.`,
    break_nested: `Com aninhamento, cada <code>break</code>/<code>continue</code> afecta
      apenas o loop mais interior.`,
    h2_return: 'return',
    return_list: `<li>Função <code>void</code>: <code>return;</code> ou fim natural do bloco</li>
      <li>
        Função não-<code>void</code>: <code>return expr;</code> com tipo
        correto, e <strong>todos os caminhos</strong> de controlo têm de
        retornar (o sema verifica <code>return</code>, blocos e
        <code>if</code>/<code>else</code>; <code>while</code> sozinho não conta)
      </li>`,
    h2_print: 'print',
    print_p: `Statement embutido (não é função): imprime um <code>int</code>,
      <code>bool</code> ou <strong>literal de string</strong> com newline.
      Inteiros/bools usam <code>printf("%ld\\\\n", …)</code>; strings usam
      <code>puts</code>.`,
    print_escapes: 'Escapes de string: <code>\\n</code>, <code>\\t</code>, <code>\\"</code>, <code>\\\\</code>.',
    h2_expr: 'Expressão como statement',
    expr_p: `Chamadas a funções podem ser usadas como statement (o valor de retorno
      é descartado):`,
    scope_callout: `<strong>Escopo:</strong> redeclarar o mesmo nome no mesmo escopo é
      erro; sombras entre escopos diferentes ainda não são proibidas
      explicitamente na v1.1 além da checagem por escopo.`,
  },

  expr: {
    title: 'Expressões',
    intro: `Toda expressão tem tipo e pode aparecer onde o contexto espera esse
      tipo (inicializador, condição, argumento, <code>return</code>, …).`,
    h2_prec: 'Precedência (da mais baixa à mais alta)',
    table_prec: `<table>
      <thead>
        <tr><th>#</th><th>Operadores</th><th>Notas</th></tr>
      </thead>
      <tbody>
        <tr><td>1</td><td><code>||</code></td><td>curto-circuito</td></tr>
        <tr><td>2</td><td><code>&&</code></td><td>curto-circuito</td></tr>
        <tr><td>3</td><td><code>== !=</code></td><td>associativo à esquerda</td></tr>
        <tr><td>4</td><td><code>&lt; &lt;= &gt; &gt;=</code></td><td>→ <code>bool</code></td></tr>
        <tr><td>5</td><td><code>+ -</code></td><td><code>int</code></td></tr>
        <tr><td>6</td><td><code>* / %</code></td><td><code>int</code></td></tr>
        <tr><td>7</td><td>unários <code>- !</code></td><td>direita-a-esquerda</td></tr>
        <tr><td>8</td><td><code>a[i]</code> (index)</td><td>após o primário</td></tr>
        <tr><td>9</td><td>literais, ident, chamada, <code>[…]</code>, <code>(…)</code></td><td>primários</td></tr>
      </tbody>
    </table>`,
    h2_lit: 'Literais',
    lit_p: 'Inteiros decimais não negativos; o menos é operador unário.',
    h2_arith: 'Operadores aritméticos',
    h2_cmp: 'Comparações',
    cmp_p: `<code>==</code> / <code>!=</code> só entre tipos iguais (não
      <code>void</code>).`,
    h2_logic: 'Lógicos com curto-circuito',
    h2_unary: 'Unários',
    h2_calls: 'Chamadas',
    calls_list: `<li>Arity e tipos dos argumentos são verificados na análise semântica</li>
      <li>Recursão é suportada (<code>fib</code> clássico funciona)</li>
      <li>Chamar <code>print</code> como função é erro — é um statement</li>`,
    h2_index: 'Index de array',
    index_p: `O índice tem de ser <code>int</code>. <strong>Bounds check em
      runtime:</strong> fora de <code>[0, N)</code> → mensagem de erro e
      exit code 1.`,
    index_callout: `<strong>Nota:</strong> <code>nums[0] = 5;</code> é um <em>statement</em>
      de atribuição indexada, não uma expressão avaliada.`,
    h2_strings: 'Strings',
    strings_p: `Literais entre aspas duplas, válidas <strong>apenas</strong> como
      argumento de <code>print</code> na v1.1:`,
    strings_esc: `Escapes: <code>\\n</code> (newline), <code>\\t</code> (tab),
      <code>\\"</code> (aspas), <code>\\\\</code> (barra). Não se pode
      guardar numa variável nem comparar.`,
    h2_paren: 'Parênteses',
    paren_p: `Use <code>(…)</code> livremente para agrupar; precedência sozinha já
      resolve os casos comuns.`,
  },

  comp: {
    title: 'Compilador',
    intro: `<code>amethystc</code> é um programa C++17 sem LLVM: analisa a fonte,
      emite assembly GAS x86-64 e usa o toolchain do sistema para montar e
      ligar.`,
    h2_pipeline: 'Pipeline',
    h2_src: 'Fontes',
    table_src: `<table>
      <thead>
        <tr><th>Ficheiro</th><th>Responsabilidade</th></tr>
      </thead>
      <tbody>
        <tr><td><code>src/token.hpp</code></td><td>tipos de token</td></tr>
        <tr><td><code>src/lexer.*</code></td><td>fonte → tokens, erros linha:coluna</td></tr>
        <tr><td><code>src/ast.hpp</code></td><td>nós de expressão/statement/função</td></tr>
        <tr><td><code>src/parser.*</code></td><td>recursive descent + precedência</td></tr>
        <tr><td><code>src/sema.*</code></td><td>tabela de símbolos, tipos, slots de frame</td></tr>
        <tr><td><code>src/codegen.*</code></td><td>AST → assembly</td></tr>
        <tr><td><code>src/main.cpp</code></td><td>driver + invocação de <code>as</code>/<code>gcc</code></td></tr>
      </tbody>
    </table>`,
    h2_conv: 'Convencional de chamada (System V AMD64)',
    conv_list: `<li>Argumentos inteiros: <code>rdi rsi rdx rcx r8 r9</code>, depois stack</li>
      <li>Retorno em <code>rax</code></li>
      <li>Frame pointer <code>rbp</code>; locais em <code>-8(%rbp)</code>, <code>-16(%rbp)</code>, …</li>
      <li>Parâmetros são “spilled” no prólogo para endereçamento uniforme</li>
      <li>Stack alinhada a 16 bytes antes de <code>call</code> (inclusive com aninhamento)</li>`,
    h2_asm: 'Exemplo de assembly gerada',
    h2_sema: 'Análise semântica',
    sema_list: `<li>Recolhe assinaturas de todas as funções primeiro (permite recursão mútua)</li>
      <li>Exige <code>main() -&gt; int</code> sem parâmetros</li>
      <li>Checagem de tipos em cada expressão/atribuição/condição</li>
      <li>Arity de chamadas e redeclarações</li>
      <li>
        Funções não-<code>void</code> têm de retornar em todos os caminhos
        (<code>return</code>, blocos, <code>if</code>/<code>else</code>)
      </li>
      <li>Atribui <code>frame slot</code> a cada <code>var</code>/parâmetro — o codegen não refaz lookup</li>`,
    h2_errors: 'Erros',
    errors_p: 'Sempre no padrão de ferramentas Unix:',
    ext_callout: `<strong>Extensibilidade:</strong> adicionar um statement ou tipo
      normalmente toca <code>parser</code> → <code>sema</code> →
      <code>codegen</code> nesse ordem, mais um exemplo em
      <code>examples/</code> e um teste.`,
  },

  beg: {
    title: 'For Beginners',
    intro: `Guia para quem nunca compilou uma linguagem própria — ou nunca programou
      em algo tipo C. Sem jargão grátis: só o que precisas para arrancar,
      <strong>sentir progresso</strong> e <strong>aguentar a curva</strong>
      até o Amethyst parecer teu.`,
    golden: `<strong>Regra de ouro:</strong> objectivo de cada sessão é
      <em>um programa que corre</em>, não “terminar os docs”. Docs são mapa;
      o código é a viagem.`,
    h2_before: 'Antes de começar',
    h3_what: 'O que é (e não é) Amethyst',
    what_list: `<li><strong>É</strong> compilada — o teu .amt vira binário nativo, sem intérprete.</li>
      <li><strong>É</strong> tipada — <code>int</code> e <code>bool</code> não se misturam.</li>
      <li><strong>É</strong> pequena de propósito — a base fica sólida antes de crescer.</li>
      <li><strong>Não é</strong> para escreveres uma app de produção amanhã.</li>
      <li><strong>Não é</strong> para teres medo de errar — errar é o modo de aprender.</li>`,
    h3_prereq: 'Pré-requisitos mínimos',
    prereq_list: `<li>Confortável com terminal: <code>cd</code>, <code>ls</code>, correr um binário.</li>
      <li>Uma ideia vaga de variáveis e <code>if</code> (qualquer linguagem serve).</li>
      <li>Não precisas de saber C, assembly ou como liga o <code>ld</code>.</li>`,
    h2_firstday: 'O teu primeiro dia (roadmap passo a passo)',
    path: [
      {
        step: '1',
        title: 'Instala o toolchain',
        text: 'Precisas de g++, as e ld (binutils + gcc). No Ubuntu/Debian: build-essential.',
      },
      {
        step: '2',
        title: 'Compila o compilador',
        text: 'Na raiz do repositório: make. Em segundos tens ./amethystc.',
      },
      {
        step: '3',
        title: 'Escreve o teu .amt',
        text: 'Cria um ficheiro hello.amt com um main() mínimo e um print.',
      },
      {
        step: '4',
        title: 'Compila e corre',
        text: './amethystc hello.amt -o hello && ./hello',
      },
      {
        step: '5',
        title: 'Explora os exemplos',
        text: 'examples/ tem fib, control, params — lê, altera, recompila.',
      },
      {
        step: '6',
        title: 'Faz o teu primeiro exercício',
        text: 'Troca o código dos exemplos por algo teu. Erra em propósito.',
      },
    ],
    h3_install3: 'Instalação em 3 comandos (Dev Kit — sem compilar o compilador)',
    install_note_a: `O <code>.deb</code> traz binário, templates, exemplos e
      <code>man</code>. Se preferires build from source:`,
    h3_hello: 'O programa “olá mundo”',
    sanity: `<strong>Sanidade:</strong> se <code>make test</code> falhou, não é culpa
      do teu código — arranja o ambiente primeiro. Erros do teu .amt aparecem
      como <code>ficheito:linha:coluna: error: …</code>.`,
    h2_days: 'Plano de 7 dias (sugestão)',
    days_p: 'Um bocadinho por dia basta. Cada dia termina com algo a correr.',
    table_days: `<table>
      <thead>
        <tr><th>Dia</th><th>Foco</th><th>Mini-projecto</th></tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Instalar, <code>main</code>, <code>print</code>, <code>return</code></td>
          <td>Imprime o teu número favorito + <code>true</code>/<code>false</code></td>
        </tr>
        <tr>
          <td>2</td>
          <td><code>var</code>, <code>int</code>, aritmética, atribuição</td>
          <td>Calcula área de um retângulo e imprime</td>
        </tr>
        <tr>
          <td>3</td>
          <td><code>bool</code>, comparações, <code>&&</code>/<code>||</code>/<code>!</code></td>
          <td>Classifica idade: maior de idade sim/não</td>
        </tr>
        <tr>
          <td>4</td>
          <td><code>if</code> / <code>else if</code> / <code>else</code></td>
          <td>Maior, menor ou igual — imprime o sinal</td>
        </tr>
        <tr>
          <td>5</td>
          <td><code>while</code> + contadores</td>
          <td>Conta de 1 a 10; depois só os pares</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Funções, parâmetros, <code>return</code></td>
          <td><code>abs</code>, <code>max</code>, <code>dobro</code></td>
        </tr>
        <tr>
          <td>7</td>
          <td>Combina tudo + recursão</td>
          <td>Tabela de <code>fib</code> ou jogo do adivinha (vs teu valor fixo)</td>
        </tr>
      </tbody>
    </table>`,
    h2_exercises: 'Exercícios para ganhares confiança',
    exercises_p: 'Começa pelos “fáceis” — se travares, voltas ao doc relevante e tentas sem copiar.',
    exercises_list: `<li>Imprime <code>1 + 2 * 3</code> e depois <code>(1 + 2) * 3</code> — vê a diferença.</li>
      <li>Compara dois ints e imprime o resultado da comparação (<code>10 > 3</code>).</li>
      <li>Escreve <code>fn dobro(n: int) -> int</code> e usa-o.</li>
      <li>FizzBuzz só com <code>while</code> + <code>if</code>s (sem funções auxiliares).</li>
      <li>Soma os múltiplos de 3 ou 5 abaixo de 1000 (Project Euler #1).</li>
      <li>Fatorial iterativo; depois a versão recursiva — compara mentalmente.</li>`,
    h2_engage: 'Como te sentires engajado do início ao fim',
    engage_p: `Motivação não é magia: é engenharia de hábito. Usa o que funciona com
      a tua vida real, ignora o resto.`,
    engagement: [
      {
        icon: '⏱',
        title: 'Sessões curtas',
        text: '20–30 minutos > 3 horas esgotados. Fecha a sessão sabendo exatamente o que vais experimentar na próxima.',
      },
      {
        icon: '✎',
        title: 'Mão na massa sempre',
        text: 'Lê um conceito → escreve uma versão minúscula → quebra-a → conserta-a. Nada de só ler.',
      },
      {
        icon: '🐞',
        title: 'Lê os erros',
        text: 'file:linha:coluna é o teu mapa. Cada erro do Amethyst é uma aula gratuita de como o compilador pensa.',
      },
      {
        icon: '🔁',
        title: 'Reescreve, não copies',
        text: 'Depois de ver um exemplo, fecha-o e reescreve de memória. Se falhas num detalhe, esse detalhe era o teu gap.',
      },
      {
        icon: '🏁',
        title: 'Micro-projetos',
        text: 'Calculadora, jogo do adivinha, contador de palavras… algo que corre e podes mostrar em 1 dia.',
      },
      {
        icon: '📈',
        title: 'Diário de 3 linhas',
        text: 'No fim de cada sessão: o que aprendi / o que me confundiu / o que vou tentar amanhã.',
      },
    ],
    h3_stuck: 'Quando travares (e vais travar)',
    stuck_list: `<li><strong>Lê a linha inteira do erro</strong> — linha e coluna apontam para a causa.</li>
      <li><strong>Reduz</strong> — comenta metade do programa até o erro desaparecer.</li>
      <li><strong>Print debugging</strong> — <code>print</code> no meio é legítimo (e ensina).</li>
      <li><strong>Respira e dorme nele</strong> — alguns bugs só se revelam de manhã.</li>
      <li><strong>Pede / abre issue</strong> — se o compilador te enganou, é bug da Amethyst, não teu.</li>`,
    h3_study: 'Clube de estudo (sozinho ou não)',
    study_list: `<li>Aprende com alguém — explicar em voz alta consolida 2× mais.</li>
      <li>Compara a tua solução com <code>examples/</code> só <em>depois</em> de teres uma.</li>
      <li>Um repositório “amethyst-exercises” teu, com commit por dia.</li>
      <li>Celebra micro-vitórias: “hoje o meu while parou no sítio certo” conta.</li>`,
    h2_where: 'Onde continuar daqui',
    next: [
      {
        to: '/docs/install',
        label: 'Próximo',
        title: 'Instalação',
        text: 'Detalhes do CLI e do toolchain.',
      },
      {
        to: '/docs/syntax',
        label: 'Depois',
        title: 'Sintaxe',
        text: 'Todo o esqueleto da linguagem.',
      },
      {
        to: '/docs/types',
        label: 'Fundamentos',
        title: 'Tipos',
        text: 'int, bool, arrays e as regras rígidas.',
      },
      {
        to: '/docs/statements',
        label: 'Prática',
        title: 'Statements',
        text: 'if, while, for, arrays em dia-a-dia.',
      },
    ],
    checklist: `<strong>Checklist “estou a evoluir?”</strong>
      <ul style="margin: 0.5rem 0 0; padding-left: 1.1rem">
        <li>Consigo traduzir um problema em <code>var</code> + <code>while</code> + <code>print</code></li>
        <li>Leio um erro sem panicar</li>
        <li>Escrevo uma função com parâmetros sem olhar o cheat sheet</li>
        <li>Debugo com <code>print</code> de forma organizada</li>
        <li>Tenho 1 micro-projecto “meu”, não só dos exemplos</li>
      </ul>`,
  },

  ai: {
    fab_label: 'IA',
    fab_open: 'Abrir assistente',
    fab_close: 'Fechar assistente',
    dialog: 'Assistente de IA',
    title: 'Assistente Amethyst',
    close: 'Fechar',
    placeholder: 'Escreve a tua pergunta…',
    send: 'Enviar',
    greeting:
      'Olá! Sou o assistente do Amethyst. Pergunta-me sobre a linguagem, instalação, sintaxe ou pede um exemplo de código.',
    error: 'Ups, algo falhou ao contactar o Gemini. Tenta novamente dentro de um momento.',
    no_response: '(sem resposta)',
    system:
      'Você é o assistente de IA oficial do site do Amethyst, uma linguagem de programação compilada (C++17, x86-64 GAS, sem LLVM) com tipos estáticos (int=64-bit, bool, void), sintaxe estilo C/JS/Python (fn, var, chaves, ponto-e-vírgula) e pipeline .amt → Lexer → Parser → Sema → Codegen → as/ld. Responda de forma curta, simpática e em português de Portugal. Ajuda com dúvidas sobre a linguagem, instalação, sintaxe e exemplos de código Amethyst.',
  },

  code: {
    landing_sample: `fn fib(n: int) -> int {
    if n < 2 {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
}

fn main() -> int {
    var fibs = [0, 0, 0, 0, 0, 0];  // tipo inferido: int[6]

    for i in 0..6 {
        fibs[i] = fib(i);
    }
    for i in 0..6 {
        print(fibs[i]);
    }

    print("done");
    return 0;
}`,

    syntax_overview: `// Comentário de linha
fn add(a: int, b: int) -> int {
    return a + b;
}

fn main() -> int {
    var nums = [10, 20, 30];  // tipo inferido: int[3]
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

    syntax_fn: `fn nome(p1: tipo, p2: tipo) -> tipoRetorno {
    // corpo
    return valor;
}`,

    syntax_comment: '// até o fim da linha',

    install_deb: `make deb
# gera dist/amethyst-devkit_1.0.0_amd64.deb (~60 KB)

sudo apt install ./dist/amethyst-devkit_1.0.0_amd64.deb`,

    install_build: `make          # gera ./amethystc
make test     # exemplos + suíte`,

    types_arrays: `var nums: int[5] = [10, 20, 30, 40, 50];
var flags: bool[3] = [true, false, true];

print(nums[0]);   // 10
nums[2] = 99;     // escrita por índice`,

    types_decl: `var idade: int = 30;
var ativo: bool = idade >= 18;

// inferência de tipo
var n = 42;             // int
var ok = n > 40;        // bool
var arr = [1, 2, 3];    // int[3]`,

    stmt_var: `var x: int = 1;
var flag: bool = false;
var n = 42;          // tipo inferido
var a: int[3] = [1, 2, 3];
var b = [true, false]; // bool[2] inferido`,

    stmt_for_dynamic: `// ranges dinâmicos
for i in 0..n {
    ...
}`,

    stmt_break: `for i in 0..10 {
    if i == 3 {
        continue;  // salta o 3
    }
    if i == 7 {
        break;      // para em 7
    }
    print(i);
}`,

    stmt_expr: 'helper();  // descarta o int devolvido',

    beg_terminal: `# na raiz do repo
make deb
sudo apt install ./dist/amethyst-devkit_1.0.0_amd64.deb

# primeiro programa
amethyst-new hello
amethystc hello.amt -o hello
./hello   # 42`,

    expr_literals: `42          // int
true        // bool
false       // bool
"hello"     // string (só com print)
[1, 2, 3]   // int[3]
[true, !false] // bool[2]`,

    expr_arith: `var a: int = 7 + 3 * 2;   // 13
var b: int = (7 + 3) * 2; // 20
var c: int = 7 % 3;       // 1
var d: int = -7 / 2;      // -3 (trunca p/ zero)`,

    expr_logic: `// se lhs for false, rhs NÃO é avaliado
var a: bool = false && sideEffect();

// se lhs for true, rhs NÃO é avaliado
var b: bool = true || sideEffect();`,

    expr_index: `var nums = [10, 20, 30];
var x: int = nums[1];  // 20
nums[0] = 5;           // escrita como statement`,

    expr_strings: `print("olá");
print("a\\tb\\n");`,

    comp_pipeline: `file.amt
  │  Lexer      → tokens
  │  Parser     → AST
  │  Sema       → tipos, escopos, frame slots
  │  Codegen    → file.s  (GAS, System V AMD64)
  │  as --64    → file.o
  └  gcc -no-pie→ executável  (ld + crt + libc)`,
  },
}
