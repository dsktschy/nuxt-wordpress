<template>
  <header class="the-header">
    <nav>
      <ul class="nav-list">
        <li><router-link to="/">Top</router-link></li>
        <li><router-link to="/a">Page A</router-link></li>
        <li><router-link to="/b">Page B</router-link></li>
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
