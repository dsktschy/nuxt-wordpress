<template>
  <div class="body-inner">
    <the-header/>
    <main>
      <h1>{{post.title.rendered}}</h1>
      <div v-html="post.content.rendered"></div>
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
