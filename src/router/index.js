import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import JoinChat from "../components/JoinChat";
import Chat from "../components/Chat";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/join',
      name: 'Join Chat',
      component: JoinChat
    }, {
      path: '/chat',
      name: 'Chat',
      component: Chat
    }
  ]
})
