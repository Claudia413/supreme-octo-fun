import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    blogpreviewsnz: [],
    blogpreviewstech: [],
    loadingBlogsTech: true,
    loadingBlogsNZ: true
  },
  mutations: {
    SET_BLOGPREVIEWS_NZ(state, payload) {
      state.blogpreviewsnz = payload
    },
    SET_LOADINGSTATE_NZ(state, payload) {
      state.loadingBlogsNZ = payload
    },
    SET_BLOGPREVIEWS_TECH(state, payload) {
      state.blogpreviewstech = payload
    },
    SET_LOADINGSTATE_TECH(state, payload) {
      state.loadingBlogsTech= payload
    }
  },
  actions: {
    setNZBlogPreviewsFromPrismic({ commit }, results) {
        commit('SET_LOADINGSTATE_NZ', false)
        commit('SET_BLOGPREVIEWS_NZ', results)
        // response is the response object, response.results holds the documents
      },
      setTechBlogPreviewsFromPrismic({ commit }, results) {
        commit('SET_LOADINGSTATE_TECH', false)
        if(this.state.blogpreviewstech.length === 0){
          commit('SET_BLOGPREVIEWS_TECH', results)
        } else {
          var addedResults = this.state.blogpreviewstech.concat(results)
          commit('SET_BLOGPREVIEWS_TECH', addedResults)
        }
        // response is the response object, response.results holds the documents
      }
  },
  getters: {

  }
})
