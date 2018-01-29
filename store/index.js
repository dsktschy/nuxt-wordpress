import Vuex from 'vuex'
import axios from 'axios'

export default () => new Vuex.Store({
  state: {
    name: '',
    description: '',
    url: '',
    posts: [],
    pages: []
  },
  mutations: {
    updateName (state, {value}) {
      state.name = value
    },
    updateDescription (state, {value}) {
      state.description = value
    },
    updateUrl (state, {value}) {
      state.url = value
    },
    updatePosts (state, {value}) {
      state.posts = value
    },
    updatePages (state, {value}) {
      state.pages = value
    }
  },
  actions: {
    async updateSiteData ({commit}) {
      const {data} = await axios.get(process.env.API_URL)
      commit('updateName', {value: data.name})
      commit('updateDescription', {value: data.description})
      commit('updateUrl', {value: data.url})
    },
    async updatePosts ({commit}) {
      const {data} = await axios.get(`${process.env.API_URL}/wp/v2/posts`)
      commit('updatePosts', {value: data})
    },
    async updatePages ({commit}) {
      const {data} = await axios.get(`${process.env.API_URL}/wp/v2/pages`)
      commit('updatePages', {value: data})
    }
  }
})
