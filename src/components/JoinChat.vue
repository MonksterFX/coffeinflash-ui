<template>
  <md-card>
    <md-card-header>
      <div class="md-title">Join coffeinflash chat</div>
      <div class="md-subhead">Enter chat name and username</div>
    </md-card-header>
    <md-card-content>
      <form>
        <md-field>
          <label>Chat name / ID</label>
          <md-input v-model="chatId" md-counter="30"></md-input>
        </md-field>
        <md-field>
          <label>Username</label>
          <md-input v-model="username" md-counter="30"></md-input>
        </md-field>
        <md-button class="md-raised md-primary"
                   v-on:click="joinChat(chatId,username)">Join chat
        </md-button>
      </form>
    </md-card-content>
  </md-card>
</template>

<script>
  export default {
    name: "JoinChat",
    data: () => ({
      chatId: "",
      username: ""
    }),
    methods: {
      joinChat: function (chatId, username) {
        this.$router.push({path: 'chat', query: {id: chatId, username}})
      }
    }
  }
</script>

<style scoped>

</style>
