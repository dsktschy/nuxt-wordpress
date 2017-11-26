<template>
  <header class="the-header">
    <nav>
      <ul class="nav-list">
        <li><nuxt-link to="/">Top</nuxt-link></li>
        <li><nuxt-link to="/page/about">About</nuxt-link></li>
        <li><nuxt-link to="/page/contact">Contact</nuxt-link></li>
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
