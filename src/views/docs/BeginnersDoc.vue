<script setup>
import CodeBlock from '../../components/CodeBlock.vue'
import { t } from '../../i18n'
</script>

<template>
  <div>
    <h1>{{ t('beg.title') }}</h1>
    <p v-html="t('beg.intro')"></p>

    <div class="callout" v-html="t('beg.golden')"></div>

    <h2>{{ t('beg.h2_before') }}</h2>
    <h3>{{ t('beg.h3_what') }}</h3>
    <ul v-html="t('beg.what_list')"></ul>

    <h3>{{ t('beg.h3_prereq') }}</h3>
    <ul v-html="t('beg.prereq_list')"></ul>

    <h2>{{ t('beg.h2_firstday') }}</h2>
    <ol class="beginner-path">
      <li v-for="item in t('beg.path')" :key="item.step">
        <span class="path-step">{{ item.step }}</span>
        <div>
          <strong>{{ item.title }}</strong>
          <p>{{ item.text }}</p>
        </div>
      </li>
    </ol>

    <h3>{{ t('beg.h3_install3') }}</h3>
    <CodeBlock
      :code="t('code.beg_terminal')"
      filename="terminal"
    />
    <p>
      <span v-html="t('beg.install_note_a')"></span>
      <router-link to="/docs/install">{{ t('docs.nav.install') }}</router-link
      >.
    </p>

    <h3>{{ t('beg.h3_hello') }}</h3>
    <CodeBlock
      :code="`fn main() -> int {\n    print(42);\n    return 0;\n}`"
      filename="hello.amt"
    />
    <CodeBlock
      :code="`./amethystc hello.amt -o hello\n./hello\n# 42`"
      filename="terminal"
    />

    <div class="callout" v-html="t('beg.sanity')"></div>

    <h2>{{ t('beg.h2_days') }}</h2>
    <p>{{ t('beg.days_p') }}</p>
    <div v-html="t('beg.table_days')"></div>

    <h2>{{ t('beg.h2_exercises') }}</h2>
    <p>{{ t('beg.exercises_p') }}</p>
    <ol v-html="t('beg.exercises_list')"></ol>

    <h2>{{ t('beg.h2_engage') }}</h2>
    <p v-html="t('beg.engage_p')"></p>

    <div class="engage-grid">
      <article v-for="tip in t('beg.engagement')" :key="tip.title" class="engage-card">
        <div class="engage-icon">{{ tip.icon }}</div>
        <h3>{{ tip.title }}</h3>
        <p>{{ tip.text }}</p>
      </article>
    </div>

    <h3>{{ t('beg.h3_stuck') }}</h3>
    <ol v-html="t('beg.stuck_list')"></ol>

    <h3>{{ t('beg.h3_study') }}</h3>
    <ul v-html="t('beg.study_list')"></ul>

    <h2>{{ t('beg.h2_where') }}</h2>
    <div class="next-grid">
      <router-link
        v-for="card in t('beg.next')"
        :key="card.to"
        :to="card.to"
        class="next-card"
      >
        <span class="next-label">{{ card.label }}</span>
        <strong>{{ card.title }}</strong>
        <p>{{ card.text }}</p>
      </router-link>
    </div>

    <div class="callout" v-html="t('beg.checklist')"></div>
  </div>
</template>

<style scoped>
.beginner-path {
  list-style: none;
  margin: 1rem 0 1.5rem;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.beginner-path li {
  display: grid;
  grid-template-columns: 36px 1fr;
  gap: 0.9rem;
  align-items: start;
  padding: 0.9rem 1rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
}

.path-step {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--amethyst), var(--amethyst-deep));
  color: #fff;
  font-weight: 700;
  font-size: 0.9rem;
  display: grid;
  place-items: center;
}

.beginner-path strong {
  color: var(--text);
}

.beginner-path p {
  margin: 0.25rem 0 0;
  font-size: 0.92rem;
}

.engage-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin: 1.25rem 0 1.5rem;
}

.engage-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.15rem 1.1rem;
  transition: border-color 0.2s, transform 0.2s;
}

.engage-card:hover {
  border-color: var(--border-strong);
  transform: translateY(-2px);
}

.engage-icon {
  font-size: 1.3rem;
  margin-bottom: 0.4rem;
}

.engage-card h3 {
  margin: 0 0 0.4rem;
  font-size: 1rem;
}

.engage-card p {
  margin: 0;
  font-size: 0.9rem;
}

.next-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.85rem;
  margin: 1.25rem 0;
}

.next-card {
  display: block;
  padding: 1.1rem 1.15rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  text-decoration: none !important;
  color: inherit;
  transition: border-color 0.2s, transform 0.2s;
}

.next-card:hover {
  border-color: var(--amethyst);
  transform: translateY(-2px);
}

.next-label {
  font-family: var(--mono);
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--amethyst-bright);
}

.next-card strong {
  display: block;
  margin-top: 0.3rem;
  color: var(--text);
  font-size: 1.02rem;
}

.next-card p {
  margin: 0.3rem 0 0;
  font-size: 0.88rem;
}

@media (max-width: 640px) {
  .engage-grid,
  .next-grid {
    grid-template-columns: 1fr;
  }
}
</style>
