// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import Vuex from 'vuex'
import {v4 as uuidv4} from 'uuid';
import * as moment from 'moment';

Vue.config.productionTip = false

Vue.use(VueMaterial)


Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    currentChatId: "",
    chats: [{
      id: 1,
      messages: []
    }]
  },
  mutations: {
    increment(state) {
      state.count++
    },
    addMessage(state, payload) {
      state.chats[0].messages.push(
        {
          id: uuidv4(),
          text: payload.text,
          sendBy: payload.sendBy,
          sendAt: moment(),
          ownMessage: payload.ownMessage
        }
      )
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})

