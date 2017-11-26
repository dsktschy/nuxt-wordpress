<template>
  <main>
    <h1>{{page.title.rendered}}</h1>
    <div v-html="page.content.rendered"></div>
  </main>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData () {
    const {data} = await axios.get(`${process.env.API_URL}/pages?slug=about`)
    return {page: data[0]}
  }
}
</script>

<style scoped>
</style>
