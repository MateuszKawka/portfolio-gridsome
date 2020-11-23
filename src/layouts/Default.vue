<template>
  <div class="layout">
    <header class="header" id="header">
      <h1>
        <g-link to="/" class="header__title"
          >Kawka Mateusz
          <span class="header__subtitle">Front End Developer</span></g-link
        >
      </h1>
     
      <a
        href="https://drive.google.com/file/d/1tUfqn0I6IrUgohmq_E_-7WplHx8sStjK/view"
        class="header__link"
        >Download CV</a
      >
      <ThemeSwitcher />
    </header>
    <main>
      <slot />
    </main>
    <footer class="footer">
      <a class="back-to-top-link" href="" @click="backToTop">Back to top</a>
      <p>Build with <a class="footer__link" href="https://gridsome.org/" rel="noopener noreferrer" target="_blank">Gridsome</a> & made with ❤️ by Kawka Mateusz</p>
    </footer>
  </div>
</template>

<script>
import ThemeSwitcher from "../components/ThemeSwitcher"
export default {
  name: "DefaultLayout",
  components: {
    ThemeSwitcher
  },
  methods: {
    backToTop() {
      window.scrollTo(0, 0);
    }
  }
}
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
:root {
  --app-background-color: #f2f2f2;
  --text-color: #1a1919;
  --details-color: #ff3a20;
  --project-item-background: var(--app-background-color);
  --project-image-background: var(--text-color);
  --space-small: 1rem;
  --space-medium: 4rem;
  --space-large: 10rem;

  --font-size-small: 1.3rem;
  --font-size-medium: 1.6rem;
  --font-size-large: 2rem;
  --font-size-jumbo: 3rem;

  --font-weight-regular: 400;
  --font-weight-bold: 700;

  --default-border-radius: 4px;
}

html[class="scheme-dark"] {
  --app-background-color: #151414;
  --text-color: #f2f2f2;
  --details-color: #ff3a20;
  --project-item-background: var(--app-background-color);
  --project-image-background: var(--app-background-color);
} 

html {
  color: var(--text-color);
  font-size: 62.5%;
  overflow-x: hidden;
}

body {
  background: var(--app-background-color);
}

.layout {
  max-width: 920px;
  margin: 0 auto;
  font-size: var(--font-size-medium);
  padding-bottom: var(--space-medium);
}

* {
  font-family: "PT Sans", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.header {
  display: flex;
  flex-flow: column;
  align-items: center;
}

.header__title {
  color: var(--text-color);
  text-decoration: none;
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: var(--space-small);
}

.header__subtitle {
  font-size: var(--font-size-medium);
}

.header__link {
  color: var(--text-color);
  font-weight: var(--font-weight-bold);
  margin-top: var(--space-small);
  margin-bottom: var(--space-medium);
}

.footer {
  height: auto;
  padding: var(--space-medium) var(--space-small) var(--space-medium) var(--space-small);
  text-align: center;
}

.back-to-top-link {
  display: block;
  color: var(--text-color);
  margin: var(--space-small) 0;
}

@media all and (min-width: 600px) {
  .layout {
    padding: 0 var(--space-medium);
    width: 75%;
  }
}

.footer__link {
  color: var(--text-color);
  font-weight: var(--font-weight-bold);
}
</style>