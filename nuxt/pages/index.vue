<template>
  <main>
    <h1>Top</h1>
    <ul class="post-list" v-for="post of posts" :key="post.id">
      <li><nuxt-link :to="`/${post.id}`">{{post.title.rendered}}</nuxt-link></li>
    </ul>
  </main>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData () {
    const {data} = await axios.get(`${process.env.API_URL}/posts`)
    return {posts: data}
  }
}
</script>

<style scoped>
.post-list {
  padding: 0;
  list-style: none;
  font-size: 12px;
}
</style>
