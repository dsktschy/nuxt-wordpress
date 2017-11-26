<template>
  <main>
    <h1>{{post.title.rendered}}</h1>
    <div v-html="post.content.rendered"></div>
  </main>
</template>

<script>
export default {
  data () {
    return {
      post: this.$store.state.posts
        .filter(post => post.id === +this.$route.params.id)[0]
    }
  },
  async fetch ({store}) {
    await store.dispatch('updateSiteData')
    await store.dispatch('updatePosts')
  },
  head () {
    return {
      title: `${this.post.title.rendered} | ${this.$store.state.name}`
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
