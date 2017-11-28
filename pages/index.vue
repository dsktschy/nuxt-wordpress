<template>
  <main>
    <h1>Top</h1>
    <ul class="post-list" v-for="post of $store.state.posts" :key="post.id">
      <li><nuxt-link :to="`/post/${post.id}`">{{post.title.rendered}}</nuxt-link></li>
    </ul>
  </main>
</template>

<script>
export default {
  async fetch ({store}) {
    await store.dispatch('updateSiteData')
    await store.dispatch('updatePosts')
  },
  head () {
    return {
      title: this.$store.state.name
    }
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
