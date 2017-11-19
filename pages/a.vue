<template>
  <div class="body-inner">
    <the-header/>
    <h1>Page A</h1>
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
</style>
