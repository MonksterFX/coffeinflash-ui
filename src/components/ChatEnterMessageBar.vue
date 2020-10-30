<template>
  <form id="chat-enter-message-bar">
    <md-field>
      <label>Message</label>
      <md-input v-model="messageText" md-counter="1337"></md-input>
    </md-field>
    <md-button class="md-raised md-primary" type="submit"
               v-on:click="sendMessage(messageText)">Send
    </md-button>
  </form>
</template>

<script>
  export default {
    name: "ChatEnterMessageBar",
    data: () => ({
      messageText: ""
    }),
    methods: {
      sendMessage(message) {
        this.$store.commit('increment')
        this.$store.commit('addMessage', {
          text: message,
          sendBy: "You",
          ownMessage: (message.length > 5) ? true : false
        })
        this.messageText = "";
      }
    }
  }
</script>

<style scoped>
  #chat-enter-message-bar {
    width: 100%;
    padding: 15px;
    /*    position: fixed;
        bottom: 0;*/
  }
</style>
