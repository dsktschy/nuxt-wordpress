<template>
  <div class="body-inner">
    <the-header/>
    <main>
      <h1>{{page.title.rendered}}</h1>
      <div v-html="page.content.rendered"></div>
    </main>
    <the-footer/>
  </div>
</template>

<script>
import axios from 'axios'
import TheHeader from '~/components/the-header.vue'
import TheFooter from '~/components/the-footer.vue'

export default {
  components: {
    TheHeader,
    TheFooter
  },
  async asyncData () {
    const {data} = await axios.get(`${process.env.API_URL}/pages?slug=about`)
    return {page: data[0]}
  }
}
</script>

<style scoped>
</style>
