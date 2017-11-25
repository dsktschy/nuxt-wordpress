<template>
  <header class="the-header">
    <nav>
      <ul class="nav-list">
        <li><nuxt-link to="/">Top</nuxt-link></li>
        <li><nuxt-link to="/a">Page A</nuxt-link></li>
        <li><nuxt-link to="/b">Page B</nuxt-link></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.nav-list {
  padding: 0;
  list-style: none;
  font-size: 12px;
}
</style>
