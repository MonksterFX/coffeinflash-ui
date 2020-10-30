<template>
  <div class="md-layout md-alignment-top-space-between cha-wrapper">
    <div>
      <div v-if="messages.length === 0" class="no-messages-hint">
        <span>No messages until now</span>
      </div>
    </div>

    <div class="md-layout-item md-layout md-alignment-space-between">

      <div class="md-layout-item md-layout md-alignment-top">

        <chat-message
          class="md-layout-item md-size-100"
          v-for="messageItem of messages"
          v-bind:key="messageItem.id"
          v-bind:message="messageItem"></chat-message>
      </div>

      <!--<chat-attendees class="md-size-25" v-bind:username="username"></chat-attendees>-->
    </div>
    <ChatEnterMessageBar></ChatEnterMessageBar>
  </div>
</template>

<script>
  import ChatAttendees from "./ChatAttendees";
  import ChatMessage from "./ChatMessage";
  import ChatEnterMessageBar from "./ChatEnterMessageBar";

  export default {
    name: "Chat",
    components: {ChatEnterMessageBar, ChatMessage, ChatAttendees},
    data: () => ({
      chatId: 1,
      username: "",
      messages: []
    }),
    created() {
      /* this.chatId = this.$route.params.chatId;*/
      this.messages = this.$store.state.chats.filter((chat) => chat.id === this.chatId)[0].messages || [];
    },
  }
</script>

<style scoped>
  .no-messages-hint {
    margin: 25px;
    padding: 15px 7px 15px 9px;
    color: white;
    background-color: #2c3e50;
    max-width: 600px;
    min-width: 600px;
    border-radius: 8px;
    text-align: center;
  }
</style>
