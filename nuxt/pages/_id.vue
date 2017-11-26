<template>
  <main>
    <h1>{{post.title.rendered}}</h1>
    <div v-html="post.content.rendered"></div>
  </main>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData ({params}) {
    const {data} = await axios.get(`${process.env.API_URL}/posts/${params.id}`)
    return {post: data}
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
