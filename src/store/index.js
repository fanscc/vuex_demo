import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)
const state = {
    playing: false,
    currentTime: 111,
    duration: 0,
    playMode: "你我",
    index: 0,
    song: {
      name: "cky"
    },
    playList: []
  }
const  mutations = {
        addcurTime (state,num) {
          let number = num ? num : 10
          state.currentTime +=number
        },
        reduce (state, num) {
          let number = num ? num : 10
          state.currentTime -=num
        }
 }
const  actions = {
     actionadd({commit, state}){
      

    }
 }

export default new Vuex.Store({

    state,
    mutations,
    actions

})
