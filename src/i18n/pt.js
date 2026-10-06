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
        body: '<code>int</code>, <code>bool</code>, <code>float</code> e <code>string</code> nunca se misturam — não há conversões implícitas. Erros de tipo, arity e caminhos de <code>return</code> falham em compile-time — com inferência opcional em <code>var</code>.',
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
<li><span class="step">4</span><strong>Sema</strong><span>tipos, DA, slots</span></li>
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
    callout: `<strong>A linguagem hoje:</strong> <code>int</code>, <code>bool</code>,
      <code>float</code> e <code>string</code>, arrays de tamanho fixo
      <code>T[N]</code> e slices <code>T[]</code> (ambos com bounds check),
      <strong>structs</strong> no heap com <code>new P { … }</code>,
      <code>null</code> e <strong>métodos</strong> (<code>impl</code>),
      arrays crescentes <code>T[]</code> com <code>push</code>/<code>pop</code>
      e arrays no heap <code>new T[n]</code> com <code>free</code>,
      concatenação de strings com <code>+</code>, builtins matemáticas
      (<code>sqrt</code>, <code>abs</code>, <code>min</code>,
      <code>max</code>), atribuição composta, <code>len()</code>, funções,
      <code>if</code>, <code>while</code>, <code>for</code> ranges,
      <code>break</code>/<code>continue</code>, variáveis com inferência e
      análise de definite assignment, e <code>print</code>. Compilador em
      C++17, backend GAS x86-64.`,
    hello: 'Olá, Amethyst',
    features: 'Caraterísticas',
    features_list: `<li><strong>Compilada</strong> — pipeline <code>.amt → .s → .o → binário</code></li>
      <li><strong>Estática</strong> — erros de tipo, de caminhos de retorno e de definite assignment em compile-time</li>
      <li><strong>Rápida</strong> — código nativo, sem camada de interpretação</li>
      <li><strong>Legível</strong> — sintaxe minimalista mas familiar</li>
      <li><strong>Sem dependências pesadas</strong> — só <code>g++</code>, <code>as</code> e <code>ld</code></li>`,
    next: 'Próximos passos',
    next_beginners: 'se estás a começar, vai direto aqui',
    next_install: 'build em segundos',
    next_syntax: 'visão geral da linguagem',
    next_types: 'int, float, bool, strings, arrays, slices, structs e métodos',
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
        <tr><td>Extensão VS Code</td><td><code>/usr/share/amethyst/vscode/</code></td></tr>
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
    h2_editor: 'Suporte de editor (VS Code)',
    editor_p: `O repositório traz uma extensão em
      <code>vscode-amethyst/</code>: realce de sintaxe para
      <code>.amt</code>, regras de comentário e indentação, snippets para
      as declarações habituais, e comandos <em>Compile</em> /
      <em>Compile and Run</em> que chamam <code>amethystc</code> num
      terminal integrado. O Dev Kit instala as fontes em
      <code>/usr/share/amethyst/vscode/</code> e cada release no GitHub
      junta um <code>amethyst-1.3.0.vsix</code> pronto a instalar como
      asset separado. Precisa de <code>amethystc</code> no teu
      <code>PATH</code>:`,
  },

  syntax: {
    title: 'Sintaxe',
    intro: `Amethyst usa <strong>chaves</strong> para blocos e
      <strong>ponto-e-vírgula</strong> para terminar statements — o mesmo
      esqueleto de C/JS/Java, com keywords curtas e tipos explícitos.`,
    h2_structure: 'Estrutura de um programa',
    structure_p: `Um ficheiro é uma sequência de declarações de função, de struct
      e de <code>impl</code> (uma struct pode ser usada antes de ser
      declarada). O ponto de entrada é obrigatoriamente:`,
    structure_list: `<li>sem parâmetros</li>
      <li>retorna <code>int</code> (o exit code do processo)</li>`,
    h2_fn: 'Funções',
    fn_p: `Parâmetros usam <code>nome: tipo</code>. O operador <code>-&gt;</code>
      liga a assinatura ao corpo. Até 6 parâmetros inteiros (ou 8
      <code>float</code>) vão por registo (SysV); um parâmetro de array ocupa
      dois registos inteiros, uma struct ocupa um (é uma única referência), e
      o que não couber vai pela stack.`,
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
        <tr><td><code>struct</code></td><td>declaração de struct: <code>struct P { x: int, y: float }</code></td></tr>
        <tr><td><code>impl</code></td><td>métodos de uma struct: <code>impl P { fn m(self: P) -&gt; int { … } }</code></td></tr>
        <tr><td><code>var</code></td><td>variável local; o tipo é opcional quando há inicializador</td></tr>
        <tr><td><code>return</code></td><td>devolver valor (ou sair)</td></tr>
        <tr><td><code>if</code> / <code>else</code></td><td>condição (<code>bool</code>)</td></tr>
        <tr><td><code>while</code></td><td>loop (<code>bool</code>)</td></tr>
        <tr><td><code>for</code> … <code>in</code></td><td>loop em range: <code>for i in 0..10</code></td></tr>
        <tr><td><code>break</code></td><td>sair do loop atual</td></tr>
        <tr><td><code>continue</code></td><td>próxima iteração do loop atual</td></tr>
        <tr><td><code>print</code></td><td>imprimir <code>int</code>, <code>bool</code>, <code>float</code> ou <code>string</code></td></tr>
        <tr><td><code>new</code></td><td>alocação no heap: <code>new P { … }</code> ou <code>new T[n]</code></td></tr>
        <tr><td><code>free</code></td><td>libertar um objeto do heap ou um array criado com <code>new</code></td></tr>
        <tr><td><code>int</code> / <code>bool</code> / <code>float</code> / <code>string</code> / <code>void</code></td><td>tipos escalares</td></tr>
        <tr><td><code>Point</code> / <code>Point[]</code> / <code>Point[N]</code></td><td>um tipo struct, e as suas formas slice / array fixo</td></tr>
        <tr><td><code>true</code> / <code>false</code></td><td>literais bool</td></tr>
        <tr><td><code>null</code></td><td>a referência a "nada" (só em slots de struct)</td></tr>
      </tbody>
    </table>`,
    h2_comments: 'Comentários',
    callout: `<strong>Sem indentação semântica:</strong> espaços e tabs só alinham.
      O layout é sempre <code>{ }</code>.`,
  },

  types: {
    title: 'Tipos',
    intro: `A linguagem é pequena de propósito: quatro tipos escalares, structs
      que vivem no heap, e arrays que ou são fixos na stack ou vivem no heap
      — criados com <code>new</code> ou crescidos a partir de
      <code>[]</code> com <code>push</code>. <strong>Não há conversões implícitas</strong>
      entre <code>int</code>, <code>bool</code>, <code>float</code> e
      <code>string</code> — escreve <code>float(n)</code> ou <code>int(x)</code>
      para mover entre os dois tipos numéricos.`,
    h2_int: 'int',
    int_p: `Inteiro com sinal de 64 bits (<code>i64</code>), representado em
      registradores <code>rax</code> e na stack com 8 bytes.`,
    int_arith: 'Suporta aritmética <code>+ - * / %</code> com sinal (divisão truncada).',
    h2_float: 'float',
    float_p: `IEEE 754 <code>binary64</code> de 64 bits, calculado nos
      registos <code>xmm</code> e com 8 bytes na stack. Literais são
      <code>1.5</code>, <code>0.0</code> e <code>2e-3</code> —
      <code>0..10</code> continua a ser um range, não um float.`,
    float_arith: `Suporta <code>+ - * /</code> com dois <code>float</code>s. Não
      existe <code>%</code> para floats. A divisão por zero obedece à IEEE-754 e
      dá <code>inf</code> / <code>NaN</code> em vez de falhar, e qualquer
      comparação com <code>NaN</code> é falsa excepto <code>!=</code>.`,
    float_conv: `Conversões explícitas com <code>float(n)</code> (<code>int</code> →
      <code>float</code>) e <code>int(x)</code> (<code>float</code> →
      <code>int</code>, truncando para zero). <code>print</code> mostra a forma
      mais curta que revede (<code>%.15g</code>).`,
    h2_bool: 'bool',
    bool_p: `<code>true</code> ou <code>false</code>. Na stack é guardado como 8 bytes
      (<code>0</code>/<code>1</code>); <code>print</code> mostra <code>1</code>
      ou <code>0</code>.`,
    h2_void: 'void',
    void_p: `Só como tipo de retorno de funções sem valor. Não pode ser usado em
      <code>var</code>, nem em expressões.`,
    h2_arrays: 'Arrays fixos — T[N]',
    arrays_p: `Arrays de tamanho fixo, alocados na stack. O tamanho <code>N</code> é
      um literal inteiro (<code>1</code> a <code>10 000 000</code>). O tipo
      do elemento <code>T</code> pode ser <code>int</code>, <code>bool</code>,
      <code>float</code>, <code>string</code> ou uma struct. O
      inicializador é um literal de array com exactamente <code>N</code>
      elementos do tipo do elemento.`,
    arrays_list: `<li>Leitura <code>a[i]</code> e escrita <code>a[i] = expr;</code></li>
      <li>
        <strong>Bounds check em runtime:</strong> índice fora de
        <code>[0, N)</code> imprime mensagem de erro e sai com código 1
      </li>
      <li>Não se pode atribuir ao array inteiro nem comparar arrays — mas podes passá-los a uma função como slice</li>
      <li>Nada a <code>free</code>: o bloco faz parte do frame (só objetos do heap <em>dentro</em> dele precisam de <code>free</code>)</li>`,
    h2_slices: 'Slices e arrays dinâmicos — T[]',
    slices_p: `Uma variável ou parâmetro declarado <code>T[]</code> carrega um
      <strong>ponteiro + comprimento</strong> — o comprimento é conhecido em
      runtime, pelo que não há tamanho no tipo. Como <em>parâmetro</em> faz
      alias do array do chamador (o callee pode escrever por ele e
      <code>len()</code> funciona); como <em>local</em> vem de
      <code>new T[n]</code>, ou começa vazio com <code>[]</code> e cresce
      com <code>push</code>.`,
    slices_list: `<li><code>fn total(a: int[]) -&gt; int</code> — sem tamanho na assinatura</li>
      <li><code>var a: int[] = new int[n];</code> — <code>n</code> é qualquer expressão <code>int</code>, lida uma vez</li>
      <li>Os elementos começam a zero (<code>calloc</code>), logo <code>print(a[3]);</code> imprime <code>0</code></li>
      <li><code>free(a);</code> liberta o bloco, repõe o comprimento a 0 e anula o ponteiro — um segundo <code>free</code> não faz nada</li>
      <li><code>T[]</code> funciona para qualquer tipo de elemento: <code>int[]</code>, <code>float[]</code>, <code>string[]</code>, <code>Point[]</code></li>`,
    dynarray_list: `<li><code>push(a, v);</code> acrescenta a um array <strong>local</strong>, duplicando a capacidade quando o bloco enche (0 → 4 → 8 → …)</li>
      <li><code>pop(a)</code> remove e devolve o último elemento; fazer <code>pop</code> a um array vazio pára o programa com <code>Amethyst runtime error: pop from an empty array</code></li>
      <li>Nenhum dos dois aceita um array fixo ou um <em>parâmetro</em> slice — essa memória é do chamador</li>
      <li><code>free(a);</code> liberta o bloco e repõe comprimento e capacidade, por isso um <code>push</code> seguinte recomeça</li>`,
    h2_struct: 'Structs — objetos no heap',
    struct_p: `Uma <strong>struct</strong> declara uma lista nomeada de campos.
      Os objetos vivem no heap e uma variável guarda uma <em>referência</em>
      para eles — uma única palavra — logo atribuir ou passar uma struct
      partilha o objeto em vez de o copiar: uma escrita através da referência
      é vista por todos os que a guardam.`,
    struct_list: `<li><code>struct P { x: int, y: float }</code> — campos separados por vírgula no formato <code>nome: tipo</code></li>
      <li><code>var p = new P { x: 10, y: 2.5 };</code> — todos os campos exactamente uma vez, em <strong>qualquer ordem</strong></li>
      <li>Leitura com <code>p.x</code>, escrita com <code>p.x = expr;</code> (também <code>p.x += 1;</code>)</li>
      <li>Tipos de campo: <code>int</code>, <code>bool</code>, <code>float</code>, <code>string</code> ou outra struct — assim <code>struct Node { next: Node }</code> constrói uma lista</li>
      <li>Uma struct pode ser usada antes de ser declarada, e serve em qualquer sitio onde se espera um tipo: variáveis, parâmetros, retornos e arrays</li>
      <li>Os seus métodos vivem num bloco <code>impl</code> separado — vê <em>Métodos</em> abaixo</li>`,
    null_callout: `<strong>Null e free:</strong> uma variável de struct pode ser
      <code>null</code> (sem objecto); ler um campo de <code>null</code>
      pára o programa com
      <code>Amethyst runtime error: null reference (…)</code>, e
      <code>p == null</code> / <code>p != null</code> é a única comparação
      entre structs. <code>free(p);</code> liberta o objecto e deixa
      <code>p</code> a null, pelo que um segundo <code>free</code> não faz
      nada. Cada objecto precisa de exactamente um <code>free</code> — ainda
      não há coletor, e outras variáveis que continuem a apontar para um
      objecto libertado ficam <em>dangling</em>.`,
    h2_methods: 'Métodos — blocos impl',
    methods_p: `Um <strong>método</strong> pertence a uma struct e é declarado
      num bloco <code>impl</code>. O primeiro parâmetro é sempre
      <code>self: P</code> — o receiver — e a chamada <code>p.m(x)</code>
      passa <code>p</code> como argumento 0. Todo o resto comporta-se como
      uma função: as mesmas verificações de arity e de tipos de argumentos,
      as mesmas regras de <code>return</code>, e serve onde serve uma
      chamada a função.`,
    methods_list: `<li><code>impl P { … }</code> — o bloco pode vir antes ou depois de <code>struct P</code>, e uma struct pode ter vários blocos</li>
      <li>Todo o método começa com <code>self: P</code>, com o tipo da struct; ler <code>self.x</code> e escrever <code>self.x = …;</code> funciona, atribuir a <code>self</code> é erro</li>
      <li>Um nome que <code>P</code> não conhece falha com <code>type 'P' has no method 'm'</code>; um receiver que não é struct também falha</li>
      <li>Os métodos são compilados como funções com o símbolo <code>__amethyst_m_P_m</code> e o receiver como argumento 0 — a ABI nunca muda</li>
      <li>Sem herança, sem métodos estáticos, e o <code>free(p)</code> continua a ser feito de fora</li>`,
    h2_strings: 'Strings',
    strings_p: `Literais entre aspas duplas com escapes <code>\\n</code>,
      <code>\\t</code>, <code>&quot;</code> e <code>\\\\</code>. Um
      <code>string</code> é um ponteiro para texto terminado em NUL em
      <code>.rodata</code>: guarda-o em variáveis, atribui-o, concatena
      com <code>+</code> / <code>+=</code>, passa-o a funções e devolve-o,
      e compara com <code>==</code> /
      <code>!=</code> — que compara o <em>conteúdo</em>, não os ponteiros.
      <code>len(s)</code> é o comprimento em bytes. Ainda não há indexação, ordenação nem
      conversão de números em texto — junta apenas strings, e cada
      <code>+</code> aloca uma string nova que vive até o programa
      terminar.`,
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
          <td><code>+ - * /</code></td>
          <td><code>float</code>, <code>float</code></td>
          <td><code>float</code></td>
        </tr>
        <tr>
          <td><code>+</code> (também <code>+=</code>)</td>
          <td>dois <code>string</code>s</td>
          <td><code>string</code> (nova alocação)</td>
        </tr>
        <tr>
          <td><code>&lt; &lt;= &gt; &gt;=</code></td>
          <td>dois <code>int</code>s ou dois <code>float</code>s</td>
          <td><code>bool</code></td>
        </tr>
        <tr>
          <td><code>== !=</code></td>
          <td>dois valores do mesmo tipo escalar (<code>int</code>/<code>bool</code>/<code>float</code>) ou dois <code>string</code>s; uma struct só contra <code>null</code></td>
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
          <td><code>int</code> ou <code>float</code></td>
          <td>mesmo tipo</td>
        </tr>
        <tr>
          <td><code>float(n)</code> / <code>int(x)</code></td>
          <td><code>int</code> / <code>float</code></td>
          <td><code>float</code> / <code>int</code></td>
        </tr>
        <tr>
          <td><code>sqrt(x)</code> / <code>abs(x)</code></td>
          <td><code>float</code> / <code>int</code> ou <code>float</code></td>
          <td><code>float</code> / mesmo tipo do argumento</td>
        </tr>
        <tr>
          <td><code>min(a, b)</code> / <code>max(a, b)</code></td>
          <td>dois <code>int</code>s ou dois <code>float</code>s</td>
          <td>mesmo tipo</td>
        </tr>
        <tr>
          <td><code>push(a, v)</code> / <code>pop(a)</code></td>
          <td>um <code>T[]</code> local, mais um valor <code>T</code></td>
          <td><code>void</code> / <code>T</code></td>
        </tr>
      </tbody>
    </table>`,
    err_callout: `<strong>Exemplos de erro:</strong>
      <code>var x: int = true;</code> falha com
      <code>cannot initialize 'int x' with value of type 'bool'</code>,
      <code>var s: string = null;</code> com
      <code>cannot initialize 'string s' with value of type 'null'</code> e
      <code>new P { … }</code> sem todos os campos com
      <code>missing field 'y' in the initializer of 'P'</code>.`,
    h2_decl: 'Declaração de variáveis',
    decl_p: `O tipo é <strong>opcional</strong>: com inicializador é inferido
      dele. Sem inicializador tens de escrever o tipo
      (<code>var x: int;</code>), e então todos os caminhos que leem
      <code>x</code> têm de o atribuir primeiro — <em>análise de definite
      assignment</em>. Arrays exigem sempre inicializador: um literal para
      <code>T[N]</code>, ou <code>new</code> / <code>[]</code> para
      <code>T[]</code>.`,
    decl_assign: `Atribuição posterior usa <code>=</code> e o tipo tem de coincidir com
      o da declaração. Atribuição composta — <code>+= -= *= /= %=</code> —
      lê e escreve numa frase só. O alvo de uma atribuição é qualquer
      <em>lvalue</em>: uma variável, um elemento <code>a[i]</code> ou um
      campo <code>p.x</code>.`,
    infer_callout: `<strong>Não dá para inferir:</strong> <code>var x;</code> — há
      de haver inicializador quando o tipo é omitido, e
      <code>var a: int[3];</code> precisa de um literal enquanto
      <code>var a: int[];</code> precisa de <code>new</code> ou <code>[]</code>.`,
  },

  stmt: {
    title: 'Statements',
    intro: `Statements terminam em <code>;</code> (blocos e statements de controlo
      com <code>{ }</code> não levam <code>;</code> extra no fim).`,
    h2_var: 'Declaração de variável',
    var_p: `Declara-se com <code>var nome: tipo = expr;</code>, ou deixa
      <code>var nome = expr;</code> inferir o tipo. Omitir o inicializador
      deixa a variável por atribuir até ao primeiro <code>=</code>.`,
    h2_assign: 'Atribuição',
    assign_p: `O alvo tem de ser uma variável existente no escopo e o tipo do RHS
      tem de ser idêntico. A atribuição composta
      (<code>+=</code> <code>-=</code> <code>*=</code> <code>/=</code>
      <code>%=</code>) é a forma curta de <code>x = x op expr;</code>.`,
    assign_arr: `Elementos de array atribuem-se por índice e campos de struct por
      nome (não se pode atribuir ao array inteiro):`,
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
      <code>bool</code>, <code>float</code> ou <code>string</code> com newline.
      Inteiros/bools usam <code>printf("%ld\\\\n", …)</code>, floats
      <code>printf("%.15g\\\\n", …)</code> e strings <code>puts</code>.`,
    print_escapes: 'Escapes de string: <code>\\n</code>, <code>\\t</code>, <code>\\"</code>, <code>\\\\</code>.',
    h2_free: 'free',
    free_p: `<code>free(x);</code> liberta o que <code>new</code> alocou e deixa o
      lvalue a <code>null</code>; um array tem também o comprimento reposto
      a <code>0</code>, pelo que um segundo <code>free</code> não faz nada.
      Aceita um lvalue — uma variável, um campo <code>p.next</code> ou um
      elemento <code>pts[i]</code> — nunca um temporário.`,
    free_list: `<li><code>free(p);</code> — uma referência de struct vinda de <code>new P { … }</code></li>
      <li><code>free(a);</code> — um array local de <code>new T[n]</code>; o slot do comprimento é reposto a <code>0</code>, logo <code>len(a)</code> imprime <code>0</code> e qualquer leitura seguinte falha o bounds check</li>
      <li>Um array de tamanho fixo e um <em>parâmetro</em> de array não podem ser libertados — o primeiro vive no frame, o segundo pode apontar para a stack do chamador</li>
      <li>Só structs e arrays de <code>new</code>: <code>free(42);</code> é erro de compilação</li>`,
    h2_expr: 'Expressão como statement',
    expr_p: `Chamadas a funções e a métodos podem ser usadas como statement
      (o valor de retorno é descartado), e também <code>push(...)</code>:`,
    scope_callout: `<strong>Escopo:</strong> redeclarar o mesmo nome no mesmo escopo é
      erro; sombras entre escopos diferentes são permitidas.
      <strong>Avisos</strong> (não erros): <code>unused variable</code> e
      <code>unreachable code</code>, impressos no stderr sem parar o build.`,
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
        <tr><td>5</td><td><code>+ -</code></td><td><code>int</code> ou <code>float</code> (nunca misturados)</td></tr>
        <tr><td>6</td><td><code>* / %</code></td><td><code>* /</code> em <code>int</code> ou <code>float</code>; <code>%</code> é só <code>int</code></td></tr>
        <tr><td>7</td><td>unários <code>- !</code></td><td>direita-a-esquerda</td></tr>
        <tr><td>8</td><td><code>a[i]</code> (index), <code>p.x</code> (campo), <code>p.m(…)</code> (método)</td><td>após o primário</td></tr>
        <tr><td>9</td><td>literais, ident, chamada, <code>[…]</code>, <code>new P { … }</code>, <code>new T[n]</code>, <code>(…)</code></td><td>primários</td></tr>
      </tbody>
    </table>`,
    h2_lit: 'Literais',
    lit_p: `Inteiros decimais não negativos (<code>42</code>) — o menos é
      operador unário. Floats são <code>1.5</code>, <code>0.0</code>,
      <code>2e-3</code> (um <code>.</code> seguido de dígito faz um float;
      <code>0..10</code> mantém-se um range). Ainda <code>true</code>/<code>false</code>
      e <code>"strings"</code>.`,
    h2_arith: 'Operadores aritméticos',
    h2_cmp: 'Comparações',
    cmp_p: `<code>==</code> / <code>!=</code> só entre tipos iguais (nunca
      <code>void</code>): dois <code>int</code>s, dois <code>bool</code>s, dois
      <code>float</code>s ou dois <code>string</code>s (conteúdo, não ponteiros).
      Uma struct só é comparável contra <code>null</code> — dois objectos não
      são comparáveis.`,
    h2_logic: 'Lógicos com curto-circuito',
    h2_unary: 'Unários',
    h2_calls: 'Chamadas',
    calls_list: `<li>Arity e tipos dos argumentos são verificados na análise semântica</li>
      <li>Recursão é suportada (<code>fib</code> clássico funciona)</li>
      <li>Chamar <code>print</code> como função é erro — é um statement</li>`,
    h2_builtins: 'Funções embutidas',
    builtins_p: `Um punhado de chamadas que o próprio compilador conhece —
      sem import, sem biblioteca:`,
    builtins_list: `<li><code>len(a)</code> — número de elementos de um array, ou comprimento em bytes de uma string</li>
      <li><code>float(n)</code> / <code>int(x)</code> — as únicas conversões entre <code>int</code> e <code>float</code></li>
      <li><code>sqrt(x)</code> — raiz quadrada de um <code>float</code> (arredondada correctamente)</li>
      <li><code>abs(x)</code> — valor absoluto de um <code>int</code> ou <code>float</code>, mantendo o tipo</li>
      <li><code>min(a, b)</code> / <code>max(a, b)</code> — dois valores do <strong>mesmo</strong> tipo; misturar <code>int</code> com <code>float</code> é erro</li>
      <li><code>push(a, v)</code> / <code>pop(a)</code> — fazem crescer e esvaziar um array dinâmico local</li>
      <li>Os nove nomes estão reservados: uma função não pode redefinir <code>len</code>, <code>int</code>, <code>float</code>, <code>sqrt</code>, <code>abs</code>, <code>min</code>, <code>max</code>, <code>push</code> ou <code>pop</code></li>`,
    h2_index: 'Index de array',
    index_p: `O índice tem de ser <code>int</code>. <strong>Bounds check em
      runtime:</strong> fora de <code>[0, N)</code> → mensagem de erro e
      exit code 1. O limite vem da memória, logo um array dinâmico ou um
      parâmetro slice é verificado com o comprimento em runtime.`,
    index_callout: `<strong>Nota:</strong> <code>nums[0] = 5;</code> é um <em>statement</em>
      de atribuição indexada, não uma expressão avaliada.`,
    h2_field: 'Acesso a campo — p.x',
    field_p: `Lê um campo nomeado de uma referência de struct. O resultado é um
      valor normal do tipo do campo, portanto serve onde esse tipo serve;
      escrever nele é um <em>statement</em> de atribuição (ver Statements).
      Ambas as formas páram o programa com erro de runtime quando a
      a referência é <code>null</code>.`,
    h2_mcall: 'Chamada de método — p.m(...)',
    mcall_p: `Chama um método da struct para a qual o receiver aponta. O
      receiver tem de ser uma struct que declare o método (uma referência
      <code>null</code> falha em runtime como qualquer leitura de campo),
      os argumentos são verificados exactamente como numa chamada a função,
      e o resultado serve onde o tipo dele serve — inclusive como um
      statement quando o valor não é preciso.`,
    h2_strings: 'Strings',
    strings_p: `Literais entre aspas duplas são valores <code>string</code>
      normais: guarda-os, compara-os, passa-os, tira-lhes
      <code>len()</code>, e junta-os com <code>+</code> /
      <code>+=</code>.`,
    strings_esc: `Escapes: <code>\\n</code> (newline), <code>\\t</code> (tab),
      <code>\\"</code> (aspas), <code>\\\\</code> (barra).
      <code>+</code> precisa de duas strings (<code>"a" + 1</code> é erro)
      e devolve uma alocação nova de cada vez. A indexação e a ordenação
      continuam por fazer, e ainda não há conversão de números em
      texto.`,
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
        <tr><td><code>src/sema.*</code></td><td>tabela de símbolos, tipos, definite assignment, slots de frame</td></tr>
        <tr><td><code>src/codegen.*</code></td><td>AST → assembly</td></tr>
        <tr><td><code>src/main.cpp</code></td><td>driver + invocação de <code>as</code>/<code>gcc</code></td></tr>
      </tbody>
    </table>`,
    h2_conv: 'Convencional de chamada (System V AMD64)',
    conv_list: `<li>Argumentos inteiros: <code>rdi rsi rdx rcx r8 r9</code>, depois stack</li>
      <li>Argumentos float: <code>xmm0</code>–<code>xmm7</code>, depois stack; um float retorna em <code>xmm0</code></li>
      <li>Retorno em <code>rax</code> (<code>xmm0</code> para <code>float</code>)</li>
      <li>Uma struct é uma única referência: um registo inteiro e um slot na stack, por isso adicionar structs não mudou a ABI</li>
      <li>Frame pointer <code>rbp</code>; locais em <code>-8(%rbp)</code>, <code>-16(%rbp)</code>, …</li>
      <li>Parâmetros são “spilled” no prólogo para endereçamento uniforme</li>
      <li>Stack alinhada a 16 bytes antes de <code>call</code> (inclusive com aninhamento)</li>
      <li>Blocos no heap vêm de <code>malloc</code> (objectos) e <code>calloc(n, 8)</code> (arrays); <code>free</code> chama <code>free</code></li>`,
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
      <li>
        Análise de definite assignment: uma variável declarada sem inicializador
        tem de ser atribuída em todos os caminhos que a leem
      </li>
      <li>Avisos (não erros): <code>unused variable</code>, <code>unreachable code</code></li>
      <li>Atribui <code>frame slot</code> a cada <code>var</code>/parâmetro — o codegen não refaz lookup</li>
      <li>Recolhe todas as structs primeiro (um tipo pode ser usado antes de ser declarado) e depois verifica as listas de campos: cada campo exactamente uma vez, nomes desconhecidos levam sugestão <em>did-you-mean</em></li>
      <li><code>null</code> só serve em slots de struct; uma struct só se compara com <code>null</code> e não tem aritmética</li>
      <li><code>free(x)</code> só numa referência de struct ou numa variável de array que este frame criou com <code>new</code></li>
      <li>Recolhe todos os blocos <code>impl</code> primeiro: <code>self: P</code> é marcado como receiver, um método não pode atribuir a <code>self</code>, e <code>p.m(…)</code> é resolvido em <code>P</code> antes de qualquer função global</li>
      <li>Nomes reservados: uma função não pode chamar-se <code>len</code>, <code>int</code>, <code>float</code>, <code>sqrt</code>, <code>abs</code>, <code>min</code>, <code>max</code>, <code>push</code> ou <code>pop</code>, nem começar por <code>__amethyst_</code></li>
      <li><code>+</code> entre duas strings passa pelo helper de runtime; <code>push</code>/<code>pop</code> exigem um array local (nunca um fixo nem um parâmetro slice)</li>`,
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
      <li><strong>É</strong> tipada — <code>int</code>, <code>bool</code>, <code>float</code> e <code>string</code> nunca se misturam.</li>
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
        text: 'examples/ tem fib, slices, strings, floats, structs, heap arrays, métodos e arrays dinâmicos — lê, altera, recompila.',
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
        text: 'int, float, bool, strings, arrays e as regras rígidas.',
      },
      {
        to: '/docs/statements',
        label: 'Prática',
        title: 'Statements',
        text: 'if, while, for, atribuição e print no dia-a-dia.',
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
      'Você é o assistente de IA oficial do site do Amethyst, uma linguagem de programação compilada (C++17, x86-64 GAS, sem LLVM) com tipos estáticos (int=64-bit, bool, float=64-bit IEEE-754, string, void), sintaxe estilo C/JS/Python (fn, var, chaves, ponto-e-vírgula), structs no heap com new P { … }, null, free e métodos declarados em blocos impl (p.m(...) com self: P como receiver), arrays fixos T[N], slices T[] crescidos com push/pop (também a partir de um literal [] vazio), concatenação de strings com + e +=, builtins len, int, float, sqrt, abs, min, max, e pipeline .amt → Lexer → Parser → Sema → Codegen → as/ld. Responda de forma curta, simpática e em português de Portugal. Ajuda com dúvidas sobre a linguagem, instalação, sintaxe e exemplos de código Amethyst.',
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
struct Contador {
    hits: int,
    tag: string
}

impl Contador {
    fn bump(self: Contador) -> void {
        self.hits += 1;
    }
}

fn add(a: int, b: int) -> int {
    return a + b;
}

fn main() -> int {
    var nums = [10, 20, 30];  // tipo inferido: int[3]
    var ok: bool = nums[0] > 5;
    var c = new Contador { hits: 0, tag: "a" };  // objecto no heap

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

    c.bump();         // um método do bloco impl
    print(c.hits);    // 61
    print(c.tag);     // a
    free(c);

    print("done");
    return 0;
}`,

    syntax_fn: `fn nome(p1: tipo, p2: tipo) -> tipoRetorno {
    // corpo
    return valor;
}`,

    syntax_comment: '// até o fim da linha',

    install_deb: `make deb
# gera dist/amethyst-devkit_1.3.0_amd64.deb (~100 KB)

sudo apt install ./dist/amethyst-devkit_1.3.0_amd64.deb`,

    install_build: `make          # gera ./amethystc
make test     # exemplos + suíte`,

    install_editor: `cd vscode-amethyst
npm run package
code --install-extension amethyst-1.3.0.vsix`,

    types_arrays: `var nums: int[5] = [10, 20, 30, 40, 50];
var flags: bool[3] = [true, false, true];
var vals: float[2] = [1.5, 2.5];

print(nums[0]);   // 10
nums[2] = 99;     // escrita por índice`,

    types_struct: `struct Ponto {
    x: int,
    y: float,
    label: string
}

fn main() -> int {
    var p = new Ponto { x: 10, y: 2.5, label: "origem" };
    p.x += 5;
    print(p.x);            // 15
    print(p.label);        // origem

    var q: Ponto = null;
    print(q == null);      // 1

    free(p);
    free(q);
    return 0;
}`,

    types_strings: `var saudacao: string = "olá";
var nome: string = "amethyst";

saudacao += ", ";             // acrescenta no sítio
var msg = saudacao + nome;    // concatenação aloca uma string nova
print(msg);                   // olá, amethyst
print(len(msg));              // 14

var a: string = "oi";
print(a == "oi");             // 1 (conteúdo, não ponteiros)`,

    types_dynarray: `fn main() -> int {
    var a: int[] = [];      // comprimento 0, capacidade 0 — nada alocado ainda
    push(a, 10);
    push(a, 20);
    push(a, 30);            // o bloco duplica quando enche
    print(len(a));          // 3

    print(pop(a));          // 30
    print(len(a));          // 2

    free(a);
    print(len(a));          // 0
    return 0;
}`,

    types_methods: `struct Ponto {
    x: int,
    y: int
}

impl Ponto {
    fn move(self: Ponto, dx: int, dy: int) -> void {
        self.x += dx;
        self.y += dy;
    }

    fn length2(self: Ponto) -> int {
        return self.x * self.x + self.y * self.y;
    }
}

fn main() -> int {
    var p = new Ponto { x: 3, y: 4 };
    p.move(1, 1);
    print(p.x);            // 4
    print(p.length2());    // 41
    free(p);
    return 0;
}`,

    types_heap: `var n = 8;
var a: int[] = new int[n];   // 8 elementos a zero
print(len(a));               // 8
print(a[7]);                 // 0

a[0] = 42;
a[7] = a[0] + 1;             // 43

free(a);                     // comprimento volta a 0
print(len(a));               // 0`,

    stmt_free: `var p = new Ponto { x: 1, y: 2 };
var buf: float[] = new float[4];

p.x += 10;
buf[0] = float(p.x);
print(buf[0]);          // 11

free(p);                // objecto libertado, p é null
free(buf);              // bloco libertado, len(buf) == 0
print(p == null);       // 1
print(len(buf));        // 0`,

    types_decl: `var idade: int = 30;
var ativo: bool = idade >= 18;
var razao: float = 1.5;
var nome: string = "ada";

// inferência de tipo
var n = 42;             // int
var ok = n > 40;        // bool
var arr = [1, 2, 3];    // int[3]

// heap: o comprimento é uma expressão, lida uma vez
var tamanho = 16;
var buf: int[] = new int[tamanho];

// sem inicializador: atribuir antes de ler
var total: int;
total = idade;
total += 1;`,

    stmt_var: `var x: int = 1;
var flag: bool = false;
var n = 42;          // tipo inferido
var a: int[3] = [1, 2, 3];
var b = [true, false]; // bool[2] inferido

// declarada sem valor: todo o caminho que a lê atribui-a primeiro
var out: string;
if n > 0 {
    out = "positive";
} else {
    out = "non-positive";
}`,

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

    stmt_expr: `var total: int = helper();  // valor guardado
helper();                   // como statement o valor é descartado
push(buf, 1);               // acrescentar também
c.bump();                   // e uma chamada a método`,

    beg_terminal: `# na raiz do repo
make deb
sudo apt install ./dist/amethyst-devkit_1.3.0_amd64.deb

# primeiro programa
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
var d: int = -7 / 2;      // -3 (trunca p/ zero)
var e: float = 1.5 * 4.0;  // 6
var f: int = int(2.7);    // 2 (trunca p/ zero)`,

    expr_logic: `// se lhs for false, rhs NÃO é avaliado
var a: bool = false && sideEffect();

// se lhs for true, rhs NÃO é avaliado
var b: bool = true || sideEffect();`,

    expr_index: `var nums = [10, 20, 30];
var x: int = nums[1];  // 20
nums[0] = 5;           // escrita como statement`,

    expr_builtins: `fn main() -> int {
    print(sqrt(2.0));        // 1.4142135623731
    print(abs(-42));         // 42
    print(min(3, 7));        // 3
    print(max(3.5, 1.5));    // 3.5
    return 0;
}`,

    expr_mcall: `struct Contador {
    hits: int
}

impl Contador {
    fn bump(self: Contador) -> void {
        self.hits += 1;
    }
}

fn main() -> int {
    var c = new Contador { hits: 0 };
    c.bump();               // o receiver é o argumento 0
    c.bump();
    print(c.hits);          // 2
    free(c);
    return 0;
}`,

    expr_field: `struct Ponto { x: int, y: int }

fn main() -> int {
    var p = new Ponto { x: 1, y: 2 };
    var d: int = p.x + p.y;   // uma expressão int normal
    p.x = p.y * 10;           // escrita como statement
    print(p.x);               // 20
    print(d);                 // 3
    free(p);
    return 0;
}`,

    expr_strings: `var saudacao: string = "olá";
print(saudacao + ", " + "mundo");  // olá, mundo

fn igual(a: string, b: string) -> bool {
    return a == b;           // compara o conteúdo
}

print(igual("oi", "oi"));           // 1
print(len(saudacao));               // 4`,

    comp_pipeline: `file.amt
  │  Lexer      → tokens
  │  Parser     → AST
  │  Sema       → tipos, escopos, frame slots
  │  Codegen    → file.s  (GAS, System V AMD64)
  │  as --64    → file.o
  └  gcc -no-pie→ executável  (ld + crt + libc)`,
  },
}
