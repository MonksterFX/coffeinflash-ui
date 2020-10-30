<template>
  <div>

    <h3>Attendees</h3>
    <md-list>

      <md-list-item>
        <md-avatar>
          <img src="https://placeimg.com/40/40/people/1" alt="People">
        </md-avatar>

        <span class="md-list-item-text">{{username}} {{this.$store.state.count}}</span>

      </md-list-item>
    </md-list>
  </div>
</template>

<script>
  export default {
    name: "ChatAttendees",
    props: ['username']
  }
</script>

<style scoped>

</style>
