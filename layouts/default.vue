<template>
  <div class="body-inner">
    <the-header/>
    <nuxt/>
    <the-footer/>
  </div>
</template>

<script>
import TheHeader from '~/components/the-header.vue'
import TheFooter from '~/components/the-footer.vue'

export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style>
html {
  font-family: sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
