<template>
  <main>
    <h1>{{page.title.rendered}}</h1>
    <div v-html="page.content.rendered"></div>
  </main>
</template>

<script>
export default {
  data () {
    return {
      page: this.$store.state.pages
        .filter(page => page.slug === this.$route.params.slug)[0]
    }
  },
  async fetch ({store}) {
    await store.dispatch('updateSiteData')
    await store.dispatch('updatePages')
  },
  head () {
    return {
      title: `${this.page.title.rendered} | ${this.$store.state.name}`
    }
  }
}
</script>

<style scoped>
</style>
