<template>
  <div class="md-layout"
       v-bind:class="{
    'md-alignment-top-right': message.ownMessage,
     'md-alignment-top-left': !message.ownMessage
  }">

    <div v-bind:class="{ 'own-message': message.ownMessage, 'other-message': !message.ownMessage }">
      <div class="sendBy" v-if="message.ownMessage === false">{{message.sendBy}}</div>
      <div class="messageText">{{message.text}}</div>
      <div class="sendAt">{{ formattedDate(message.sendAt) }}</div>
    </div>
  </div>
</template>

<script>
  import moment from 'moment';


  export default {
    name: "ChatMessage",
    props: ['message'],
    methods: {
      formattedDate(date) {
        return moment(date).format("HH:mm");
      }
    },
  }
</script>

<style scoped>
  .own-message {
    margin: 5px;
    padding: 6px 7px 8px 9px;
    color: white;
    background-color: #42b983;
    max-width: 600px;
    min-width: 250px;
    border-radius: 8px;
    text-align: right;
  }

  .other-message {
    margin: 5px;
    padding: 6px 7px 8px 9px;
    color: white;
    background-color: #2c3e50;
    max-width: 600px;
    min-width: 250px;
    border-radius: 8px;
    text-align: left;
  }

  .sendAt {
    font-size: x-small;
  }
</style>
